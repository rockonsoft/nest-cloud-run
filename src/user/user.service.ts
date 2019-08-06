import { Injectable } from '@nestjs/common';
import { FirestoreService } from '../firestore/firestore.service';

@Injectable()
export class UserService {
  constructor(private firestore: FirestoreService) {}
  create(data: any) {
    return this.firestore.create('users', this.firestore.createId(), data);
  }
}
