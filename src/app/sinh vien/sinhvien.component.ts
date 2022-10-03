import {Component, Input} from "@angular/core";
@Component({
  selector:'sinhvien',
  templateUrl:'sinhvien.component.html'
})
export class SinhvienComponent{
  @Input()
  classN?: string;

  bangai=10;

  tangBangai() {
    if (this.bangai < 10) {
      this.bangai++;
    }
  }
  giamBangai(){
    if (this.bangai > 0){
      this.bangai--;
    }
  }
}
