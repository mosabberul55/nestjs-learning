import { Test, TestingModule } from '@nestjs/testing';
import { NinjaController } from './ninja.controller';
import { NinjaService } from './ninja.service';

describe('NinjaController', () => {
  let controller: NinjaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NinjaController],
      providers: [NinjaService],
    }).compile();

    controller = module.get<NinjaController>(NinjaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
