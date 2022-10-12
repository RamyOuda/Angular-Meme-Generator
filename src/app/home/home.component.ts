import { Component, OnInit } from '@angular/core';
import { IMeme } from '../meme/imeme';
import { LocalService } from '../local.service';
import { MemeService } from '../meme/meme.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private localStore: LocalService,
    private memeService: MemeService
  ) {}

  ngOnInit(): void {
    this.memeService.startWithDefaultData();
    this.memeService.getMemes();
    this.memesFromLocal = this.memeService.memeList;
    this.memes = JSON.parse(this.memesFromLocal);
  }

  memesFromLocal: any;
  memes!: IMeme[];
  showAlert: boolean = false;
  submitted: boolean = false;

  private _url: string = '';
  get url(): string {
    return this._url;
  }
  set url(value: string) {
    this._url = value;
  }

  private _topText: string = '';
  get topText(): string {
    return this._topText;
  }
  set topText(value: string) {
    this._topText = value;
  }

  private _bottomText: string = '';
  get bottomText(): string {
    return this._bottomText;
  }
  set bottomText(value: string) {
    this._bottomText = value;
  }

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
