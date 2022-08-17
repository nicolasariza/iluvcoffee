import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

/**
 * To help speed up this search, we can define an index on the “name” column
 * using the @Index decorator.
 */
// Composite index that contains Multiple columns
@Index(['name', 'type'])
@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Index()
  @Column()
  name: string;

  @Column('json')
  payload: Record<string, any>;
}
