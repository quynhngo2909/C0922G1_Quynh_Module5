import {Injectable} from '@angular/core';
import {IWord} from '../model/iword';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  meaning: string;
  private dictionary: IWord[] = [{
    word: 'book',
    mean: 'a written text that can be published in printed or electronic form',
  }, {
    word: 'initiative',
    mean: 'a new plan or process to achieve something or solve a problem',
  }, {
    word: 'work',
    mean: 'an activity, such as a job, that a person uses physical or mental effort to do, usually for money',
  }, {
    word: 'impact',
    mean: 'to have an influence on something',
  }, {
    word: 'industry',
    mean: 'the companies and activities involved in the process of producing goods for sale, especially in a factory or special area',
  }];

  constructor() {
  }

  translate(word): string | null {
    for (const w of this.dictionary) {
      if (w.word === word) {
        return w.mean;
      }
    }
    return null;
  }

  getAll() {
    return this.dictionary;
  }

}
