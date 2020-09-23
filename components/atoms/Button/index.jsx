const Button = ({buttonLabel, buttonLink, buttonType}) => {
    return (
      <button className={buttonType} onClick={() => console.log(buttonLink)}>
          {buttonLabel}
      </button>
    );
  };
  
  export default Button;