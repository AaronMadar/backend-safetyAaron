import { validationSafetyEvent } from "@/middleware/validation";
import {
  postSafetyEvent,
  getSafetyEvents,
  updateSafetyEvent,
  deleteSafetyEvent
} from "@/controllers/safety-event-controller";
import { Router } from "express";

const router = Router();

router.post("/", validationSafetyEvent, postSafetyEvent
);

router.get("/", getSafetyEvents);

router.put("/:id", updateSafetyEvent);

router.delete("/:id", deleteSafetyEvent);

export default router;
