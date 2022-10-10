import { Injectable, OnInit } from '@angular/core';
import { LocalService } from '../local.service';
import { IMeme } from './imeme';

@Injectable({
  providedIn: 'root',
})
export class MemeService {
  memeList = this.localStore.getData('memes');

  defaultMeme: IMeme = {
    url: 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
    topText: "Here's an example",
    bottomText: 'Meow!',
  };

  constructor(private localStore: LocalService) {}

  startWithDefaultData() {
    if (this.localStore.getData('memes') === null) {
      this.localStore.saveData('memes', JSON.stringify([this.defaultMeme]));
    }
  }

  restoreToDefault() {
    this.localStore.removeData('memes');
  }
}
