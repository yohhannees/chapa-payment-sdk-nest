import { Test, TestingModule } from '@nestjs/testing';
import { ChapaConfigService } from './chapa-config.service';

describe('ChapaConfigService', () => {
  let service: ChapaConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChapaConfigService],
    }).compile();

    service = module.get<ChapaConfigService>(ChapaConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
