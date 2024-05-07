import { Test, TestingModule } from '@nestjs/testing';
import { TranspoterController } from './transpoter.controller';

describe('TranspoterController', () => {
  let controller: TranspoterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TranspoterController],
    }).compile();

    controller = module.get<TranspoterController>(TranspoterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
