import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }

  uploadFile(name: string, content: string) { 
    return this.http.post('http://localhost:3000/api/files/add', {name: name, content: content});
  }

  getAllFiles(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/api/files');
  }
}

