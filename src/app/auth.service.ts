

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://koy60.wiremockapi.cloud/login/';

  constructor(private http: HttpClient) {}

  authenticate(credentials: any): Observable<any> {
    return this.http.post(this.apiUrl, credentials);
  }
}

