

import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('safety_events') // Nom de la table en snake_case
export class SafetyEvent {
  
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 255 })
  activity!: string;

  @Column({ type: 'varchar', length: 255 })
  damage!: string;

  @Column({ type: 'varchar' })
  date!: Date;

  @Column({ type: 'varchar', length: 255 })
  description!: string;

  @Column({ type: 'varchar', length: 255, name: 'kind_of_incident' })
  kindOfIncident!: string; 

  @Column({ type: "text", array: true, nullable: true })
place!: string[] | null;

  @Column({ type: 'varchar', length: 255, name: 'severity_incident' })
  severityIncident!: string;

  @Column({ type: 'varchar', length: 255, name: 'severity_injurie', nullable: true })
  severityInjurie!: string | null; 

  @Column({ type: 'varchar', length: 255, name: 'unit_activity' })
  unitActivity!: string;

  @Column({ type: 'varchar', length: 255 })
  unity!: string;

  @Column({ type: 'varchar', length: 255 })
  weather!: string;
}