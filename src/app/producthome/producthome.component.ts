import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductservicesService } from '../services/productservices.service';

@Component({
  selector: 'app-producthome',
  templateUrl: './producthome.component.html',
  styleUrls: ['./producthome.component.css']
})
export class ProducthomeComponent implements OnInit {
 
  productList:any=[];
  items:any=[];
  singleProduct:any=[];
  cartitems : boolean = true;

  length: any;
  isLoader: boolean = false;

  constructor(private service:ProductservicesService, private router: Router ) {
    
  }

  
  ngOnInit(): void {
    
    
    this.getProducts();
    let tool: any = localStorage.getItem("cartItems")
    this.items = JSON.parse(tool)
    this.length = this.items.length;
  }
  getProducts(){
    this.isLoader = true;
    this.service.getData().subscribe((response)=>{
      this.isLoader = false;
      this.productList = response
      console.log(this.productList)
    }
    , err => {
      console.log(err)

    }
    )
  }

  // localStorage.clear();
  additem(data:any){
    this.items.push(data)
    console.log(this.items)

    
    let text = JSON.stringify(this.items);
    localStorage.setItem("cartItems", text);

    let tool: any = localStorage.getItem("cartItems")
    let dj = JSON.parse(tool)
    this.length = dj.length;
    
  }
  removeitem(data:any){
    const index = this.items.indexOf(data)
    console.log(index)

    this.items.splice(index,1)
    console.log(this.items)
    let text = JSON.stringify(this.items);
    localStorage.setItem("cartItems", text);

    let tool: any = localStorage.getItem("cartItems")
    let dj = JSON.parse(tool)
    this.length = dj.length;

  }
}


