import express from 'express';
import validateRequest from '../../middlewares/validateRequest';

import { BookingControllers } from './booking.controller';
import auth from '../../middlewares/auth';
import { BookingValidations } from './booking.validation';


const router = express.Router();

router.post(
  '/',
  auth('user'),
  validateRequest(BookingValidations.createBookingValidationSchema),
  BookingControllers.createBooking,
);

router.get('/', auth('admin'), BookingControllers.getAllBookings);

const router2 = express.Router();

router2.get('/', auth('user'), BookingControllers.getUserBooking);

export const BookingRoutes = router;
export const BookingRoutes2 = router2;