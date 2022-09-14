import { Entity, Column, ObjectIdColumn, PrimaryColumn } from 'typeorm';

//mongo db expecan underscore ID property ID by default, hide ID by adding uderscore to id property
@Entity()
export class Lesson {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  name: string;

  @Column()
  startDate: string;

  @Column()
  endDate: string;
}
