import {Component} from "@angular/core";
@Component({
  selector:'classroom',
  templateUrl:'classrom.component.html'
})
export class ClassromComponent{
  className='T2207A-SEM 1';
  siso=27;
  schoolName='FPT Academy International';

  themSinhvien() {
    if (this.siso < 40) {
      this.siso++;
    }
  }
  giamSinhvien(){
    if(this.siso > 0){
      this.siso--;
    }
  }



}
