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



// COPY PASTE TO LEARNJSO
const displayItem = item => {
    // display the item (string) in the shopping-list element

}

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
