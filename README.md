# Proyecto Integrador Final - DevOps + Verificación y Validación

## 1. Descripción del sistema

Task Manager es una aplicación web/API REST básica para la gestión de tareas de equipos de trabajo. Permite crear, listar, actualizar y eliminar tareas, además de manejar estados como pendiente, en progreso y completado.

## 2. Tecnologías utilizadas

- Node.js
- Express
- CORS
- Jest
- Supertest
- Docker
- GitHub Actions
- Linux / GitHub Codespaces

## 3. Arquitectura general

Usuario / Cliente  
↓  
API REST Task Manager  
↓  
Node.js + Express  
↓  
Pruebas automatizadas con Jest y Supertest  
↓  
Contenedor Docker  
↓  
Pipeline CI con GitHub Actions  

## 4. Gestión de ambientes

| Ambiente | Descripción | Uso |
|---|---|---|
| Dev | Ambiente de desarrollo en GitHub Codespaces | Programación y pruebas iniciales |
| Test | Ambiente donde se ejecutan pruebas automatizadas | Validación con Jest y Supertest |
| Producción | Ambiente simulado mediante Docker | Ejecución del sistema en contenedor |

## 5. Flujo DevOps

El flujo DevOps aplicado inicia con el desarrollo del código en el ambiente Dev. Luego los cambios se suben a GitHub, donde GitHub Actions ejecuta automáticamente el pipeline de integración continua.

El pipeline instala dependencias, ejecuta pruebas automatizadas y valida la construcción de la imagen Docker. Si todo es exitoso, el sistema queda listo para ser desplegado en el ambiente de producción simulado con Docker.

Flujo general:

Desarrollo → GitHub → GitHub Actions → Pruebas → Docker Build → Despliegue simulado

## 6. Automatización

Se crearon scripts básicos para automatizar tareas repetitivas:

- scripts/install.sh: instala las dependencias del proyecto.
- scripts/run.sh: ejecuta la aplicación.

## 7. Pruebas de Verificación y Validación

Se implementaron pruebas automatizadas para validar el comportamiento del sistema.

| Tipo | Casos |
|---|---|
| Funcionales | Crear, listar, actualizar y eliminar tareas |
| Negativas | No permitir tareas sin título, no aceptar estados inválidos |
| Borde | Intentar actualizar o eliminar tareas inexistentes |

Comando para ejecutar pruebas:

npm test

## 8. Docker

El sistema puede ejecutarse dentro de un contenedor Docker.

Construir imagen:

docker build -t task-manager-devops-vv .

Ejecutar contenedor:

docker run -d -p 3000:3000 --name task-manager task-manager-devops-vv

Verificar funcionamiento:

curl http://localhost:3000  
curl http://localhost:3000/tasks

## 9. Pipeline CI

El pipeline de GitHub Actions se encuentra en:

.github/workflows/ci.yml

El pipeline realiza:

1. Clonado del repositorio.
2. Configuración de Node.js.
3. Instalación de dependencias.
4. Ejecución de pruebas automatizadas.
5. Validación de construcción Docker.

## 10. Problemas detectados y mejoras propuestas

| Problema detectado | Impacto | Mejora propuesta |
|---|---|---|
| Los datos se guardan en memoria | Al reiniciar el sistema se pierden las tareas | Integrar una base de datos como PostgreSQL o MongoDB |
| No existe autenticación | Cualquier usuario podría modificar tareas | Agregar login, roles y permisos |
| El despliegue es simulado | No está publicado en un servicio cloud real | Desplegar en Render, Railway, Azure, AWS o Google Cloud |
| Existen advertencias de seguridad en dependencias | Posibles vulnerabilidades moderadas | Revisar dependencias con npm audit y actualizar paquetes |

## 11. Conclusión

El proyecto demuestra una solución básica basada en DevOps y Verificación y Validación. Se aplicó control de versiones, automatización con scripts, pruebas automatizadas, contenedorización con Docker e integración continua mediante GitHub Actions.