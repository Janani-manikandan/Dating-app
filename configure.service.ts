import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from './../environments/environment';
import { BehaviorSubject, Observable} from 'rxjs';
const httpOptions={

headers :new HttpHeaders({'Content-Type':'application/json'})
}


@Injectable({
  providedIn: 'root'
})
export class ConfigureService {
  getCommonItems(category: { slug: string; }) {
    throw new Error('Method not implemented.');
  }
  base_url_lms: string = environment.basePublic;
  list :any=[];

  private userDataSource = new BehaviorSubject({email : '', password : ''});
  currentUserData = this.userDataSource.asObservable();


  constructor(private http: HttpClient,
    ){}


  changeData(newUserData: { email: string; password: string; }) {
    this.userDataSource.next(newUserData)
  }
}


