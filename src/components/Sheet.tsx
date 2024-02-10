"use client";

import { getGoogleSheetData } from "@/app/libs/api-libs";
import { ChangeEvent, useEffect, useState } from "react";
import Pay from "./Pay";
import { payWeek } from "@/constant";
import { toast } from "sonner";
import SheetDataProps from "@/types/sheetData";
import Modal from "./Modal";

export default function Sheet() {
  const [data, setData] = useState<SheetDataProps[]>([]);
  const [error, setError] = useState<string>("");
  const [searchName, setSearchName] = useState("");
  const [foundName, setFoundName] = useState<SheetDataProps | null>(null);
  const [selectedWeek, setSelectedWeek] = useState<string | number>("");
  const [showModal, setShowModal] = useState(false);

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

    if (searchName === "") return toast.error("Masukkan nama dulu jonn");

    if (!foundItem) return toast.error("Nama tidak ditemukan");

    setFoundName(foundItem || null);
  };

  const handleWeekChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedWeek(e.target.value);
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchName(value);
    if (!value) {
      setFoundName(null);
    }
  };

  return (
    <>
      <div className="card-container border-2 border-solid border-violet-700 bg-white rounded-lg p-4 shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
        <div className="text-center mb-3 mt-1">
          <h1 className="text-xl font-bold">Pembayaran KAS 4 CC</h1>
        </div>
        <div className="flex rounded w-96 bg-slate-100 mb-4">
          <input
            type="text"
            placeholder="Cek namo dulu jon"
            value={searchName}
            onChange={handleNameChange}
            className="w-full border-none bg-transparent px-4 py-1 text-gray-900 outline-none focus:outline-none"
          />
          <button
            className="m-2 rounded bg-violet-700 px-4 py-2  text-white transition-transform hover:scale-105"
            onClick={handleSearch}
          >
            Cek
          </button>
        </div>
        {searchName && foundName && (
          <>
            <div className="rounded w-96 bg-slate-100">
              <select
                name="weeks"
                value={selectedWeek}
                onChange={handleWeekChange}
                className="bg-transparent border-none text-gray-900 outline-none focus:outline-none w-full p-4"
              >
                <option disabled value="">
                  Pilih Minggu
                </option>
                {payWeek.map((week, index) => (
                  <option
                    key={index}
                    value={week.value}
                    disabled={
                      foundName?.[
                        `minggu${week.value + 1}` as keyof SheetDataProps
                      ] === true
                    }
                  >
                    {week.name}{" "}
                    {foundName?.[
                      `minggu${week.value + 1}` as keyof SheetDataProps
                    ] === true
                      ? "✔"
                      : ""}
                  </option>
                ))}
              </select>
            </div>
            <Pay setShowModal={setShowModal} />
          </>
        )}
      </div>
      <span className="text-sm">
        Copyright © 2024 Built by <strong>Baloerdev</strong>
      </span>
      {showModal ? <Modal /> : ""}
    </>
  );
}
