import { Component, OnInit } from '@angular/core';
import { BreakpointObserver,Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { ProjectRegisterComponent } from './project-register/project-register.component';

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
      this.drawBackgroundLine();
    if (!state.matches) {
    console.log(
    'This is the Handset Portrait point at max-width: 599.98 px and portrait orientation.'
    );
    this.shapeSelector = true;
    console.log(this._shapeSelector);
    }
    });
    }

  
    drawBackgroundLine(){
      const svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg1.setAttribute('id','svg');

      const line = document .createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute('stroke-width', '1px');
      line.setAttribute('stroke', '#FFFFFF');
      line.setAttribute('marker-end', 'url(#triangle)');
      //line.setAttribute('stroke-dasharray','8');

      svg1.appendChild(line);
      
      document.body.appendChild(svg1);

      svg1.style.position='absolute';
      svg1.style.top='0';
      svg1.style.left='0';
      svg1.style.width='100%';
      svg1.style.height='100vh';
      svg1.style.zIndex='-2';

      const x1 = 100;
      const x2 = 600;
      const y1 = 500;
      const y2 = 500;

      line.setAttribute( 'x1', `${x1}` );
      line.setAttribute( 'x2', `${x2}` );
      line.setAttribute( 'y1', `${y1}` );
      line.setAttribute( 'y2', `${y2}` );
    }
}
