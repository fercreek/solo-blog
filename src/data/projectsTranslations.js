export const getProjectsData = (language = 'en') => {
  const translations = {
    en: `## Studio Link

Revenue Protection for academies. Stop the silent capital leak and take back control of your income today.  
Explore more at [Studio Link](https://studiolink.online/).

## Vayla

Event Intelligence. We honor dancers' effort with precise, real-time results. Zero errors, zero chaos.  
Discover details at [Vayla Dance](https://www.vayla.dance/).

## Litebox Parcel

Autonomous logistics 0-to-1. Full operability and profitability in 30 days. Proof that agentic speed is the new standard.  
Explore more at [Litebox Parcel](https://www.liteboxparcel.com/).

## Progreso Personal Finance

Take control of your personal finances. Progreso helps you see where your money goes, create budgets, and better understand your financial situation. Designed to be simple and intuitive.  
Discover details at [Progreso Personal Finance](https://v0-progreso-personal-finance-ui.vercel.app/).

## Sin Bronca

Simple solutions for everyday problems. Sin Bronca offers practical tools with a clean, easy-to-use interface. Designed for those who seek efficiency without complications.  
Explore more at [Sin Bronca](https://sin-bronca.vercel.app/).

## Encontreras

Agentic Open-Source pipeline. Stop buying cold databases: Encontreras extracts from Maps, analyzes web presence, scores prospects, and writes AI icebreakers from your local machine.  
Explore more at [Encontreras Open Source](https://github.com/fercreek/encontreras).

## ChronoDev

Estimate your development hours from GitHub commits. No signup, 100% free. Your data stays in your browser. Metrics per repo, weekly charts, CSV export, and AI insights with Gemini.  
Explore more at [ChronoDev](https://v0-chrono-dev-dashboard.vercel.app/).

## Hackathon Projects

### Pebble Mouse (HackMTY 2014)
Experimental app integrating wearables to explore new interaction models.

### Laser Harp (2014)
Built an experimental app integrating sensors to explore new interaction models.

### B-Alert (I/O Hack 2015)
Experimental app integrating proximity beacons to explore new interaction models.`,
    es: `## Studio Link

Revenue Protection para Academias. Detén la fuga silenciosa de capital y recupera el control de tus ingresos hoy.  
Explora más en [Studio Link](https://studiolink.online/).

## Vayla

Event Intelligence. Honramos el esfuerzo de los bailarines con resultados precisos en tiempo real. Cero errores, cero caos.  
Descubre detalles en [Vayla Dance](https://www.vayla.dance/).

## Litebox Parcel

Logística Autónoma 0-a-1. Operatividad total y rentabilidad en 30 días. La prueba de que la velocidad agéntica es el nuevo estándar.  
Explora más en [Litebox Parcel](https://www.liteboxparcel.com/).

## Progreso Personal Finance

Toma control de tus finanzas personales. Progreso te ayuda a ver dónde gastas tu dinero, crear presupuestos y entender mejor tu situación financiera. Diseñado para ser simple e intuitivo.  
Descubre detalles en [Progreso Personal Finance](https://v0-progreso-personal-finance-ui.vercel.app/).

## Sin Bronca

Soluciones simples para problemas cotidianos. Sin Bronca ofrece herramientas prácticas con una interfaz limpia y fácil de usar. Pensado para quienes buscan eficiencia sin complicaciones.  
Explora más en [Sin Bronca](https://sin-bronca.vercel.app/).

## Encontreras

Pipeline Agéntico Open-Source. Deja de comprar bases de datos frías: Encontreras extrae de Maps, analiza presencia web, califica prospectos, y redacta rompehielos con IA desde tu máquina local.  
Explora el código en [Encontreras Open Source](https://github.com/fercreek/encontreras).

## ChronoDev

Estima horas de desarrollo a partir de commits de GitHub. Sin registro, 100% gratis. Tus datos se quedan en tu navegador. Métricas por repo, gráficas semanales, export CSV e insights con IA (Gemini).  
Explora más en [ChronoDev](https://v0-chrono-dev-dashboard.vercel.app/).

## Proyectos de Hackathon

### Pebble Mouse (HackMTY 2014)
Aplicación experimental que integra wearables para explorar nuevos modelos de interacción.

### Laser Harp (2014)
Construí una aplicación experimental que integra sensores para explorar nuevos modelos de interacción.

### B-Alert (I/O Hack 2015)
Aplicación experimental que integra beacons de proximidad para explorar nuevos modelos de interacción.`
  };

  return translations[language] || translations.en;
};

export const projectsTranslations = {
  en: {
    featured: {
      studioLink: {
        excerpt: 'Revenue Protection for academies. Stop the silent capital leak and take back control of your income today.'
      },
      vaylaDance: {
        excerpt: 'Event Intelligence. We honor dancers\' effort with precise, real-time results. Zero errors, zero chaos.'
      }
    },
    recent: {
      liteboxParcel: {
        excerpt: 'Autonomous logistics 0-to-1. Full operability and profitability in 30 days. Proof that agentic speed is the new standard.'
      },
      progreso: {
        excerpt: 'Take control of your personal finances. Progreso helps you see where your money goes, create budgets, and better understand your financial situation. Designed to be simple and intuitive.'
      },
      sinBronca: {
        excerpt: 'Simple solutions for everyday problems. Sin Bronca offers practical tools with a clean, easy-to-use interface. Designed for those who seek efficiency without complications.'
      },
      chronoDev: {
        excerpt: 'Estimate your development hours from GitHub commits. No signup, 100% free. Metrics per repo, weekly charts, CSV export, and AI insights with Gemini.'
      },
      encontreras: {
        excerpt: 'Agentic Open-Source pipeline. Stop buying cold databases: Encontreras extracts from Maps, analyzes web presence, scores prospects, and writes AI icebreakers from your local machine.'
      }
    }
  },
  es: {
    featured: {
      studioLink: {
        excerpt: 'Revenue Protection para Academias. Detén la fuga silenciosa de capital y recupera el control de tus ingresos hoy.'
      },
      vaylaDance: {
        excerpt: 'Event Intelligence. Honramos el esfuerzo de los bailarines con resultados precisos en tiempo real. Cero errores, cero caos.'
      }
    },
    recent: {
      liteboxParcel: {
        excerpt: 'Logística Autónoma 0-a-1. Operatividad total y rentabilidad en 30 días. La prueba de que la velocidad agéntica es el nuevo estándar.'
      },
      progreso: {
        excerpt: 'Toma control de tus finanzas personales. Progreso te ayuda a ver dónde gastas tu dinero, crear presupuestos y entender mejor tu situación financiera. Diseñado para ser simple e intuitivo.'
      },
      sinBronca: {
        excerpt: 'Soluciones simples para problemas cotidianos. Sin Bronca ofrece herramientas prácticas con una interfaz limpia y fácil de usar. Pensado para quienes buscan eficiencia sin complicaciones.'
      },
      chronoDev: {
        excerpt: 'Estima horas de desarrollo a partir de commits de GitHub. Sin registro, 100% gratis. Métricas por repo, gráficas semanales, export CSV e insights con IA (Gemini).'
      },
      encontreras: {
        excerpt: 'Pipeline Agéntico Open-Source. Deja de comprar bases de datos frías: Encontreras extrae de Maps, analiza presencia web, califica prospectos, y redacta rompehielos con IA desde tu máquina local.'
      }
    }
  }
};

