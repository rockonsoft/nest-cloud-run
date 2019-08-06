import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { FirestoreModule } from '../firestore/firestore.module';

@Module({
  imports: [FirestoreModule],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
