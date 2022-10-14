import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ClassromComponent} from "./classsrom/classrom.component";
import {SinhvienComponent} from "./sinh vien/sinhvien.component";
import {TeacherComponent} from "./teacher/teacher.component";
import {LoginComponent} from "./login&register&thoitiet/login.component";
import {RegisterComponent} from "./login&register&thoitiet/register.component";
import {RouterModule, Routes} from "@angular/router";
import {ThoitietComponent} from "./login&register&thoitiet/thoitiet.component";
import {HttpClientModule} from "@angular/common/http";
import {MenuComponent} from "./Menu/menu.component";
import {WeatherComponent} from "./pageweather/weather.component";
import {ThiComponent} from "./thi/thi.component";

const appRoutes: Routes =[
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'thoitiet',component:ThoitietComponent},
  {path:'menu',component:MenuComponent},


]
@NgModule({
  declarations: [
    AppComponent,ClassromComponent,SinhvienComponent,TeacherComponent,LoginComponent,RegisterComponent,ThoitietComponent,
    MenuComponent,WeatherComponent,ThiComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
