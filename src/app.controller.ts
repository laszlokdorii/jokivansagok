import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { JokivansagokService } from './jokivansagok/jokivansagok.service';
import { ApiExcludeController, ApiExcludeEndpoint } from '@nestjs/swagger';


@Controller()
@ApiExcludeController()	
export class AppController {
  constructor(private readonly appService: AppService, private readonly jokivansagokService: JokivansagokService) {}

  @Get()
  @Render('index')
  @ApiExcludeEndpoint()	
  async getHello() {
    const data= await this.jokivansagokService.findAll();
    console.log(data);
    return {data};
  }
}
