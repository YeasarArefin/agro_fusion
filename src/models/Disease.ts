import { DiseaseSchemaType } from "@/types/types";
import mongoose, { Schema } from "mongoose";

const DiseaseSchema: Schema<DiseaseSchemaType> = new mongoose.Schema({
    disease: {
        type: String,
        required: [true, 'disease is required'],
    }
},
    {
        timestamps: true
    }
);

const DiseaseModel = mongoose.models.Alert as mongoose.Model<DiseaseSchemaType> || mongoose.model<DiseaseSchemaType>('Disease', DiseaseSchema);
export default DiseaseModel;