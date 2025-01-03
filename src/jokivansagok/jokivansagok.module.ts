import { Module } from '@nestjs/common';
import { JokivansagokService } from './jokivansagok.service';
import { JokivansagokController } from './jokivansagok.controller';

@Module({
  controllers: [JokivansagokController],
  providers: [JokivansagokService],
})
export class JokivansagokModule {}
