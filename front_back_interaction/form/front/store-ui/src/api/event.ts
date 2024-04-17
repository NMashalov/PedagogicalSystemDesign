export const eventAPI = {
    baseURL:  "https://yourdomain.com/api/v1",

    headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    

    getAll: async function () {
        const response = await fetch(
            this.baseURL,{
          method: "GET",
        })
    
        return response.json()
    },

    postAll: async function (data: object){
        fetch(
            this.baseURL,
            {
            body: JSON.stringify(data),
            } 
        )
    }
}