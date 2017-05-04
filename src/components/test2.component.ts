import { Component } from "@angular/core";

@Component({
	selector: 'comp2',
	template: '<h2>{{title}}</h2>'
})
export class Test2Component {

	title:string = 'This is component #2';

}