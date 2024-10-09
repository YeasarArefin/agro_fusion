import { AlertSchemaType } from "@/types/types";
import mongoose, { Schema } from "mongoose";

const AlertSchema: Schema<AlertSchemaType> = new mongoose.Schema({
    alert: {
        type: String,
        required: [true, 'alert is required'],
    },
    description: {
        type: String,
        required: [true, 'description is required'],
    }
},
    {
        timestamps: true
    }
);

const AlertModel = mongoose.models.Alert as mongoose.Model<AlertSchemaType> || mongoose.model<AlertSchemaType>('Alert', AlertSchema);
export default AlertModel;