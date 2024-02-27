
function Login() {
  return (
    <div className="login">
    <div className="wrapper ">
      <div id="formContent">
        <form>
          <h1>Login</h1>
          <input type="text" id="login" className="" name="login" placeholder="Login" />
          <input type="text" id="password" className="" name="password" placeholder="Password" />
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
