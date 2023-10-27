import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, of, tap } from "rxjs";
import { Product, ProductList } from "../interfaces/product.interface";
import { BASE_URL } from "../constants/constants";

@Injectable()
export class TestService {

    constructor(private _http: HttpClient) {

    }

    getProducts(): Observable<Product[]> {
        return of([
            {
                "id": 4,
                "title": "OPPOF19",
                "description": "OPPO F19 is officially announced on April 2021.",
                "price": 280,
                "discountPercentage": 17.91,
                "rating": 4.3,
                "stock": 123,
                "brand": "OPPO",
                "category": "smartphones",
                "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
                "images": [
                    "https://i.dummyjson.com/data/products/4/1.jpg",
                    "https://i.dummyjson.com/data/products/4/2.jpg",
                    "https://i.dummyjson.com/data/products/4/3.jpg",
                    "https://i.dummyjson.com/data/products/4/4.jpg",
                    "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
                ]
            },
        ]).pipe(tap(data => console.log('Using GetProducts From TestService')))
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