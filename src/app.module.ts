import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JokivansagokModule } from './jokivansagok/jokivansagok.module';

@Module({
  imports: [JokivansagokModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
