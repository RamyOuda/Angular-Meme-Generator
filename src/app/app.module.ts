import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LibraryModule } from './library/library.module';
import { MemeComponent } from './meme/meme.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, MemeComponent],
  imports: [BrowserModule, FormsModule, LibraryModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
