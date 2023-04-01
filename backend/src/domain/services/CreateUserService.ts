import {  User } from "../entities/User/User";
import { IUserRepository } from "../repository/IUserRepository";
import HasPassPasswordService from "./HashPasswordService";



export class CreateUserService {
  constructor(
    private repository: IUserRepository,
    private passwordHashService: HasPassPasswordService
  ){}

  async create(user: User) {

    const hashPassword = await this.passwordHashService.toHash(user.getPassword())
    user.setPassword(hashPassword)

    const { id } = await this.repository.create(user);

    return { id }
  }


  async update(_id: string , user: User) {
    
    const { id } = await this.repository.update(_id, user);

    return { id }
  }

}