export const getProjectsData = (language = 'en') => {
  const translations = {
    en: `## Studio Link

Studio Link is your all-in-one income and records manager designed for academies and gyms. A management tool for dance academies and gyms that automates attendance, payments, and communication, enabling owners to focus on growth rather than administrative work. Simplify your business management and effortlessly keep track of client payments.  
Explore more at [Studio Link](https://studiolink.online/).

## Vayla

Vayla Dance redefines dance competitions by making event organization seamless and empowering competitors to shine. A web platform that streamlines the organization of dance competitions by automating judging and scoring, improving accuracy, and reducing manual work for organizers. Our cutting-edge scoring and judging system transforms how you manage dance events, tailored specifically for communities passionate about dance.  
Discover details at [Vayla Dance](https://www.vayla.dance/).

## Hackathon Projects

### Pebble Mouse (HackMTY 2014)
Experimental app integrating wearables to explore new interaction models.

### Laser Harp (2014)
Built an experimental app integrating sensors to explore new interaction models.

### B-Alert (I/O Hack 2015)
Experimental app integrating proximity beacons to explore new interaction models.`,
    es: `## Studio Link

Studio Link es tu gestor de ingresos y registros todo-en-uno diseñado para academias y gimnasios. Una herramienta de gestión para academias de baile y gimnasios que automatiza asistencia, pagos y comunicación, permitiendo a los propietarios enfocarse en el crecimiento en lugar del trabajo administrativo. Simplifica la gestión de tu negocio y lleva un registro sin esfuerzo de los pagos de clientes.  
Explora más en [Studio Link](https://studiolink.online/).

## Vayla

Vayla Dance redefine las competencias de baile haciendo que la organización de eventos sea fluida y empoderando a los competidores para brillar. Una plataforma web que agiliza la organización de competencias de baile automatizando el juicio y la calificación, mejorando la precisión y reduciendo el trabajo manual para los organizadores. Nuestro sistema de calificación y juicio de vanguardia transforma cómo gestionas eventos de baile, diseñado específicamente para comunidades apasionadas por el baile.  
Descubre detalles en [Vayla Dance](https://www.vayla.dance/).

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
        excerpt: 'Manage your academy or gym effortlessly. Studio Link helps you control payments, attendance, and schedules from one place. Focus on what really matters: your students and your business.'
      },
      vaylaDance: {
        excerpt: 'Organize dance competitions professionally. Vayla simplifies judging and scoring, showing results in real-time. Perfect for organizers who want events without technical complications.'
      }
    },
    recent: {
      liteboxParcel: {
        excerpt: 'Send and track packages easily. Litebox Parcel simplifies shipping management, from creating labels to monitoring deliveries. Perfect for businesses that need logistics efficiency.'
      },
      progreso: {
        excerpt: 'Take control of your personal finances. Progreso helps you see where your money goes, create budgets, and better understand your financial situation. Designed to be simple and intuitive.'
      },
      sinBronca: {
        excerpt: 'Simple solutions for everyday problems. Sin Bronca offers practical tools with a clean, easy-to-use interface. Designed for those who seek efficiency without complications.'
      }
    }
  },
  es: {
    featured: {
      studioLink: {
        excerpt: 'Gestiona tu academia o gimnasio sin complicaciones. Studio Link te ayuda a controlar pagos, asistencias y horarios desde un solo lugar. Enfócate en lo que realmente importa: tus alumnos y tu negocio.'
      },
      vaylaDance: {
        excerpt: 'Organiza competencias de baile de manera profesional. Vayla simplifica el jueceo y la calificación, mostrando resultados en tiempo real. Ideal para organizadores que quieren eventos sin complicaciones técnicas.'
      }
    },
    recent: {
      liteboxParcel: {
        excerpt: 'Envía y rastrea paquetes fácilmente. Litebox Parcel simplifica la gestión de envíos, desde crear etiquetas hasta monitorear entregas. Perfecto para negocios que necesitan eficiencia en logística.'
      },
      progreso: {
        excerpt: 'Toma control de tus finanzas personales. Progreso te ayuda a ver dónde gastas tu dinero, crear presupuestos y entender mejor tu situación financiera. Diseñado para ser simple e intuitivo.'
      },
      sinBronca: {
        excerpt: 'Soluciones simples para problemas cotidianos. Sin Bronca ofrece herramientas prácticas con una interfaz limpia y fácil de usar. Pensado para quienes buscan eficiencia sin complicaciones.'
      }
    }
  }
};

