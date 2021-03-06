import { Request, Response } from 'express';
import { UserService } from '../services/user.service';

export class UserController {
  constructor(private readonly userService: UserService = new UserService()) {}

  async getUsers(req: Request, res: Response) {
    try {
      const data = await this.userService.findAllUsers();
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
    }
  }

  async getUserById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = await this.userService.findUserById(id);
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
    }
  }

  async createUser(req: Request, res: Response) {
    try {
      const data = await this.userService.createUser(req.body);
      res.status(201).json(data);
    } catch (error) {
      console.log(error);
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const body = req.body;
      const updatedUser = await this.userService.updateUser(id, body);
      res.status(200).json(updatedUser);
    } catch (error) {
      console.log(error);
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedUser = await this.userService.deleteUser(id);
      res.status(200).json(deletedUser);
    } catch (error) {
      console.log(error);
    }
  }
}
