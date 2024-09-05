import { IAdminService } from "../interfaces/IAdminService";
import { IAdminRepositories } from "../interfaces/IAdminRepositories";

export class AdminService implements IAdminService{
    constructor(private repository:IAdminRepositories){}
    addCategories(categories: any): Promise<Object> {
       return this.repository.addCategories(categories)
    }
    getCategories(): Promise<any> {
        return this.repository.getCategories();
    }
     getFAQ(): Promise<any> {
         return this.repository.getFAQ()
     }
     addFAQ(questions: any): Promise<Object> {
         return this.repository.addFAQ(questions);
     }
}