
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from '../../theme/utils/app-validators';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { AlertService } from '../../shared/services/alert.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  public form: FormGroup;
  public settings: Settings;
  constructor(public alertService:AlertService,public appSettings: AppSettings, public fb: FormBuilder,  public _loginService: LoginService, public router: Router) {
    this.settings = this.appSettings.settings;
    this.form = this.fb.group({
      'email': [null, Validators.compose([Validators.required, emailValidator])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }
  
  ngOnInit() {
  }

  public onSubmit(values) {
    if (this.form.valid) {
      var list={
        email:this.form.value.email,
        password:btoa(this.form.value.password)
      }
      this._loginService.login(list).subscribe(res=>{
        if(res['Success']==true){
          this.router.navigate(['/dashboard']);
          this.alertService.createAlert(res['Message'],1);
          localStorage.removeItem('userSession');
          localStorage.removeItem('userPermissions');
          localStorage.setItem('isosipladmin', '1');
          localStorage.setItem('userSession', JSON.stringify(res['Data']));
          localStorage.setItem('userPermissions', JSON.stringify(res['Data']['permissions']));
        }
        else{
          this.alertService.createAlert("Invalid Email Or Password",0);
        }
      });
    }
  }  
  
  ngAfterViewInit() {
    this.settings.loadingSpinner = false;
    localStorage.setItem('userType', '');
  }
}