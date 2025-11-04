interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

function Icon({ name, className = '', size = 24 }: IconProps) {
  return (
    <span 
      className={`material-symbols-outlined ${className}`}
      style={{ fontSize: `${size}px` }}
    >
      {name}
    </span>
  )
}

export default Icon
