import { useState, FormEvent, useEffect } from "react";
import { sendDataToRails } from './utils/api';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (email && password) { // Check if email and password are not empty
      console.log("Email:", email);
      console.log("Password:", password);

      try {
        const fetchData = async () => {
          const responseData = await sendDataToRails("POST", "/login", {user:{ email: email, password: password }});
          console.log(responseData);
        };

        fetchData();
      } catch (error) {
        console.log(error);
      }
    }
  }, [email, password]);

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault(); 
    setEmail((event.target as HTMLFormElement).email.value);
    setPassword((event.target as HTMLFormElement).password.value);
  }

  return (
    <div className="login">
      <div className="wrapper">
        <div id="formContent">
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <input type="text" id="email" className="" name="email" placeholder="email" />
            <input type="password" id="password" className="" name="password" placeholder="Password" />
            <input type="submit" className="" value="Log In" />
          </form>
          <div id="formFooter">
            <a className="underlineHover" href="#">Forgot Password?</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
