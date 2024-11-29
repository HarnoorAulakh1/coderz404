import Form from "./form";
import React, { useEffect } from "react";
import { useContext} from "react";
import { userContext } from "../context/profile";
import Profile from "../components1/profile";

export default function Auth() {
  const { user } = useContext(userContext);
  //console.log(user.email);
  useEffect(() => {
    console.log("logged out", user);
  }, [user]);
  return (
    <div key={user._id}>
      {(user._id != undefined && user._id!="") ? (
        <Profile user={user} />
      ) : (
        <div
          style={{
            backgroundImage: `url(/download.svg)`,
          }}
          className="flex h-full w-full  items-center justify-center"
        >
          <div className="flex h-full w-[80%]  flex-row justify-center">
            <div className="relative top-[5rem] flex w-full flex-col gap-2">
              <h1 className="whitespace-pre-line text-8xl font-bold text-black">
                Welcome to HerCraft Hub{" "}
              </h1>
            </div>
            <Form />
          </div>
        </div>
      )}
    </div>
  );
}
