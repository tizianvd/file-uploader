import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }

  getThumbnail(id: string) {
    return this.http.get(`http://localhost:3000/api/files/thumbnail/${id}`);
  }
}
