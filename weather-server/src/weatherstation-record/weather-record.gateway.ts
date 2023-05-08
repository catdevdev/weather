import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Prisma, WeatherRecord } from '@prisma/client';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class WeatherRecordGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('room')
  joinRoom(socket: Socket, roomId: string) {
    socket.join(roomId);
  }

  sendLastWeatherRecord({
    roomId,
    weatherRecord,
  }: {
    roomId: string;
    weatherRecord: WeatherRecord;
  }) {
    this.server.to(roomId).emit('send_last_weather_record', weatherRecord);
  }
}
