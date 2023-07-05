import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CallserviceService } from '../callservice.service';
import { UpdatepollComponent } from '../updatepoll/updatepoll.component';
import { MatDialog } from '@angular/material/dialog';
import { AddnewoptionComponent } from '../addnewoption/addnewoption.component';
import { ToastrService } from 'ngx-toastr';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-listallpolls',
  templateUrl: './listallpolls.component.html',
  styleUrls: ['./listallpolls.component.css']
})
export class ListallpollsComponent implements OnInit {
  allpolls: any;
  displayedColumns: string[] = ['title', 'options'];
  dataSource: any;

  constructor(private callserviceService: CallserviceService, private dialog: MatDialog, private cdr: ChangeDetectorRef
    , private tostr: ToastrService) { }
  ngOnInit(): void {
    this.allPollsList();
  }

  allPollsList() {
    this.callserviceService.getallpolls().subscribe(res => {
      this.allpolls = res.data;
      console.log(res)
    })
  }

  updatePollTitleSet(_id: any, title: any) {
    console.log("idddd", _id, title)
    const popup = this.dialog.open(UpdatepollComponent, {
      data: { id: _id, title: title },
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '500ms',
      width: '50%'
    })
    popup.afterClosed().subscribe(res => {
      this.allPollsList();
    })
  }
  addoptions(_id: any) {
    console.log("idd", _id)
    const popup = this.dialog.open(AddnewoptionComponent, {
      data: { id: _id },
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '500ms',
      width: '35%'
    })
    popup.afterClosed().subscribe(res => {
      this.allPollsList();
    })

  }
  deletePoll(_id: number) {
    console.log("idddd", _id)
    this.callserviceService.deletePollSection(_id).subscribe(res => {
      console.log("resp", res);
      this.tostr.success("Delete poll successfully")
      this.allPollsList();
    });
    // this.cdr.detectChanges();
  }

  deleteOption(_id: any, option: any) {
    console.log("opt", option)
    console.log('iddddd', _id)
    this.callserviceService.deleteOpt(_id, option).subscribe(res => {
      console.log("response", res)
      this.tostr.success("Delete option successfully")
      this.allPollsList();
    })

  }
isAdmin:boolean=false;
  ngDoCheck():void{
    console.log("456789", this.callserviceService.decodeAccessToken())
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      const decodedToken: any = jwt_decode(accessToken);
      const role = decodedToken.role;
    
      if (role === "admin") {
        this.isAdmin = true;
      } else {
        this.isAdmin = false;
      }
    } else {
      this.isAdmin = false;
    }
    }
  }
