import { Component, OnInit,Input } from '@angular/core';
import {ProductService} from '../service/product.service'

import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product.model';
@Component({
  selector: 'app-product-detail-view',
  templateUrl: './product-detail-view.component.html',
  styleUrls: ['./product-detail-view.component.scss']
})
export class ProductDetailViewComponent implements OnInit {
  curentUrl:any;
  paramurl: any = ''; 
  ProductDetail:any;
 
  currentImageIndex = 0;
  constructor(private productService:ProductService,private route:ActivatedRoute, private router:Router) { }
  
  ngOnInit(): void {
    this.curentUrl = this.router.url;
    // console.warn(this.curentUrl);
    
    this.route.params.subscribe(params => {
      this.paramurl = params['id']; 
    console.log(this.paramurl);
    
      this.productDetailGet();
      
   });
  }
  showNextImage() {
    if (this.currentImageIndex === this.ProductDetail.images.length - 1) {
      this.currentImageIndex = 0;
    } else {
      this.currentImageIndex++;
    }
  }

  // Fungsi untuk menampilkan gambar sebelumnya pada slider
  showPrevImage() {
    if (this.currentImageIndex === 0) {
      this.currentImageIndex = this.ProductDetail.images.length - 1;
    } else {
      this.currentImageIndex--;
    }
  }

  productDetailGet(){
    this.productService.getProductDetail(this.paramurl).subscribe(data=>{
      this.ProductDetail=data;
      
      
      
    })
  }
}
