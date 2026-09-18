# Prompt para Stitch — Diseño inicial S2

Pega el siguiente texto en Stitch. Usa el modo **Equilibrado / Gemini 3.8**. No avanzar a Google AI Studio hasta obtener aprobación explícita del diseño.

```text
Diseña una aplicación web responsive para un servicio ficticio colombiano de agendamiento de citas médicas llamado “FCV Citas”.

CONTEXTO DEL PRODUCTO
- Usuarios principales: pacientes (USER), profesionales de salud (PROFESSIONAL) y administradores (ADMIN).
- Trabajo principal del paciente: registrarse, iniciar sesión, buscar un profesional y un horario disponible, solicitar una cita, administrar sus citas y pedir reprogramación.
- Acciones principales: “Crear cuenta”, “Iniciar sesión”, “Buscar disponibilidad” y “Solicitar cita”.
- Es un producto académico ficticio. Usa información realista pero claramente sintética para pacientes, profesionales, EPS, planes, citas y horarios. No uses datos reales de pacientes.
- Diseña una aplicación de trabajo autenticada; no una landing page de marketing.

ARQUITECTURA DE INFORMACIÓN
Crea un sistema de diseño coherente y estos grupos de pantallas:
1. Autenticación: inicio de sesión, registro, recuperación de contraseña y cambio de contraseña.
2. Panel del paciente: resumen de próxima cita y acciones rápidas.
3. Búsqueda de disponibilidad: filtros por sede, tipo de cita, especialidad, profesional y fecha; horarios de 30 y 60 minutos.
4. Solicitud y confirmación de cita.
5. Mis citas: filtros, detalle de cita, confirmación de cancelación y solicitud de reprogramación.
6. Panel profesional: bloques de disponibilidad, calendario y agenda diaria/semanal.
7. Panel administrador: solicitudes de citas especializadas, solicitudes de reprogramación, gestión de profesionales, especialidades, EPS y planes.

DISEÑO Y JERARQUÍA
- Usa una estructura de aplicación enfocada en tareas para las áreas autenticadas.
- Escritorio: navegación lateral sobria, título claro por página, acciones contextuales y área de trabajo amplia.
- Inicio de sesión y registro: pantallas tranquilas y enfocadas, con tarjeta de formulario, texto de apoyo breve y sin navegación de panel.
- Haz que la acción principal sea visualmente evidente en cada pantalla.
- En disponibilidad, prioriza filtros, información del profesional seleccionado, navegación por fecha y horarios seleccionables.
- En el detalle de cita, prioriza fecha/hora, sede, profesional, especialidad, estado y siguiente acción permitida.

COMPONENTES Y ESTADOS
- Componentes reutilizables: barra superior, navegación lateral, encabezado de página, etiqueta de estado, campo de formulario, botón, selector, selector de fecha, botón de horario, elemento de calendario, fila de tabla/lista, modal de confirmación, alerta, estado vacío y estado de carga.
- Etiquetas de estado de cita en español: SOLICITADA, APROBADA, RECHAZADA, CANCELADA, COMPLETADA y NO ASISTIÓ.
- Incluye estados hover, foco de teclado, seleccionado, deshabilitado, cargando, vacío, error, éxito, validación, modal de confirmación y navegación responsive.
- Todo el texto visible de la interfaz debe estar en español colombiano claro y natural.

DIRECCIÓN VISUAL
- Tesis de diseño: calmada, confiable, clínica y operativamente clara; no un dashboard SaaS genérico.
- Tipografía: sans-serif humanista y legible, jerarquía compacta pero clara, interlineado amplio en formularios y detalles de agenda.
- Roles de color: fondo blanco cálido, superficies blancas, azul marino profundo para texto/acciones principales, verde azulado moderado para estados activos/aprobados, ámbar para pendientes, rojo para errores/rechazos y bordes gris neutro.
- Usa esquinas suavemente redondeadas, bordes sutiles, elevación mínima y sombras muy discretas.
- Usa íconos lineales simples solo cuando aclaren navegación o estado.
- Evita gradientes, glassmorphism, colores neón, secciones hero excesivas, métricas inventadas, testimonios o layouts cargados de fotografías de stock.
- Usa movimiento sutil solo para modales, confirmaciones y cambios de estado.

COMPORTAMIENTO RESPONSIVE
- Escritorio: navegación lateral y layouts de varias columnas para agenda y detalles.
- Tableta: contrae paneles secundarios y conserva visible la acción principal.
- Móvil: transforma la navegación en un menú lateral, presenta filtros progresivamente, muestra horarios en una cuadrícula o lista táctil y mantiene acciones de cita visibles sin saturar la pantalla.
- Conserva la jerarquía de información; no solo apiles columnas.

ACCESIBILIDAD
Usa contraste legible, etiquetas semánticas, indicadores de foco visibles, controles navegables con teclado, mensajes de error descriptivos, objetivos táctiles amplios y estados que no dependan únicamente del color.

RESULTADO ESPERADO
Produce un diseño Stitch de alta fidelidad, coherente entre pantallas y apto para revisión iterativa. No agregues backend, Firebase, base de datos, despliegue ni integración real con API.
```
