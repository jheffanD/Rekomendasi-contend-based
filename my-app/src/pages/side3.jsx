import Big from "../assets/big.jpg";
import Spay22 from "../assets/spay22.jpg";

export default function Side3() {
  return (
    <div className="h-auto w-auto flex my-10 items-center bg-gray-300 justify-center">
      <div className="bg-primary my-10 rounded-lg shadow-lg h-[610px] w-[1200px]">
        <div className="h-[600px] w-[1200px] flex flex-col justify-center items-center px-32 ">
          <h2 className=" text-3xl font-bebas text-center  text-black">
            Movie Sinopsis
          </h2>
          <div className="self-start ">
            <img
              src={Big}
              alt={"Big Hero 6"}
              className="w-[45vh] rounded-lg shadow-black shadow-2xl"
            />
            <p className="font-extrabold font-archivo text-xl mt-2">
              BIG HERO 6
            </p>
            <p className="font-bold text-sm text-black">
              Hiro, bocah genius, harus melewati <br /> tragedi kematian
              kakaknya. Kini, <br /> bersama teman-temannya yang ia ubah <br />{" "}
              menjadi suprhero berteknologi tinggi, <br /> dan Baymax, robot
              tiup, ia harus <br />
              menyelamatkan kota.
            </p>
          </div>
          <div className="self-end -mt-[35rem]">
            <p className="font-bold text-xl mt-2">SPIDERMAN</p>
            <p className="font-bold text-sm text-black mb-2">
              Spider-Man melintasi dimensi paralel <br /> dan bekerja sama
              dengan Spider-Men <br /> dari dimensi-dimensi tersebut untuk{" "}
              <br /> menghentikan ancaman terhadap <br /> semua realitas.
            </p>
            <img
              src={Spay22}
              alt={"Big Hero 6"}
              className="w-[45vh] rounded-lg shadow-black shadow-2xl "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
