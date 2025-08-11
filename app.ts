import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.route';
import appointmentRoutes from './routes/appointment.route';
import patientRoutes from './routes/patient.route';
import doctorRoutes from './routes/doctor.route';
import blogRoutes from './routes/blog.route';
import favouriteRoutes from './routes/favourite.routes';
import medicineRoutes from './routes/medicine.route';
import prescriptionRoutes from './routes/prescription.routes';
import reviewRoutes  from './routes/review.route';
import timeSlotRoutes from './routes/timeSlot.route';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/v1/appointment', appointmentRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/patient', patientRoutes);
app.use('/api/v1/doctor', doctorRoutes);
app.use('/api/v1/favourite', favouriteRoutes);
app.use('/api/v1/medicine', medicineRoutes);
app.use('/api/v1/timeslot', timeSlotRoutes);
app.use('/api/v1/review', reviewRoutes);
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use('/api/v1/blog', blogRoutes);
app.use('/api/v1/prescription', prescriptionRoutes);

export default app;
