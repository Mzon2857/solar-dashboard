import mongoose from 'mongoose';
const { Schema } = mongoose;

const DataSchema = new mongoose.Schema({
    data: [
        {
          DATE_TIME: String,
          dc_power: Number,
          usage: {
            hvac: Number,
            lighting: Number,
            'floor 1': Number,
            'floor 2': Number,
            'floor 3': Number,
            'floor 4': Number,
          },
        },
      ],
});

export default mongoose.model("jsonData", DataSchema)