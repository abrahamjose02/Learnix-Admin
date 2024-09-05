
export interface IAdminUserService{
    getUsers():any;
    getInstructors():any;
    deleteUser(userId:string):Promise<Object>;
}