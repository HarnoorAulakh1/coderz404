import React from "react";
import { Breadcrumb } from "../components";

const About = () => {
  return (
    <section className="px-8">
      <Breadcrumb title="About" />
      <div className="flex flex-row justify-center">
        <div className="md:w-1/2">
          <h1 className="mb-4 text-3xl font-bold text-gray-800 ">About Us</h1>
          <p className="mb-4 text-2xl text-gray-600	">
            HerCraft-Hub is a platform for empowering housewives by providing
            them a platform leveraging their skills to provide them with the
            recognition they deserve. In our society, majority of the housewives
            are unable to show their skills, our project will provide a platform
            to such women to monetize and validate such skills and develop a
            community of such skilled housewives. We aim to outline the
            project’s scope, project’s objectives, the planning involved and key
            tasks to be undertaken.
          </p>
        </div>
        <div className="mt-8 md:mt-0 md:ml-8 md:w-1/2">
          <img
            src="https://imagedelivery.net/0ObHXyjKhN5YJrtuYFSvjQ/i-8cbfc226-54ef-44a1-98ac-51998cc8eca1-abstract-woman-in-yellow-oil-painting-print-modern-themed-art-yellow-white-5x7-paintings-by-simon/display"
            alt="About Us"
            className="h-auto w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
