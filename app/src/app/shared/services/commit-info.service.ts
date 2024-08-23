import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommitInfoService {
  private appInfoUrl = 'assets/commit-info.json';
  private libInfoUrl = 'assets/lib-commit-info.json';

  constructor(private http: HttpClient) {}

  getCommitInfo(): Observable<any> {
    // return this.http.get<any>(this.appInfoUrl);
    return forkJoin({
      appInfo: this.http.get<any>(this.appInfoUrl),
      libInfo: this.http.get<any>(this.libInfoUrl)
    }).pipe(
      map((response) => ({
        ...response.appInfo,
        std_ui_lib: response.libInfo
      }))
    );
  }
}
