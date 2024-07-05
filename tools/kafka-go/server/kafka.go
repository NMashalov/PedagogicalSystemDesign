package main

import (
	"encoding/json"
	"log"

	"github.com/IBM/sarama"
)

type Msg struct {
	Color string `json:"color"`
}

var kafka_message *Msg

func consume(ch chan Msg, exit chan int) {
	consumer, err := sarama.NewConsumer([]string{"localhost:9093"}, nil)
	if err != nil {
		log.Fatalf("Failed to create consumer: %v", err)
	}

	partConsumer, err := consumer.ConsumePartition("message", 0, sarama.OffsetOldest)
	if err != nil {
		log.Fatalf("Failed to consume partition: %v", err)
	}

	go func() {
		for {
			select {
			// Чтение сообщения из Kafka
			case msg, ok := <-partConsumer.Messages():
				if !ok {
					log.Println("Channel closed, exiting goroutine")
					return
				}
				err := json.Unmarshal(msg.Value, &kafka_message)
				if err != nil {
					log.Println("Error", err)
				} else {
					log.Println(kafka_message.Color)
					ch <- *kafka_message
				}
			case <-exit:
				log.Println("Finish consume")
				return
			}
		}
	}()
}
