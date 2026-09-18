# AGENTS.md — `citas-web`

## Estado actual y alcance

Este repositorio está reservado para el frontend TypeScript de FCV Citas. Aún no contiene un proyecto importado desde Google AI Studio: no hay `package.json`, código fuente ni framework detectable. Por tanto, no asumir ni crear React, Angular u otra base tecnológica antes de recibir el artefacto comprimido aprobado.

El prototipo de Stitch aún no está aprobado. Su revisión y corrección viven en `docs/stitch/`; el handoff a AI Studio y la importación del artefacto se realizarán posteriormente.

Este repositorio implementa únicamente interfaz, experiencia de usuario y cliente REST. No contiene lógica de negocio autoritativa, persistencia de servidor, Express ni BFF. La API se consume directamente desde `../citas-api`.

## Cuando se importe el proyecto

1. Inspeccionar `package.json`, lockfile, estructura, rutas, estilos y configuración para detectar el stack realmente exportado.
2. Preservar el framework, herramientas, componentes y sistema visual que entregue AI Studio; no sustituirlos por preferencia propia.
3. Registrar aquí el stack confirmado, los comandos de build/typecheck/test y las convenciones de rutas/estilos antes de implementar cambios funcionales.
4. Reconciliar la interfaz con el diseño Stitch explícitamente aprobado, sin incorporar funciones fuera del PRD.

## Integración y seguridad

- Configurar la URL de `citas-api` por variables de entorno del framework detectado; no hardcodear URLs de despliegue, tokens ni secretos.
- Consumir REST directamente. Si falta, cambia o resulta ambiguo un contrato, detener la implementación afectada y reportar el cambio cross-repo al orquestador; no editar `../citas-api` desde este repositorio.
- El backend es autoridad para autenticación, roles, ownership, validación y reglas de agenda. La UI puede validar experiencia de uso, pero no reemplaza dichas reglas.
- No guardar secretos ni credenciales. Tratar los tokens de sesión conforme al contrato aprobado y no exponerlos en logs, URLs o mensajes de error.

## Calidad de interfaz

- Mantener texto en español colombiano, datos sintéticos y las pantallas dentro del alcance del PRD.
- Para cada pantalla, contemplar estados de carga, vacío, error, éxito, validación, foco, seleccionado y deshabilitado cuando apliquen.
- Conservar semántica HTML, foco visible, navegación por teclado, contraste legible, etiquetas de formulario y mensajes de error descriptivos.
- Antes de cerrar una HU, ejecutar los comandos de build, typecheck y pruebas disponibles en el proyecto real y contrastar el resultado con sus criterios de aceptación y DoD.

## Documentación y Git

- Usar las HU aprobadas en `../citas-api/docs/wiki/scrum/` como unidad de alcance. HU-016 requiere diseño aprobado, importación del proyecto, integración REST directa y evidencia de ejecución.
- No crear ni mantener una LLM Wiki propia; la memoria global reside en `../citas-api/docs/wiki/llm-wiki/` y la mantiene el orquestador.
- `main` es estable y `develop` es la rama de trabajo del workspace. No reescribir historial.
