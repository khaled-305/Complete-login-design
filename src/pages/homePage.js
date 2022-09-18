import * as React from "react";
import Form from "../components/Form";

function Home() {
  return (
    <main className="bg-white font-family-karla h-screen">
      <div className="w-full flex flex-wrap">
        {/** Left Side */}
        <div className="w-full md:w-3/5 flex flex-col md:my-10">
          <section className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            {/** Signup Form */}
            <Form />
          </section>
        </div>

        {/** Right Side */}
        <div className="hidden md:block w-2/5 bg-blue-600">
          <section className="w-3/5 m-auto mt-[250px] mb-[100px]">
            <h1 className="text-white text-2xl font-bold text-center">
              Dummy Heading
            </h1>
            <p className="text-gray-300 text-l mt-[65px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Home;
