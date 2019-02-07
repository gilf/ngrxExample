import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/post.reducer';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { PostEffects } from './effects/post.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      posts: reducer
    }),
    EffectsModule.forRoot([AppEffects, PostEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
