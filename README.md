# Sistema de Gestión Académica (SGA)
Proyecto desarrollado durante la materia Programación IV.

## Descripción
El Sistema de Gestión Académica (SGA) es una aplicación web que permitirá administrar alumnos, docentes, cursos y materias.



Durante el desarrollo del proyecto se incorporarán progresivamente nuevas tecnologías y funcionalidades.

## Objetivos

- Gestionar alumnos.
- Gestionar docentes.
- Gestionar cursos.
- Gestionar materias.
- Implementar autenticación de usuarios.
- Consumir una API REST.
- Persistir la información en MongoDB.


## Tecnologías
Actualmente:
- HTML5
- CSS3
- JavaScript
- Express
- Node.js
Próximamente:
- React
- MongoDB

## Estado del proyecto
🚧 En desarrollo.

## Autor

Nombre del estudiante: Abril Pérez Favit
Programación IV

# Estructura actual -clase 12
SGA/
frontend
|
|---index.html
|--- alumnos.html
|--- docentes.html
|
|--- css/
|    |--estilos.css
|
|---Js/
|   |--alumnos.js
|   |--docentes.js
|
|--backend




## estado actual
-Página de inicio y navegación entre módulos
-Módulo alumnos docentes
-Crud alumnos/docentes
-Validaciones de formulario 
-Persistencia mediante localStorage
-Organización del código y refactorización
-Separación inicial entre frontend y backend
-Implemtación de validaciones para los datos recibidos mediante req.body
-Uso de status 4004 para datos invalidos
-status 404 para alumos no encontrado s
-status 2201 para registrar nuevo alumno
-Manejo basico  de errores en las operaciones del crud
-Instalaciones con mongoose
-Creación de la conexión con Mongodb en config/database.js
-Creación del Schema y modelo Alumno
-Reemplazo del array en memoria por una conexión en mongoDB
-Modificación de alumnos para consultar mongoDB mediante mongoose
-Prueba de la API con datos almacenados en mongoDB
## almacenamiento
localStorage
JSON.stringify()
JSON:parse()
mongoDB
## Clase 14 -- post-body-express.json()