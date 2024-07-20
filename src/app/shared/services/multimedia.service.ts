import { EventEmitter, Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { BehaviorSubject, observable, Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {
  public trackInfo$: BehaviorSubject<TrackModel | undefined> = new BehaviorSubject<TrackModel | undefined>(undefined);

  constructor() {}
}