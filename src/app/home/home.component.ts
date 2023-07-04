import { Component, } from '@angular/core';
import { AddpollComponent } from '../addpoll/addpoll.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private dialog: MatDialog, private router: Router) { }

  addNewPoll() {
    this.dialog.open(AddpollComponent, {
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '500ms',
      width: '50%'
    })
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login'])

  }
}
