const Typography = ({ variant, className, children }) => {
  const variantStyles = {
    h1: "text-4xl font-bold",
    h2: "text-3xl font-bold",
    h3: "text-2xl font-bold",
    h4: "text-xl font-bold",
    h5: "text-lg font-semibold",
    h6: "text-base font-semibold",
    p: "text-base",
    span: "text-base",
    caption: "text-sm",
  };

  const Component = variant || "p";
  const variantClass = variantStyles[variant] || "";

  return (
    <Component className={`${variantClass} ${className} `}>
      {children}
    </Component>
  );
};

export default Typography;
