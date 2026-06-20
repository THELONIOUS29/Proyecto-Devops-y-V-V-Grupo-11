# Evidencias técnicas del proyecto

## 1. Ambiente Linux / Dev

Evidencia:
- Repositorio abierto en GitHub Codespaces.
- Comandos pwd y ls.
- Proyecto ejecutándose en ambiente de desarrollo.

Demuestra:
- Uso de entorno Linux.
- Ambiente Dev configurado.

## 2. Instalación de dependencias

Evidencia:
- npm install express cors.
- npm install --save-dev jest supertest.
- package.json creado.

Demuestra:
- Preparación del entorno de desarrollo.
- Dependencias del sistema instaladas.

## 3. Aplicación Task Manager

Evidencia:
- Archivos src/app.js y src/server.js.
- Servidor ejecutándose con npm start.
- Respuesta de curl http://localhost:3000.

Demuestra:
- Aplicación web/API funcionando.
- Sistema accesible vía web.

## 4. Pruebas manuales funcionales

Evidencia:
- Crear tarea.
- Listar tareas.
- Actualizar tarea.
- Eliminar tarea.

Demuestra:
- Cumplimiento de funcionalidades principales.

## 5. Pruebas manuales negativas y de borde

Evidencia:
- Crear tarea sin título.
- Crear tarea con estado inválido.
- Actualizar tarea inexistente.
- Eliminar tarea inexistente.

Demuestra:
- Validación de errores.
- Control de datos inválidos.

## 6. Pruebas automatizadas

Evidencia:
- Archivo tests/tasks.test.js.
- Ejecución de npm test.
- Resultado: 8 pruebas aprobadas.

Demuestra:
- Verificación y Validación automatizada.
- Casos funcionales, negativos y de borde.

## 7. Scripts de automatización

Evidencia:
- scripts/install.sh.
- scripts/run.sh.
- Ejecución de ambos scripts.

Demuestra:
- Automatización básica del proyecto.
- Repetibilidad del proceso.

## 8. Docker

Evidencia:
- Dockerfile.
- .dockerignore.
- docker build.
- docker run.
- docker ps.
- curl al contenedor.

Demuestra:
- Contenedorización.
- Ambiente reproducible.
- Producción simulada.

## 9. GitHub Actions CI

Evidencia:
- Archivo .github/workflows/ci.yml.
- Pipeline ejecutado en verde.
- Pasos: instalar dependencias, ejecutar pruebas y validar Docker build.

Demuestra:
- Integración continua.
- Automatización de validaciones.

## 10. CD conceptual

Proceso definido:
1. El equipo desarrolla cambios en Codespaces.
2. Los cambios se suben a GitHub.
3. GitHub Actions ejecuta el pipeline CI.
4. Si las pruebas pasan, se valida la construcción Docker.
5. Se ejecuta el contenedor como producción simulada.
6. Se valida la aplicación mediante comandos curl.

Demuestra:
- Entrega/despliegue estructurado.
- Flujo DevOps completo.

## 11. Problemas detectados y mejoras

Problemas:
- Los datos se guardan en memoria.
- No existe autenticación.
- El despliegue es simulado.
- Existen advertencias de seguridad en dependencias.

Mejoras:
- Agregar base de datos.
- Implementar autenticación.
- Automatizar despliegue real en la nube.
- Revisar dependencias con npm audit.