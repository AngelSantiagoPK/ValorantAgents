// abilities.data.service.ts
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class AbilitiesDataService {
  constructor(private http: HttpClient) {}
  getOne(id: number) {
    const jwt = 'keyLErtb18ckdPhpm';
    const headers = new HttpHeaders({
      Authorization: `Bearer ${jwt}`,
    });
    return this.http.get(
      `https://api.airtable.com/v0/appXOr8BTWFINNzZL/Abilities/${id}`,
      { headers }
    );
  }
}
