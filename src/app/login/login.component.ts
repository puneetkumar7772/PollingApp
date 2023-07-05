import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CallserviceService } from '../callservice.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  logindata: any;
  user: any;
  constructor(private fB: FormBuilder, private callserviceService: CallserviceService, private router: Router, private toastr: ToastrService) { }

  ngOnIt() {

  }
  loginForm: FormGroup = this.fB.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  login(): void {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      console.log("data", loginData)
      this.callserviceService.signInForm(loginData).subscribe({

        next: (result: any) => {

          console.log("value", loginData)

          console.log("result", result);
          if (result.error === 0) {
            const accessToken = result.token;     // Save the access token in localStorage
            localStorage.setItem('accessToken', accessToken);
            console.log(accessToken)
            this.toastr.success("Login successfully");
            this.router.navigate(['home']);
          }
          else {
            this.toastr.warning("Invalid user");
          }
        },
        error: (error: any) => {
          console.log('login error', error);
          this.toastr.error("An error occurred during login");
        }
      });

    } else {
      this.toastr.warning("all fields are required")
    }
    // this.loginForm.reset();
  }
}


