const Cover = ({ src }) => {
  return (
    <article>
      <div>
        <img
          src={src}
          alt="Home Cover"
          className="h-[559px] object-center object-cover"
        />
      </div>
    </article>
  );
};

export default Cover;
