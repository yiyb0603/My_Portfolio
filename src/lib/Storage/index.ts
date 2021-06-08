class Storage {
  public static getStorage(key: string): string | null {
    return localStorage.getItem(key);
  }
  
  public static setStorage(key: string, value: any): void {
    localStorage.setItem(key, value);
  }
}

export default Storage;