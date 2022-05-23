import React from "react";

const Login = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="shadow-xl border border-slate-500 p-10 rounded-md max-w-2xl">
        <h3 className="text-3xl">Login Here</h3>
        <form>
          <div>
            <label htmlFor="email" className="block">
              Email
            </label>
            <input type="email" name="email" id="email" className="w-full " />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
