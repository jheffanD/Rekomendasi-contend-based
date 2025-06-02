"use client";
import { DirectionAwareHover } from "../components/ui/direction-aware-hover";
import Batman from "../assets/batman.jpg";
import Spay22 from "../assets/spay22.jpg";
import Spaay from "../assets/spaay.jpg";
import Big from "../assets/big.jpg";

export default function DirectionAwareHoverDemo() {
  const image = [Batman, Spay22, Spaay, Big];
  const title = ["Batman", "Spay22", "Spaay", "Big"];
  const price = ["$10.99", "$12.99", "$8.99", "$15.99"];

  return (
    <div className=" relative flex gap-4 items-center justify-center p-4">
      {image.map((img, index) => (
        <DirectionAwareHover key={index} imageUrl={img}>
          <p className="font-bold text-xl">{title[index]}</p>
          <p className="font-normal text-sm">{price[index]}</p>
        </DirectionAwareHover>
      ))}
    </div>
  );
}
