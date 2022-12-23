import React from "react";
import { Link } from "react-router-dom";

const LoginContainer = () => {
   
    const [message, setMessage] = React.useState("");

  
    const handleChange = (e) => {
      setMessage(e.target.value);
    };
 
  
    const user = {
      message,

    };
  
    const handleClick = (e) => {
      e.preventDefault();
     
    };
  return (
    <>
      <div className="login-wrapper">
        <div className="sign-in">
          <div className="sign-in-header">Вход</div>

          <form className="inputs-wrapper" onSubmit={handleClick}>
            <EmailInput
              extraClass="mb-2"
              placeholder="E-mail"
              value={message}
              onChange={handleChange}
              minLength="5"
            />

        
            <Button htmlType="submit" type="primary" size="large" extraClass="ml-2">
              Войти
            </Button>
          </form>

          <div className="register-forget">
            <p className="first-header">Вы - новый пользователь?</p>

            <Link to="/register" className="second-header">
              Зарегистрироваться
            </Link>
          </div>

          <div className="register-forget">
            <p className="first-header">Забыли пароль?</p>

            <Link to="/restore-password" className="second-header">
              Восстановить пароль
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};



export default Login;