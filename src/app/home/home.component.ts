import { Component, OnInit } from '@angular/core';
import { IMeme } from '../imeme';
import { LocalService } from '../local.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private localStore: LocalService) {
    if (this.localStore.getData('memes') === null) {
      this.localStore.saveData(
        'memes',
        JSON.stringify([
          {
            url: 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
            topText: 'Meow',
            bottomText: 'Meow!',
          },
        ])
      );
    }
  }

  ngOnInit(): void {
    this.memesFromLocal = this.localStore.getData('memes');
    this.memes = JSON.parse(this.memesFromLocal);
  }

  memesFromLocal: any;
  showAlert: boolean = false;

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

  memes!: IMeme[];

  addNewMeme(): void {
    if (this.url) {
      this.showAlert = false;
      this.memes.unshift({
        url: this.url,
        topText: this.topText,
        bottomText: this.bottomText,
      });

      this.localStore.saveData('memes', JSON.stringify(this.memes));
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
