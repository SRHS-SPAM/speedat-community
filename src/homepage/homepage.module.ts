import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HomepageController } from './homepage.controller';
import { HomepageService } from './homepage.service';
import { Post } from './entities/homepage.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  controllers: [HomepageController],
  providers: [HomepageService],
})
export class HomepageModule {}

