import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Injectable()
export class NinjaService {
  private ninjas = [
    { id: 1, name: 'Naruto', weapon: 'Kunai' },
    { id: 2, name: 'Sasuke', weapon: 'Shuriken' },
    { id: 3, name: 'Sakura', weapon: 'Katana' },
  ];
  create(createNinjaDto: CreateNinjaDto) {
    const newNinja = {
      id: this.ninjas.length + 1,
      ...createNinjaDto,
    };
    this.ninjas.push(newNinja);
    return newNinja;
  }

  findAll(weapon?: 'Kunai' | 'Shuriken' | 'Katana') {
    if (weapon) {
      return this.ninjas.filter((ninja) => ninja.weapon === weapon);
    }
    return this.ninjas;
  }

  findOne(id: number) {
    const ninja = this.ninjas.find((ninja) => ninja.id === id);
    if (!ninja) {
      throw new Error('Ninja not found');
    }
    return ninja;
  }

  update(id: number, updateNinjaDto: UpdateNinjaDto) {
    this.ninjas = this.ninjas.map((ninja) => {
      if (ninja.id === id) {
        return {
          ...ninja,
          ...updateNinjaDto,
        };
      }
      return ninja;
    });
    return this.findOne(id);
  }

  remove(id: number) {
    const toBeDeleted = this.findOne(id);
    this.ninjas = this.ninjas.filter((ninja) => ninja.id !== toBeDeleted.id);
    return toBeDeleted;
  }
}
