# Revisión 01 — Resultado Stitch

## Resultado

**No aprobado todavía.** La base visual es apropiada, pero requiere una corrección de alcance antes del handoff a Google AI Studio.

## Conservar

- Sistema visual sobrio: azul marino, verde azulado, fondos claros, bordes estructurales y sombras discretas.
- Tipografía Plus Jakarta Sans, jerarquía compacta y alta legibilidad.
- Navegación lateral, tarjeta de próxima cita, tabla de citas y etiquetas semánticas de estado.
- Diseño responsive y componentes de agenda/horarios definidos en `DESIGN.md`.

## Corregir

1. Eliminar funciones fuera de alcance: historia clínica, diagnóstico clínico, resultados de laboratorio, órdenes médicas, fórmulas y descarga de documentos clínicos.
2. Sustituir esos módulos por capacidades del PRD: mis citas, solicitudes pendientes, reprogramaciones y acciones de agenda.
3. Eliminar teléfonos, NIT, acreditaciones, enlaces institucionales, logos conmemorativos y otros datos que puedan presentarse como información oficial real.
4. Etiquetar el producto como **“FCV Citas — Laboratorio académico”** y mantener todos los datos como sintéticos.
5. Completar las pantallas obligatorias aún no presentadas: autenticación, búsqueda/reserva, detalle/cancelación/reprogramación, agenda profesional y bandejas administrativas.

## Próximo control

Aplicar [PROMPT_CORRECCION_01.md](../PROMPT_CORRECCION_01.md), guardar nuevas capturas en esta carpeta y solicitar nueva revisión. No pasar a AI Studio hasta aprobación explícita.
