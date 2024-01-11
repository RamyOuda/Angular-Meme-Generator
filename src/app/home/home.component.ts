import { Component, OnInit } from '@angular/core';
import { IMeme } from '../meme/imeme';
import { LocalService } from '../local.service';
import { MemeService } from '../meme/meme.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  url = '';
  topText = '';
  bottomText = '';

  constructor(
    private localStore: LocalService,
    private memeService: MemeService
  ) {}

  ngOnInit(): void {
    this.memeService.startWithDefaultData();
    this.memeService.getMemes();
    this.memesFromLocal = this.memeService.memeList;

    if (this.memesFromLocal) {
      this.memes = JSON.parse(this.memesFromLocal);
    }
  }

  memesFromLocal!: string | null;
  memes!: IMeme[];
  showAlert: boolean = false;
  submitted: boolean = false;

  addNewMeme(): void {
    if (this.url) {
      this.showAlert = false;
      this.memes.unshift({
        url: this.url,
        topText: this.topText,
        bottomText: this.bottomText,
      });
      this.localStore.saveData('memes', JSON.stringify(this.memes));
      this.submitted = true;
      this.clearInputs();
    } else {
      this.showAlert = true;
    }
  }

  clearInputs(): void {
    this.url = '';
    this.topText = '';
    this.bottomText = '';
  }
}
