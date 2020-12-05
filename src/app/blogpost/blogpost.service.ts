import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpBackend,
} from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class BlogpostService {

  private http: HttpClient;

  constructor(handler: HttpBackend) {
      this.http = new HttpClient(handler);
  }
  
}
