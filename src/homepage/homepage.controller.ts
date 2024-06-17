import { Controller, Post, Body } from '@nestjs/common';
import { HomepageService } from './homepage.service';
import { CreatePostDto } from './dto/create-homepage.dto';
import { Post as PostModel } from './entities/homepage.entity';

@Controller('posts')
export class HomepageController {
  constructor(private readonly homepageService: HomepageService) {}

  @Post()
  async createPost(@Body() createPostDto: CreatePostDto): Promise<PostModel> {
    return await this.homepageService.createPost(createPostDto);
  }
}

