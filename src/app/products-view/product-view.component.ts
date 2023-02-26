import { Component, OnInit } from '@angular/core';
import {ProductService} from '../service/product.service'

import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product.model';
@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {

  constructor(private productService:ProductService,private route:ActivatedRoute, private router:Router) { }
listProduct:Product[]=[];
searchText:string ='';

  ngOnInit(): void {
    this.productGet();
  }

search(){
  if(this.searchText!="")
{
  this.productSearch();
}else{
  this.productGet();
}
}
onInputChange(){
  if(this.searchText==""){
    this.productGet();
  }
}
productSearch(){
  this.productService.getProductsSearch(this.searchText).subscribe(data=>{
    this.listProduct=data;
    
  })
}
  productGet(){
    this.productService.getProducts().subscribe(data=>{
      this.listProduct=data;
      
    })
  }
}
