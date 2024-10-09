import { HumiditySchemaType } from "@/types/types";
import mongoose, { Schema } from "mongoose";

const HumiditySchema: Schema<HumiditySchemaType> = new mongoose.Schema({
    humidity: {
        type: Number,
        required: [true, 'humidity number is required'],
    }
},
    {
        timestamps: true
    }
);

const HumidityModel = mongoose.models.Humidity as mongoose.Model<HumiditySchemaType> || mongoose.model<HumiditySchemaType>('Humidity', HumiditySchema);
export default HumidityModel;