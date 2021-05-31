const mongoose = require('mongoose');
const { model } = require('../../models/usuariosModel');
const { modelCiudad } = require('../../models/ciudadesModel');
mongoose.connect('mongodb+srv://acamica123:acamica123@warehouse.qanab.mongodb.net/Warehouse?retryWrites=true&w=majority');

module.exports.get = async (model, parameters) => {
    return model.find(parameters);
}

module.exports.create = async (modelCiudad, data) => {
    const newObject = new Ciudades(data)
    const result = await newObject.save();
    return result;
}

module.exports.update = async (model, id, data) => {
    return await model.findByIdAndUpdate(id, data)
}

module.exports.delete = async (model, id, data) => {
    return await model.findByIdAndDelete(id, data)
}