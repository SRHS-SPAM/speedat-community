import { IsString, IsNotEmpty } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  content: string;

  // 필요한 경우 파일 업로드 관련 필드 추가
}
