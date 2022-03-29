import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//  import router module
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    // add to imports array
    // configure the router module
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      // { path: 'prodlist', component: ProductListComponent },
      // configure the path with a parameter
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path : 'cart' , component: CartComponent}
    ]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
