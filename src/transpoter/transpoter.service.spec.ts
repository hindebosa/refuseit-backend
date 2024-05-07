import { Test, TestingModule } from '@nestjs/testing';
import { TranspoterService } from './transpoter.service';

describe('TranspoterService', () => {
  let service: TranspoterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TranspoterService],
    }).compile();

    service = module.get<TranspoterService>(TranspoterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
