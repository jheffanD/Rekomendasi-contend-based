import Back from "../assets/bg.jpg";
import Navbar from "../component/navbar.jsx";
import Name from "../component/name.jsx";
const Side1 = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Back})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div className="h-full w-full">
        <Navbar />
        <Name />
      </div>
      
    </div>
  );
};

export default Side1;
