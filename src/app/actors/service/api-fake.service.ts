import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiFakeService {
   baseUrl:string = environment.baseUrl;
   constructor(private http: HttpClient) { }
   getAll() {
      return this.http.get(this.baseUrl);
   }

}
