import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class CallserviceService {

  constructor(private http: HttpClient) { }

  signUp(data: any): Observable<any> {
    return this.http.get<any>(`http://65.108.77.50:3031/add_user?username=${data.username}&password=${data.password}&role=${data.role}`);
  }

  signInForm(data: any): Observable<any> {
    console.log("5")
    return this.http.get<any>(`http://65.108.77.50:3031/login?username=${data.username}&password=${data.password}`);
  }

  getUserList(): Observable<any> {
    console.log('6')
    return this.http.get<any>(`http://65.108.77.50:3031/list_users`)
  }

  addNewPoll(data: any): Observable<any> {
    return this.http.get<any>(`http://65.108.77.50:3031/add_poll?title=${data.title}&options=${data.opt_1}____${data.opt_2}____${data.opt_3}____${data.opt_4}`)
  }

  getallpolls(): Observable<any> {
    console.log('5')
    return this.http.get<any>(`http://65.108.77.50:3031/list_polls`)
  }

  updatePollTitle(id: any, newtitle: any): Observable<any> {
    console.log(6)
    return this.http.get<any>(`http://65.108.77.50:3031/update_poll_title?id=${id}&title=${newtitle}`)
  }

  deletePollSection(id: any): Observable<any> {
    return this.http.delete<any>(`http://65.108.77.50:3031/delete_poll?id=${id}`)
  }

  addNewOption(id: any, addnewopt: any): Observable<any> {
    console.log('responce', id)
    return this.http.get<any>(`http://65.108.77.50:3031/add_new_option?id=${id}&option_text=${addnewopt.newoptionss}`)
  }

  deleteOpt(id: any, option: any): Observable<any> {
    console.log(10)
    return this.http.delete<any>(`http://65.108.77.50:3031/delete_poll_option?id=${id}&option_text=${option}`)
  }

  decodeAccessToken() {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      const decodedToken: any = jwt_decode(accessToken);
      return decodedToken.role;
    }
  }

}

