import './Icon.css';

interface IconProps {
  [key: string]: any;
  alt: string;
  onClick?: () => any;
  src: string;
  width?: string;
}

export const Icon = (props: IconProps) => {
  const {alt, onClick, src, width} = {...props};

  return (
    <img
      {...props}
      alt={alt}
      className={`slr-icon ${onClick ? 'slr-icon-clickable' : ''} ${props.className ? props.className : ''}`}
      onClick={onClick}
      src={src}
      width={width || '24px'}
    />
  )
}
