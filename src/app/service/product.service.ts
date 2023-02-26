import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Product}from "../models/product.model"
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  urlservice:string = "https://dummyjson.com/products";
  constructor(private http:HttpClient) {}
  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>( this.urlservice)
    .pipe(
      map((data: any) => { 
 
        
           return data.products.map((product: Product) => new Product().deserialize(product)) 
      }),
      tap(_ => console.log('fetched list product')),
      catchError(this.handleError<any>('get list product problem'))
    );
  }
  getProductsSearch(data:any): Observable<Product[]>{
    return this.http.get<Product[]>( this.urlservice+`/search?q=${data}`)
    .pipe(
      map((data: any) => { 
 
        
           return data.products.map((product: Product) => new Product().deserialize(product)) 
      }),
      tap(_ => console.log('fetched list product search')),
      catchError(this.handleError<any>('get list product search problem'))
    );
  }

  getProductDetail(id:number): Observable<Product[]>{
    return this.http.get<Product[]>( this.urlservice+`/${id}`)
    .pipe(
      map((data: any) => { 
 
        
      
        
           return  new Product().deserialize(data)
      }),
      tap(_ => console.log('fetched item product')),
      catchError(this.handleError<any>('get item product problem'))
    );
  }



  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
        console.error(error); // log to console instead
        console.log(`${operation} failed: ${error.message}`);
        return of(result as T);
    };
}
}
