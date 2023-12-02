const AuthLayout = (props) => {
    const { children, title } = props;
    return (
        <div className="w-full max-w-xs">
            <h1 style={{ fontFamily: 'Poppins', textShadow: '1px 1px 2.5px #A9A9A9'}} className="text-3xl font-bold text-green-500">
                {title}
            </h1>

            <div>
                <img src="./../../../logo.png" alt="Logo Desa" className="w-20 h-20" />
            </div>
            {children}
        </div>
    );
};

export default AuthLayout;