import { Injectable, OnInit } from '@angular/core';
import { LocalService } from '../local.service';
import { IMeme } from './imeme';

@Injectable({
  providedIn: 'root',
})
export class MemeService {
  constructor(private localStore: LocalService) {}

  memeList = this.localStore.getData('memes');

  defaultMeme: IMeme = {
    url: 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
    topText: "Here's an example",
    bottomText: 'Meow!',
  };

  startWithDefaultData(): void {
    if (this.localStore.getData('memes') === null) {
      this.localStore.saveData('memes', JSON.stringify([this.defaultMeme]));
    }
  }

  restoreToDefault(): void {
    this.localStore.removeData('memes');
  }
}
