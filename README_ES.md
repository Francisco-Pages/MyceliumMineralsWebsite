# Mycelium Minerals — Sitio Web Corporativo

> Sitio web corporativo dirigido a inversores para Mycelium Minerals, un productor de oro y plata listado en la TSX que opera en Bolivia.

---

## Tabla de Contenidos

1. [Documento de Requisitos del Producto (DRP)](#1-documento-de-requisitos-del-producto)
2. [Especificaciones de Arquitectura](#2-especificaciones-de-arquitectura)
3. [Documento de Diseño](#3-documento-de-diseño)
4. [Historias de Usuario](#4-historias-de-usuario)

---

---

# 1. Documento de Requisitos del Producto

## 1.1 Resumen

Mycelium Minerals requiere un sitio web corporativo público que sirva como la presencia digital principal de la empresa. El sitio comunicará la tesis de inversión de la empresa, mostrará su cartera de proyectos de producción de oro y plata en Bolivia, presentará al equipo directivo y proporcionará a los inversores institucionales y minoristas toda la información necesaria para evaluar y relacionarse con la empresa. El sitio funciona como una "tarjeta de presentación digital plus" de alta credibilidad — una combinación de folleto corporativo, sala de datos para inversores y expresión de marca.

## 1.2 Objetivos de Negocio

| Objetivo | Descripción |
|----------|-------------|
| Confianza del Inversor | Establecer credibilidad con inversores institucionales y minoristas mediante datos financieros y operativos transparentes, actuales y bien organizados |
| Generación de Prospectos | Convertir visitantes del sitio en inversores registrados y suscriptores del boletín informativo |
| Cumplimiento Regulatorio | Proporcionar todas las divulgaciones, presentaciones y enlaces requeridos para una empresa listada en la TSX |
| Expresión de Marca | Comunicar la identidad de Mycelium: audaz, moderna, honesta y ambientalmente responsable |
| Transparencia Operativa | Presentar proyectos activos, datos de producción y compromisos ESG con claridad |

## 1.3 Métricas de Éxito

- Tasa de conversión de suscriptores al boletín ≥ 3% de visitantes únicos
- Tasa de descarga de presentación corporativa ≥ 5% de visitantes a la página de Relaciones con Inversores
- Tasa de rebote < 50% (referencia de la industria para sitios de RI mineros)
- Core Web Vitals: LCP < 2.5s, CLS < 0.1, FID < 100ms
- Cumplimiento de accesibilidad WCAG 2.1 AA
- Paridad total de contenido en todos los idiomas compatibles (EN / ES / FR)

## 1.4 Perfiles de Usuario

### Perfil 1 — Inversor Institucional (Principal)
- **Descripción:** Gestor de cartera o analista en un fondo con exposición al sector minero
- **Objetivos:** Evaluar rápidamente la tesis de inversión, revisar informes técnicos, verificar la estructura de capital y cobertura de analistas, descargar la presentación corporativa
- **Comportamiento:** Busca primero las métricas clave (producción, reservas, capitalización de mercado); profundiza en las presentaciones si hay interés
- **Necesidades:** Acceso rápido a datos financieros, informes técnicos NI 43-101, enlaces a SEDAR/EDGAR, contacto de RI

### Perfil 2 — Inversor Minorista (Principal)
- **Descripción:** Inversor individual que sigue a mineras junior/medianas listadas en la TSX
- **Objetivos:** Entender qué hace Mycelium, ver los proyectos, seguir el precio de la acción, suscribirse a noticias
- **Comportamiento:** Ingresa a través de un artículo de noticias o redes sociales; lee Acerca de y Proyectos; verifica el precio de la acción
- **Necesidades:** Widget del ticker bursátil, descripciones claras de proyectos, archivo de noticias, alertas por correo electrónico

### Perfil 3 — Periodista Financiero / Analista
- **Descripción:** Reportero del sector minero o analista del lado vendedor que escribe cobertura
- **Objetivos:** Acceder a comunicados de prensa, contactos ejecutivos y documentos financieros rápidamente
- **Necesidades:** Archivo de noticias con búsqueda, contacto de RI nombrado, kit de prensa descargable

### Perfil 4 — Buscador de Empleo
- **Descripción:** Profesional minero (geólogo, ingeniero, operaciones) o recién graduado
- **Objetivos:** Entender la cultura de la empresa y los puestos disponibles
- **Necesidades:** Página de Carreras con posiciones abiertas y un proceso de solicitud claro

### Perfil 5 — Inversor ESG / de Impacto
- **Descripción:** Inversor o fondo con mandato ambiental/social
- **Objetivos:** Evaluar los compromisos ambientales de Mycelium, las relaciones comunitarias y las prácticas de sostenibilidad
- **Necesidades:** Sección de ESG, detalles de la asociación de plantación de árboles, contenido de participación comunitaria

---

## 1.5 Requisitos Funcionales

### 1.5.1 Global / Para Todo el Sitio

| ID | Requisito | Prioridad |
|----|-----------|-----------|
| G-01 | Soporte multilingüe: inglés (predeterminado), español y francés | P0 |
| G-02 | Selector de idioma accesible desde la navegación global en todas las páginas | P0 |
| G-03 | Widget del ticker bursátil TSX en vivo visible en el encabezado o barra de navegación del sitio | P0 |
| G-04 | Suscripción por correo electrónico a boletines / alertas de inversores — accesible desde encabezado y pie de página | P0 |
| G-05 | Contacto de RI nombrado (nombre, teléfono, correo electrónico) en el pie de página y sección de RI | P0 |
| G-06 | Banner / modal de aviso legal para declaraciones prospectivas | P0 |
| G-07 | Banner de consentimiento de cookies (cumple con GDPR/PIPEDA) | P0 |
| G-08 | Totalmente responsivo — móvil, tableta, escritorio | P0 |
| G-09 | SEO: metadatos estructurados, etiquetas Open Graph, mapa del sitio, robots.txt | P1 |
| G-10 | Enlaces para compartir en redes sociales en el pie de página (LinkedIn, X/Twitter) | P1 |

### 1.5.2 Página de Inicio

| ID | Requisito | Prioridad |
|----|-----------|-----------|
| H-01 | Sección hero a ancho completo con titular, subtitular y CTA principal (Descargar Presentación Corporativa) | P0 |
| H-02 | Resumen de la empresa: métricas clave de producción (oz/año), número de proyectos, listado en bolsa | P0 |
| H-03 | Sección de vista previa de Proyectos Destacados (tarjetas con enlaces a páginas individuales de proyectos) | P0 |
| H-04 | Feed de Últimas Noticias (3–5 comunicados de prensa más recientes) | P0 |
| H-05 | Destacado ESG / aviso de asociación de plantación de árboles | P1 |
| H-06 | Sección de suscripción por correo electrónico | P0 |

### 1.5.3 Proyectos

| ID | Requisito | Prioridad |
|----|-----------|-----------|
| PR-01 | Página índice de proyectos que lista los 4–5 proyectos con nombre, ubicación, etapa y materia prima | P0 |
| PR-02 | Página individual por proyecto | P0 |
| PR-03 | Cada página de proyecto incluye: resumen, mapa de ubicación, descripción geológica, estimaciones de recursos/reservas, resultados de perforación, datos de producción, fotos y documentos técnicos descargables | P0 |
| PR-04 | Mapa interactivo opcional de Bolivia con todas las ubicaciones de proyectos con marcadores clicables | P1 |
| PR-05 | Indicador de etapa del proyecto (Exploración / Desarrollo / Producción) | P0 |
| PR-06 | Sección de descarga de documentos por proyecto (informes NI 43-101, resultados de perforación, estudios de factibilidad) | P0 |
| PR-07 | Galería de fotos por proyecto | P1 |
| PR-08 | Gráficos/diagramas (estimaciones de recursos, perfiles de ley, cronogramas de producción) embebidos por proyecto | P1 |

### 1.5.4 Relaciones con Inversores

| ID | Requisito | Prioridad |
|----|-----------|-----------|
| IR-01 | Presentación Corporativa — PDF descargable (más reciente), con fecha de versión | P0 |
| IR-02 | Tabla de estructura de capital: acciones en circulación, opciones, warrants, total totalmente diluido | P0 |
| IR-03 | Información bursátil: ticker de TSX, widget de precio actual, volumen de negociación, rango de 52 semanas | P0 |
| IR-04 | Archivo de Informes Financieros: estados financieros trimestrales y anuales y MD&A | P0 |
| IR-05 | Enlaces a presentaciones en SEDAR+ y EDGAR | P0 |
| IR-06 | Lista de cobertura de analistas (nombres de firmas, analistas) | P1 |
| IR-07 | Calendario de eventos: conferencias, fechas de resultados, AGM | P1 |
| IR-08 | Suscripción a alertas por correo electrónico | P0 |
| IR-09 | Contacto de RI nombrado (nombre, cargo, teléfono, correo electrónico) | P0 |
| IR-10 | Documentos de gobernanza corporativa (estatutos, mandatos de comité) | P1 |
| IR-11 | Materiales de AGM (circular, proxy, resultados) | P1 |

### 1.5.5 Acerca de / Liderazgo

| ID | Requisito | Prioridad |
|----|-----------|-----------|
| A-01 | Sección de historia / misión de la empresa | P0 |
| A-02 | Equipo ejecutivo: 7–8 perfiles con foto, nombre, cargo y biografía | P0 |
| A-03 | Directorio: sección/página separada con foto, nombre y biografía | P0 |
| A-04 | Estructura corporativa y cronología histórica (opcional) | P2 |

### 1.5.6 Sostenibilidad / ESG

| ID | Requisito | Prioridad |
|----|-----------|-----------|
| E-01 | Resumen ESG: pilares ambiental, social y de gobernanza | P0 |
| E-02 | Asociación de plantación de árboles en Bolivia: aviso destacado con nombre del socio, contador de árboles plantados o meta, descripción | P0 |
| E-03 | Contenido de participación comunitaria (empleo local, programas comunitarios) | P1 |
| E-04 | Prácticas ambientales (gestión del agua, relaves, rehabilitación) | P1 |
| E-05 | Descarga de informe ESG (si está disponible) | P1 |
| E-06 | Certificaciones o premios | P2 |

### 1.5.7 Noticias y Medios

| ID | Requisito | Prioridad |
|----|-----------|-----------|
| N-01 | Archivo de comunicados de prensa con fecha, titular y cuerpo | P0 |
| N-02 | Filtrar/buscar por año y categoría | P1 |
| N-03 | Páginas de detalle individuales para comunicados de prensa (URL compartible, imprimible) | P0 |
| N-04 | Información de contacto de medios | P0 |
| N-05 | Descarga del kit de prensa (logos, texto boilerplate, fotos de ejecutivos) | P2 |

### 1.5.8 Carreras

| ID | Requisito | Prioridad |
|----|-----------|-----------|
| C-01 | Página de resumen de carreras que describe la cultura y el trabajo en Bolivia | P0 |
| C-02 | Listados de empleo con título, ubicación, tipo (tiempo completo/contrato) y descripción | P0 |
| C-03 | Formulario de solicitud o enlace al correo electrónico de solicitud | P0 |
| C-04 | Publicaciones de empleo gestionadas por CMS (agregar/eliminar sin desarrollador) | P0 |

### 1.5.9 Contacto

| ID | Requisito | Prioridad |
|----|-----------|-----------|
| CO-01 | Formulario de contacto (nombre, correo electrónico, asunto, mensaje) | P0 |
| CO-02 | Dirección(es) de oficina | P0 |
| CO-03 | Contacto de RI y contacto general separados | P0 |

---

## 1.6 Requisitos No Funcionales

| Categoría | Requisito |
|-----------|-----------|
| Rendimiento | LCP < 2.5s en móvil 4G; imágenes servidas vía CDN con formatos de nueva generación (WebP/AVIF) |
| Accesibilidad | WCAG 2.1 AA — navegación por teclado, soporte de lectores de pantalla, contraste de color suficiente |
| Seguridad | HTTPS obligatorio; sin datos sensibles almacenados en el lado del cliente; envíos de formularios vía rutas API del lado del servidor |
| SEO | Generación estática para todas las páginas públicas; datos estructurados (Organización, ListaDeMigas); URLs canónicas |
| Disponibilidad | Objetivo de disponibilidad del 99.9%; infraestructura AWS con conmutación automática por error |
| Analítica | Integración con Google Analytics 4; seguimiento de eventos en descargas y clics en CTA |
| Legal | Aviso de declaraciones prospectivas; cumplimiento de divulgación regulatoria de TSX |
| Compatibilidad de Navegadores | Últimas 2 versiones de Chrome, Firefox, Safari, Edge; IE no compatible |

## 1.7 Fuera de Alcance (v1)

- Portal de cuenta para accionistas o inicio de sesión personalizado
- Transmisión en tiempo real de resultados de perforación
- Comercio electrónico o pagos por suscripción
- Aplicación móvil
- Chat en vivo / asistente de IA
- Ingesta automatizada de datos financieros (datos bursátiles obtenidos vía API, sin informes automatizados)

---

---

# 2. Especificaciones de Arquitectura

## 2.1 Pila Tecnológica

| Capa | Tecnología | Justificación |
|------|-----------|---------------|
| Framework | Next.js 14+ (App Router) | SSR + SSG híbrido; amigable con SEO; gran ecosistema; excelente soporte de TypeScript |
| Lenguaje | TypeScript | Seguridad de tipos; mantenibilidad |
| Estilos | Tailwind CSS | Utilidad primero; tokens de diseño consistentes; paquete de producción pequeño |
| CMS | Sanity.io | CMS headless con actualizaciones de contenido en tiempo real; interfaz de Studio no técnica; integración nativa con Next.js; soporte multilingüe vía plugins |
| i18n | next-intl | Compatible con Next.js App Router; traducciones basadas en mensajes; enrutamiento por localidad |
| Mapas | Mapbox GL JS | Mapa interactivo de proyectos en Bolivia; renderizado fluido; estilos personalizados para coincidir con la marca |
| Ticker Bursátil | Widget de TMX Money o API de Financial Modeling Prep | Datos bursátiles de acciones listadas en TSX |
| Formularios | React Hook Form + Zod | Validación del lado del cliente; manejo por rutas API del lado del servidor |
| Correo Electrónico | AWS SES | Suscripción al boletín; envíos del formulario de contacto |
| Analítica | Google Analytics 4 + Vercel Analytics (opcional) | Vistas de página, seguimiento de CTA, eventos de descarga |
| Alojamiento | AWS Amplify | Alojamiento gestionado de Next.js; CI/CD desde Git; soporte SSR; escala automáticamente |
| CDN | AWS CloudFront (integrado en Amplify) | Entrega de contenido global; caché en el borde |
| Almacenamiento | AWS S3 | Documentos PDF, activos de medios, descargas grandes |
| DNS | AWS Route 53 | Gestión de dominio |

## 2.2 Arquitectura del Sistema

```
┌─────────────────────────────────────────────────────────┐
│                       USUARIO                           │
│              (Navegador — EN / ES / FR)                 │
└────────────────────────┬────────────────────────────────┘
                         │ HTTPS
                         ▼
┌─────────────────────────────────────────────────────────┐
│                  CDN AWS CloudFront                     │
│         (Caché en borde, terminación SSL)               │
└────────────────────────┬────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────┐
│                  AWS Amplify                            │
│           Aplicación Next.js (App Router)               │
│                                                         │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │ Páginas      │  │ Páginas SSR  │  │ Rutas de API │  │
│  │ Estáticas    │  │ (Noticias,   │  │ (Formulario  │  │
│  │ (Inicio,     │  │  Proyectos   │  │  de contacto,│  │
│  │  Proyectos,  │  │  dinámicos)  │  │  Suscrip.)   │  │
│  │  Acerca, RI) │  │              │  │              │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
└────────┬───────────────────┬──────────────┬────────────┘
         │                   │              │
         ▼                   ▼              ▼
┌─────────────┐   ┌──────────────────┐  ┌──────────────┐
│  Sanity.io  │   │  Bucket AWS S3   │  │   AWS SES    │
│  (CMS/      │   │  (PDFs, Imágenes,│  │  (Correos,   │
│  Contenido) │   │   Medios)        │  │   Alertas)   │
└─────────────┘   └──────────────────┘  └──────────────┘
         │
         ▼
┌─────────────────────────────────────────────────────────┐
│           Sanity Studio (Interfaz de edición CMS)       │
│    Editores no técnicos gestionan todo el contenido     │
│  (Proyectos, Noticias, Equipo, Carreras, Docs RI, ESG)  │
└─────────────────────────────────────────────────────────┘
```

## 2.3 Estrategia de Entrega de Contenido

| Tipo de Contenido | Estrategia | Justificación |
|------------------|----------|---------------|
| Página de Inicio | ISR (Regeneración Estática Incremental, revalidación de 60s) | Carga rápida; el contenido se mantiene actualizado |
| Páginas de proyecto | ISR (revalidación de 5 min) | Los proyectos cambian con poca frecuencia |
| Noticias / Comunicados de Prensa | ISR (revalidación de 60s) | Casi en tiempo real sin la sobrecarga completa de SSR |
| Documentos de RI | Estático (revalidación bajo demanda vía webhook de Sanity) | Cambia solo al publicar |
| Carreras | ISR (revalidación de 5 min) | Empleos agregados/eliminados vía webhook de CMS |
| Contacto / Formularios | SSR (rutas API) | Validación del lado del servidor y entrega de correo electrónico |

## 2.4 Arquitectura de Internacionalización (i18n)

- **Localidades compatibles:** `en` (inglés, predeterminado), `es` (español), `fr` (francés)
- **Enrutamiento:** `/projects` (EN), `/es/proyectos` (ES), `/fr/projets` (FR)
- **Implementación:** `next-intl` con enrutamiento con prefijo de localidad vía middleware de Next.js App Router
- **Traducciones:** Cadenas de UI almacenadas en `/messages/en.json`, `es.json`, `fr.json`
- **Contenido CMS:** Los documentos de Sanity tienen campos localizados para todo el contenido de texto usando el plugin `@sanity/language-filter`
- **Selector de idioma:** Conserva la ruta de la página actual al cambiar de localidad; regresa a la página de inicio si la traducción no está disponible
- **SEO:** Etiquetas alternas `hreflang` en todas las páginas para todas las localidades

## 2.5 Modelo de Datos CMS (Esquemas de Sanity)

```
Tipos de Contenido:
├── project              (nombre, slug, etapa, ubicación, descripción, recursos, documentos, fotos)
├── teamMember           (nombre, cargo, bio, foto, tipo: ejecutivo|directivo)
├── pressRelease         (título, fecha, cuerpo, categoría, adjunto PDF)
├── irDocument           (título, tipo, fecha, archivo, idioma)
├── jobListing           (título, ubicación, tipo, descripción, correoSolicitud, activo)
├── esgInitiative        (título, descripción, pilar: A|S|G, métricas, nombreSocio)
├── siteSettings         (nombre empresa, contacto RI, enlaces sociales, símbolo ticker)
└── pageContent          (hero página inicio, historia acerca — bloques de contenido flexible)

Todos los esquemas incluyen campos localizados para EN / ES / FR.
```

## 2.6 Infraestructura AWS

```
Servicios AWS:
├── Amplify             — Alojamiento Next.js + CI/CD (auto-despliegue en push a Git)
├── CloudFront          — CDN (integrado en Amplify; SSL de dominio personalizado)
├── S3                  — Almacenamiento de medios y documentos (bucket privado, URLs firmadas para PDFs)
├── SES                 — Correo electrónico transaccional (formulario de contacto, suscripciones al boletín)
├── Route 53            — Gestión de DNS
└── IAM                 — Acceso basado en roles para Amplify, SES, S3

Entornos:
├── Producción          — myceliumminerals.com (rama main)
├── Staging             — staging.myceliumminerals.com (rama staging)
└── Vista Previa        — Generada automáticamente por pull request (vistas previas de Amplify)
```

## 2.7 Integraciones de Terceros

| Integración | Propósito | Implementación |
|-------------|---------|----------------|
| TMX Money / API FMP | Precio de acción TSX en vivo | Componente React del lado del cliente que obtiene datos bursátiles al cargar la página |
| Mapbox GL JS | Mapa interactivo de proyectos en Bolivia | Componente de mapa del lado del cliente; carga diferida |
| Google Analytics 4 | Analítica de página y seguimiento de eventos | Vía `@next/third-parties/google` |
| Webhooks de Sanity | Activar revalidación ISR al publicar en CMS | POST al endpoint `/api/revalidate` de Next.js |
| Formspree o AWS SES | Entrega del formulario de contacto | Ruta API + transporte SES |

## 2.8 Seguridad

- Todas las variables de entorno solo del lado del servidor (nunca expuestas al cliente)
- Token de API de Sanity con acceso de solo lectura para el sitio público; acceso de escritura solo desde Sanity Studio
- PDFs de S3 servidos vía URLs firmadas con corta expiración (evita hotlinking directo)
- Formulario de contacto: limitación de velocidad (5 envíos/IP/hora) vía middleware
- Encabezados CSP configurados en `next.config.js`
- Sin PII almacenada en la aplicación — las suscripciones de correo electrónico son manejadas por el servicio de listas SES/terceros

---

---

# 3. Documento de Diseño

## 3.1 Filosofía de Diseño

**Audaz. Moderno. Honesto.**

El lenguaje visual de Mycelium es confiado y directo — como la empresa misma. El diseño se inspira en la estética de Pinecone.io: fondos blancos limpios con nítidos contornos lineales negros, formas geométricas agudas y colores de acento de alto contraste que destacan en el espacio en blanco. Esta es una ruptura deliberada con las plantillas corporativas de fondo azul marino típicas de las empresas mineras — Mycelium se destaca como transparente, contemporánea y sin miedo.

El pilar de "honesto" significa sin el lustre de fotografías de stock. Fotos reales de proyectos, personas reales, datos reales — presentados con claridad en lugar de barniz de marketing.

## 3.2 Sistema de Color

### Paleta Principal

| Nombre | Hex | Uso |
|--------|-----|-----|
| **Blanco** | `#FFFFFF` | Fondo principal — limpio, abierto, honesto |
| **Obsidiana** | `#0A0A0A` | Texto principal, contornos, bordes, iconos |
| **Blanco roto** | `#F5F4F0` | Fondos de sección, tarjetas — calidez sutil |

### Colores de Acento (Agudos, Contrastantes)

| Nombre | Hex | Uso |
|--------|-----|-----|
| **Oro Mineral** | `#D4A853` | Botones CTA principales, destacados, métricas clave — vínculo con el commodity oro |
| **Verde Boliviano** | `#2D6A4F` | Sección ESG, sostenibilidad, indicadores positivos |
| **Cobre** | `#B55A2B` | Acento secundario; estados hover; marcadores de proyectos en el mapa |
| **Rojo de Alerta** | `#C0392B` | Solo errores y advertencias |

### Reglas de Uso

- Los fondos son siempre Blanco o Blanco roto — sin fondos oscuros excepto superposiciones de hero
- El texto es siempre Obsidiana sobre fondos claros — nunca gris sobre gris
- Los acentos se usan con moderación — un color de acento por sección como máximo
- Los contornos negros (1–2px) se usan en tarjetas, botones y elementos gráficos para crear la sensación lineal y editorial

## 3.3 Tipografía

### Tipografías

| Rol | Fuente | Peso | Notas |
|-----|--------|------|-------|
| Display / Hero | **Clash Display** | 600–700 | Audaz, geométrico — hace una declaración; gratis vía Fontshare |
| Encabezados (H2–H4) | **Inter** | 600–700 | Limpio, moderno, muy legible |
| Cuerpo | **Inter** | 400–500 | Sistema consistente con los encabezados |
| Mono / Datos | **JetBrains Mono** | 400 | Cifras financieras, precios de acciones, datos técnicos |
| Etiquetas / Caps | **Inter** | 700, mayúsculas, espaciado | Etiquetas de sección, navegación, tags |

### Escala Tipográfica (rem, base 16px)

| Nombre | Tamaño | Uso |
|--------|--------|-----|
| Display | 4.5rem (72px) | Titulares del hero |
| H1 | 3rem (48px) | Títulos de página |
| H2 | 2rem (32px) | Títulos de sección |
| H3 | 1.5rem (24px) | Sub-secciones, títulos de tarjetas |
| H4 | 1.25rem (20px) | Etiquetas dentro de tarjetas |
| Cuerpo | 1rem (16px) | Texto de párrafo |
| Pequeño | 0.875rem (14px) | Pies de foto, metadatos |
| Mono | 1rem (16px) | Datos financieros |

## 3.4 Espaciado y Cuadrícula

- **Unidad base:** 4px
- **Cuadrícula:** 12 columnas, ancho máximo 1280px, canales de 24px (escritorio), 16px (móvil)
- **Relleno de sección:** 80px arriba/abajo (escritorio), 48px (móvil)
- **Radio de borde de tarjeta:** 0px — las esquinas agudas refuerzan la estética lineal
- **Estilo de borde:** 1.5px solid `#0A0A0A` — usado en tarjetas, botones, divisores

## 3.5 Biblioteca de Componentes

### Botones

```
Primario:
  background: #D4A853 (Oro Mineral)
  border: 1.5px solid #0A0A0A
  color: #0A0A0A
  border-radius: 0
  padding: 14px 28px
  font: Inter 700 mayúsculas, espaciado
  hover: fondo cambia a #0A0A0A, color a #FFFFFF

Secundario (Contorno):
  background: transparente
  border: 1.5px solid #0A0A0A
  color: #0A0A0A
  border-radius: 0
  hover: background #0A0A0A, color #FFFFFF

Fantasma:
  Sin borde, sin fondo
  color: #0A0A0A
  subrayado al hover
  Usado en: enlaces de texto en línea, elementos de nav
```

### Tarjetas

```
Tarjeta de Proyecto:
  background: #FFFFFF
  border: 1.5px solid #0A0A0A
  border-radius: 0
  Sombra: ninguna (el contorno reemplaza la sombra)
  Contiene: foto del proyecto, nombre del proyecto (H3), insignia de commodity, insignia de etapa, descripción breve, enlace "Ver Proyecto →"

Tarjeta de Miembro del Equipo:
  Foto cuadrada (proporción 1:1, object-fit: cover)
  Debajo: Nombre (H3), Cargo (small caps), Bio expandible

Tarjeta de Noticias:
  Fecha (mono, pequeño, dorado), Titular (H3), Extracto (cuerpo), "Leer más →"
  Borde izquierdo: 3px solid #D4A853
```

### Insignias / Etiquetas

```
Insignia de etapa (en tarjetas de proyecto):
  background: Blanco roto
  border: 1.5px solid #0A0A0A
  font: Inter 700 mayúsculas, 11px, espaciado
  Sin border-radius

Insignia de commodity:
  background: #D4A853
  color: #0A0A0A
  Mismo estilo que la insignia de etapa
```

### Navegación

```
Encabezado (fijo):
  background: #FFFFFF con border-bottom: 1.5px solid #0A0A0A
  Logo: alineado a la izquierda
  Enlances de nav: centro o derecha — Inter 600 mayúsculas small-caps, espaciado
  Ticker bursátil: lado derecho — fuente mono, color dorado
  Selector de idioma: EN | ES | FR — pequeño, más a la derecha
  Botón CTA: "Relaciones con Inversores" — estilo de botón Primario

Móvil:
  Hamburguesa → menú de superposición a pantalla completa, fondo negro, texto blanco
```

### Widget del Ticker Bursátil

```
Formato: [TICKER] TSX  [PRECIO]  [▲/▼ CAMBIO]  [% CAMBIO]
Fuente: JetBrains Mono
Color: Precio en Oro Mineral; cambio positivo en Verde Boliviano; negativo en Rojo de Alerta
Actualizaciones: al cargar la página + cada 60 segundos
```

## 3.6 Diseños de Página

### Página de Inicio

```
┌────────────────────────────────────────────────┐
│  ENCABEZADO (fijo) — Logo | Nav | Ticker | Lang │
├────────────────────────────────────────────────┤
│                                                │
│  HERO                                          │
│  Ancho completo, 90vh                          │
│  Fondo: Fotografía real del proyecto con       │
│  superposición oscura sutil (40%)              │
│  Titular: "Oro y Plata. Bolivia."              │
│  Sub: Propuesta de valor de la empresa         │
│  CTAs: [Descargar Presentación] [Nuestros Proyectos] │
│                                                │
├────────────────────────────────────────────────┤
│  RESUMEN EMPRESA — 3 estadísticas clave        │
│  [X oz Au producidas] [4 Proyectos] [TSX: MYC] │
│  Fondo blanco, números mono grandes            │
│  Cuadrícula delineada de 3 columnas            │
├────────────────────────────────────────────────┤
│  PROYECTOS DESTACADOS — cuadrícula de 3 col.   │
│  Cada uno: foto, nombre, ubicación, insignia etapa │
│  [Ver Todos los Proyectos →]                   │
├────────────────────────────────────────────────┤
│  TESIS DE INVERSIÓN — 2 columnas               │
│  Izquierda: Titular audaz + 3-4 puntos clave   │
│  Derecha: Destacado de métrica financiera clave│
├────────────────────────────────────────────────┤
│  ÚLTIMAS NOTICIAS — tarjetas de noticias 3 col.│
│  [Ver Todas las Noticias →]                    │
├────────────────────────────────────────────────┤
│  AVISO ESG — ancho completo, fondo blanco roto │
│  Destacado de asociación de plantación árboles │
│  Sección con color acento verde                │
├────────────────────────────────────────────────┤
│  SUSCRIPCIÓN EMAIL — centrado, ancho completo  │
│  Titular + campo email + botón suscribirse     │
├────────────────────────────────────────────────┤
│  PIE DE PÁGINA                                 │
│  Logo | Enlances nav | Contacto RI | Social    │
│  Aviso legal | Enlace SEDAR | Copyright        │
└────────────────────────────────────────────────┘
```

### Página de Detalle del Proyecto

```
┌────────────────────────────────────────────────┐
│  ENCABEZADO                                    │
├────────────────────────────────────────────────┤
│  RUTA: Inicio > Proyectos > [Nombre Proyecto]  │
├────────────────────────────────────────────────┤
│  HERO DEL PROYECTO                             │
│  Foto a ancho completo; superposición del nombre│
│  Insignia de etapa + Insignias de commodity    │
├────────────────────────────────────────────────┤
│  DISEÑO DE 2 COLUMNAS                          │
│  Izq. (2/3): Resumen, geología, descripción    │
│  Der. (1/3): Tarjeta de datos clave (caja delineada) │
│    - Ubicación, área, commodity, etapa         │
│    - Cifras de producción                      │
├────────────────────────────────────────────────┤
│  TABLA DE RECURSOS / RESERVAS                  │
│  Ancho completo, tabla limpia con bordes negros│
├────────────────────────────────────────────────┤
│  MAPA DE UBICACIÓN                             │
│  Mapa Mapbox embebido; límite del proyecto     │
├────────────────────────────────────────────────┤
│  RESULTADOS DE PERFORACIÓN / GRÁFICOS          │
│  Gráficos embebidos (Chart.js / Recharts)      │
├────────────────────────────────────────────────┤
│  GALERÍA DE FOTOS (cuadrícula)                 │
├────────────────────────────────────────────────┤
│  DOCUMENTOS (tarjetas de descarga)             │
│  NI 43-101, estudio de factibilidad, resultados│
├────────────────────────────────────────────────┤
│  PIE DE PÁGINA                                 │
└────────────────────────────────────────────────┘
```

### Página de Relaciones con Inversores

```
┌────────────────────────────────────────────────┐
│  ENCABEZADO                                    │
├────────────────────────────────────────────────┤
│  ENCABEZADO DE PÁGINA: "Relaciones con Inversores" │
│  Subtítulo + CTA de contacto RI               │
├────────────────────────────────────────────────┤
│  RESUMEN BURSÁTIL — ancho completo             │
│  Precio grande, gráfico, detalles de bolsa     │
├────────────────────────────────────────────────┤
│  2 COL.: Estructura de Capital | Puntos Clave  │
├────────────────────────────────────────────────┤
│  PRESENTACIÓN CORPORATIVA — CTA ancho completo │
│  Botón [Descargar Última Presentación (PDF)]   │
├────────────────────────────────────────────────┤
│  INFORMES FINANCIEROS — Con pestañas (por año) │
│  T1 / T2 / T3 / Anual — descargas FS + MD&A   │
├────────────────────────────────────────────────┤
│  PRESENTACIONES REGULATORIAS                   │
│  Enlace SEDAR+, enlace EDGAR, materiales AGM   │
├────────────────────────────────────────────────┤
│  COBERTURA DE ANALISTAS + CALENDARIO DE EVENTOS│
│  Lado a lado                                   │
├────────────────────────────────────────────────┤
│  CONTACTO RI — Tarjeta de contacto nombrado    │
│  Suscripción por correo electrónico            │
├────────────────────────────────────────────────┤
│  PIE DE PÁGINA                                 │
└────────────────────────────────────────────────┘
```

## 3.7 Especificación del Mapa Interactivo

- **Biblioteca:** Mapbox GL JS
- **Estilo del mapa:** Mapbox Outdoors o estilo personalizado que coincida con la paleta de marca (blanco/claro con marcadores dorados/negros)
- **Contenido:** Mapa general de Bolivia mostrando las 4–5 ubicaciones de proyectos
- **Marcadores:** Marcadores SVG personalizados en Oro Mineral con contorno negro; al hover muestra tooltip con el nombre del proyecto
- **Comportamiento al hacer clic:** Abre una tarjeta de resumen del proyecto con enlace a la página de detalle del proyecto
- **Móvil:** Pellizcar para hacer zoom; respaldo a imagen estática si JavaScript está deshabilitado
- **Fuente de datos:** Coordenadas del proyecto almacenadas en CMS de Sanity

## 3.8 Movimiento e Interacción

- **Revelaciones al desplazar:** Las secciones aparecen y se deslizan hacia arriba al desplazarse (sutil — 300ms, sin efectos bruscos)
- **Transiciones al hover:** 150ms ease — botones, tarjetas, elementos de nav
- **Sin parallax:** Evita la sensación anticuada de "empresa minera"
- **Transiciones de página:** Instantáneas (predeterminado del app router de Next.js) — la velocidad indica rendimiento
- **Reducir movimiento:** Todas las animaciones respetan la consulta de medios `prefers-reduced-motion`

## 3.9 Pautas de Imágenes

- **Hero:** Fotografía real de proyectos bolivianos — paisajes, aérea, plataformas de perforación. Sin fotos de stock.
- **Equipo:** Fotos profesionales — fondo blanco o neutro consistente; recorte cuadrado
- **Proyectos:** Combinación de: bandejas de testigos, plataformas de perforación, panoramas del sitio, afloramiento geológico
- **ESG:** Fotos comunitarias, imágenes de plantación de árboles — humanas, cálidas, genuinas
- **Formato de imagen:** WebP (con respaldo JPEG); servido vía componente `<Image>` de Next.js
- **Proporciones:** Heroes 16:9, fotos de equipo 1:1, tarjetas de proyectos 3:2

---

---

# 4. Historias de Usuario

## 4.1 Historias del Inversor Institucional

### IR-S01 — Descargar Presentación Corporativa
**Como** inversor institucional que evalúa a Mycelium,
**quiero** descargar la última presentación corporativa con un solo clic,
**para** poder revisar la tesis de inversión y compartirla con mi equipo.

**Criterios de Aceptación:**
- El PDF de la presentación corporativa es descargable desde el CTA de la página de inicio y la página de RI
- El archivo PDF incluye la fecha de la versión
- La descarga activa un evento de GA4 para seguimiento
- El archivo se sirve desde S3 vía CDN para descarga rápida

---

### IR-S02 — Revisar la Estructura de Capital
**Como** inversor institucional,
**quiero** ver la estructura de capital actual de Mycelium (acciones en circulación, totalmente diluido, opciones, warrants),
**para** poder evaluar el riesgo de dilución.

**Criterios de Aceptación:**
- La tabla de estructura de capital es visible en la página de RI sin requerir una descarga
- Los datos incluyen: acciones emitidas, opciones, warrants, total totalmente diluido y fecha de corte
- Actualizado vía CMS (el editor no técnico puede actualizar los números)

---

### IR-S03 — Acceder a Presentaciones en SEDAR
**Como** inversor institucional realizando debida diligencia,
**quiero** acceder a las presentaciones SEDAR+ y EDGAR de Mycelium directamente desde el sitio web,
**para** poder revisar documentos regulatorios oficiales sin buscar en bases de datos externas.

**Criterios de Aceptación:**
- Los enlaces de SEDAR+ y EDGAR están disponibles de forma prominente en la página de RI
- Los enlaces se abren en una nueva pestaña
- Disponibles en los tres idiomas con ubicación consistente

---

### IR-S04 — Encontrar Contacto de RI
**Como** inversor institucional que quiere hablar con la dirección,
**quiero** encontrar rápidamente el nombre, número de teléfono directo y correo electrónico del contacto de RI,
**para** poder iniciar una conversación sin navegar a través de un formulario de contacto genérico.

**Criterios de Aceptación:**
- El contacto de RI (nombre, cargo, teléfono, correo electrónico) está presente en la página de RI y en el pie de página
- El enlace de correo electrónico usa `mailto:` para envío con un clic
- La información de contacto se gestiona vía CMS de Sanity (editable sin un desarrollador)

---

## 4.2 Historias del Inversor Minorista

### RI-S01 — Verificar el Precio Actual de la Acción
**Como** inversor minorista,
**quiero** ver el precio actual de la acción TSX de Mycelium tan pronto como llegue al sitio,
**para** poder evaluar rápidamente el precio de negociación actual.

**Criterios de Aceptación:**
- El ticker bursátil en vivo se muestra en el encabezado del sitio en todas las páginas
- Muestra: símbolo del ticker (TSX: [MYC]), precio actual, cambio ($), cambio (%)
- El precio se actualiza cada 60 segundos sin recargar la página completa
- Código de colores: verde para movimiento positivo, rojo para negativo

---

### RI-S02 — Suscribirse a Alertas de Noticias
**Como** inversor minorista,
**quiero** suscribirme a alertas por correo electrónico para comunicados de prensa y noticias de la empresa,
**para** ser notificado cuando Mycelium publique actualizaciones importantes.

**Criterios de Aceptación:**
- El formulario de suscripción por correo electrónico está disponible en la página de inicio y la página de RI
- Solo requiere dirección de correo electrónico para suscribirse (nombre opcional)
- Correo de confirmación enviado vía AWS SES
- Consentimiento de suscripción compatible con PIPEDA/GDPR con lenguaje de consentimiento claro
- El suscriptor puede darse de baja vía enlace en cada correo electrónico

---

### RI-S03 — Leer los Últimos Comunicados de Prensa
**Como** inversor minorista,
**quiero** navegar por los comunicados de prensa de Mycelium ordenados por más recientes,
**para** poder seguir las noticias y las actualizaciones operativas.

**Criterios de Aceptación:**
- La página de noticias lista todos los comunicados de prensa en orden cronológico inverso
- Cada entrada muestra: fecha, titular, breve extracto
- Cada comunicado de prensa tiene su propia URL compartible
- Filtrable por año y categoría (Resultados de Exploración, Financiero, Corporativo, ESG)
- Disponible en EN / ES / FR

---

### RI-S04 — Entender los Proyectos
**Como** inversor minorista nuevo en Mycelium,
**quiero** navegar por todos los proyectos con descripciones claras de qué hace cada uno y dónde está ubicado,
**para** poder entender qué hace y produce realmente la empresa.

**Criterios de Aceptación:**
- La página índice de proyectos muestra los 4–5 proyectos como tarjetas
- Cada tarjeta muestra: nombre del proyecto, ubicación en Bolivia, etapa, commodity
- Al hacer clic en una tarjeta se accede a la página de detalle completa del proyecto
- La página de detalle del proyecto explica la geología, recursos y estado actual en lenguaje sencillo

---

## 4.3 Historias del Inversor ESG / de Impacto

### ESG-S01 — Conocer los Compromisos Ambientales
**Como** inversor orientado al impacto,
**quiero** leer sobre las prácticas ambientales y asociaciones de Mycelium,
**para** poder evaluar si la empresa cumple con mis criterios ESG.

**Criterios de Aceptación:**
- Página de ESG / Sostenibilidad dedicada con pilares A, S, G
- Sección de asociación de plantación de árboles con: nombre del socio, árboles plantados (o meta), descripción del impacto
- Sección de prácticas ambientales que cubre gestión del agua, relaves, rehabilitación
- Informe ESG descargable si está disponible

---

### ESG-S02 — Compartir Contenido ESG
**Como** investigador de ESG,
**quiero** compartir contenido ESG específico con colegas,
**para** que puedan revisar el perfil de sostenibilidad de Mycelium.

**Criterios de Aceptación:**
- La página de ESG tiene su propia URL canónica
- Etiquetas Open Graph completadas para compartir en redes sociales (título, descripción, imagen)
- Los comunicados de prensa de ESG están etiquetados y son filtrables en el archivo de noticias

---

## 4.4 Historias del Buscador de Empleo

### JS-S01 — Explorar Puestos Disponibles
**Como** geólogo que busca oportunidades en Bolivia,
**quiero** explorar los listados de empleo disponibles de Mycelium,
**para** poder identificar los roles para los que estoy calificado.

**Criterios de Aceptación:**
- La página de Carreras lista todas las publicaciones de empleo activas
- Cada listado muestra: título del puesto, ubicación (ciudad + país), tipo (tiempo completo / contrato / temporada de campo)
- Al hacer clic en un listado se muestra la descripción completa del puesto
- Los listados no activos están ocultos (controlado vía interruptor en CMS)

---

### JS-S02 — Postularse a un Empleo
**Como** candidato calificado,
**quiero** postularme a un puesto directamente desde el sitio web,
**para** poder enviar mi solicitud sin salir del sitio.

**Criterios de Aceptación:**
- Cada listado de empleo tiene un CTA "Postularse" claro
- El enlace de solicitud dirige a un correo electrónico (`careers@myceliumminerals.com`) o un formulario de solicitud embebido
- El formulario acepta: nombre, correo electrónico, currículum, carta de presentación (opcional)

---

## 4.5 Historias del Gestor de Contenido

### CM-S01 — Publicar un Comunicado de Prensa
**Como** gestor de contenido no técnico,
**quiero** publicar un nuevo comunicado de prensa desde el CMS sin ayuda de un desarrollador,
**para** que el sitio se mantenga actualizado con las noticias de la empresa.

**Criterios de Aceptación:**
- Sanity Studio tiene un tipo de contenido "Comunicado de Prensa"
- Campos: título (EN/ES/FR), fecha, cuerpo (texto enriquecido, EN/ES/FR), categoría, adjunto PDF opcional
- Al publicar, el sitio se revalida automáticamente vía webhook en 60 segundos
- No se requiere despliegue

---

### CM-S02 — Actualizar la Estructura de Capital
**Como** gestor de contenido,
**quiero** actualizar la tabla de estructura de capital después de cada financiamiento,
**para** que los datos de inversores en el sitio sean siempre precisos.

**Criterios de Aceptación:**
- Los campos de estructura de capital son editables en Sanity Studio como números simples
- Incluye: acciones en circulación, opciones, warrants, totalmente diluido, fecha de corte
- El cambio se refleja en la página de RI dentro de 60 segundos de la publicación

---

### CM-S03 — Agregar una Nueva Vacante de Empleo
**Como** gestor de contenido,
**quiero** publicar una nueva vacante de empleo en la página de carreras,
**para** que los candidatos puedan postularse sin requerir que un desarrollador actualice el sitio.

**Criterios de Aceptación:**
- Sanity Studio tiene un tipo de contenido "Vacante de Empleo"
- Campos: título, ubicación, tipo, descripción (texto enriquecido), interruptor activo, contacto de solicitud
- Establecer activo = falso elimina inmediatamente la publicación de la página de carreras pública

---

### CM-S04 — Gestionar Documentos de Proyectos
**Como** gestor de contenido,
**quiero** cargar nuevos documentos técnicos (informes NI 43-101, resultados de perforación) a una página de proyecto,
**para** que los inversores siempre tengan acceso a los datos técnicos más recientes.

**Criterios de Aceptación:**
- Cada proyecto en Sanity tiene una sección de documentos que admite múltiples cargas de archivos
- Campos por documento: título, tipo (NI 43-101 / Resultados de Perforación / Factibilidad / Otro), fecha, archivo (PDF)
- Los documentos aparecen en la página de detalle del proyecto en la sección de Descargas, ordenados por fecha

---

## 4.6 Historias Multilingüe

### ML-S01 — Cambiar de Idioma
**Como** parte interesada boliviana de habla hispana,
**quiero** leer el sitio en español,
**para** poder entender las operaciones de la empresa y sus compromisos comunitarios en mi idioma.

**Criterios de Aceptación:**
- El selector de idioma es visible en todas las páginas en el encabezado
- Cambiar de idioma conserva la página actual (p. ej., cambiar en una página de proyecto permanece en ese proyecto)
- Todo el texto de la interfaz de usuario (navegación, botones, etiquetas, legal) está traducido
- El contenido del CMS (noticias, descripciones de proyectos, biografías del equipo) tiene campos en español
- La URL cambia al prefijo `/es/...` para español

---

### ML-S02 — Los Motores de Búsqueda Indexan Todos los Idiomas
**Como** equipo de marketing de Mycelium,
**quiero** que todas las versiones lingüísticas del sitio sean indexadas por los motores de búsqueda,
**para** que los inversores de habla hispana y francesa puedan encontrar el sitio en su idioma.

**Criterios de Aceptación:**
- Cada página incluye etiquetas `<link rel="alternate" hreflang="...">` para los tres idiomas
- Cada idioma tiene su propia estructura de URL (`/`, `/es/`, `/fr/`)
- `sitemap.xml` incluye todas las variantes de idioma
- Títulos de página traducidos y meta descripciones en Sanity para SEO

---

---

*Versión del documento 1.0 — Borrador inicial*
*Estado: Pendiente de revisión por partes interesadas*
