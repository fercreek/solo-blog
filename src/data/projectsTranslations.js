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

## Sin Bronca

Simple solutions for everyday problems. Sin Bronca offers practical tools with a clean, easy-to-use interface. Designed for those who seek efficiency without complications.  
Explore more at [Sin Bronca](https://sin-bronca.vercel.app/).

## Encontreras

Open-source educational project. A local pipeline that extracts businesses from Maps, analyzes their web presence, scores prospects and drafts AI icebreakers, to learn how agentic lead research works.  
Explore more at [Encontreras Open Source](https://github.com/fercreek/encontreras).

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

## Sin Bronca

Soluciones simples para problemas cotidianos. Sin Bronca ofrece herramientas prácticas con una interfaz limpia y fácil de usar. Pensado para quienes buscan eficiencia sin complicaciones.  
Explora más en [Sin Bronca](https://sin-bronca.vercel.app/).

## Encontreras

Proyecto open source educativo. Un pipeline local que extrae negocios de Maps, analiza su presencia web, califica prospectos y redacta rompehielos con IA, para aprender cómo funciona la investigación de prospectos con agentes.  
Explora el código en [Encontreras Open Source](https://github.com/fercreek/encontreras).

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
      encontreras: {
        excerpt: 'Open-source educational project. A local pipeline that extracts businesses from Maps, analyzes their web presence, scores prospects and drafts AI icebreakers, to learn how agentic lead research works.'
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
      encontreras: {
        excerpt: 'Proyecto open source educativo. Un pipeline local que extrae negocios de Maps, analiza su presencia web, califica prospectos y redacta rompehielos con IA, para aprender cómo funciona la investigación de prospectos con agentes.'
      }
    }
  }
};

