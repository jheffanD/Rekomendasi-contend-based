export default function Side4() {
  return (
    <div className="h-auto w-auto flex my-10 items-center rounded-lg bg-gray-300 justify-center ">
      <div className="bg-white my-10 rounded-lg shadow-lg h-[450px] w-[1200px] ">
        {/* <div className="h-[600px] w-[1200px] flex justify-center items-center px-32  "> */}
        <h2 className=" text-9xl font-bebas text-center self-start mt-5 text-primary  ">
          ABOUT
        </h2>
        <div className="flex items-center justify-center  ">
          <p className="text-2xl font-archivo text-center self-start mt-5 text-black">
            This is a movie recommendation application that provides users with{" "}
            <br />
            personalized movie suggestions based on their preferences. The app{" "}
            <br />
            features a user-friendly interface, allowing users to easily <br />
            navigate through different sections, including movie examples,{" "}
            <br />
            sinopsis, and more. It utilizes advanced algorithms to analyze user{" "}
            <br />
            input and deliver tailored recommendations, enhancing the overall{" "}
            <br />
            movie-watching experience.
          </p>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
