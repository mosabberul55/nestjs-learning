import { IsEnum, MaxLength, MinLength } from "class-validator";

export class CreateNinjaDto {
  @MinLength(3)
  @MaxLength(10)
  name: string;

  @IsEnum(['Kunai', 'Shuriken', 'Katana'], { message: 'Invalid weapon' })
  weapon: 'Kunai' | 'Shuriken' | 'Katana';
}
