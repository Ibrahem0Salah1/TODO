import { Component, Output } from '@angular/core';
import { DataServiceService } from '../data-service.service';
@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent {
  lists = [
    {
      id: 1,
      title: 'Today',
      tasks: ['study', 'pray', 'do shopping', 'end exam'],
      finishedTasks: [],
    },
    {
      id: 2,
      title: 'Grocries',
      tasks: ['banana', 'apple', 'onion', 'tomatoes'],
      finishedTasks: [],
    },
  ];
  // getDataFromService() {
  // }
  constructor(private dService: DataServiceService) {
    this.lists = this.dService.getDataFromLocalStorage('listOfLists');
  }

  // addingList
  addList() {
    this.lists.push({
      id: this.lists.length + 1,
      title: '',
      tasks: [],
      finishedTasks: [],
    });

    this.dService.saveDataToLocalStorage(this.lists, 'listOfLists');
    console.log(this.lists);
    console.log(this.dService.getDataFromLocalStorage('listOfLists'));
  }

  // MODAL
  selectedList: any;
  goForIt: boolean = false;
  openModal(list: any) {
    this.goForIt = true;
    this.selectedList = list;
    console.log(this.selectedList);
    const modal = document.getElementById('modal');
    if (modal) {
      modal.style.display = 'block';
    }
  }

  closeModal() {
    this.goForIt = false;
    // this.goForIt = false;
    const modal = document.getElementById('modal');
    if (modal) {
      modal.style.display = 'none';
    }
  }
}
