import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-homepage.dto';
import { Post } from './entities/homepage.entity';

@Injectable()
export class HomepageService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  async createPost(createPostDto: CreatePostDto): Promise<Post> {
    const { title, content } = createPostDto;
    
    const newPost = new Post();
    newPost.title = title;
    newPost.content = content;

    return await this.postRepository.save(newPost);
  }
}

