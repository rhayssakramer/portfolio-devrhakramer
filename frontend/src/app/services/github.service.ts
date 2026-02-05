import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  homepage: string;
  topics: string[];
  language: string;
  stargazers_count: number;
  forks_count: number;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  owner: {
    avatar_url: string;
    login: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class GitHubService {
  private readonly username = 'rhayssakramer';
  private readonly apiUrl = `https://api.github.com/users/${this.username}/repos?sort=updated&per_page=100`;

  constructor(private http: HttpClient) {}

  getRepositories(): Observable<GitHubRepo[]> {
    return this.http.get<GitHubRepo[]>(this.apiUrl);
  }
}
