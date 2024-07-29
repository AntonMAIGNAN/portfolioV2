import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, href, target = '_self', rel, className = '', children }) => {
  const baseStyle = 'px-4 py-2 text-white bg-orange-500 rounded-lg transition-colors duration-300';
  const hoverStyle = 'hover:bg-orange-400';
  const combinedClassName = `${baseStyle} ${hoverStyle} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedClassName} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
