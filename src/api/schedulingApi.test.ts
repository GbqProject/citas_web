import { afterEach, describe, expect, it, vi } from 'vitest';
import { appointmentsApi, availabilityApi, SchedulingApiError, schedulingErrorMessage } from './schedulingApi';

afterEach(() => vi.restoreAllMocks());

function response(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });
}

describe('scheduling REST client', () => {
  it('consumes availability grouped by professional', async () => {
    const fetchMock = vi.spyOn(globalThis, 'fetch').mockResolvedValue(response([
      { professionalId: '7', professionalName: 'Profesional Sintético', slots: [{ startAt: '2026-09-30T08:00:00', endAt: '2026-09-30T08:30:00' }] },
    ]));

    await expect(appointmentsApi.availability({ locationId: '1', specialtyId: '2', date: '2026-09-30' })).resolves.toEqual([
      { professionalId: '7', professionalName: 'Profesional Sintético', slots: [{ startAt: '2026-09-30T08:00:00', endAt: '2026-09-30T08:30:00' }] },
    ]);
    expect(String(fetchMock.mock.calls[0][0])).toContain('/availability?locationId=1&specialtyId=2&date=2026-09-30');
  });

  it('sends the backend block contract and appointment contract', async () => {
    const fetchMock = vi.spyOn(globalThis, 'fetch')
      .mockResolvedValueOnce(response({ id: '9', locationId: '1', date: '2026-09-30', startTime: '08:00', endTime: '09:00' }))
      .mockResolvedValueOnce(response({ id: '10', status: 'APPROVED', startAt: '2026-09-30T08:00:00', endAt: '2026-09-30T08:30:00' }, 201));

    await availabilityApi.create({ locationId: '1', date: '2026-09-30', startTime: '08:00', endTime: '09:00' });
    await appointmentsApi.create({ professionalId: '7', locationId: '1', specialtyId: '2', date: '2026-09-30', startTime: '08:00', reason: 'Consulta' });
    expect(JSON.parse(String(fetchMock.mock.calls[0][1]?.body))).toEqual({ locationId: '1', date: '2026-09-30', startTime: '08:00', endTime: '09:00' });
    expect(JSON.parse(String(fetchMock.mock.calls[1][1]?.body))).toEqual({ professionalId: '7', locationId: '1', specialtyId: '2', date: '2026-09-30', startTime: '08:00', reason: 'Consulta' });
  });

  it('loads the authenticated user appointments with filters', async () => {
    const fetchMock = vi.spyOn(globalThis, 'fetch').mockResolvedValue(response([
      { id: '10', status: 'APPROVED', startAt: '2026-09-30T08:00:00', endAt: '2026-09-30T08:30:00', durationMinutes: 30, professionalName: 'Dra. Sintética', specialtyName: 'Medicina general', locationName: 'Sede Norte', rejectionReason: null },
    ]));

    await expect(appointmentsApi.mine({ status: 'APPROVED', from: '2026-09-01', to: '2026-09-30' })).resolves.toHaveLength(1);
    expect(String(fetchMock.mock.calls[0][0])).toContain('/appointments/me?status=APPROVED&from=2026-09-01&to=2026-09-30');
  });

  it('cancels an owned appointment through the REST contract', async () => {
    const fetchMock = vi.spyOn(globalThis, 'fetch').mockResolvedValue(response({ id: '10', status: 'CANCELLED', startAt: '2026-09-30T08:00:00', endAt: '2026-09-30T08:30:00' }));

    await expect(appointmentsApi.cancel('10')).resolves.toMatchObject({ id: '10', status: 'CANCELLED' });
    expect(fetchMock.mock.calls[0][1]?.method).toBe('POST');
    expect(String(fetchMock.mock.calls[0][0])).toContain('/appointments/10/cancel');
  });

  it('creates a pending rescheduling request with the selected new slot', async () => {
    const fetchMock = vi.spyOn(globalThis, 'fetch').mockResolvedValue(response({ id: '21', appointmentId: '10', status: 'PENDING', newStartAt: '2026-10-01T09:00:00', newEndAt: '2026-10-01T09:30:00' }, 201));

    await expect(appointmentsApi.reschedule('10', { date: '2026-10-01', startTime: '09:00' })).resolves.toMatchObject({ appointmentId: '10', status: 'PENDING' });
    expect(fetchMock.mock.calls[0][1]?.method).toBe('POST');
    expect(JSON.parse(String(fetchMock.mock.calls[0][1]?.body))).toEqual({ date: '2026-10-01', startTime: '09:00' });
    expect(String(fetchMock.mock.calls[0][0])).toContain('/appointments/10/reschedule-requests');
  });

  it('exposes controlled 403 and 409 messages', () => {
    expect(schedulingErrorMessage(new SchedulingApiError(403, 'forbidden'))).toBe('No tienes permiso para realizar esta acción.');
    expect(schedulingErrorMessage(new SchedulingApiError(409, 'conflict'))).toBe('El horario dejó de estar disponible. Selecciona otro horario.');
  });
});
