import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { LessonType } from './lesson.type';

@Resolver((of) => LessonType)
export class LessonResolver {
  //queries or mutations here
  @Query((returns) => LessonType)
  lesson() {
    return {
      id: 'asdjo12j31a',
      name: 'Physics Class',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
  }
  @Mutation((returns) => LessonType)
  createLesson() {}
}
