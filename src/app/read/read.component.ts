import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Post } from '../models/Post';
import { AppState } from '../app.state';
import * as PostActions from '../actions/post.actions';
import {selectPosts, selectPostsCount} from '../selectors/post.selectors';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  posts: Observable<Post[]>;
  postCount: Observable<number>;
  constructor(private store: Store<AppState>) {
    this.posts = store.select(selectPosts);
    this.postCount = store.select(selectPostsCount);
  }

  removePost(index) {
    this.store.dispatch(new PostActions.RemovePost(index));
  }

  ngOnInit() {
  }
}
