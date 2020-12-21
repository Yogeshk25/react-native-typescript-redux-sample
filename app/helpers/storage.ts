import AsyncStorage from '@react-native-async-storage/async-storage';

export class Storage {
  
  private static instance = new Storage();
  static get getInstance(): Storage {
    return Storage.instance;
  }

  async save(key: string, value: string) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.error(e);
    }
  }

  async get(key: string): Promise<string | null> {
    try {
      return AsyncStorage.getItem(key);
    } catch (e) {
      console.error(e);
    }
    return null;
  } 
}
