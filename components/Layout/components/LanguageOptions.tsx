import { useRouter } from 'next/router';
import { ChangeEvent } from 'react';
import { LocaleType } from 'types/detailing';

interface LanguageOptionsProps {
  onClick?: () => void;
}

const LanguageOptions = ({ onClick }: LanguageOptionsProps) => {
  const router = useRouter();

  /** Set Locale to Cookie (expiry for 1 year) */
  const setCookie = (locale: LocaleType) => {
    document.cookie = `NEXT_LOCALE=${locale}; max-age=31536000; path=/`;
  };

  const changeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    const locale = e.target.value as LocaleType;
    router.push(router.pathname, router.asPath, { locale });

    setCookie(locale);

    // Extra optional onClick
    if (onClick) {
      onClick();
    }
  };

  return (
    <select
      onChange={changeLanguage}
      defaultValue={router.locale}
      className='text-white text-shadow-sm text-lg bg-transparent tracking-wide ml-4 cursor-pointer'
    >
      <option className='text-black' value='id'>
        🇮🇩 Indonesia
      </option>
      <option className='text-black' value='en'>
        🇺🇸 English
      </option>
    </select>
  );
};

export default LanguageOptions;
