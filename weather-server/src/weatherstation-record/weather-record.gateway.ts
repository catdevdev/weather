import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Prisma } from '@prisma/client';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class WeatherRecordGateway {
  @WebSocketServer()
  server: Server;

  sendLastWeatherRecord(weatherRecord: Prisma.JsonObject) {
    console.log('123');
    this.server.emit('send_last_weather_record', weatherRecord);
  }
}
