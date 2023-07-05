import { Component } from '@angular/core';
import { AddpollComponent } from '../addpoll/addpoll.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private dialog: MatDialog, private router: Router) { }

  isAdmin: boolean = false;

  addNewPoll() {
    this.dialog.open(AddpollComponent, {
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '500ms',
      width: '50%'
    })
  }

  ngDoCheck(): void {
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

  logout() {
    localStorage.clear();
    this.router.navigate(['login'])
  }

}


