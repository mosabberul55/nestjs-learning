import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  Put,
  NotFoundException,
  ParseIntPipe, ValidationPipe, UseGuards
} from "@nestjs/common";
import { NinjaService } from './ninja.service';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { BeltGuard } from "../belt/belt.guard";

@Controller('ninja')
@UseGuards(BeltGuard)
export class NinjaController {
  constructor(private readonly ninjaService: NinjaService) {}

  @Post()
  create(@Body(new ValidationPipe()) createNinjaDto: CreateNinjaDto) {
    return this.ninjaService.create(createNinjaDto);
  }

  @Get()
  findAll(@Query('weapon') weapon?: 'Kunai' | 'Shuriken' | 'Katana') {
    return this.ninjaService.findAll(weapon);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.ninjaService.findOne(id);
    } catch (error) {
      throw new NotFoundException();
    }
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto) {
    return this.ninjaService.update(+id, updateNinjaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ninjaService.remove(+id);
  }
}
