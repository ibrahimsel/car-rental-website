const asyncHandler = require('express-async-handler')
const Car = require('../models/carModel')
const express = require('express')
const router = express.Router()

// @desc    Get Cars
// @route   GET /api/Cars
// @access  Private
const getCars = asyncHandler(async (req, res) => {
  const cars = await Car.find()

  res.status(200).json(cars)
})

router.get("/", async (req, res) => {
  try {
    res.json({
      status: 200,
      success: true,
     data: {
            id: 1,
            name: "BMW XM",
            price: "$100 000",
            description: "BMW is a German multinational company ...",
            image: "https://www.bmw.com/content/dam/bmw/common/all-models/x-series/x-series-m/2015/at-a-glance/x-series-m-at-a-glance-1.jpg"
          }
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

// @desc    Set Car
// @route   POST /api/Cars
// @access  Private
const setCar = asyncHandler(async (req, res) => {
  const car = await Car.create({
    brand: req.body.brand,
    model: req.body.model,
    year: req.body.year,
    price: req.body.price,
    user: req.user.id,
  })

  res.status(200).json(car)
})

// @desc    Update Car
// @route   PUT /api/Cars/:id
// @access  Private
const updateCar = asyncHandler(async (req, res) => {
  const car = await Car.findById(req.params.id)

  if (!car) {
    res.status(400)
    throw new Error('Car not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the Car user
  if (Car.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedCar)
})

// @desc    Delete Car
// @route   DELETE /api/Cars/:id
// @access  Private
const deleteCar = asyncHandler(async (req, res) => {
  const car = await Car.findById(req.params.id)

  if (!car) {
    res.status(400)
    throw new Error('Car not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the Car user
  if (car.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  await car.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getCars,
  setCar,
  updateCar,
  deleteCar,
}