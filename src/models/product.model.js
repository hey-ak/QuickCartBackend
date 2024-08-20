import mongoose,{Schema} from "mongoose";


const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            index: true
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        price: {
            type: Number,
            required: true,
            min: 0
        },
        category: {
            type: Schema.Types.ObjectId,
            required: true,
            trim: true,
            index: true
        },
        stock: {
            type: Number,
            required: true,
            min: 0
        },
        imageUrl: {
            type: String, // cloudinary url
            required: true
        },
        tags: {
            type: [String],
            index: true
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model('Product', productSchema);


    






