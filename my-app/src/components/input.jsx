"use client";

import { PlaceholdersAndVanishInput } from "../components/ui/placeholders-and-vanish-input.jsx";

export default function PlaceholdersAndVanishInputDemo() {
  const placeholders = [
    "Spider-Man 3",
    "The Specials",
    "The One",
    "Pirates of the Caribbean: At World's End",
    "The Hobbit: The Battle of the Five Armies",
  ];

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="h-[15rem] flex flex-col justify-center  items-center px-4">
      <h2 className="text-xl text-center font-bebas text-primary text-black">
        Masukan Judul Film
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
