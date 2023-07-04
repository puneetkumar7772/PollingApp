import { Component, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CallserviceService } from '../callservice.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addpoll',
  templateUrl: './addpoll.component.html',
  styleUrls: ['./addpoll.component.css']
})
export class AddpollComponent {
  text: string | undefined;
  data: any;
  opti: any;

  constructor(private fb: FormBuilder, private callserviceService: CallserviceService, public dialogRef: MatDialogRef<AddpollComponent>
    , private tostr: ToastrService) { }

  addpollForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    opt_1: ['', Validators.required],
    opt_2: ['', Validators.required],
    opt_3: ['', Validators.required],
    opt_4: ['', Validators.required],

  });

  addpoll() {
    if (this.addpollForm.valid) {
      const addpollnew = this.addpollForm.value;
      console.log(addpollnew)
      this.callserviceService.addNewPoll(addpollnew).subscribe(
        {
          next: data => {
            console.log(data);
            this.tostr.success("Add poll successfully")

            if (data) {
              console.log('Sign up successful');
              this.addpollForm.reset();
            }
            this.dialogRef.close();
          }
        }
      );
    }

  }
  closepopup() {
    this.dialogRef.close();
  }

}
