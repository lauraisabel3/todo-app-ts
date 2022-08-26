import { useEffect, useState } from "react";

const useLocalStorage = (itemName, initialValue) => {
  const [sincronizeItem, setSincronizeItem] = useState(true)
  const [item, setItem] = useState(initialValue)
  const [error, setError] = useState(false)

  useEffect(() => {
    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;

    if(!localStorageItem) {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItem = initialValue;
    } else {
      parsedItem = JSON.parse(localStorageItem)
    }
    setItem(parsedItem)
    setSincronizeItem(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sincronizeItem]);

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem)
      localStorage.setItem(itemName, stringifiedItem)
      setItem(newItem)
    } catch(error) {
      setError(error)
    }
  }

  return {
    item,
    saveItem,
    error,
    sincronizeItem
  }
}

export default useLocalStorage