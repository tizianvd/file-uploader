import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }

  uploadFile(name: string, file: any) { 

    const formData = new FormData();
    formData.append('file', file);

    const req = new HttpRequest('POST', `http://localhost:3000/api/files/add`, formData, {
        reportProgress: true,
        responseType: 'json'
    });
  
    return this.http.request(req);

    //return this.http.post('http://localhost:3000/api/files/add', formData);
  }

  getAllFiles(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/api/files')
  }
}

