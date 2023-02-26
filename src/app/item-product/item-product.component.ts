import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router,RouterLink } from '@angular/router';

import 'boxicons';
@Component({
  selector: 'app-item-product',
  templateUrl: './item-product.component.html',
  styleUrls: ['./item-product.component.scss']
})
export class ItemProductComponent implements OnInit {
  @Input() itemProduct:any;

  constructor(private router:Router,private route:ActivatedRoute) { }
  ngOnInit(): void {

    
  }

}
