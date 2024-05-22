"use strict";
const mongoose = require('mongoose');

const personalSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  point:{
    type:Number,
    required:true,
  }
}, { timestamps: true });

const Personal = mongoose.model('Personal', personalSchema);

module.exports = Personal;

