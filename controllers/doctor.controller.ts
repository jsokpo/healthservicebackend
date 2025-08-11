import { RequestHandler } from "express";
import { DoctorService } from "../services/doctor.service";

type DoctorControllerType = {
  signUp: RequestHandler;
  getAllDoctors: RequestHandler;
  getDoctorById: RequestHandler;
  updateDoctor: RequestHandler;
};

export const DoctorController: DoctorControllerType = {
  signUp: async (req, res) => {
    try {
      const user = await DoctorService.register(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ message: "Doctor registration failed", error });
    }
  },

  getAllDoctors: async (req, res) => {
    try {
      const result = await DoctorService.getAllDoctors(req.query);
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch doctors", error });
    }
  },

  getDoctorById: async (req, res) => {
    try {
      const doctor = await DoctorService.getDoctorById(req.params.id);
      if (!doctor) return res.status(404).json({ message: "Doctor not found" });
      res.json(doctor);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch doctor", error });
    }
  },

  updateDoctor: async (req, res) => {
    try {
      const { name, bio, specialization } = req.body;
      const updateData: any = { name, bio, specialization };

      if (req.file) updateData.profileImg = req.file.path;

      const doctor = await DoctorService.updateDoctor(req.params.id, updateData);
      res.json(doctor);
    } catch (error) {
      res.status(500).json({ message: "Failed to update doctor", error });
    }
  },
};
