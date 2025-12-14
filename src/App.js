import { useState } from "react";
import "./App.css";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="container">
      <div className={`tile ${isLogin ? "login-active" : "signup-active"}`}>
        {/* Left Side */}
        <div className="left-side">
          {isLogin ? (
            <form>
              <h2>Login</h2>
              <div className="input-group">
                <input type="text" required />
                <label>Username</label>
              </div>
              <div className="input-group">
                <input type="password" required />
                <label>Password</label>
              </div>
              <button type="submit">Login</button>
              <p className="switch-text">
                Don't have an account?{" "}
                <span className="switch-link" onClick={handleToggle}>
                  Sign Up
                </span>
              </p>
            </form>
          ) : (
            <div className="welcome-text">
              <h2>Welcome</h2>
              <p>Create your account and join us!</p>
            </div>
          )}
        </div>

        {/* Right Side */}
        <div className="right-side">
          {isLogin ? (
            <div className="welcome-text">
              <h2>Welcome Back</h2>
              <p>We missed you! Login to continue.</p>
            </div>
          ) : (
            <form>
              <h2>Sign Up</h2>
              <div className="input-group">
                <input type="text" required />
                <label>Name</label>
              </div>
              <div className="input-group">
                <input type="email" required />
                <label>Email</label>
              </div>
              <div className="input-group">
                <input type="password" required />
                <label>Password</label>
              </div>
              <button type="submit">Sign Up</button>
              <p className="switch-text">
                Already have an account?{" "}
                <span className="switch-link" onClick={handleToggle}>
                  Login
                </span>
              </p>
            </form>
          )}
        </div>

        {/* Diagonal overlay */}
        <div className="diagonal-overlay"></div>
      </div>
    </div>
  );
}

export default App;
