import { RequestHandler } from 'express';
import { AppointmentService } from '../services/appointment.service';

// Controller object with properly typed Express handlers
export const AppointmentController = {
  create: (async (req, res) => {
    const appointment = await AppointmentService.create(req.body);
    res.status(201).json(appointment);
  }) as RequestHandler,

  update: (async (req, res) => {
    const { id } = req.params;
    const updated = await AppointmentService.update(id!, req.body);
    res.json(updated);
  }) as RequestHandler,

  getById: (async (req, res) => {
    const { id } = req.params;
    const appointment = await AppointmentService.findById(id!);
    res.json(appointment);
  }) as RequestHandler,

  getPatientAppointments: (async (req, res) => {
    const patientId = req.user!.id; // Non-null assertion
    const appointments = await AppointmentService.findPatientAppointments(patientId);
    res.json(appointments);
  }) as RequestHandler,

  getDoctorAppointments: (async (req, res) => {
    const doctorId = req.user!.id;
    const appointments = await AppointmentService.findDoctorAppointments(doctorId);
    res.json(appointments);
  }) as RequestHandler,

  getDoctorPatients: (async (req, res) => {
    const doctorId = req.user!.id;
    const patients = await AppointmentService.findDoctorPatients(doctorId);
    res.json(patients);
  }) as RequestHandler,

  getInvoices: (async (req, res) => {
    const userId = req.user!.id;
    const role = req.user!.role! as "patient" | "doctor"; // Narrow type
    const invoices = await AppointmentService.getInvoices(role, userId);
    res.json(invoices);
  }) as RequestHandler,

  track: (async (req, res) => {
    const { id } = req.body;
    const appointment = await AppointmentService.findById(id!);
    res.json(appointment);
  }) as RequestHandler,
};
