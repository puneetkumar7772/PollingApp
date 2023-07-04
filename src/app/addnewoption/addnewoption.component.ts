import { Component, Inject } from '@angular/core';
import { CallserviceService } from '../callservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ListallpollsComponent } from '../listallpolls/listallpolls.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addnewoption',
  templateUrl: './addnewoption.component.html',
  styleUrls: ['./addnewoption.component.css']
})
export class AddnewoptionComponent {

  constructor(private up: FormBuilder, private callserviceService: CallserviceService, public dialogRef: MatDialogRef<ListallpollsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private toastr: ToastrService) { }
  option = this.data.title
  addoptionForm: FormGroup = this.up.group({
    newoptionss: ['', Validators.required],
  });

  addOption(id: any) {
    const _id = this.data.id;
    console.log('id', _id)
    if (this.addoptionForm.valid) {
      const addnewopt = this.addoptionForm.value;
      console.log('fgh', addnewopt)
      this.callserviceService.addNewOption(id, addnewopt).subscribe(
        {
          next: data => {
            console.log(data);
            this.toastr.success("Option added successfully")
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

