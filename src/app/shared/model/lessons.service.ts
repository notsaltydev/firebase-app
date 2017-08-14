import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Lesson} from './lesson';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class LessonsService {

  constructor(private ad: AngularFireDatabase) {
  }

  findAllLessons(): Observable<Lesson[]> {
    return this.ad.list('lessons');
  }
}
