export type ScreenType = 'login' | 'register' | 'dashboard';
export type UserRole = 'USER' | 'ADMIN' | 'PROFESSIONAL';

export interface User { id: string; name: string; email: string; phone?: string; roles?: string[]; }
export interface CatalogItem { id: string; name: string; code?: string; active?: boolean; }
export interface Specialty extends CatalogItem { durationMinutes: 30 | 60; appointmentType?: 'GENERAL' | 'SPECIALIZED'; }
export interface Professional extends CatalogItem { firstName?: string; lastName?: string; professionalCode?: string; licenseNumber?: string; specialties?: Specialty[]; locationIds?: string[]; }
export interface AvailabilitySlot { startAt: string; endAt: string; }
export interface AvailableProfessional { professionalId: string; professionalName: string; slots: AvailabilitySlot[]; }
export type AppointmentStatus = 'APPROVED' | 'REQUESTED' | 'REJECTED' | 'CANCELLED' | 'COMPLETED' | 'NO_SHOW';
export interface AppointmentResult { id: string; status: AppointmentStatus; startAt: string; endAt: string; }
export interface Appointment extends AppointmentResult { professionalName: string; specialtyName: string; locationName: string; durationMinutes: number; rejectionReason?: string; patientName?: string; }
export interface RescheduleRequest { id: string; appointmentId: string; status: 'PENDING' | 'APPROVED' | 'REJECTED'; newStartAt: string; newEndAt: string; }
export interface AvailabilityBlock { id: string; locationId: string; locationName?: string; date: string; startTime: string; endTime: string; }
