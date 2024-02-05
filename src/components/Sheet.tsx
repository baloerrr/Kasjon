"use client";

import getGoogleSheetData from "@/app/libs/api-libs";
import { useEffect, useState } from "react";

interface SheetData {
  nama: string;
  harga: number;
  jumlahBayar: number;
  total: number;
  minggu1: boolean;
  minggu2: boolean;
  minggu3: boolean;
  minggu4: boolean;
  minggu5: boolean;
  minggu6: boolean;
  minggu7: boolean;
  minggu8: boolean;
  minggu9: boolean;
  minggu10: boolean;
  minggu11: boolean;
  minggu12: boolean;
}

export default function Sheet() {
  const [data, setData] = useState<SheetData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [searchName, setSearchName] = useState("");
  const [foundName, setFoundName] = useState<SheetData | null>(null); // Explicitly specify the type

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getGoogleSheetData();
        console.log(res.data);
        setData(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data");
      }
    };

    fetchData();
  }, []);

  const handleSearch = () => {
    const upperCaseSearch = searchName.toUpperCase();
    const foundItem: any = data.find(
      (item) => item.nama.toUpperCase() === upperCaseSearch
    );
    console.log(foundItem);

    setFoundName(foundItem);
  };

  const handlePayment = () => {
    console.log(`Payment for ${foundName?.nama}`);
  };

  return (
    <>
      {data && (
        <div className="flex rounded w-96 bg-white">
          <input
            type="text"
            placeholder="Cek namo dulu jon"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            className="w-full border-none bg-transparent px-4 py-1 text-gray-900 outline-none focus:outline-none"
          />
          <button
            className="m-2 rounded bg-violet-700 px-4 py-2 text-white"
            onClick={handleSearch}
          >
            Check
          </button>
        </div>
      )}
      {searchName && foundName && (
        <div className="w-96">
          <button
            className="w-full rounded bg-violet-700 px-4 py-2 text-white"
            onClick={handlePayment}
          >
            Pay
          </button>
        </div>
      )}
    </>
  );
}
