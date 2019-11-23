import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LandingpageService {
  private subjectsUrl: string;
  constructor(private http: HttpClient) {
    this.subjectsUrl = 'http://localhost:8080/subjects';
  }
  public findSubjects(): Observable<any> {
    return this.http.get<any>(this.subjectsUrl);
  }
 
}
