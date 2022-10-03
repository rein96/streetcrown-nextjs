import { useRouter } from 'next/router';

const LanguageOptions = () => {
  const router = useRouter();

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
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
