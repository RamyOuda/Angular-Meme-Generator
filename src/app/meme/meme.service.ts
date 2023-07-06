import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from '../local.service';
import { IMeme } from './imeme';

@Injectable({
  providedIn: 'root',
})
export class MemeService {
  constructor(private router: Router, private localStore: LocalService) {}

  memeList: string | null = this.localStore.getData('memes');
  memes!: IMeme[];
  memesFromLocal!: string | null;

  defaultMeme: IMeme = {
    url: 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
    topText: "Here's an example",
    bottomText: 'Meow!',
  };

  startWithDefaultData(): void {
    if (this.memeList === null || this.memeList.length === 0) {
      this.localStore.saveData('memes', JSON.stringify([this.defaultMeme]));
      this.getMemes();
    }
  }

  getMemes(): void {
    this.memeList = this.localStore.getData('memes');
  }

  restoreToDefault(): void {
    this.localStore.removeData('memes');
    this.localStore.saveData('memes', JSON.stringify([this.defaultMeme]));
    this.getMemes();
  }

  removeMeme(): void {
    this.getMemes();

    this.memesFromLocal = this.memeList;

    if (this.memesFromLocal) {
      this.memes = JSON.parse(this.memesFromLocal);
    }

    if (this.memes.length > 1) {
      this.memes.shift();
      this.localStore.saveData('memes', JSON.stringify(this.memes));
      location.reload();
    } else {
      this.restoreToDefault();
      this.router.navigate(['/home']);
    }
  }
}
