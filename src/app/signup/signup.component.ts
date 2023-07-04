import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CallserviceService } from '../callservice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {

  constructor(private fb: FormBuilder, private callserviceService: CallserviceService,
    private router: Router, private toastr: ToastrService) { }

  ngOnInit() {

  }

  signupForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    role: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  });

  submitForm(): void {
    if (this.signupForm.valid) {
      if (this.signupForm.value.password == this.signupForm.value.confirmPassword) {
        const formData = this.signupForm.value;
        this.callserviceService.signUp(formData).subscribe(
          {
            next: data => {
              console.log(data);
              if (data.error === 0) {
                this.toastr.success("Registration successful");

                localStorage.setItem("name", JSON.stringify("signuForm.value"))
                this.router.navigate(['login']);
              } else {
                this.toastr.error("Account Already Exists!");
              }
            },
            error: err => {
              this.toastr.error("An error occurred while signing up");
              console.error(err);
            }
          }
        );
      } else {
        this.toastr.warning("Password does not match");
      }
    } else {
      this.toastr.error("Please fill in all the required fields");
    }
  }


}

