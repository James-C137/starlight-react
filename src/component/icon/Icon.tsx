import './Icon.css';

interface IconProps {
  alt: string;
  src: string;
}

export const Icon = ({alt, src, ...props}: IconProps) => {
  return (
    <img
      alt={alt}
      className='slr-icon'
      src={src}
      width='24px'
      {...props}
    />
  )
}
