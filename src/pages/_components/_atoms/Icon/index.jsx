const Icon = ({ functionSrc, src, alt, className, onClick }) => {
  return (
    <img
      src={src || functionSrc}
      alt={alt}
      className={className}
      onClick={onClick}
    />
  );
};

export default Icon;
