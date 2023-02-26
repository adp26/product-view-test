import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductViewComponent } from './products-view/product-view.component';
import { ItemProductComponent } from './item-product/item-product.component';
import {ProductDetailViewComponent} from'./product-detail-view/product-detail-view.component';
import { FormsModule } from '@angular/forms'; // import FormsModule

// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    ProductViewComponent,
    ItemProductComponent,
    ProductDetailViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
