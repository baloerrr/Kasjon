"use client";

import { getGoogleSheetData } from "@/app/libs/api-libs";
import { useEffect, useState } from "react";
import Pay from "./Pay";
import { payWeek } from "@/constant";

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
  const [foundName, setFoundName] = useState<SheetData | null>(null);
  const [selectedWeek, setSelectedWeek] = useState<string | number>("");

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

  const handleWeekChange = (e: any) => {
    setSelectedWeek(e.target.value);
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
        <>
          <div className="rounded w-96 bg-white">
            <select
              name="weeks"
              value={selectedWeek}
              onChange={handleWeekChange}
              className="bg-transparent border-none text-gray-900 outline-none focus:outline-none w-full p-4 "
            >
              <option disabled value="">
                Pilih minggu
              </option>
              {payWeek.map((week, index) => (
                <option
                  key={index}
                  value={week.value}
                  disabled={
                    foundName?.[
                      `minggu${week.value + 1}` as keyof SheetData
                    ] === true
                  }
                >
                  {week.name}
                </option>
              ))}
            </select>
          </div>
          <Pay />
        </>
      )}
    </>
  );
}
