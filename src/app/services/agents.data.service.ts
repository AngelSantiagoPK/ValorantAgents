import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AgentsDataService {
  constructor(private http: HttpClient) {}

  get() {
    const jwt = 'keyLErtb18ckdPhpm';
    const headers = new HttpHeaders({
      Authorization: `Bearer ${jwt}`,
    });
    return this.http.get(
      'https://api.airtable.com/v0/appXOr8BTWFINNzZL/Agents?maxRecords=3&view=Grid%20view',
      { headers }
    );
  }
}
