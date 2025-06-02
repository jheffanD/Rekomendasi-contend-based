import Back from "../assets/bg.jpg";
import Navbar from "../components/navbar.jsx";
import Name from "../components/name.jsx";

const Side1 = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Back})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "98.80vw",
        height: "100vh",
      }}
      className="-mt-24 border"
    >
      <div className="h-full w-full">
        {/* <Navbar /> */}
        <Name />
      </div>
    </div>
  );
};

export default Side1;
