import { IAdminRepositories } from "../interfaces/IAdminRepositories";
import CategoriesModel from "../model/categories.schema";
import FAQModel from "../model/faq.schema";


export class AdminRepository implements IAdminRepositories{
    async addCategories(categories: any): Promise<Object> {
        try {
            await CategoriesModel.deleteMany();
            await CategoriesModel.create(categories);
             return {success:true}
        } catch (e:any) {
            throw new Error(e.message)
        }
    }
    async getCategories(): Promise<any> {
       try {
        const categories = await CategoriesModel.find();
        return categories;
       } catch (e:any) {
        throw new Error(e.message)
       }
    }

    async getFAQ():Promise<any>{
        try {
            const faq = await FAQModel.find()
            console.log(faq)
            return faq
        } catch (e:any) {
            throw new Error(e.message)
        }
    }
    
    async addFAQ(questions:any):Promise<Object> {
        try {
            await FAQModel.deleteMany();
            await FAQModel.create(questions);
            return {success:true}
        } catch (e:any) {
            throw new Error(e.message)
        }
    }
}