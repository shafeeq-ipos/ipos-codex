import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CategoryFilterComponent } from './components/category-filter/category-filter.component';
import { CategoryPipe } from './pipes/category.pipe';
import { LoginComponent } from './components/login/login.component';
import { RoomTableComponent } from './components/room-table/room-table.component';
import { OrderComponent } from './components/order/order.component';
import { ScreenLockComponent } from './components/screen-lock/screen-lock.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    ProductDetailComponent,
    CartComponent,
    CheckoutComponent,
    CategoryFilterComponent,
    CategoryPipe,
    LoginComponent,
    RoomTableComponent,
    OrderComponent,
    ScreenLockComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
