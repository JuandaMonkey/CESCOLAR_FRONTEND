# CESCOLAR - Frontend

Sistema de Control Escolar desarrollado con [Angular CLI](https://github.com/angular/angular-cli) v21.1.0 con soporte de Server-Side Rendering (SSR).

## Descripción

CESCOLAR es una aplicación web para la gestión escolar que permite administrar alumnos, consultar calificaciones y generar boletas. El sistema cuenta con autenticación de usuarios y un panel de administración.

## Estructura del Proyecto

```
src/
├── app/
│   ├── core/                        # Datos y modelos centrales
│   │   ├── data/
│   │   │   └── sidebar.data.ts
│   │   └── models/
│   │       └── sidebar.model.ts
│   │
│   ├── layouts/                     # Layouts de la aplicación
│   │   └── main-layout/
│   │       └── sidebar-layout/
│   │
│   ├── pages/                       # Páginas principales
│   │   ├── admin/
│   │   │   ├── alumnos-component/   # Gestión de alumnos
│   │   │   └── dashboard-component/ # Panel de administración
│   │   ├── auth/
│   │   │   └── login-component/     # Inicio de sesión
│   │   └── calificaciones-component/ # Consulta de calificaciones
│   │
│   └── shared/                      # Componentes reutilizables
│       └── components/
│           ├── modal-agregar-alumno/ # Modal para registrar alumnos
│           └── modal-boleta/        # Modal para generar boletas
│
├── index.html
├── main.ts
├── main.server.ts
├── server.ts
└── styles.css
```

## Módulos

| Módulo            | Descripción                                      |
|-------------------|--------------------------------------------------|
| **Login**         | Autenticación de usuarios                        |
| **Dashboard**     | Panel principal de administración                |
| **Alumnos**       | Registro y gestión de alumnos                    |
| **Calificaciones**| Consulta y gestión de calificaciones             |
| **Boleta**        | Generación de boletas de calificaciones          |

## Requisitos Previos

- [Node.js](https://nodejs.org/) (versión LTS recomendada)
- [Angular CLI](https://angular.dev/tools/cli) v21.1.0+

```bash
npm install -g @angular/cli
```

## Instalación

```bash
git clone https://github.com/JuandaMonkey/CESCOLAR_FRONTEND.git
```

```bash
cd CESCOLAR_FRONTEND
```

```bash
npm install
```

## Servidor de Desarrollo

```bash
ng serve
```

Abre tu navegador en `http://localhost:4200/`. La aplicación se recarga automáticamente al modificar archivos.
