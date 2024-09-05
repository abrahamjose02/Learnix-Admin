import { IAdminUserService } from "../interfaces/IAdminUserService";
import AdminRabbitMQClient from '../rabbitMQ/client';


export class adminUserService implements IAdminUserService{
   async getUsers() {
        try {
            const operation = 'get-all-users';
            const message:any = await AdminRabbitMQClient.produceuserMessage(
                null,operation
            );
            return JSON.parse(message.content.toString())
        } catch (e:any) {
            throw new Error(e.message)
        }
    }
   async getInstructors() {
        try {
            const operation = 'get-all-instructors';
            const message:any = await AdminRabbitMQClient.produceuserMessage(
                null,operation
            );
            return JSON.parse(message.content.toString())
        } catch (e:any) {
            throw new Error(e.message)
        }
    }
    async deleteUser(userId: string): Promise<Object> {
        try {
            const operation = 'delete-user';
            const message:any = await AdminRabbitMQClient.produceuserMessage(
                userId,operation
            );
            return JSON.parse(message.content.toString());
        } catch (e:any) {
            throw new Error(e.message)
        }
    }
}