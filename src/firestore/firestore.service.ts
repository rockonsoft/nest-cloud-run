import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { ConfigService } from '../config/config.service';
import * as fs from 'fs';

@Injectable()
export class FirestoreService {
  db: FirebaseFirestore.Firestore = null;
  constructor(private config: ConfigService) {
    if (config.isDevelopment()) {
      console.log('developement');
      //for development read key file and initialise firestore
      let pathToKeyFile = config.get('FIRESTORE_KEY_FILE');
      let serviceAccount = JSON.parse(
        fs.readFileSync(pathToKeyFile).toString(),
      );
      console.log(serviceAccount);

      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      });
    } else {
      //for production on GCP use built-in account
      admin.initializeApp({
        credential: admin.credential.applicationDefault(),
      });
    }
    this.db = admin.firestore();
  }
  public createId() {
    return this.db.collection('_').doc().id;
  }
  public create(colleciton: string, id: string, payload: any) {
    let docRef = this.db.collection(colleciton).doc(id);
    return docRef.set(payload);
  }
}
