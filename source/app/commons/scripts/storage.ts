const add = (key: string, value: unknown) =>
  chrome.storage.sync.set({ [key]: value });

const retrieve = async (key: string) =>
  (await chrome.storage.sync.get(key))?.[key];

const remove = (key: string) => {
  return chrome.storage.sync.remove(key);
};

const listenToChange = (callback: VoidFunction) => {
  chrome.storage.onChanged.addListener(callback);
};

const unListenToChange = (callback: VoidFunction) => {
  chrome.storage.onChanged.removeListener(callback);
};

const storage = {
  add,
  update: add,
  retrieve,
  remove,
  listenToChange,
  unListenToChange,
};

export default storage;
