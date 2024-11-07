import Form from "./form";
import React from "react";

export default function Auth() {
  return (
    <div
      style={{
        backgroundImage: `url(/download.svg)`,
      }}
      className="flex h-full w-full  items-center justify-center"
    >
      <div className="flex w-[80%] flex-row  justify-center h-full">
        <div className="flex flex-col gap-2 w-full relative top-[5rem]">
          <h1 className="whitespace-pre-line text-8xl font-bold text-black">
            Welcome to HerCraft Hub{" "}
          </h1>
        </div>
        <Form />
      </div>
    </div>
  );
}
