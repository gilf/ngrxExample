import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Post } from '../models/Post';
import { AppState } from '../app.state';
import * as PostActions from '../actions/post.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  posts: Observable<Post[]>;
  constructor(private store: Store<AppState>) {
    this.posts = store.select('posts');
  }

  removePost(index) {
    this.store.dispatch(new PostActions.RemovePost(index));
  }

  ngOnInit() {
  }

}
