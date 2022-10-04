import { en, id } from 'locales';
import { useRouter } from 'next/router';

const useTranslation = () => {
  const { locale } = useRouter();

  return locale === 'en' ? en : id;
};

export default useTranslation;
