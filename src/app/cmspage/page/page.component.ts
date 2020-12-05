import { Component, OnInit } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpBackend,
} from "@angular/common/http";

@Component({
  selector: "app-page",
  templateUrl: "./page.component.html",
  styleUrls: ["./page.component.scss"],
})
export class PageComponent implements OnInit {
 
private http: HttpClient;

constructor(handler: HttpBackend) {
    this.http = new HttpClient(handler);
}


  ngOnInit() {}
}
