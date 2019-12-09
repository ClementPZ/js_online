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

// COPY PASTE TO LEARN JS ONLINE
const baseUrl = "https://api.learnjavascript.online/demo/";
const endPoint = "shopping-list.json";
const form = document.querySelector("#add-item-form");
const ul = document.querySelector("#shopping-list");
const API = new Backend;
API.setBaseUrl(baseUrl);

const displayItem = item => {
    // display the item (string) in the shopping-list element
    ul.insertAdjacentHTML('beforeend', `<li>${item}</li>`);
}

const addItem = item => {
    // send the item (string) to the API + and display it in the shopping list
    API.post(endPoint, item)
    .then(displayItem(item));
}


const initShoppingList = () => {
    // get list of existing items and display them
    API.get(endPoint)
    .then(data => data.forEach(el => displayItem(el)));

    // call the addItem(item) method when a user submits the add-item-form
    form.addEventListener('submit', event => {
      event.preventDefault();
      let toAdd = document.querySelector("#item-name");
      addItem(toAdd.value)
      toAdd.textContent = "";
    })
}

//sample usage (do not remove)
initShoppingList();
