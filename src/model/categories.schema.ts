import mongoose,{Model,mongo,Schema} from "mongoose";

interface categories{
    category:string
}

const categoriesSchema:Schema<categories> = new Schema(
    {
        category:{type:String,required:true}
    },
    {timestamps:true}
);

const CategoriesModel:Model<categories> = mongoose.model("categories",categoriesSchema);

export default CategoriesModel;