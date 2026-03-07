import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule} from '@angular/common';
import { AppRoutingModule, routingComponents } from './app-routing-module';
import { App } from './app';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { MyComponent } from './my-component/my-component';
import { Mybinding } from './mybinding/mybinding';
import { Ptb1 } from './ptb1/ptb1';
import { Mygpa } from './mygpa/mygpa';
import { Ptb2 } from './ptb2/ptb2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Learndirective } from './learndirective/learndirective';
import { Listproduct1 } from './listproduct1/listproduct1';
import { Listproduct2 } from './listproduct2/listproduct2';
import { Customer } from './customer/customer';
import { Exercise18Component } from './exercise18/exercise18';
import { Exercise10 } from './exercise10/exercise10';
import { Pagenotfound } from './pagenotfound/pagenotfound';
import { Listcustomer } from './listcustomer/listcustomer';
import { Customerdetail } from './customerdetail/customerdetail';
import { Listcustomerservicer } from './myservice/listcustomerservicer/listcustomerservicer';
import { ServiceProductImageEvent} from './exercise13/service-product-image-event/service-product-image-event';
import { ServiceProductImageEventDetail } from './exercise13/service-product-image-event-detail/service-product-image-event-detail';
import { Exercise13 } from './exercise13/exercise13';
import { Form } from './form/form';
import { Reactiveform } from './reactiveform/reactiveform';
import { FakeProductComponent } from './fake-product-component/fake-product-component';
import { Books } from './books/books';
import { BooksNew } from './books-new/books-new';
import { BooksDetail } from './books-detail/books-detail';
import { BooksUpdate } from './books-update/books-update';
import { BooksDelete } from './books-delete/books-delete';
import { Fashion } from './fashion/fashion';


@NgModule({
  declarations: [
    App,
    About,
    Contact,
    MyComponent,
    Mybinding,
    Ptb1,
    Mygpa,
    Ptb2,
    Learndirective,
    Listproduct1,
    Listproduct2,
    Customer,
    Exercise18Component,
    Exercise10,
    Exercise13,
    Pagenotfound,
    Listcustomer,
    Customerdetail,
    Listcustomerservicer,
    ServiceProductImageEvent,
    ServiceProductImageEventDetail,
    Form,
    Reactiveform,
    Books,
    BooksNew,
    BooksDetail,
    BooksUpdate,
    BooksDelete,
    Fashion
    
  
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    FakeProductComponent
    
    

    
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
