export const getContactData = (language = 'en') => {
  const translations = {
    en: `Phone: (+52) 1-811-765-5605  
Email: fercreek@gmail.com  
Github: [github.com/fercreek](https://github.com/fercreek)  
LinkedIn: [linkedin.com/in/fercreek/](https://linkedin.com/in/fercreek/)  
Location: Monterrey, Nuevo León, México`,
    es: `Teléfono: (+52) 1-811-765-5605  
Correo: fercreek@gmail.com  
Github: [github.com/fercreek](https://github.com/fercreek)  
LinkedIn: [linkedin.com/in/fercreek/](https://linkedin.com/in/fercreek/)  
Ubicación: Monterrey, Nuevo León, México`
  };

  return translations[language] || translations.en;
};

