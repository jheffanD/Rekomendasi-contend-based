"use client";

import { PlaceholdersAndVanishInput } from "../components/ui/placeholders-and-vanish-input.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PlaceholdersAndVanishInputDemo() {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const placeholders = [
    "Spider-Man 3",
    "The Specials",
    "The One",
    "Pirates of the Caribbean: At World's End",
    "The Hobbit: The Battle of the Five Armies",
  ];

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (title.trim() === "") return;
    navigate(`/result?title=${encodeURIComponent(title)}`);
    console.log("submitted");
  };

 

  return (
    <div className="h-[15rem] flex flex-col justify-center items-center px-4">
      <h2 className="text-xl text-center font-bebas text-primary text-black">
        Masukan Judul Film
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        value={title}
        onSubmit={onSubmit}
      />
      <p className="text-red-600 text-center font-thin font-sans italic mt-1">
        Contoh keyword : Spider-Man 3
      </p>
    </div>
  );
}
