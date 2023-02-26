import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductViewComponent } from './products-view/product-view.component';
import {ProductDetailViewComponent} from'./product-detail-view/product-detail-view.component';
const routes: Routes = [
  {path: '', component: ProductViewComponent},
  {path:'product-detail/:id',component:ProductDetailViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
