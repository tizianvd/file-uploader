import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }

  uploadFile() { 
    return this.http.post('http://localhost:3000/api/files/add', {name: "test"});
  }
}

