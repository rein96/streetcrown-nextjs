import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  className = '',
  ...params
}) => {
  const classes = `inline-block px-5 py-3 font-medium leading-snug border border-transparent text-base rounded-md text-white bg-red hover:bg-midnight focus:outline-none focus:shadow-outline transition duration-150 ease-in-out ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} {...params}>
        {children}
      </button>
    );
  }
};

export default Button;
