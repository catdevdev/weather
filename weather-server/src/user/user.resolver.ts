import { Query, Resolver } from '@nestjs/graphql';
import { User } from './dto/user.dto';

@Resolver()
export class UserResolver {
  @Query(() => [User])
  async devicesStatus(): Promise<User> {
    // const devices = await this.devicesService.getAllDevices();
    // return devices.map(({ device, isOnline }) => {
    //   return {
    //     device: { userId: device.id, username: device.username },
    //     isOnline,
    //   };
    // });
    return {
      user: '123',
      password: '231',
    };
  }
}
