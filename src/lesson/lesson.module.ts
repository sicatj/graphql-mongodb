import { LessonService } from './lesson.service';
import { Lesson } from './lesson.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { LessonResolver } from './lesson.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Lesson])],
  providers: [LessonResolver, LessonService],
})
export class LessonModule {}
