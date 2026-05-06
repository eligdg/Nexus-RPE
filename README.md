# Nexus ERP Modular

Sistema ERP/CRM modular de alto rendimiento.

## Características

- **CRM**: Gestión de clientes y leads.
- **Inventario**: Control de stock y productos.
- **Facturación**: Gestión de documentos fiscales y estados de pago.
- **Proyectos**: Tablero Kanban para gestión de tareas.
- **Dashboard**: Analíticas en tiempo real con Recharts.
- **Seguridad**: Reglas de Firestore de nivel empresarial y Auth por roles.

## Tecnologías

- Frontend: React + TypeScript + Vite + Tailwind CSS.
- UI: Shadcn/UI + Radix UI + Motion.
- Backend: Firebase (Auth + Firestore).
- Gráficos: Recharts.

## Instalación

1. El sistema se autoconfigura al iniciar en el entorno AI Studio.
2. Utiliza el botón de login con Google para acceder.
3. El primer usuario se registra automáticamente como Administrador.

## Estructura

- `src/pages`: Módulos principales.
- `src/components`: UI y Layout.
- `src/lib`: Integraciones y contextos.
- `firestore.rules`: Definición de seguridad.
