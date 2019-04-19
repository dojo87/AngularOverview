import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  post = {
    title: 'recourse',
    sections: [
      { header: 'witam', content: 'Witam w 10min dla Angulara' },
      { header: 'wstep', content: 'Może się nie nauczysz Angulara w 10min' },
      {
        header: 'szanse',
        content: '...Ale masz duże szanse dobrze wystartować'
      }
    ]
  };
}
