import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user-model';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  url: string = "http://localhost:5000/api";

  constructor(private http:HttpClient) { }

  save(user:User, image:File) {
    let formData = new FormData();
    formData.append('details', new Blob([JSON.stringify(user)], { type: 'application/json' }));
    formData.append('file',image);

    const header = new HttpHeaders().delete('Content-Type');
    return this.http.post(`${this.url}/userDetails`, formData, { headers: header });
  }
}
