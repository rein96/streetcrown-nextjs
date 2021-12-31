import React from "react"

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, href, ...params }) => {
  const className =
    "inline-block px-5 py-3 font-medium leading-snug border border-transparent text-base rounded-md text-white bg-red hover:bg-midnight focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    )
  } else {
    return (
      <button className={className} {...params}>
        {children}
      </button>
    )
  }
}

export default Button
