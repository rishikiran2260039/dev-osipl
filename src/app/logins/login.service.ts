import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(public httpClient : HttpClient) { }


  login(data:any) {
    return this.httpClient.post(environment.apiUrl+'api/auth/login', data);
  }

}
