import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JokivansagokService } from './jokivansagok.service';
import { CreateJokivansagokDto } from './dto/create-jokivansagok.dto';
import { UpdateJokivansagokDto } from './dto/update-jokivansagok.dto';

@Controller('jokivansagok')
export class JokivansagokController {
  constructor(private readonly jokivansagokService: JokivansagokService) {}

  @Post()
  create(@Body() createJokivansagokDto: CreateJokivansagokDto) {
    return this.jokivansagokService.create(createJokivansagokDto);
  }

  @Get()
  findAll() {
    return this.jokivansagokService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jokivansagokService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJokivansagokDto: UpdateJokivansagokDto) {
    return this.jokivansagokService.update(+id, updateJokivansagokDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jokivansagokService.remove(+id);
  }
}