
export interface IAdminRepositories{
    addCategories(categories:any):Promise<Object>;
    getCategories():Promise<any>;
    addFAQ(question:any):Promise<Object>;
    getFAQ():Promise<any>;
}