import { WaterLevelSchemaType } from "@/types/types";
import mongoose, { Schema } from "mongoose";

const WaterLevelSchema: Schema<WaterLevelSchemaType> = new mongoose.Schema({
    water_level: {
        type: Number,
        required: [true, 'water level number is required'],
    }
},
    {
        timestamps: true
    }
);

const WaterLevelModel = mongoose.models.Water_Level as mongoose.Model<WaterLevelSchemaType> || mongoose.model<WaterLevelSchemaType>('Water_Level', WaterLevelSchema);
export default WaterLevelModel;