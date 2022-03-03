import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';  
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user:any = JSON.parse(localStorage.getItem('userSession'));

  headers = new HttpHeaders();
  
  constructor(public http : HttpClient) { 
    this.headers=this.headers.set('username',this.user['user']['userName']).set('userid',this.user['user']['userId']).set('userType',this.user['user']['rolename']);
  
  }

 

  GetAllUsers(){  
    const httpHeaders = new HttpHeaders();
  httpHeaders.append('content-type','application/json');
  return this.http.get(environment.apiUrl+"api/getall-users");
  }

  editUsers(data){
    return this.http.post(environment.apiUrl+"api/upsert-user/" , data,{ headers: this.headers });
    
  }

  ChangeUserStatus(data) {
    return this.http.post(environment.apiUrl+"api/update-user-status", data,{ headers: this.headers });
  }

  DeleteUser(data){
    return this.http.post(environment.apiUrl+"api/delete-user",data,{ headers: this.headers });
  }

  updateAdminStatus(data) {
    return this.http.post(environment.apiUrl+"api/update-admin-status", data,{ headers: this.headers });
  }

  resetUserPassword(data){
    return this.http.post(environment.apiUrl+"api/reset-password", data,{ headers: this.headers });
  }
  updateUserStatus(q)
  {
    return this.http.post(environment.apiUrl+"api/update-admin-status", q,{ headers: this.headers });
  }
  deleteUser(q)
  {
    return this.http.post(environment.apiUrl+"api/update-admin-status", q,{ headers: this.headers });
  }
  GetAllRoles(){  
    const httpHeaders = new HttpHeaders();
  httpHeaders.append('content-type','application/json');
  return this.http.get(environment.apiUrl+"api/get-roles",{ headers: this.headers });
  }
  UpsertUser(data){
    return this.http.post(environment.apiUrl+"api/upsert-user", data,{ headers: this.headers });
  }
  getRolePermissionsbyModule(id){
    return this.http.get(environment.apiUrl + 'api/get-role-permissions?RoleId=' + id,{ headers: this.headers });
  }
  saveRolePermissions(data){
    return this.http.post(environment.apiUrl+"api/save-role-permissions",data,{ headers: this.headers });
  }
}
