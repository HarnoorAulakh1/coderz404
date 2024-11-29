import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { userContext } from "../context/profile";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = ({ user }) => {
  const { username, email, firstName, lastName } = user;
  const { dispatch } = useContext(userContext);
  const router = useNavigate();
  function logout() {
    axios.post("/api/user/logout").then((res) => {
      //console.log(res);
      dispatch({});
    });
  }

  return (
    <div className="flex flex-row justify-center p-5">
      <div className="rounded-l-[2rem] bg-gray-100 p-5">
        <img
          src="./pretty.jpg"
          alt=""
          className="h-[5rem] w-[5rem] rounded-[5rem]"
        />
      </div>
      <div className=" max-w-sm rounded-r-[2rem] bg-gray-100 p-6 p-5 shadow-md">
        <h2 className="mb-4 text-center text-xl font-bold">User Profile</h2>
        <div className="mb-4">
          <label className="block font-semibold text-gray-700">Username:</label>
          <p className="text-gray-800">{username}</p>
        </div>
        <div className="mb-4">
          <label className="block font-semibold text-gray-700">Email:</label>
          <p className="text-gray-800">{email}</p>
        </div>
        <div className="mb-4">
          <label className="block font-semibold text-gray-700">
            First Name:
          </label>
          <p className="text-gray-800">{firstName}</p>
        </div>
        <div className="mb-4">
          <label className="block font-semibold text-gray-700">
            Last Name:
          </label>
          <p className="text-gray-800">{lastName}</p>
        </div>
        <button
          className="rounded-md border-2 border-black px-5"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
