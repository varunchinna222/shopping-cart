import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css']
})
export class CartComponent implements OnInit {
  items: any = [];

  length: any;
  

  total = 0;
  discount1: any;
  discount2: any;
  totalamount: any;
  selectForm:any = FormGroup

  // countries = [
  //   {country:'India',currency:'INR'},
  //   {country:'America',currency:'USD'},
  //   {country:'China',currency:'RMB'},
  //   {country:'Russia',currency:'RUR'},
  // ];
  countries = [
    {country:'India', currencyRate: 1},
    {country:'America', currencyRate: 77.67},
    {country:'China', currencyRate: 11.66},
    {country:'Russia', currencyRate: 1.27},
    {country:'Europe', currencyRate: 83.13},
    
  ];
  selectedCountry = 'India';
  country: any;

  constructor() {

  }
  

  ngOnInit() {
    let tool: any = localStorage.getItem("cartItems")
    this.items = JSON.parse(tool)
    this.length = this.items.length;
    console.log(this.items)

    
    for (let i = 0; i < this.items.length; i++) {
      this.totalamount = this.total + this.items[i].price
      this.total += this.items[i].price
      console.log(this.total)
    }
    if (this.total > 500) {
      
      this.discount1 = this.total * 0.2;
      this.total = this.total - this.discount1;
    } 
    else if (this.total > 100 && this.total < 500) {
      this.discount2 = this.total * 0.1;
      this.total = this.total - this.discount2;
    } 
    


    console.log(this.total)

  }

  getCurrency(){
    let currency = '';
    switch(this.selectedCountry) {
      case 'India':
      currency = 'INR';

      break;
      case 'America':
        currency = 'USD';
        break;
      case 'China':
      currency = 'CNY'
      break;
      case 'Russia':
      currency = 'RUB'
      break;
      case 'Europe':
      currency = 'EUR'
      break;
      default:
        break;
    }
    return currency;
  }

  convertWithCurrencyRate(value: number, currency: string){
    let currencyRate = this.country.find((f: { name: string; })=> f.name === currency).currencyRate;
    if (currencyRate){
      return value * currencyRate;
    }
    
    return value;
  }
  
  


}
