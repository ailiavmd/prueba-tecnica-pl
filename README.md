## Para correr la aplicación

Despues de instalar las dependencias, inicia el servidor de desarrollo con:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Luego visita el link [http://localhost:3000](http://localhost:3000).

## Carpetas

```
├── app
├── components
│   ├── icons
│   ├── layout
│   │   ├── Header
│   │   ├── Navigation
│   ├── sections
│   │   ├── Banner
│   │   ├── Cart
│   │   ├── Categories
│   │   ├── Orders
├── dummy-data
├── public
├── util
```
- **app:** Aqui se encuentran las paginas que seran visibles en la app.
- **components:** En esta carpeta estoy guardando los componentes que utilizo.
    - **icons:** SVGs de los íconos.
    - **layout:** Componentes que se necesitan para el layout. Por lo general se incluyen una sola vez en la aplicación.
    - **sections:** Estos son componentes separados segun las secciones del Home.
- **dummy-data:** Contenido para simular data dinámica.
- **public:** Aquí estoy guardando las imágenes.
- **util:** Aquí se guardan las funciones de reusables de utilidad.
