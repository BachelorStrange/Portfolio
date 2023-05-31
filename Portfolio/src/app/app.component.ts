import { Component, OnInit } from '@angular/core';
import { BreakpointObserver,Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'Portfolio';
  public _shapeSelector = false;

  constructor(public responsive: BreakpointObserver){};

  get shapeSelector(): boolean {
    return this._shapeSelector;
  }

  set shapeSelector(value: boolean) {
    this._shapeSelector = value;
  }

  ngOnInit() {
    this.responsive
    .observe([Breakpoints.HandsetPortrait])
    .subscribe((state: BreakpointState) => {
      console.log(state);
    if (state.matches) {
    console.log(
    'This is the Handset Portrait point at max-width: 599.98 px and portrait orientation.'
    );
    this.shapeSelector = true;
    console.log(this._shapeSelector);
    }
    });
    }
}
