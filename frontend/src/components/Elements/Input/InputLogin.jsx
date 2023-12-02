const Input = (props) => {
    const {type, placeholder} = props;
    return (
        <input type={type}
          style={{fontFamily:'Poppins'}}
          className="text-sm mb-3 border border-2 border-green-500 rounded-lg py-2 px-3 text-gray-700 placeholder: opacity-50 outline-none"
          placeholder={placeholder}
        />
    );
};

export default Input;