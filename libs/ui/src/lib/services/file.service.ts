import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  uploadFile(name: string, file: any) { 

    const authData = this.authService.getAuthData();
    if (!authData) {
      return null;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('userID', authData.sub.toString());
    

    const headers = new HttpHeaders()
    headers.set('content-type', 'multipart/form-data')
 
    

    const req = new HttpRequest('POST', `http://localhost:3000/api/files/add`,  formData, { 'headers': headers , reportProgress: true});
  
    return this.http.request(req);
  }

  removeFile(id: string) {
    return this.http.post<any>('http://localhost:3000/api/files/remove', {id: id});
  }

  getAllFiles(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/api/files')
  }

  getUserFiles(userId: number): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/api/files?userid='+userId)
  }
}

