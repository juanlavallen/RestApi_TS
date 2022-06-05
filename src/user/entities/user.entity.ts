import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {
  @Column()
  name!: string;

  @Column()
  lastname!: string;

  @Column()
  username!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column()
  city!: string;

  @Column()
  province!: string;
}
