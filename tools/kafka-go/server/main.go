package main

import (
	"fmt"
	"log"
	"net/http"

	socketio "github.com/googollee/go-socket.io"
	"github.com/googollee/go-socket.io/engineio"
	"github.com/googollee/go-socket.io/engineio/transport"
	"github.com/googollee/go-socket.io/engineio/transport/polling"
	"github.com/googollee/go-socket.io/engineio/transport/websocket"
)

var allowOriginFunc = func(r *http.Request) bool {
	return true
}

func main() {
	server := SocketServer{
		socketio.NewServer(&engineio.Options{
			Transports: []transport.Transport{
				&polling.Transport{
					CheckOrigin: allowOriginFunc,
				},
				&websocket.Transport{
					CheckOrigin: allowOriginFunc,
				},
			},
		})}

	server.default_chan()
	server.start()
	defer server.server.Close()

	log.Println("Serving at localhost:4400..")

	fmt.Println(
		http.ListenAndServe(
			":4400",
			nil,
		),
	)
}
