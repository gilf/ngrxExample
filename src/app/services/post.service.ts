import { Injectable } from '@angular/core';
import {Post} from '../models/Post';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PostService {
  constructor(private http: HttpClient) {}

  loadPosts() {
    return this.http.get<Post[]>('assets/posts.json');
  }
}
