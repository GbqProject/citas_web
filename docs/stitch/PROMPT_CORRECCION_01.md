# Prompt correctivo para Stitch — Revisión 01

```text
Refina el diseño actual de FCV Citas. No rediseñes todo el producto ni cambies el sistema visual base.

CONSERVAR SIN CAMBIOS
- La dirección visual clínica, sobria y operativamente clara.
- Azul marino, verde azulado, superficies claras, bordes sutiles y sombras discretas.
- Tipografía Plus Jakarta Sans, navegación lateral, tabla de citas, tarjeta de próxima cita y etiquetas de estado.
- La jerarquía de la pantalla y la adaptación responsive ya definidas.

PROBLEMAS A CORREGIR
1. El diseño actual incluye historia clínica, diagnósticos, resultados de laboratorio, órdenes médicas, fórmulas y descargas de documentos clínicos. Todo eso está fuera del alcance.
2. Incluye teléfonos, NIT, logos conmemorativos, acreditaciones, enlaces institucionales y textos que podrían parecer datos oficiales reales.
3. El diseño debe cubrir el flujo de agenda del PRD, no un portal clínico con información médica.

CAMBIOS OBLIGATORIOS
- Cambia la identidad visible a “FCV Citas — Laboratorio académico”.
- Elimina todos los módulos, textos, botones y enlaces relacionados con historia clínica, diagnósticos, resultados, órdenes, fórmulas, documentos clínicos y telemedicina.
- Reemplaza esos espacios por módulos de alcance permitido: “Próximas citas”, “Solicitudes pendientes”, “Reprogramaciones”, “Historial de estados de citas” y “Acciones rápidas”.
- Conserva únicamente datos sintéticos. Elimina teléfonos, NIT, acreditaciones, logos de aniversario, enlaces institucionales oficiales y referencias a entidades reguladoras.
- Mantén las dos sedes permitidas como opciones sintéticas de laboratorio: “HIC” e “ICV”.
- Mantén estados de cita claros: SOLICITADA, APROBADA, RECHAZADA, CANCELADA, COMPLETADA y NO ASISTIÓ.
- Diseña también las pantallas faltantes con el mismo sistema visual: inicio de sesión, registro, recuperación/cambio de contraseña, búsqueda de disponibilidad, selección de horarios, solicitud/confirmación de cita, detalle/cancelación/reprogramación, agenda profesional, gestión de bloques y bandejas administrativas.
- Todo el texto de la interfaz debe permanecer en español colombiano claro.

VERIFICACIÓN RESPONSIVE Y ACCESIBLE
Conserva el comportamiento responsive, foco visible, contraste legible, controles de teclado y estados de carga, error, vacío, éxito, seleccionado y deshabilitado.

NO HACER
- No introduzcas una nueva estética.
- No agregues backend, Firebase, base de datos, API real, despliegue ni funcionalidades clínicas.
- No uses datos personales, profesionales o institucionales reales.
```
