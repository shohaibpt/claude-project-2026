import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../core/models/user.model';
import { ApiResponse } from '../core/models/api-response.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<ApiResponse<{ token: string; user: User }>> {
    return this.http.post<ApiResponse<{ token: string; user: User }>>(
      `${environment.apiUrl}/auth/login`,
      { email, password }
    ).pipe(
      tap(response => {
        localStorage.setItem('access_token', response.data.token);
        this.currentUserSubject.next(response.data.user);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('access_token');
    this.currentUserSubject.next(null);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('access_token');
  }
}
