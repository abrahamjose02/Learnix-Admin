import {Channel} from 'amqplib'
import rabbitmqConfig from '../config/rabbitMQConfig';
import { randomUUID } from "crypto";
import EventEmitter from "events";

export default class Producer{
    constructor(
        private channel: Channel,
        private replyQueueName: string,
        private eventEmitter: EventEmitter
      ) {}

      async produceMessages(data: any, correlationId: string, replyToQueue: string) {
        if (data !== undefined) {
            this.channel.sendToQueue(replyToQueue, Buffer.from(JSON.stringify(data)), {
                correlationId: correlationId
            });
        } else {
            console.error("Data is undefined");
        }
    }
    
    async produceUserMessages(data: any, operation: string) {
        const uuid = randomUUID();
        this.channel.sendToQueue(
          rabbitmqConfig.rabbitMQ.queues.userQueue,
          Buffer.from(JSON.stringify(data)),
          {
            replyTo: this.replyQueueName,
            correlationId: uuid,
            expiration: 10,
            headers: {
              function: operation,
            },
          }
        );
    
        return new Promise((res, rej) => {
          this.eventEmitter.once(uuid, async (data) => {
            res(data);
          });
        });
      }
}