export default async function getGoogleSheetData() {
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