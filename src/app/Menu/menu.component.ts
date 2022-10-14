import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import * as url from "url";
@Component({
  selector:'menu',
  templateUrl:'./menu.component.html'
})
export class MenuComponent {
  menu: any = [
    {id: 1, name: 'Chicken', icon: 'abc'},
    {id: 2, name: 'Rice', icon: 'abc'},
  ];
  flag=true;
  on(){
    this.flag=true;
  }
  off(){
    this.flag=false;
  }
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getmenu();
  }

  getmenu() {
    const url = 'https://foodgroup.herokuapp.com/api/menu'
    this.http.get<any>(url)
      .subscribe(data => {
        var ls = data.data;
        this.menu = ls;
      });
  }
}


