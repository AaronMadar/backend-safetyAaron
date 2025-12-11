export interface SafetyEventType {
  activity: string;
  damage: string;
  date: string;
  description: string;
  kindOfIncident: string;
  place: string[]; // Array car c'est des checkboxes multiples
  severityIncident: string;
  severityInjurie: string;
  unitActivity: string;
  unity: string;
  weather: string;
  id: number;
}
