"use client";

import SkeletonCard from "../components/SkeletonCard";
import { useEffect, useState } from "react";
import { Getrekomendasi } from "../api/Route";
import { useSearchParams } from "react-router-dom";

export default function RecommendationResult() {
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();

  const title = searchParams.get("title");

  useEffect(() => {
    if (!title) return;

    const loadHasil = async () => {
      setResults([]);
      setError("");
      setLoading(true);

      try {
        const data = await Getrekomendasi(title);
        console.log("isi data : ", data);
        if (!data || data.length === 0) {
          setError("Keyword tidak ditemukan");
        } else {
          setResults(data);
        }
      } catch (error) {
        setError("Terjadi kesalahan saat memuat rekomendasi");
      } finally {
        setLoading(false);
      }
    };

    loadHasil();
  }, [title]);

  return (
    <div className="w-[79rem] h-[170vh] -mt-24 bg-gray-100 flex flex-col items-center  py-24">
      <h1 className="text-3xl font-bold mb-10  text-center text-gray-800">
        Hasil Rekomendasi
      </h1>

      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-xl">
          {[...Array(6)].map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      )}

      {!loading && error && (
        <p className="text-red-500 text-center font-medium">{error}</p>
      )}

      {!loading && results.length > 0 && (
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-xl">
          {results.map((item, i) => (
            <div
              key={i}
              className="bg-white ml-10 rounded-2xl w-80 p-4 shadow hover:shadow-lg transition"
            >
              <p className="text-lg font-bold text-primary text-center text-gray-800">
                {item.title}
              </p>
              <p className="text-sm text-gray-600 mt-1 line-clamp-3">
                Rating {item.vote_average}
              </p>
              <p className="text-black text-sm mt-2">
                {" "}
                Genre : {item.genres}
              </p>
              <p className="text-black text-sm mt-2">
                {" "}
                Jumlah penonton : {item.popularity}
              </p>
              <p className="text-black text-sm mt-2">
                {" "}
                similarity : {item.score}
              </p>
            </div>
          ))}
        </div>
      )}

      {!loading && results.length === 0 && !error && (
        <p className="text-gray-500 text-center mt-8">
          Tidak ada hasil yang ditemukan.
        </p>
      )}
    </div>
  );
}
