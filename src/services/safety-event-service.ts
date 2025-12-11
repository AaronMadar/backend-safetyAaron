import { AppDataSource } from "@/../data-source";
import { SafetyEvent } from "@/entity/SafetyEvent";
import type { SafetyEventType } from "@/types/safety-event-type";

const eventRepository = AppDataSource.getRepository(SafetyEvent);

export async function createEvent(eventData:SafetyEventType) {  
    const newEvent = eventRepository.create(eventData); 
    return await eventRepository.save(newEvent); 
}


export async function getAllEvents() {  
    
    return await eventRepository.find() 
}  


export async function updateEvent(eventId: number , updateData: Partial<SafetyEventType>) {

  const event = await eventRepository.findOneBy({ id: eventId });
  if (!event) throw new Error("Event not found"); //TODO voir si c'est safe

  eventRepository.merge(event, updateData);
  return await eventRepository.save(event);
}

export async function deleteEvent(eventId: number) {
  const event = await eventRepository.findOneBy({ id: eventId });
  if (!event) throw new Error("Event not found"); //TODO voir si c'est safe 
    return await eventRepository.remove(event); 
}