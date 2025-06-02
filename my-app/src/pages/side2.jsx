import Input from "../components/input.jsx";
import Batman from "../assets/batman.jpg";
import Spay22 from "../assets/spay22.jpg";
import Spaay from "../assets/spaay.jpg";
import Big from "../assets/big.jpg";

export default function Side2() {
  const image = [Batman, Spay22, Spaay, Big];
  const title = ["THE", "SPIDER-MAN", "THE AMZING", "BIG"];
  const price = ["BATMAN", "INTO THE SPIDER-VERSE", "SPIDER-MAN", "HERO-6"];

  return (
    <div className="bg-white">
      <Input />
      <div className="relative flex flex-col items-center gap-10  justify-center bg-primary pt-10 py-8">
        <h2 className=" text-3xl font-bebas text-center  text-black">
          movie example
        </h2>
        <div className="flex flex-wrap gap-10 jus">
          {image.map((img, index) => (
            <div key={index} className="flex flex-col  items-center">
              <img
                src={img}
                alt={title[index]}
                className="w-[45vh] shadow-black shadow-2xl object-cover rounded-lg"
              />
              <p className="font-bold text-xl mt-2">{title[index]}</p>
              <p className="font-bold text-sm">{price[index]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
