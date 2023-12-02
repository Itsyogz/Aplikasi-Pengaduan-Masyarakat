const Button = (props) => {
    const {children, classname} = props;
    return (
        <div className="flex items-center justify-center">
          <button
            style={{fontFamily:'Poppins'}}
            className={`mt-5 h-8 px-10 font-bold ${classname} text-white`}
            type="submit">
            {children}
          </button>
        </div>
    );
  };

  export default Button;