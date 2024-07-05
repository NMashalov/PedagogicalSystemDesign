package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"strconv"

	socketio "github.com/googollee/go-socket.io"
)

type SocketServer struct {
	server *socketio.Server
}

func (t *SocketServer) start() {
	go func() {
		if err := t.server.Serve(); err != nil {
			log.Fatalf("socketio listen error: %s\n", err)
		}
	}()

	http.Handle("/socket.io/", t.server)
	http.Handle("/", http.FileServer(http.Dir("./assets")))
}

func (t *SocketServer) default_chan() {
	t.server.OnEvent("/chat", "signal", func(s socketio.Conn, msg string) {
		log.Println(msg)
	})

	t.server.OnConnect("/", func(s socketio.Conn) error {
		s.SetContext("")
		fmt.Println("connected:", s.ID())
		return nil
	})

	t.server.OnEvent("/", "consume", func(s socketio.Conn, msg string) {
		log.Println(msg)
		cnt, err := strconv.Atoi(msg)
		if err != nil {
			return
		}
		ch := make(chan Msg)
		exit := make(chan int)
		go consume(ch, exit)
		for i := 0; i < cnt; i++ {
			msg := <-ch
			log.Println(msg)
			j, _ := json.Marshal(msg)
			s.Emit("event", string(j))
		}
		exit <- 0
	})

	t.server.OnEvent("/", "bye", func(s socketio.Conn) string {
		last := s.Context().(string)
		s.Emit("bye", last)
		s.Close()
		return last
	})

	t.server.OnError("/", func(s socketio.Conn, e error) {
		log.Println("meet error:", e)
	})

	t.server.OnDisconnect("/", func(s socketio.Conn, reason string) {
		log.Println("closed", reason)
	})
}
