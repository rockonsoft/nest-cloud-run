import { Controller, Post, Body, Req } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private users: UserService) {}
  @Post()
  async handleRateMessage(@Body() data, @Req() req) {
    await this.users.create(data);
    return 'OK';
  }
}
