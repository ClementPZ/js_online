// class Backend {
//     constructor() {
//         this.baseUrl = '';
//     }
//     setBaseUrl(url) {
//         this.baseUrl = url;
//     }
//     async function get(endpoint) {
//         const fetched = await fetch(this.baseUrl + endpoint);
//         const data = await fetched.json();
//         return data;
//     }
// }

// //sample usage
// const API = new Backend();
// API.setBaseUrl("https://api.learnjavascript.online/demo");

// API.get("/notifications/new.json")
// .then(data => {
//     console.log(data.count);
// });


class Backend {
    constructor() {
        this.baseUrl = '';
    }
    setBaseUrl(url) {
        this.baseUrl = url;
    }
    async get(endpoint) {
        const response = await fetch(this.baseUrl + endpoint)
        return await response.json();
    }
}

// Refactor the getWeather() function such that it keeps the same 
// logic but lets us read the code line by line.

const getWeather = async () => {
    const API = new Backend();
    API.setBaseUrl("https://api.learnjavascript.online/demo");
    
    const getFromApi = await API.get("/notifications/new.json");
    return getFromApi.count;
}

//sample usage (do not remove)
getWeather();

