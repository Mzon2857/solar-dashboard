import mongoose from 'mongoose';
const { Schema } = mongoose;

const DataSchema = new mongoose.Schema({
    data: [
        {
          DATE_TIME: String,
          solar_power: Number,
          city_grid: Number,
          battery: Number,
        },
      ],
});

export default mongoose.model("jsonData", DataSchema)