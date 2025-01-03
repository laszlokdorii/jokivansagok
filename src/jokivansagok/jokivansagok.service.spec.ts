import { Test, TestingModule } from '@nestjs/testing';
import { JokivansagokService } from './jokivansagok.service';

describe('JokivansagokService', () => {
  let service: JokivansagokService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JokivansagokService],
    }).compile();

    service = module.get<JokivansagokService>(JokivansagokService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
