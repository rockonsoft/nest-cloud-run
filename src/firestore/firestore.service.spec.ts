import { Test, TestingModule } from '@nestjs/testing';
import { FirestoreService } from './firestore.service';

describe('FirestoreService', () => {
  let service: FirestoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FirestoreService],
    }).compile();

    service = module.get<FirestoreService>(FirestoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
