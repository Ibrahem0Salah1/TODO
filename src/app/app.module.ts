import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { OneToDoComponent } from './container/one-to-do/one-to-do.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TaskComponent } from './container/one-to-do/task/task.component';
@NgModule({
  declarations: [AppComponent, ContainerComponent, OneToDoComponent, TaskComponent],
  imports: [BrowserModule, FormsModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
