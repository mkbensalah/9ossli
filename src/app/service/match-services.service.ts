import { Injectable } from '@angular/core';
import { MatchModule } from '../modal/match/match.module'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchServicesService {
private matchs: MatchModule [] ; 
url = 'http://localhost:3000/api/matches'
  constructor( private http: HttpClient) { }

  getMatchs(): Observable<MatchModule[]> {
    return this.http.get<MatchModule[]>(this.url);
  }

  getMatchById(id: string): Observable<MatchModule> {
    return this.http.get<MatchModule>(this.url+'/'+id);
  }
}
