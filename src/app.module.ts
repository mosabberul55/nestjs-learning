import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { NinjaModule } from './ninja/ninja.module';

@Module({
  imports: [UsersModule, NinjaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
