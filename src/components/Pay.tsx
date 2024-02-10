"use client"

import { transactionProcess } from "@/app/libs/api-libs"
import { transaction } from "@/app/libs/transactionInfo"
import React from "react";

interface ModalProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Pay({setShowModal}: ModalProps) {
    // const pay = async () => {
    //     let data = {
    //         name: transaction.name,
    //         price: transaction.price,
    //         order_id: transaction.order_id,
    //         gross_amount: transaction.gross_amount
    //     }

    //     try {
    //         const response = await transactionProcess(data)
    //         console.log(response.data.token);
            
    //         ;(window as any).snap.pay(response.data.token)
    //     } catch (error: any) {
    //         console.log(error.message);
            
    //     }
    // }
    return (
        <div className="w-96 mt-4">
        <button
          className="w-full rounded bg-violet-700 px-4 py-2 text-white transition-transform hover:scale-105"
          onClick={() => setShowModal(true)}
        >
          Bayar
        </button>
      </div>
    )
}