import {
  Component,
  ElementRef,
  ViewChild,
  Output,
  Input,
  EventEmitter,
} from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';
interface ToDoList {
  id: number;
  title: string;
  tasks: string[];
  finishedTasks: string[];
}
@Component({
  selector: 'app-one-to-do',
  templateUrl: './one-to-do.component.html',
  styleUrls: ['./one-to-do.component.css'],
})
export class OneToDoComponent {
  constructor(private dServices: DataServiceService) {}

  @Input() data: ToDoList;
  @Input() lists: any[];

  // MODAL
  @Output() openModal: EventEmitter<any> = new EventEmitter<any>();
  onViewClick() {
    console.log(this.data);
    this.openModal.emit(this.data);
  }

  getData() {
    console.log(this.data);
  }
  setData() {
    this.dServices.listOfLists = this.lists;
    this.dServices.saveDataToLocalStorage(this.lists, 'listOfLists');
  }
  // adding Title + updating title
  @ViewChild('inputTitle') titleInput: ElementRef;
  placed: string = 'name your list';
  addTitle() {
    this.lists[this.data.id - 1].title = this.titleInput.nativeElement.value;
    this.setData();
    // console.log(this.dServices.listOfLists[this.data.id - 1]);
    // this.setData();
    // this.dServices.saveDataToLocalStorage();
    // console.log(this.dServices.getDataFromLocalStorage('listOfLists'));
    // console.log(this.dServices);
    // console.log(this.data);
    // console.log(this.dServices.listOfLists);
    // this.SearchTextOutFromSearchToContainer.emit(this.Title);
  }

  // adding task
  newTask: string = '';
  addTask() {
    // this.ToDoList.tasks.push({ id: id, name: this.ToDoList.tasks });
    // this.inputTask.nativeElement.value = '';
    if (this.newTask.trim() !== '') {
      this.data.tasks.push(this.newTask.trim());
      this.newTask = '';
      // this.inputTask.nativeElement.value = '';
    }
    this.setData();
    // this.lists[this.data.id - 1].tasks.push(this.inputTask.nativeElement.value);
    // this.setData();
  }

  // editing and saving task
  newString: string = '';
  editingTaskIndex: number | null = null;
  editing: boolean = false;
  editTask(index: number) {
    this.editingTaskIndex = index;
    this.newString = this.data.tasks[index];
    this.setData();
  }
  saveTask(index: number) {
    if (this.editingTaskIndex === index) {
      this.data.tasks[index] = this.newString.trim();
      this.editingTaskIndex = null;
      this.newString = '';
      this.editing = !this.editing;
      this.setData();
    }
    console.log(this.data);
  }

  finishTask(id: number) {
    this.data.finishedTasks.push(this.data.tasks[id]);
    this.data.tasks.splice(id, 1);
    this.setData();
  }
  deleteTask(id: number) {
    this.data.tasks.splice(id, 1);
    this.setData();
  }
  deleteList(id: number, title: string) {
    let delTask = { id: id, title: title };
    console.log(delTask);
    for (let i = 0; i < this.lists.length; i++) {
      if (
        (this.lists[i].id === delTask.id && this,
        this.lists[i].title === delTask.title)
      ) {
        this.lists.splice(i, 1);
        this.setData();
      } else if (this.lists.length <= 1) {
        this.lists.splice(0);
        this.setData();
      }
    }
  }
  // Modal

  // showList(id: number) {
  //   console.log(this.lists[id]);
  //   const modal = document.getElementById('modal');
  //   if (modal) {
  //     modal.style.display = 'block';
  //   }
  // }
  // closeModal() {
  //   const modal = document.getElementById('modal');
  //   if (modal) {
  //     modal.style.display = 'none';
  //   }
  // }
}
