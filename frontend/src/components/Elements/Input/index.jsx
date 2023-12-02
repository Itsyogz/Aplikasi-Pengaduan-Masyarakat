import Input from "../Input/InputLogin";

const InputForm = (props) => {
    const {type, placeholder} = props;
    return(
        <div className="mb-6">
            <Input type={type} placeholder={placeholder} />
        </div>
    );
};

export default InputForm;