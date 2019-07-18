import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user-model';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css']
})
export class UploadFormComponent implements OnInit {
  image: File;
  url: string = "http://localhost:5000/api"

  constructor(private http: HttpClient) { }

  private user: User = new User();

  ngOnInit() {
  }

  imageHolder(event) {
    this.image = event.target.files[0];
  }

  save() {
    let formData = new FormData();
    formData.append('details', new Blob([JSON.stringify(this.user)], { type: 'application/json' }));
    formData.append('file', this.image);
      console.log("OUTPUT!!!!");

    const header = new HttpHeaders().delete('Content-Type');
    return this.http.post(`${this.url}/userDetails`, formData, { headers: header });
    console.log("IN!!!!");
  }

}
