import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { json } from 'express';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // if (sessionStorage.getItem('username') !== null) {
    //   return true;
    // } else {
    //   this.router.navigate(['/login']);
    //   return false;
    // }

    const accessToken = localStorage.getItem('accessToken'); // Implement your login check logic
    if (!accessToken) {
      // If the user is not logged in, redirect to the login page or any other route
      this.router.navigate(['/login']);
      return false;
    }

    // If the user is logged in, allow navigation to the requested route
    return true;
  }
}
