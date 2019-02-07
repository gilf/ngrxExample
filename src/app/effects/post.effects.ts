import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import * as PostActions from '../actions/post.actions';
import { map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/Post';

@Injectable()
export class PostEffects {

  constructor(private actions$: Actions, private http: HttpClient) {}

  @Effect()
  loadPosts$: Observable<Action> = this.actions$.pipe(
    ofType(PostActions.POST_ACTIONS.LOAD_POSTS),
    switchMap(() => {
      return this.http.get<Post[]>('assets/posts.json')
        .pipe(
          map(posts => {
            return new PostActions.SetPosts(posts);
          })
        );
    })
  );
}
