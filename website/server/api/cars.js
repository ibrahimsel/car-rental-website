const asyncHandler = require("express-async-handler");
const Car = require("../models/carModel");

// @desc    Get Cars
// @route   GET /api/cars
// @access  Public
const getCars = asyncHandler(async (req, res) => {
  const cars = await Car.find();

  res.status(200).json(cars);
  return cars;
});

// @desc    Set Car
// @route   POST /api/cars
// @access  Private
const setCar = asyncHandler(async (req, res) => {
  const car = await Car.create({
    user: req.body.user,
    brand: req.body.brand,
    year: req.body.year,
    price: req.body.price,
    status: req.body.status,
  });

  res.status(200).json(car);
});

// @desc    Update Car
// @route   PUT /api/cars/:id
// @access  Private
const updateCar = asyncHandler(async (req, res) => {
  const car = await Car.findById(req.params.id);

  if (!car) {
    res.status(400);
    throw new Error("Car not found");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }
  const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, {
    status: req.body.status,
  });

  res.status(200).json(updatedCar);
});

// @desc    Delete Car
// @route   DELETE /api/cars/:id
// @access  Private
const deleteCar = asyncHandler(async (req, res) => {
  const car = await Car.findById(req.params.id);

  if (!car) {
    res.status(400);
    throw new Error("Car not found");
  }

  await car.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getCars,
  setCar,
  updateCar,
  deleteCar,
};
