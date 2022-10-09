import { Component, OnInit } from '@angular/core';
import { Color } from '../models/Color';
import { ColorService } from '../Services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  colors:Color[]=[];
  currentColor:Color={colorId:0,colorName:""}
  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.getColors();
  }
  getColors(){
    this.colorService.getColors()
    .subscribe(Response=>{this.colors=Response.data});
  }
  setCurrentColor(color:Color){//değiştirilen det eedilen veriler için kullanılmaktadır.
    this.currentColor = color;
  }

  getCurrentColorClass(color:Color){//get edilen veriler için kullanılmaktadır
    if(color == this.currentColor){
      return "list-group-item active"
    }
    else{
      return "list-group-item"

    }
  }
  getAllColorClass(){
    if (!this.currentColor) {
      return "list-group-item active"
      
    }else{
      return "list-group-item"

    }
  }


}
