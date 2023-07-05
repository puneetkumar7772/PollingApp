import { ChangeDetectorRef, Component, Inject, OnInit, inject } from '@angular/core';
import { CallserviceService } from '../callservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ListallpollsComponent } from '../listallpolls/listallpolls.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-updatepoll',
  templateUrl: './updatepoll.component.html',
  styleUrls: ['./updatepoll.component.css']
})
export class UpdatepollComponent implements OnInit {

  text: any;

  constructor(private up: FormBuilder, private callserviceService: CallserviceService, public dialogRef: MatDialogRef<ListallpollsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private cdr: ChangeDetectorRef, private tostr: ToastrService) { }
  title = this.data.title

  ngOnInit() {
    this.text = this.data.title;
  }
  updatepollForm: FormGroup = this.up.group({
    title: ['', Validators.required],
  });
  editdata: any
  updateTitle(id: any, newtitle: any) {
    const _id = this.data.id;
    console.log('id', _id)

    const newTitle = this.data.title;
    console.log("hhhhhh", newtitle)
    console.log('data', this.data)
    console.log('title', this.data.title)
    this.callserviceService.updatePollTitle(id, newtitle).subscribe(res => {

      console.log("responce", res)
      this.tostr.success("Updated title successfully")
    })
    this.dialogRef.close();
    // this.cdr.detectChanges();
  }
  closepopup() {
    this.dialogRef.close();
  }
}



