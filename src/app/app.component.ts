import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from './app.state';
import * as PostActions from './actions/post.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReduxExample';

  constructor(private store: Store<AppState>) {
    this.store.dispatch(new PostActions.LoadPosts());
  }
}
