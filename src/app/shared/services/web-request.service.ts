import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  constructor(private http: HttpClient) { }

  get(uri: string) {
    return this.http.get(`${environment.ROOT_URL}/${uri}`)
  }

  post(uri: string, payload: Object) {
    return this.http.post(`${environment.ROOT_URL}/${uri}`, payload);
  }

  patch(uri: string, payload: Object) {
    return this.http.patch(`${environment.ROOT_URL}/${uri}`, payload);
  }

  delete(uri: string) {
    return this.http.delete(`${environment.ROOT_URL}/${uri}`);
  }
}
