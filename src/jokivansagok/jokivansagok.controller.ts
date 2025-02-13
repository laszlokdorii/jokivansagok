import { Controller, Get, Post, Body, Patch, Param, Delete, Render } from '@nestjs/common';
import { JokivansagokService } from './jokivansagok.service';
import { CreateJokivansagokDto } from './dto/create-jokivansagok.dto';
import { UpdateJokivansagokDto } from './dto/update-jokivansagok.dto';
import { ApiBadRequestResponse, ApiBearerAuth, ApiParam, ApiResponse } from '@nestjs/swagger';


@Controller('jokivansagok')
export class JokivansagokController {
  constructor(private readonly jokivansagokService: JokivansagokService) {}

  @Post()
  create(@Body() createJokivansagokDto: CreateJokivansagokDto) {
    return this.jokivansagokService.create(createJokivansagokDto); 
  }


  @Get()
  async findAll() {
    const data= await this.jokivansagokService.findAll();
    console.log(data);
    return {data};
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jokivansagokService.findOne(+id);
  }

  @Patch(':id')
  @ApiParam({
    name: 'id',
    type: 'int',
    description: 'A jókívánság egyedi ID-ja.'})
  @ApiResponse({ status: 200, description: 'Módosított adatok.' })
  @ApiBadRequestResponse({ description: 'Nem megfelelő adatok.' })
  update(@Param('id') id: string, @Body() updateJokivansagokDto: UpdateJokivansagokDto) {
    return this.jokivansagokService.update(+id, updateJokivansagokDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jokivansagokService.remove(+id);
  } 
}


