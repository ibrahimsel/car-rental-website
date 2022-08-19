const express = require('express')
const router = express.Router()
const {
  getCars,
  setCar,
  updateCar,
  deleteCar,
} = require('../api/cars')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(getCars).post(protect, setCar)
router.route('/:id').delete(protect, deleteCar).put(protect, updateCar)

module.exports = router