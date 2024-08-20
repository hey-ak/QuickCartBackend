import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const categorySchema = new Schema(
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
      
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('ProductCategory', categorySchema);
