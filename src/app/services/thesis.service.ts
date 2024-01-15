import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThesisService {
    constructor(private http: HttpClient) { }

    uploadThesis(body: any) {
        return this.http.post('server/api/thesis/upload-thesis', body);
    }
}
