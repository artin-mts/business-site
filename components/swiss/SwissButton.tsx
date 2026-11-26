import { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface BaseProps {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
}

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };
type AnchorProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type SwissButtonProps = ButtonProps | AnchorProps;

export default function SwissButton({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}: SwissButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium transition-colors';
  
  const variantStyles = {
    primary: 'bg-swiss-accent text-swiss-white px-6 py-3 hover:bg-swiss-accent-hover',
    secondary: 'bg-swiss-white text-swiss-ink border border-swiss-ink px-6 py-3 hover:bg-swiss-paper',
    ghost: 'text-swiss-ink border-b border-swiss-ink hover:border-swiss-accent hover:text-swiss-accent px-0 py-1',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if ('href' in props && props.href) {
    const { href, ...anchorProps } = props as AnchorProps;
    return (
      <a href={href} className={combinedClassName} {...anchorProps}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...(props as ButtonProps)}>
      {children}
    </button>
  );
}
