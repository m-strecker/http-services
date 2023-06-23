import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http-project';

  products:any = [];

  constructor(private service:ProductsService){}

ngOnInit(){
  this.service.getProducts().subscribe(
    (x)=>{this.products = x;});
    console.log("here are the products " + this.products);
}
}
