import { Test, TestingModule } from '@nestjs/testing';
import { ChapaService } from './chapa.service';

describe('ChapaService', () => {
  let service: ChapaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChapaService],
    }).compile();

    service = module.get<ChapaService>(ChapaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
