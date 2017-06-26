import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'my-app',
    template: `
  <h1>Angular2 HTTP Demo App</h1>
  <h2>Foods</h2>
  <ul>
    <li >{{foods.name}}</li>
  </ul>
  
  `
})
export class AppComponent {

    foods: Object;
    public books: any;
    public movies: any;
    
    constructor(private http: Http) { }
     ngOnInit() {
         this.getFoods();
    }
    
    getFoods() {
    this.http.get('./food.json')
      //.map((res:Response) => res.json())
        .subscribe(
        (data: any) => {
            debugger;
         this.foods = JSON.parse(data._body);
        },
        err => console.error(err),
        () => console.log('done')
      );
  }
}