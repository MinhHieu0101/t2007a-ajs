import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ClassromComponent} from "./classsrom/classrom.component";
import {SinhvienComponent} from "./sinh vien/sinhvien.component";
import {TeacherComponent} from "./teacher/teacher.component";
import {LoginComponent} from "./login&register/login.component";
import {RegisterComponent} from "./register.component/register.component";

@NgModule({
  declarations: [
    AppComponent,ClassromComponent,SinhvienComponent,TeacherComponent,LoginComponent,RegisterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
