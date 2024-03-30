const Logo = ({ src, classname }) => {
  return (
    <div>
      <img src={src} alt="School Logo" className={classname} />
    </div>
  );
};

export default Logo;
