# JobLens

JobLens es una extensión para navegadores basada en Chromium diseñada para analizar automáticamente ofertas de empleo y comparar sus requisitos con el perfil profesional del usuario.

La extensión extrae información directamente desde plataformas de empleo como LinkedIn y Computrabajo, identifica tecnologías, experiencia requerida, modalidad de trabajo, salario y otros criterios relevantes, para generar un índice de compatibilidad y recomendar si una oferta es adecuada para el usuario.

Todo el procesamiento se realiza localmente, garantizando la privacidad de la información sin depender de servicios externos.

---

## Características

- Detección automática de ofertas laborales.
- Compatibilidad con LinkedIn y Computrabajo.
- Extracción automática de:
  - Cargo
  - Empresa
  - Salario
  - Ubicación
  - Tipo de contrato
  - Modalidad
  - Experiencia requerida
  - Tecnologías solicitadas
- Comparación automática con el perfil del usuario.
- Cálculo de compatibilidad.
- Recomendación de aplicación.
- Historial de ofertas analizadas.
- Almacenamiento local.
- Funcionamiento sin conexión a Internet para el análisis.

---

## Tecnologías

- HTML5
- CSS3
- JavaScript (ES6+)
- Chrome Extension Manifest V3
- Chrome Storage API
- DOM API

---

## Arquitectura

```
JobLens
│
├── assets/
├── content/
│   ├── linkedin.js
│   └── computrabajo.js
│
├── parser/
│   ├── extractor.js
│   ├── parser.js
│   └── score.js
│
├── popup/
│   ├── popup.html
│   ├── popup.css
│   └── popup.js
│
├── storage/
│   ├── history.js
│   └── profile.js
│
├── manifest.json
└── README.md
```

---

## Flujo de funcionamiento

1. El usuario abre una oferta laboral.
2. JobLens detecta automáticamente la plataforma.
3. Se extrae la información de la oferta.
4. Los datos son normalizados.
5. Se comparan con el perfil almacenado.
6. Se calcula un índice de compatibilidad.
7. Se genera una recomendación.
8. El análisis puede almacenarse en el historial.

---

## Compatibilidad

Actualmente el proyecto está diseñado para:

- LinkedIn Jobs
- Computrabajo

En futuras versiones se contempla soporte para otras plataformas de empleo.

---

## Objetivos

El proyecto busca reducir el tiempo necesario para analizar ofertas laborales y facilitar la toma de decisiones durante un proceso de búsqueda de empleo.

Además, permite identificar tecnologías demandadas por el mercado y visualizar las brechas entre el perfil profesional del usuario y los requisitos de las vacantes.

---

## Estado del proyecto

En desarrollo.

Las siguientes funcionalidades forman parte de la primera versión:

- Estructura base de la extensión.
- Extracción de datos.
- Sistema de puntuación.
- Historial local.
- Perfil del usuario.
- Recomendaciones automáticas.

---

## Licencia

Este proyecto se distribuye bajo la licencia MIT.
