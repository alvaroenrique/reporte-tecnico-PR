import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  openGit() {
    window.open('https://github.com/alvaroenrique/reporte-tecnico-PR', '_blank');
  }
}
