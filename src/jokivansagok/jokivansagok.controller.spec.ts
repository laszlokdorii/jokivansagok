import { Test, TestingModule } from '@nestjs/testing';
import { JokivansagokController } from './jokivansagok.controller';
import { JokivansagokService } from './jokivansagok.service';

describe('JokivansagokController', () => {
  let controller: JokivansagokController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JokivansagokController],
      providers: [JokivansagokService],
    }).compile();

    controller = module.get<JokivansagokController>(JokivansagokController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
