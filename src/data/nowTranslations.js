export const getNowData = (language = 'en') => {
  const translations = {
    en: `Currently residing in Monterrey, Nuevo León, I am immersing myself in the world of cryptocurrencies, investment, and data analytics.

Here's a snapshot of my current activities:

- Developing [Studio Link](https://studiolink.online/) and [Vayla Dance](https://www.vayla.dance/) as side projects
- Engaging in crypto trading and investment
- Dancing bachata and salsa regularly

These are my primary focuses at the moment:

- Enhancing my dance skills
- Refining my daily habits
- Becoming a profitable trader
- Learning to delegate effectively and make informed decisions at work
- Increasing productivity to achieve more in less time

This page will be updated to reflect any changes in my activities or priorities. The last update was on December 27, 2025.

This page serves as a public declaration and a personal reminder, providing a balance to the goal-oriented nature of my [Impossible List](/impossible-list/). This concept was inspired by [Derek Sivers](https://sivers.org/now) and [Thomas Frank](https://collegeinfogeek.com/now/).`,
    es: `Actualmente residiendo en Monterrey, Nuevo León, me estoy sumergiendo en el mundo de las criptomonedas, las inversiones y el análisis de datos.

Aquí tienes una instantánea de mis actividades actuales:

- Desarrollando [Studio Link](https://studiolink.online/) y [Vayla Dance](https://www.vayla.dance/) como proyectos paralelos
- Participando en trading de criptomonedas e inversión
- Bailando bachata y salsa regularmente

Estos son mis enfoques principales en este momento:

- Mejorar mis habilidades de baile
- Refinar mis hábitos diarios
- Convertirme en un trader rentable
- Aprender a delegar efectivamente y tomar decisiones informadas en el trabajo
- Aumentar la productividad para lograr más en menos tiempo

Esta página se actualizará para reflejar cualquier cambio en mis actividades o prioridades. La última actualización fue el 27 de diciembre de 2025.

Esta página sirve como una declaración pública y un recordatorio personal, proporcionando un balance a la naturaleza orientada a objetivos de mi [Lista Imposible](/impossible-list/). Este concepto fue inspirado por [Derek Sivers](https://sivers.org/now) y [Thomas Frank](https://collegeinfogeek.com/now/).`
  };

  return translations[language] || translations.en;
};

