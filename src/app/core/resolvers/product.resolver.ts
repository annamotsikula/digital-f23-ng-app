import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ProductService } from '../services/http.service';
import { Product } from '../interfaces/product.interface';

export const productResolver: ResolveFn<Product> = (route, state) => {
  const id = Number(route.paramMap.get('id'));
  const service = inject(ProductService)
  return service.getProductById(id);
};

// @Injectable()
// export class ProductDetailsResolver implements Resolve<boolean> {
//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    
//   }

// }