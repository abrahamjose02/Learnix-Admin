import { AdminController } from "../controller/admin.controller";
import { AdminUserController } from "../controller/admin.user.controller";
import { AdminRepository } from "../repository/admin.respository";
import { AdminService } from "../service/admin.service";

import { adminUserService } from "../service/admin.user.service"
import rabbitMQClient from "./client";

const userService = new adminUserService();
const userController = new AdminUserController(userService);

const repository = new AdminRepository();
const adminService = new AdminService(repository);
const adminController = new AdminController(adminService);

export default class MessageHandler {
  static async handle(
    operation: string,
    data: any,
    correlationId: string,
    replyTo: string
  ) {
    let response = data;
    console.log("The operation admin is", operation, data);

    switch (operation) {
      case "get-all-users":
        response = await userController.getUsers.bind(userController)();
        break;

      case "get-all-instructors":
        response = await userController.getInstructors.bind(userController)();
        break;

      case "delete-user":
        response = await userController.deleteUser.bind(userController)(data);
        break;


      case "add-categories":
        response = await adminController.addCategories.bind(adminController)(
          data
        );
        break;

      case "get-categories":
        response = await adminController.getCategories.bind(adminController)();
        break;

      case "add-faq":
        response = await adminController.addFAQ.bind(adminController)(data);
        break;
      
      case "get-faq":
        response = await adminController.getFAQ.bind(adminController)();
        break;
        
      default:
        response = "Request-key notfound";
        break;
    }

    //Produce the response back to the client

    await rabbitMQClient.produce(response, correlationId, replyTo);
  }
}