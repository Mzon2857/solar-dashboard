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
        const curBattery = 0;
        const newData = {
            data: data.map(entry =>{
                const totalUsage = Object.values(entry.usage).reduce((acc, curr) => acc + curr, 0)
                const solarUsage = Math.min(totalUsage, entry.dc_power);
                const cityUsage = totalUsage - solarUsage;
                return {
                    DATE_TIME: entry.DATE_TIME,
                    SOLAR_USAGE: solarUsage,
                    CITY_USAGE: cityUsage
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