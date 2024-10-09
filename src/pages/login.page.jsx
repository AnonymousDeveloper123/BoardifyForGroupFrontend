const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-form-container">
        <div className="language-selector">
          <img src="/image/left-icon.png" alt="UK Flag" className="flag-icon" />
          <span className="language-text">Eng</span>
          <span className="dropdown-icon">▼</span>
        </div>

        <div className="logo">
          <div>
            <img src="/image/Ellipse 1.png" alt="Boardify Logo" />
            <img src="/image/Vector 1.png" alt="Boardify Logo2" />
          </div>
          <h1>BOARDIFY</h1>
        </div>

        <form className="login-form">
          <div className="input-group">
           <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              defaultValue="ahsjajksa@gmail.com"
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
            <span className="show-password">
              <i className="eye-icon"></i>
            </span>
          </div>

          <div className="forgot-password">
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        <div className="google-login">
          <button type="button" className="google-login-button">
            <img src="/image/google.png" alt="Google Logo" />
            Login via Google
          </button>
        </div>
      </div>

      {/* Right Side - Image Section */}
      <div className="Right_side">
        <img src="/image/Rectangle 160@2x.png" alt="Right Picture" />
      </div>
    </div>
  );
};

export default LoginPage;
