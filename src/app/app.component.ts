import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  cities: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get("http://localhost:8080/citiesJson").subscribe((data: any) => {
      this.cities = JSON.parse(JSON.stringify(data));
      console.log(this.cities);
    });
  }
}
