import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  listOfLists = [];
  // list: { title: string; tasks: string[]; finishedTasks: string[] };
  constructor() {}
  saveDataToLocalStorage(data: any[], key: string) {
    const jsonData = JSON.stringify(data);
    localStorage.setItem(key, jsonData);
  }

  getDataFromLocalStorage(key: string): any[] {
    const jsonData = localStorage.getItem(key);
    if (jsonData) {
      return JSON.parse(jsonData);
    } else {
      return [];
    }
  }
}
