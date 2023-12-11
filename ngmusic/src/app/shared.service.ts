import { trigger } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Songs } from './model/songs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  updateSongs(songs: any[]) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }
  public getSongs(): Observable<Songs[]>
  {
    const url = 'http://localhost:3000/songs';
    return this.http.get<Songs[ ]>(url);
  }
  public addSong(song: Songs): Observable<any>
  {
    const url = 'http://localhost:3000/songs';
    return this.http.post(url, song);
  }
  
  public deleteSong(id: number): Observable<any>
  {
    const url = 'http://localhost:3000/songs/' + id;
    return this.http.delete(url);
  }
  public updateSong(song: Songs): Observable<any>
  {
    const url = 'http://localhost:3000/songs/' + song.id;
    return this.http.put(url, song);
  }

  getSongById(id: any){
    const url = 'http://localhost:3000/songs/' + id;
    return this.http.get(url);
  }

}
