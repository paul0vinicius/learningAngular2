import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonsModule } from 'ngx-bootstrap'

@Component({
  selector: 'my-app',
  template: `<h1>{{name}}</h1><gay-name [name]="name" (onNameChanged)="setName($event)">
  </gay-name>`,
})
export class AppComponent  { 
	constructor() {	}

	name = 'LipSync'; 

	setName(newName: string){
		this.name = newName;
	}
}

@Component({
	selector: 'gay-name',
	template: ` <button  type="button" class="btn btn-primary" (click)="changeName('Valentina Sashay Away')"> Greedy </button>
	`,
})
export class HelloGayWorld { 
	constructor() {}

	// gayName = 'Vinicius'; 

	@Input() name: string;
	@Output() onNameChanged = new EventEmitter<string>();

	changeName(newName: string) {
		this.onNameChanged.emit(newName);
	}
}