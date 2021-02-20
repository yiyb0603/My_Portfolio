export const getStorage = (key: string): string | null => {
  return localStorage.getItem(key);
}

export const setStorage = (key: string, value: any): void => {
  localStorage.setItem(key, value);
}