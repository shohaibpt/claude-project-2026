import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ApiResponse, PaginatedResponse } from '../core/models/api-response.model';

export interface Brand {
  id: string;
  name: string;
  logo: string;
  description: string;
  category: string;
  isActive: boolean;
  createdAt: string;
}

@Injectable({ providedIn: 'root' })
export class BrandService {
  private apiUrl = `${environment.apiUrl}/brands`;

  constructor(private http: HttpClient) {}

  getAll(page = 1, limit = 10): Observable<ApiResponse<PaginatedResponse<Brand>>> {
    const params = new HttpParams().set('page', page).set('limit', limit);
    return this.http.get<ApiResponse<PaginatedResponse<Brand>>>(this.apiUrl, { params });
  }

  getById(id: string): Observable<ApiResponse<Brand>> {
    return this.http.get<ApiResponse<Brand>>(`${this.apiUrl}/${id}`);
  }

  create(brand: Partial<Brand>): Observable<ApiResponse<Brand>> {
    return this.http.post<ApiResponse<Brand>>(this.apiUrl, brand);
  }

  update(id: string, brand: Partial<Brand>): Observable<ApiResponse<Brand>> {
    return this.http.put<ApiResponse<Brand>>(`${this.apiUrl}/${id}`, brand);
  }

  delete(id: string): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.apiUrl}/${id}`);
  }
}
