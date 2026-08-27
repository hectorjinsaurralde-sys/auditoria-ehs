AUDITORÍA EHS - PWA

Archivos:
- index.html
- manifest.webmanifest
- sw.js
- icons/

Para usarla como app en cualquier celular:
1. Publicar esta carpeta en un hosting HTTPS (por ejemplo GitHub Pages, Netlify o similar).
2. Abrir la URL publicada desde Chrome/Edge/Safari.
3. Elegir "Instalar aplicación" / "Agregar a pantalla principal".
4. La app queda disponible como acceso directo y puede seguir abriendo offline luego de la primera carga.

Datos:
- Preguntas, sectores e historial se guardan localmente en cada dispositivo.
- Para pasar configuración/historial a otro celular usar "Respaldo" > Exportar e Importar.
- Esta versión no sincroniza automáticamente entre varios celulares. Para sincronización multiusuario hace falta una base de datos/backend.


MEJORAS V2:
- Editor avanzado de preguntas por sector.
- Cada pregunta puede tener categoría, criterio/ayuda, peso de 1 a 5 y marca de crítica.
- Puntaje ponderado según el peso de cada pregunta.
- Desde Historial: "Descargar informe" genera un archivo HTML autocontenido con resultados y fotos.
- "Guardar PDF" abre el informe listo para imprimir; en Android elegir "Guardar como PDF".


MEJORAS V3:
- Valor Bueno / Regular / Malo con límites editables.
- Cada No cumple genera un desvío abierto.
- Pantalla Desvíos con acción, responsable, fecha y estado.
- La siguiente auditoría del mismo sector muestra los desvíos anteriores para verificar si fueron corregidos o siguen abiertos.
- Reincidencias incrementan la cantidad de veces detectado.
- Respaldo incluye desvíos.

MEJORAS V4:
- Las fotos grandes ya no se rechazan por tamaño.
- La app las redimensiona y comprime automáticamente antes de guardarlas.
- Objetivo aproximado: 1024 px de lado máximo y 120-150 KB por foto, ajustando calidad/tamaño según necesidad.
- Muestra el tamaño y resolución optimizados junto a la vista previa.


MEJORAS V5:
- Informe descargable con diseño más visual y colores vivos.
- Portada con cabecera moderna y tarjetas KPI.
- Puntuación destacada con sistema de tarjeta ROJA / AMARILLA / VERDE.
- Resumen visual de Cumple / No cumple / N/A.
- Tabla más didáctica con etiquetas de color por resultado.


MEJORAS V6:
- Checklist cargado por área: Producción, Talleres de Mantenimiento, Logística / Expedición y Áreas Exteriores.
- Preguntas organizadas por categorías para informes más claros.
- Producción queda con 20 preguntas y SIN la pregunta de uso de EPP solicitada para eliminar.
- Migración automática del catálogo anterior a este nuevo conjunto de sectores.


MEJORAS V7:
- Campo Persona que acompaña la auditoría.
- Campo Cantidad de personas en el turno dentro de Personal / EPP.
- Ambos datos se guardan en el historial y aparecen en el informe descargable/PDF.


MEJORAS V8:
- Se reemplaza la tarjeta roja/amarilla/verde por un resultado visual con círculo de color y cara feliz, neutra o triste.
- Nuevo módulo Gráficos con evolución mensual del puntaje y comparación mensual por sector auditado.
- Descarga de gráficos en PNG para presentar avances.


VERSIÓN GITHUB RAÍZ:
Subir los 6 archivos directamente al repositorio. Los iconos van sueltos, sin carpeta icons.


MEJORAS V9 - SINCRONIZACION SUPABASE:
- Inicio de sesión con email y contraseña.
- Auditorías y desvíos sincronizados entre dispositivos.
- Configuración de sectores y preguntas compartida online.
- Sincronización automática luego de guardar cambios y botón manual.
- Modo local disponible si no hay conexión.
- Fotos comprimidas viajan dentro del registro sincronizado.


MEJORAS V10:
- Tablero de gestión mensual.
- KPIs de auditorías, promedio, abiertos, cerrados y reincidencias.
- Ranking por sector y comparación contra mes anterior.
- Gráficos de abiertos/cerrados y resultado por categoría.
