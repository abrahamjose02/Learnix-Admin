import mongoose,{Model,Schema} from "mongoose";

interface FAQ{
    question:string;
    answer:string;
}


const faqSchema:Schema<FAQ> = new Schema(
    {
        question:{
            type:String,
            required:true
        },
        answer:{
            type:String,
            required:true
        },
    },
    {timestamps:true}
);


const FAQModel:Model<FAQ> = mongoose.model("FAQ",faqSchema);

export default FAQModel