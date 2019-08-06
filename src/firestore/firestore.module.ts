import { Module } from '@nestjs/common';
import { FirestoreService } from './firestore.service';
import { ConfigModule } from '../config/config.module';

@Module({
  imports: [ConfigModule],
  providers: [FirestoreService],
  exports: [FirestoreService],
})
export class FirestoreModule {}
