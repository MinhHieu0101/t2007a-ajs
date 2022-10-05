import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";
@Component({
  selector:'thoitiet',
  templateUrl:'./thoitiet.component.html'

})
export class ThoitietComponent{
  city: string ='Ten thanh pho';
temp:number=30;
hump:number=70;
press:number=1001;

constructor(private http:HttpClient) {
}

ngOnInit(){ // ham nay tu dong chay sau khi in ra html
this.hanoi();
this.tphcm();
this.london();
this.newyork();
this.tokyo();
this.berlin();
}
  berlin(){
    const url='https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=09a71427c59d38d6a34f89b47d75975c&units=metric&fbclid=IwAR2fiQ9SHULfN3qYalmvJ-p58kpVYMmO1maCFc_D0DLmZF57A6vTtrxSRe8'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.temp=data.main.temp;
        this.hump=data.main.humidity;
        this.press=data.main.pressure;
        this.city=data.name +","+ data.sys.country;
      })

  }

  tokyo(){
    const url='https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=09a71427c59d38d6a34f89b47d75975c&units=metric&fbclid=IwAR2fiQ9SHULfN3qYalmvJ-p58kpVYMmO1maCFc_D0DLmZF57A6vTtrxSRe8'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.temp=data.main.temp;
        this.hump=data.main.humidity;
        this.press=data.main.pressure;
        this.city=data.name +","+ data.sys.country;
      })

  }
  newyork(){
    const url='https://api.openweathermap.org/data/2.5/weather?q=New York&appid=09a71427c59d38d6a34f89b47d75975c&units=metric&fbclid=IwAR2fiQ9SHULfN3qYalmvJ-p58kpVYMmO1maCFc_D0DLmZF57A6vTtrxSRe8'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.temp=data.main.temp;
        this.hump=data.main.humidity;
        this.press=data.main.pressure;
        this.city=data.name +","+ data.sys.country;
      })

  }
  london(){
    const url='https://api.openweathermap.org/data/2.5/weather?q=london&appid=09a71427c59d38d6a34f89b47d75975c&units=metric&fbclid=IwAR2fiQ9SHULfN3qYalmvJ-p58kpVYMmO1maCFc_D0DLmZF57A6vTtrxSRe8'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.temp=data.main.temp;
        this.hump=data.main.humidity;
        this.press=data.main.pressure;
        this.city=data.name +","+ data.sys.country;
      })

  }
tphcm(){
  const url='https://api.openweathermap.org/data/2.5/weather?q=saigon&appid=09a71427c59d38d6a34f89b47d75975c&units=metric&fbclid=IwAR2fiQ9SHULfN3qYalmvJ-p58kpVYMmO1maCFc_D0DLmZF57A6vTtrxSRe8'
this.http.get<any>(url)
  .subscribe(data=>{
    this.temp=data.main.temp;
    this.hump=data.main.humidity;
    this.press=data.main.pressure;
    this.city=data.name +","+ data.sys.country;
  })

}
hanoi(){
  // lay thong tin thoi tiet ha noi
  const url='https://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=09a71427c59d38d6a34f89b47d75975c&units=metric&fbclid=IwAR2fiQ9SHULfN3qYalmvJ-p58kpVYMmO1maCFc_D0DLmZF57A6vTtrxSRe8'
  this.http.get<any>(url)
    .subscribe(data=>{
      this.temp=data.main.temp;
      this.hump=data.main.humidity;
      this.press=data.main.pressure;
      this.city=data.name +","+ data.sys.country;
    })
}
}
