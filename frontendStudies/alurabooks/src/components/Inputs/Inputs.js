import "./Inputs.sass";

const Inputs = ({ type, name, placeholder, label }) => {
  const isAuthField = name === "auth-email" || name === "password";

  const iconMap = {
    search: "search",
    email: "mail",
  };

  const iconName = iconMap[name];

  return (
    <div
      className={`inputContainer ${
        isAuthField ? "inputForms" : `input${name}`
      }`}>
      {label && <label htmlFor={name}>{label}</label>}
      <div className="inputWrapper">
        <input
          className={`inputField ${isAuthField ? "formStyle" : ""}`}
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
        />
        {iconName && <span className="material-icons">{iconName}</span>}
      </div>
    </div>
  );
};

export default Inputs;
