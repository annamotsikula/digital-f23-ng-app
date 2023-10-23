import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, tap } from "rxjs";
import { Product, ProductList } from "../interfaces/product.interface";
import { BASE_URL } from "../constants/constants";

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private _http: HttpClient) {
        
    }


    getProducts(): Observable<Product[]> {
        return this._http.get<ProductList>(`${BASE_URL}/products`).pipe(
            map(data => data.products)
        )
    }    

    getProductById(id: number): Observable<Product> {
        return this._http.get<Product>(`${BASE_URL}/products/${id}`).pipe(
            map(data => {
                const newPrice = data.price - (data.price * data.discountPercentage / 100)
                data.discountPrice = newPrice
                return data
            })
        )
    }

    deleteProduct(id: number): Observable<any> {
        return this._http.delete(`${BASE_URL}/products/${id}`)
    }

    updateProduct(id: number, updatedValue: string) {
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this._http.put(`${BASE_URL}/products/${id}`, {
            description: updatedValue
        }, { headers })
    }

    searchByKey(key: string): Observable<Product[]> {
        const params = new HttpParams();
        params.set('q', key);
        console.log(params)
        return this._http.get<ProductList>(`${BASE_URL}/products/search?q=${key}`).pipe(
            map(result => result.products)
        )
    }
}