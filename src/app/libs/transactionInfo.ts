import {v4 as uuidv4} from "uuid"

export const transaction = {
    name: "Kas 4 CC",
    price: 5000,
    order_id: uuidv4(),
    gross_amount: 5000 * 1
}