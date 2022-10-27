// import { Body, JsonController, Post } from "routing-controllers";
// import { CreateUserDTO } from "@logic/dtos/user/create-user.dto";
// import { MongoUserRepository } from "../../data-layer/user/user.repository.mongo";
// import { CreateUserUseCase } from "@logic/useCases/user/create-user.use-case";
// import { Service } from "typedi";
//
// @JsonController("/user")
// @Service()
// export class UserController {
//   constructor(private userRepo: MongoUserRepository) {}
//   @Post()
//   async createUser(@Body() createUserDTO: CreateUserDTO) {
//     const useCase = new CreateUserUseCase(this.userRepo, createUserDTO);
//     return useCase.execute();
//   }
// }
//
// // CREATE ADMIN USER USECAS
// //  CREATE STAFF USER USECASE
// // CREATE USER USEcSE
