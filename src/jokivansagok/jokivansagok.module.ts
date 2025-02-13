import { Module } from '@nestjs/common';
import { JokivansagokService } from './jokivansagok.service';
import { JokivansagokController } from './jokivansagok.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  exports: [JokivansagokService],
  controllers: [JokivansagokController],
  providers: [JokivansagokService, PrismaService],
})
export class JokivansagokModule {}
