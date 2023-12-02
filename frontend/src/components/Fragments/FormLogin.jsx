import InputForm from "../Elements/Input/InputLogin";
import Button from "../Elements/button";

const FormLogin = () => {
    return (
        <form action="">
        
        <InputForm
          type="text"
          placeholder="Nama"
        />
        <InputForm
          type="text"
          placeholder="NIK"
        />
        <InputForm
          type="password"
          placeholder="Sandi"
        />
        
        <Button classname="bg-black rounded-full">Masuk</Button>
      </form>
    );
};

export default FormLogin;