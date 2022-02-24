import {ElementRef, ViewChild, EventEmitter, Output, Component} from '@angular/core';
import {Subject} from 'rxjs';

@Component({
  template: '',
})

// tslint:disable-next-line:component-class-suffix
export class AudioPlyerOptions {
  totalAudioLength;
  currentAudioTime = 0;
  isAudioLoaded: boolean = false;
  isAudioPlaying: boolean;
  isRepeat: boolean = false;
  audioVolume = 100;
  isAudioEnded = new Subject;
  isMute = false;
  @Output() playEvent = new EventEmitter();
  @Output() pauseEvent = new EventEmitter();

  @ViewChild('audioPlayer', {static: true}) audioPlayer: ElementRef;


  options(): void {
    this.audioPlayer.nativeElement.addEventListener('playing', () => {
    });

    this.audioPlayer.nativeElement.addEventListener('loadeddata', () => {
      this.isAudioLoaded = true;
      this.getAudioLength();
    });

    this.audioPlayer.nativeElement.addEventListener('timeupdate', () => {
      this.currentAudioTime = Math.floor(this.audioPlayer.nativeElement.currentTime);
      if (this.audioPlayer.nativeElement.ended) {
        this.isAudioEnded.next(true);
      }
    });

    this.audioPlayer.nativeElement.addEventListener('volumechange', () => {
      this.audioVolume = Math.floor(this.audioPlayer.nativeElement.volume * 100);
      if (this.audioVolume === 0) {
        this.isMute = true;
      } else {
        this.isMute = false;
      }
    });
  }


  play() {
    this.isAudioPlaying = true;
    setTimeout(() => {
      this.audioPlayer.nativeElement.play();
      this.playEvent.emit();
    }, 0);
  }

  pause() {
    this.isAudioPlaying = false;
    setTimeout(() => {
      this.audioPlayer.nativeElement.pause();
      this.pauseEvent.emit();
    }, 0);
  }

  getAudioLength() {
    this.totalAudioLength = Math.floor(this.audioPlayer.nativeElement.duration);
  }
}
