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

// API.setBaseUrl(baseUrl);
// API.get(endPoint)
// .then(data => {
//   const filtered = data.find(el => el.item === item);
//   const liDiv = document.createElement('li');
//   console.log(filtered.item);
//   liDiv.textContent = filtered.item;
//   ul.insertAdjacentElement('beforeend', liDiv);
// })


// COPY PASTE TO LEARN JS ONLINE
const baseUrl = "https://api.learnjavascript.online/demo/";
const endPoint = "shopping-list.json";
const form = document.querySelector("#add-item-form");
const ul = document.querySelector("#shopping-list");
const API = new Backend;

const displayItem = item => {
    // display the item (string) in the shopping-list element
    ul.insertAdjacentHTML('beforeend', `<li>${item}</li>`);
}

displayItem("Pomme de pain");


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
