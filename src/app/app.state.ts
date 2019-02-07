import { Post } from './models/Post';

export interface AppState {
  readonly posts: Post[];
}
