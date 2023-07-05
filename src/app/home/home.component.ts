import { Component } from '@angular/core';
import { AddpollComponent } from '../addpoll/addpoll.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CallserviceService } from '../callservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private dialog: MatDialog, private router: Router, private callserviceService: CallserviceService) { }

  isAdmin: boolean = false;

  addNewPoll() {
    this.dialog.open(AddpollComponent, {
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '500ms',
      width: '50%'
    })
  }

  ngDoCheck(): void {
    console.log("456789", this.callserviceService.decodeAccessToken())
    const role = this.callserviceService.decodeAccessToken();
    this.isAdmin = role === 'admin';

  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login'])
  }
}




