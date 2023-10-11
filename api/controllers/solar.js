import Hotel from "../models/Hotel.js";
import jsonData from "../models/5GDataModel.js"

export const createHotel = async (req, res, next)=>{
    const newHotel = new Hotel(req.body)

    try{
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    }catch(err){
        next(err)
    }
}

export const uploadData = async (req, res, next) =>{
    const inputData = req.body

    try{
        const newData = new jsonData(inputData)
        const savedData = await newData.save()
        res.status(200).json(savedData)
    } catch(err){
        next(err)
    }
}

export const getData = async (req, res, next)=>{
    try{
        const document = await jsonData.findById(req.params.id)
        const data = document.data
        if (!Array.isArray(data)) {
            throw new Error("Data is not an array");
        }

        const batteryCapacity = 20000;
        let curBattery = 0;
        const newData = {
            data: data.map(entry =>{
                const totalUsage = Object.values(entry.usage).reduce((acc, curr) => acc + curr, 0)
                let solarUsage = 0;
                let batteryUsage = 0;
                let cityUsage = 0;

                // Use as much solar power as possible
                if (entry.dc_power >= totalUsage) {
                    solarUsage = totalUsage;
                } else {
                    solarUsage = entry.dc_power;

                    // Calculate excess energy and store it in the battery
                    const excessSolar = entry.dc_power - totalUsage;
                    curBattery = Math.min(batteryCapacity, curBattery + excessSolar);
                }

                // Use the battery
                batteryUsage = Math.min(curBattery, totalUsage - solarUsage);
                curBattery -= batteryUsage;

                // If there's still a deficit, use city power, but ensure it doesn't go negative
                cityUsage = Math.max(totalUsage - solarUsage - batteryUsage, 0);
                return {
                    DATE_TIME: entry.DATE_TIME,
                    SOLAR_USAGE: solarUsage,
                    CITY_USAGE: cityUsage,
                    BATTERY_USAGE: batteryUsage,
                    remainingBattery: curBattery
                }
            })
        }

        res.status(200).json(newData)
    }catch(err){
        next(err)
    }
}

export const updateHotel = async (req, res, next)=>{
    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        res.status(200).json(updatedHotel)
    }catch(err){
        next(err)
    }
}

export const deleteHotel = async (req, res, next)=>{
    try{
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("DELETED: " + req.params.id)
    }catch(err){
        next(err)
    }
}

export const getHotel = async (req, res, next)=>{
    try{
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
    }catch(err){
        next(err)
    }
}

export const getAllHotel = async (req, res, next)=>{
    try{
        const hotels = await Hotel.find()
        res.status(200).json(hotels)
    }catch(err){
        next(err)
    }
}