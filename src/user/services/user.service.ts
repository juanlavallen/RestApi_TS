import { DeleteResult, UpdateResult } from 'typeorm';
import { BaseService } from '../../config/base.service';
import { UserDto } from '../dto/user.dto';
import { UserEntity } from '../entities/user.entity';

export class UserService extends BaseService<UserEntity> {
  constructor() {
    super(UserEntity);
  }

  async findAllUsers(): Promise<UserEntity[]> {
    return (await this.repository).find();
  }

  async findUserById(id: string): Promise<UserEntity | null> {
    return (await this.repository).findOneBy({ id });
  }

  async createUser(body: UserDto): Promise<UserEntity> {
    return (await this.repository).save(body);
  }

  async deleteUser(id: string): Promise<DeleteResult> {
    return (await this.repository).delete({ id });
  }

  async updateUser(id: string, infoUpdate: UserDto): Promise<UpdateResult> {
    return (await this.repository).update(id, infoUpdate);
  }
}
