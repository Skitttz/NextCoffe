const ArticleTitle = ({ component }: any) => {
  return (
    <h3
      className="font-besley font-medium text-xl mt-6 mb-2"
      id={`${component.slug}`}
    >
      {component.title}
    </h3>
  );
};

export default ArticleTitle;
