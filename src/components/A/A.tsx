const A = ({ href, children }) => {
  return (
    <a href={href} target="_blank">
      {children}
    </a>
  );
};

export default A;
