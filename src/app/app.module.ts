import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ClassromComponent} from "./classsrom/classrom.component";
import {SinhvienComponent} from "./sinh vien/sinhvien.component";
import {TeacherComponent} from "./teacher/teacher.component";
import {LoginComponent} from "./login&register/login.component";
import {RegisterComponent} from "./register.component/register.component";
import {RouterModule, Routes} from "@angular/router";
import {ThoitietComponent} from "./thoitiet/thoitiet.component";
import {HttpClientModule} from "@angular/common/http";

const appRoutes: Routes =[
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'thoitiet',component:ThoitietComponent},
]
@NgModule({
  declarations: [
    AppComponent,ClassromComponent,SinhvienComponent,TeacherComponent,LoginComponent,RegisterComponent,ThoitietComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
