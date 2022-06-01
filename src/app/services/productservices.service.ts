import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductservicesService {

  url="https://run.mocky.io/v3/9d71cb03-a9f9-4d70-bae2-9d3adaa1cfe7"


  constructor(private http : HttpClient) { }

  getData(){
    return this.http.get(this.url)
  }

}
