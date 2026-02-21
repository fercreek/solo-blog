import { format } from 'date-fns';
import { enUS, es } from 'date-fns/locale';

const locales = { en: enUS, es };

export const formatDate = (date, language = 'en') => {
  const locale = locales[language] || enUS;
  return format(date, 'MMMM d, yyyy', { locale });
};
