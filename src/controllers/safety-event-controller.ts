import {
  createEvent,
  updateEvent,
  deleteEvent,
  getAllEvents,
} from "@/services/safety-event-service";
import { Request, Response } from "express";

export async  function postSafetyEvent(req: Request, res: Response) {
  const eventData = req.body;
  try {
   await createEvent(eventData);
    res.status(201).json({ message: "SafetyEvent created successfully" });
  } catch (error:unknown) {
     const err = error instanceof Error ? error : new Error(String(error));
    console.error(err.message);
    res.status(500).json({ error: err.message });
  }
}

export async function getSafetyEvents(req: Request , res: Response) {
  try {
     const result = await getAllEvents();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve SafetyEvents" });
  }
}

export async function updateSafetyEvent(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const result = await updateEvent(id, req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to update SafetyEvent" });
  }
}

export async function deleteSafetyEvent(req: Request, res: Response) {
  try {
    const id = Number(req.params.id || req.body.id);
    await deleteEvent(id);
    res.status(200).json({ message: "SafetyEvent deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete SafetyEvent" });
  }
}

