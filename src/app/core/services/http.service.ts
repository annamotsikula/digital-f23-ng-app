import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProductList } from "../interfaces/product.interface";

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private _http: HttpClient) {
        
    }


    getProducts(): Observable<ProductList> {
        return this._http.get<ProductList>('https://dummyjson.com/products')
    }
}