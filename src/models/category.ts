import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    imageUrl : {
        type : String,
        default : 'https://cdn.prod.website-files.com/65aeef01ceab5a488ee1a755/65bae5dca22bad4391e32bad_category-green-bg-1200x630.jpg'
    }
})

const Category = mongoose.model('Category',categorySchema);
export default Category;