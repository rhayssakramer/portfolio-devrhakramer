import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DevToArticle {
  id: number;
  title: string;
  description: string;
  url: string;
  published_at: string;
  cover_image?: string;
  tag_list: string[];
  positive_reactions_count: number;
  public_reactions_count: number;
  reading_time_minutes: number;
}

@Injectable({
  providedIn: 'root'
})
export class DevToService {
  private readonly username = 'devrhakramer';
  private readonly apiUrl = `https://dev.to/api/articles?username=${this.username}&per_page=1000`;

  constructor(private http: HttpClient) {}

  getArticles(): Observable<DevToArticle[]> {
    return this.http.get<DevToArticle[]>(this.apiUrl);
  }
}
