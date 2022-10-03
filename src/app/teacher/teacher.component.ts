import {Component, Input} from "@angular/core";
@Component({
  selector:'teacher',
  templateUrl:'teacher.component.html'
})
export class TeacherComponent{
  @Input()
  schoolN?: string;
     vo=10;

     themVo(){
       if(this.vo <10){
         this.vo++;
       }
     }
     giamvo(){
       if(this.vo >0){
         this.vo--;
       }
     }
}
