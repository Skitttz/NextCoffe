const signupForm = ({ title, infoText }) => {
  return (
    <section className="grid grid-cols-[1fr,300px]">
      <div>
        <h3>{title}</h3>
        {infoText}
      </div>
      <form action=""></form>
    </section>
  );
};

export default signupForm;
