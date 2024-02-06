async function getGoogleSheetData() {
    try {
        const response = await fetch("http://localhost:3000/api/sheet", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        })

        const data = response.json()
        return data
    } catch (error: any) {
        console.log(error.message);
    }
} 

async function updateGoogleSheetData(data: any) {
    try {
        const response = await fetch("http://localhost:3000/api/sheet/update", {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        })

        return response.json()
    } catch (error: any) {
        console.log(error.message);
    }
}

async function transactionProcess(data: any) {
    try {
        const response = await fetch("http://localhost:3000/api/midtrans/transaction-process", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            }
        })

        return response.json()
    } catch (error: any) {
        console.log(error.message);
    }
}

export {getGoogleSheetData, updateGoogleSheetData, transactionProcess}

