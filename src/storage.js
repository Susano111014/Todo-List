export {TodoListStorage};

function TodoListStorage() {
  return {
    SavesItems, LookUpStorage,
    RemoveItem, objToJson, transformToCode
  };
};

const SavesItems = (key, item) => {
  if (storageAvailable('localStorage')) {
    localStorage.setItem(key, item);
  } else
    console.log("I'm afraid that your browser doesn't support LocalStorage or your space has been filled");
}

const LookUpStorage = (key) => {
  const itemRetrieved = localStorage.getItem(key);
  if (itemRetrieved) {
    console.log(`Item: ${itemRetrieved} gotted`)
  } else
    console.log(`the ${key} item not exist`)
  return itemRetrieved
};

const RemoveItem = (key) => localStorage.removeItem(key);

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

function FuncToJson(obj) {
  for (const func in obj) {
    if (typeof obj[func] === 'function') {
      obj[func] = obj[func].toString();
      console.log(obj[func]);
    }
  }
}

function objToJson(object) {
  FuncToJson(object);
  const myObjJson = JSON.stringify(object);
  console.log(myObjJson);
  return myObjJson
}

function transformToCode(object) {
  const obj = JSON.parse(object)
  for (const func in obj) {
    if (obj[func] !== false && obj[func].includes("function")) {
      obj[func] = eval("(" + obj[func] + ")");
      console.log(obj[func]);
    }
  }
  return obj
}