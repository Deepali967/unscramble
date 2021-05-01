import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unscramble',
  templateUrl: './unscramble.component.html',
  styleUrls: ['./unscramble.component.scss'],
})
export class UnscrambleComponent implements OnInit {
  word = {
    wordLength: [5, 6, 9],
    word: 'ahrryoprteryurthngnh',
    answer: ['harry'],
  };

  scrambledWord: any = {};

  constructor() {}

  ngOnInit() {
    this.fetchCurrentWordInfo();
  }

  fetchCurrentWordInfo() {
    this.scrambledWord.word = [];
    this.word.word.split('').forEach((word, index) => {
      this.scrambledWord.word.push({ id: word, selected: false, index: index });
    });

    this.createUserWord();
    console.log(this.scrambledWord);
  }

  createUserWord() {
    this.scrambledWord.userWord = {};
    this.word.wordLength.forEach((wordLength, i) => {
      this.scrambledWord.userWord[i] = this.addUserWord(wordLength);
    });
  }

  addUserWord(length) {
    var userWordobj = {};
    for (var i = 0; i < length; i++) {
      userWordobj[i] = '';
    }
    return userWordobj;
  }

  findNext(table) {
    var value = {};

    for (var key = 0; key < Object.keys(table).length; key++) {
      if (!this.findEmptySpaceInColumn(key)) {
        continue;
      } else {
        value = this.findEmptyValue(key);
        break;
      }
    }

    return value;
  }

  findEmptySpaceInColumn(key) {
    let flag = false;
    Object.keys(this.scrambledWord.userWord[key]).forEach((value) => {
      if (!this.scrambledWord.userWord[key][value]) {
        flag = true;
      }
    });
    return flag;
  }

  findEmptyValue(key) {
    for (
      var keyValue = 0;
      keyValue < Object.keys(this.scrambledWord.userWord[key]).length;
      keyValue++
    ) {
      if (!this.scrambledWord.userWord[key][keyValue]) {
        return { key, keyValue };
      }
    }
  }

  prepareUserWord(option, index) {
    if (option.selected) {
      return;
    }

    option.selected = true;
    var nextValue = this.findNext(this.scrambledWord.userWord);

    this.scrambledWord.userWord[nextValue['key']][nextValue['keyValue']] = {
      index: index,
      id: option.id,
    };

    if (!this.findEmptySpaceInColumn(nextValue['key'])) {
      this.validate(nextValue['key']);
    }
  }

  unselectWord(word, userWordRow, userWordColumn) {
    if (!word) {
      return;
    }

    this.scrambledWord.userWord[userWordRow][userWordColumn] = '';

    this.scrambledWord.word.filter(
      (letter) => letter.index === word.index
    )[0].selected = false;
  }

  validate(key) {
    console.log(
      Object.values(this.scrambledWord.userWord[key])
        .map((word: any) => (word.value = word.id))
        .join('')
    );
  }
}
