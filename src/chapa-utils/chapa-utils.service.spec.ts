import { Test, TestingModule } from '@nestjs/testing';
import { ChapaUtilsService } from './chapa-utils.service';

describe('ChapaUtilsService', () => {
  let service: ChapaUtilsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChapaUtilsService],
    }).compile();

    service = module.get<ChapaUtilsService>(ChapaUtilsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
