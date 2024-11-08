import React, { useContext, useState } from "react";
import { useNotify } from "reactjs-notify-toast";
import { useNavigate } from "react-router-dom";
import { userContext } from "../context/profile";

function Form() {
  const [state, set] = useState(true);
  return <>{state ? <Login setter={set} /> : <Signup setter={set} />}</>;
}

function Signup({ setter }) {
  async function handle(e) {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);
    const response = await fetch("http://localhost:4000/user/register", {
      method: "POST",
      body: JSON.stringify({
        username: data.get("username"),
        password: data.get("password"),
        email: data.get("email"),
        firstName: data.get("firstName"),
        lastName: data.get("lastName"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    if (response.status == 200) alert("Account created successfully");
    else alert(JSON.stringify(await response.json()));
    e.target.reset();
  }
  return (
    <div className="h-max w-[60%] rounded-md bg-white p-10">
      <h1 className="mb-[3rem] text-xl font-bold">Create an account</h1>
      <form className="flex flex-col gap-[2rem] font-light" onSubmit={handle}>
        <div className="flex flex-col">
          <label htmlFor="">
            Username <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            placeholder="Username"
            name="username"
            className="rounded-md border-[1px] border-[#474f5d] p-2"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">
            Password <span className="text-red-600">*</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="rounded-md border-[1px] border-[#474f5d] p-2"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">
            Email <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="rounded-md border-[1px] border-[#474f5d] p-2"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">
            First name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            className="rounded-md border-[1px] border-[#474f5d] p-2"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">
            Last name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            className="rounded-md border-[1px] border-[#474f5d] p-2"
            required
          />
        </div>

        <div className="flex flex-row items-center justify-between text-sm font-light">
          <button className="w-max rounded-md bg-[#156ff6] py-2 px-4 text-white">
            Register
          </button>
          <span className="text-[#165fd4]" onClick={() => setter((x) => !x)}>
            Back to Login
          </span>
        </div>
      </form>
    </div>
  );
}

function Login({ setter }) {
  const router = useNavigate();
  const { show } = useNotify();
  const {dispatch}=useContext(userContext);
  async function handle(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const keys = data.keys();
    const response = await fetch("http://localhost:4000/user/login", {
      method: "POST",
      body: JSON.stringify({
        username: data.get("username"),
        password: data.get("password"),
      }),   
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const res = await response.json();
    console.log(res.status);
    if (res.status) {
      console.log(`Logged in as ${res.username}`);
      show(`Logged in as ${res.username}`, "success");
      dispatch(res);
      console.log(res);
      router("/");
    }
  }
  return (
    <div className="h-max w-[60%] rounded-md bg-white p-10">
      <h1
        className="mb-[3rem] text-xl font-bold"
        onClick={() => show("hello", "success")}
      >
        Login
      </h1>
      <form
        className="flex flex-col gap-[2rem] font-light"
        onSubmit={(e) => handle(e)}
      >
        <div className="flex flex-col">
          <label htmlFor="">
            Email or Username <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="rounded-md border-[1px] border-[#474f5d] p-2"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">
            Password <span className="text-red-600">*</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="rounded-md border-[1px] border-[#474f5d] p-2"
            required
          />
        </div>
        <div className="flex flex-row items-center justify-between text-sm font-light">
          <button
            type="submit"
            className="w-max rounded-md bg-[#156ff6] py-2 px-4 text-white"
          >
            Login
          </button>
          <div>
            New here?
            <span className="text-[#165fd4]" onClick={() => setter((x) => !x)}>
              Create an account
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
