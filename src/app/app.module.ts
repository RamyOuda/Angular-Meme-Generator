import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LibraryModule } from './library/library.module';
import { MemeComponent } from './meme/meme.component';
import { MemeModule } from './meme/meme.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    FormsModule,
    MemeModule,
    LibraryModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
