import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  constructor(private route: ActivatedRoute, private cartService: CartService) {
    console.log('cons() obtains the activated route');
  }

  ngOnInit(): void {
    console.log('ngOnInit() fetches the route parameters');
    // fetching the product id from the current route
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromFromRoute = Number(routeParams.get('productId'));

    //fetch the product with the productid in the route
    this.product = products.find(
      (product) => product.id === productIdFromFromRoute
    );
  }

  addToCartComponent(product: Product) {
    this.cartService.addToCartService(product);
    window.alert('Product added to Cart');
  }
}
