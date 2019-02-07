import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Post } from '../models/Post';
import * as PostActions from '../actions/post.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  addPost(name, content, url) {
    this.store.dispatch(new PostActions.AddPost({ name, content, url }));
  }

  ngOnInit() {
  }

}
