import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { About } from './about/about';
import { Listproduct1 } from './listproduct1/listproduct1';
import { Listproduct2 } from './listproduct2/listproduct2';
import { Listproduct3 } from './listproduct3/listproduct3';
import { Pagenotfound } from './pagenotfound/pagenotfound';
import { Listcustomer } from './listcustomer/listcustomer';
import { Customerdetail } from './customerdetail/customerdetail';
import { Listcustomerservicer } from './myservice/listcustomerservicer/listcustomerservicer';
import { ProductComponent } from './exercise19/product-component/product-component';
import { ListProductComponent } from './exercise19/list-product-component/list-product-component';
import { ServiceProductComponent } from './exercise19/service-product-component/service-product-component';
import { ServiceProductImageEvent } from './exercise13/service-product-image-event/service-product-image-event';
import { ServiceProductImageEventDetail } from './exercise13/service-product-image-event-detail/service-product-image-event-detail';
import { Form } from './form/form';
import { Reactiveform } from './reactiveform/reactiveform';
import { FakeProductComponent } from './fake-product-component/fake-product-component';
import { Books } from './books/books';
import { BooksDetail } from './books-detail/books-detail';
import { BooksNew } from './books-new/books-new';
import { BooksUpdate } from './books-update/books-update';
import { BooksDelete } from './books-delete/books-delete';
import { Fashion } from './fashion/fashion';
import { Login } from './login/login';
import { Register } from './register/register';
import { Cart } from './cart/cart';
import { Exercise63 } from './exercise63/exercise63';
const routes: Routes = [
  { path: "", redirectTo: 'login', pathMatch: 'full' },
  { path: 'register', component: Register },
  { path: 'login', component: Login },
  { path: 'gioi-thieu', component: About },
  { path: 'sanpham1', component: Listproduct1 },
  { path: 'sanpham2', component: Listproduct2 },
  { path: 'sanpham3', component: Listproduct3 },

  { path: 'list-Customer', component: Listcustomer },
  { path: 'list-Customer/:id', component: Customerdetail },

  { path: 'list-customer-service', component: Listcustomerservicer },
  { path: 'list-customer-service/:id', component: Customerdetail },
  { path: 'product', component: ProductComponent },
  { path: 'product', component: ListProductComponent },
  { path: 'product', component: ServiceProductComponent },
  {
    path: 'service-product-image-event',
    component: ServiceProductImageEvent
  },
  {
    path: 'service-product-image-event/:id',
    component: ServiceProductImageEventDetail
  },
  { path: 'student-form', component: Form },
  { path: 'reactive-form', component: Reactiveform },
  { path: 'ex26', component: FakeProductComponent },
  { path: 'ex39', component: Books },
  { path: 'ex41', component: BooksDetail },
  { path: 'ex41/:id', component: BooksDetail },
  { path: 'ex43', component: BooksNew },
  { path: 'ex45', component: BooksUpdate },
  { path: 'ex45/:id', component: BooksUpdate },
  { path: 'ex47', component: BooksDelete },
  { path: 'ex47/:id', component: BooksDelete },
  { path: 'ex53', component: Fashion },
  { path: 'ex63', component: Exercise63 },
  { path: 'cart', component: Cart },
  { path: '**', component: Pagenotfound },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ProductComponent, ListProductComponent, ServiceProductComponent];
