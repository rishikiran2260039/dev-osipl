import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

 
   user:any = JSON.parse(localStorage.getItem('userSession'));
   ipAddress:any;
  headers = new HttpHeaders();
 
  constructor(public http : HttpClient) { 
    this.http.get("http://api.ipify.org/?format=json").subscribe(async (res:any)=>{
      this.ipAddress = res.ip;
      console.log(this.ipAddress);
      this.headers= await this.headers.set('username',this.user['user']['userName']).set('userid',this.user['user']['userId']).set('userType',this.user['user']['rolename']).set('IP',this.ipAddress);

    });

  }

   // For Sending headers to API
   getHeaders() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    //return this.headers = httpOptions;
  }

  GetAllRoles(){  
   
    return this.http.get(environment.apiUrl+"api/get-roles",{ headers: this.headers });
  }



  DeleteRole(data){


    return this.http.post(environment.apiUrl+"api/delete-roles",data,{ headers: this.headers });
  }
  //rishi

  UpsertRole(data){

    console.log(data);
    return this.http.post(environment.apiUrl+"api/upsert-roles",data,{ headers: this.headers });
  }
  //rishi
}
