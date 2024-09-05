
import { IAdminUserService } from "../interfaces/IAdminUserService";

export class AdminUserController{
    constructor(private service:IAdminUserService){}

    getUsers = async()=>{
        try {
            const response = await this.service.getUsers();
            return response;
        } catch (e:any) {
            return ({error:'rabbitMQ error'})
        }
    }

    getInstructors = async()=>{
        try {
            const response = await this.service.getInstructors()
            return response
        } catch (e:any) {
            return ({error:'rabbitMQ error'})
        }
    }

    deleteUser = async(userId:string)=>{
        try {
            const response = await this.service.deleteUser(userId);
            return response;
        } catch (e:any) {
            return ({error:'rabbitMQ error'})
        }
    }
}