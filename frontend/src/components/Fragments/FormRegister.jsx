import InputForm from "../Elements/Input/InputLogin";
import Button from "../Elements/button";

const FormRegister = () => {
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
          type="email"
          placeholder="Email"
        />
        <InputForm
          type="password"
          placeholder="Sandi"
        />
        <InputForm
          type="password"
          placeholder="Ulang Sandi"
        />
        
        <Button classname="bg-black rounded-full">Daftar</Button>
      </form>
    );
};

export default FormRegister;