import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-ejemplo2',
  templateUrl: './ejemplo2.component.html',
  styleUrls: ['./ejemplo2.component.css']
})
export class Ejemplo2Component implements OnInit {

  eventos = [];
  observable = Observable.create(observer => {
    try {
      observer.next('Evento amarillo');
      observer.next('Evento verde');
      setInterval(() => {
        observer.next('Nuevo evento');
      }, 2000);
      observer.next('Evento celeste');
    } catch (err) {
      observer.error(err);
    }
  });
  observador ;

  add = (data) => {
    this.eventos.push(data);
  }

  subscribirse = () => {
    this.observador = this.observable.subscribe(
      value => this.add(value),
      error => this.add(error),
      () => this.add('completado')
    );
  }
  unsubscribe = () => {
    this.observador.unsubscribe();
  }

  constructor() { }

  ngOnInit() {

  }

}
