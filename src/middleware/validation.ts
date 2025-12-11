import { requestType } from "@/types/request-type";
import type { SafetyEventType } from "@/types/safety-event-type";
import { NextFunction , Response} from "express";

export function validateSafetyEvent(req: requestType, res:  Response, next: NextFunction) {
  const eventData = req.body;

  const requiredFields: (keyof SafetyEventType)[] = [
    "activity",
    "damage",   
    "date",
    "description",
    "kindOfIncident",   
    "place",
    "severityIncident",
    "unitActivity",
    "unity",
    "weather",
  ];

  //verifie que tout les champs sont dans eventdata
  for (const field of requiredFields) {
    if (!(field in eventData)) {
      return res
        .status(400)
        .json({ error: `Missing required field: ${field}` });
    }

    //verifie que les champs ne sont pas vides
    if (
      eventData[field] === null ||
      eventData[field] === undefined ||
      eventData[field] === "" || 
    (Array.isArray(eventData[field]) && eventData[field].length === 0)
    ) {
      return res.status(400).json({ error: `Field cannot be empty: ${field}` });
    }
  }

  next();
}
