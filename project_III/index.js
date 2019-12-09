class Backend {
  constructor() {
    this.baseUrl = "";
  }

  setBaseUrl(baseUrl) {
    this.baseUrl = baseUrl;
  }

  getBaseUrl() {
    return this.baseUrl;
  }

  get(endpoint) {
    return fetch(this.baseUrl + endpoint).then(response => response.json());
  }

  post(endpoint, data = {}) {
    return fetch(this.baseUrl + endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(response => response.json());
  }
}

// COPY PASTE TO LEARNJSONLINE
const baseUrl = "https://api.learnjavascript.online/demo/";
const endPoint = "shopping-list.json";
const form = window.document.querySelector("#add-item-form");
const ul = window.document.querySelector("#shopping-list");
const API = new Backend;

const displayItem = item => {
    // display the item (string) in the shopping-list element
    API.setBaseUrl(baseUrl);
    API.get(endPoint)
    .then(data => {
      console.log(data);
    })
}

displayItem("banana");
/**
 * @param {string} item
 */
const addItem = item => {
    // send the item (string) to the API
    // and display it in the shopping list

}

const initShoppingList = () => {
    // get list of existing items and display them

    // call the addItem(item) method when a user submits the add-item-form

}


//sample usage (do not remove)
initShoppingList();
