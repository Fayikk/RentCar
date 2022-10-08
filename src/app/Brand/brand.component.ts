import { Component, OnInit } from '@angular/core';
import { Brand } from '../models/Brand';
import { BrandService } from '../Services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

 brands:Brand[]=[];
 dataloaded=false;

  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrands();
  }
  getBrands(){
  
   this.brandService.getBrands()
   .subscribe(response=>{
    this.brands=response.data;
    this.dataloaded=true;
  });

  
  } 

}
