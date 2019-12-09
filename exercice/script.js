//HEY

// // function(getStatus from object message) {
//     function getStatus(host, user, booking) {
//         const message = {
//             "pending": `Hey ${user}, we're awaiting confirmation from ${host}`,
//             "confirmed": `Hey ${user}, ${host} is excited to be hosting you!`,
//             "canceled": `Unfortunately ${user}, ${host} has canceled your booking request`,
//             "done": `${host} hopes you had a great stay!`
//         }
//         return message[booking.status];
//     }

//     const game = {
//         count: 0
//     }
//     console.log(game.count?) || "Game not started yet");
//     //sample usage
//     const booking1 = {
//         status: "pending"
//     };
//     console.log(getStatus("John", "Blane", booking1));
//     const booking2 = {
//         status: "confirmed"
//     }
//     console.log(getStatus("John", "Blane", booking2));
// // }

// // function(getErrorMessage from object message)
//   const getErrorMessage = statusCode => {
//       const message = {
//           401: "Unauthorized",
//           404: "Not found"
//       }
//       return message[statusCode] || "Unexpected error has occurred";
//   };


//   //sample usage
//   console.log(getErrorMessage(401));
//   console.log(getErrorMessage(404));
//   console.log(getErrorMessage(410));
//   console.log(getErrorMessage(500));
// // }

// // function(parsing JSON)
//   const willItRain = weather_api_result => {
//       const weather = JSON.parse(weather_api_result);
//       return weather["now"]["rainExpected"];
//   }
//   //sample usage
//   console.log(willItRain('{"now":{"temperature":18,"humidity":"90%","uvIndex":0,"rainExpected":false}}'));
// // }

// // function(stringify object to JSON)
//   const prepareStatus = (status, location) => {
//       const userId = 42;
//       const data = {
//           userId,
//           status,
//           location
//       };
//       const jsonString = JSON.stringify(data);
//       return jsonString;
//   }
//   //sample usage
//   console.log(prepareStatus("My first post!", "Amsterdam"));
// // }

// // function(delay to execute code)
//   const greetInTwoSeconds = () => {
//       setTimeout( () => {
//           console.log("Hello World!");
//       }, 2000);
//   }
//   //sample usage
//   greetInTwoSeconds();
// // }

// // function(delay wth promise and wait)
//   const wait = delay => {
//       return new Promise(resolve => {
//           setTimeout(() => {
//               resolve();
//           }, delay);
//       });
//   }

//   const delayedGreeting = () => {
//       //delay this 1 second using wait()
//       wait(1000).then(console.log("This is delayed"));
// // }

// const promesse = new Promise(
//     res => setTimeout(() => res(), 1000)
// );
// console.log(promesse);

// const wait = delay => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve();
//         }, delay);
//     });
// }

// const delayedGreeting = (result) => {
//     //delay this 1 second using wait() and handle errors
//     wait(1000)
//     .then( () => {
//         console.log("This is delayed");
//         })
//     .catch( () => {
//         console.log ("There has been an error");
//     })
// };

// //sample usage
// delayedGreeting();


// fetch("https://api.learnjavascript.online/demo/chapters/all.json")

// const fetch = new Promise ((resolve, reject) => {
//   resolve([{"id":1,"title":"Basic Functions","is_completed":true},{"id":2,"title":"Strings","is_completed":true},{"id":3,"title":"Numbers","is_completed":false},{"id":4,"title":"Variables","is_completed":true},{"id":5,"title":"Conditions","is_completed":false}]);
//   reject(console.log("sorry, an error occured"))
// });

// console.log(fetch);
// const getChapters = () => {
//     fetch
//     .then(data => data.filter(object => object.is_completed))
//     .then(chapters => displayCompletedChapters(chapters))
//     .catch(err => console.log(err))
// };

// function displayCompletedChapters(chapters) {
//   console.log(chapters);
// }

// console.log(getChapters());

// require('es6-promise').polyfill();
// require('isomorphic-fetch');

// class Backend {
//     //do not modify the constructor
//     constructor(){
//         this.baseUrl = '';
//     }
//     setBaseUrl(url) {
//         return this.baseUrl = url;
//     }
//     getBaseUrl() {
//         return this.baseUrl;
//     }
//     get(endpoint) {
//         const fetchGet = fetch(`${this.getBaseUrl()}${endpoint}`)
//         .then(res => res.json());
//         return fetchGet;
//     }
//     post(endpoint, object) {
//       const fetchPost = fetch(`${this.getBaseUrl()}${endpoint}`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(object)
//       })
//       .then(res => res.json());
//       return fetchPost;
//     }
// }
// //sample usage
// const API = new Backend();
// API.setBaseUrl("https://api.learnjavascript.online/demo");
// API.get("/notifications/new.json")
// .then(data => {
//     console.log(data.count);
// })
// API.post("/food.json", {
//     food: "Pasta"
// })
// .then(data => {
//     console.log(data);
// })


// const getAmsterdamWeather = () => {
//     // create a new instance of Backend and set the base url
//     const amsterdamWeather = new Backend();
//     amsterdamWeather.setBaseUrl("https://api.learnjavascript.online/demo");
//     amsterdamWeather.get("/weather/amsterdam.json")
//     .then(data => console.log(data.description));
//     return amsterdamWeather;
// }

// getAmsterdamWeather();



// const getFooterElement = () => {
//     const footer = document.querySelector(".footer");
//     return footer;
// }

// // EVENT LISTENER Click
//   const button = document.querySelector("#my-button");
//   button.addEventListener("click", () => {
//       button.innerText = "Loading..."
//   });


// const initValidation = () => {
//     const textBox = document.querySelector("#user-address");
//     textBox.addEventListener("focus", event => );
// }
// //sample usage
// initValidation();

const initValidation = () => {
    const textBox = document.querySelector("#user-address");
    textBox.addEventListener("focus",


//  conditionFocus());
}

// function conditionFocus() {
//     const textBox = document.querySelector("#user-address");
//     if (textBox.textContent === "") {
//         textBox.classList.add("error");
//     } else {
//         textBox.classList.add("success");
//     }
// }
// //sample usage
// initValidation();




