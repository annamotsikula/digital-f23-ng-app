import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject, map, tap } from "rxjs";
import { Product, ProductList } from "../interfaces/product.interface";
import { BASE_URL } from "../constants/constants";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    cartProducts$ : BehaviorSubject<{id: number, amount: number}[]> = new BehaviorSubject<{id: number, amount: number}[]>([])
    constructor(private _http: HttpClient, @Inject(BASE_URL) private _apiUrl: string) {
        
    }

    getProducts(): Observable<Product[]> {
        return this._http.get<ProductList>(`${this._apiUrl}/products`).pipe(
            map(data => data.products)
        )
    }    

    getProductById(id: number): Observable<Product> {
        return this._http.get<Product>(`${this._apiUrl}/products/${id}`).pipe(
            map(data => {
                const newPrice = data.price - (data.price * data.discountPercentage / 100)
                data.discountPrice = newPrice
                return data
            })
        )
    }

    deleteProduct(id: number): Observable<any> {
        return this._http.delete(`${this._apiUrl}/products/${id}`)
    }

    updateProduct(id: number, updatedValue: string) {
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this._http.put(`${this._apiUrl}/products/${id}`, {
            description: updatedValue
        }, { headers })
    }

    searchByKey(key: string): Observable<Product[]> {
        const params = new HttpParams();
        params.set('q', key);
        console.log(params)
        return this._http.get<ProductList>(`${this._apiUrl}/products/search?q=${key}`).pipe(
            map(result => result.products)
        )
    }
}