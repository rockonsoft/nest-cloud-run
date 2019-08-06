import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { FirestoreService } from './firestore/firestore.service';
import { FirestoreModule } from './firestore/firestore.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ConfigModule, FirestoreModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
