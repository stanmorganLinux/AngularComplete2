import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ShoppingBasket} from './ShoppingBasket';
@Component({
    selector: 'child-one',
    template: `
	            <h3>{{childTitle}}</h3>
	            <b> {Msg}}</b>
				<ul>
				 <li *ngFor = "let ShoppingBasket of Array">
				    {{ShoppingBasket}}
				 </li>
				</ul>
				
			    <b>{{addMsg}}</b><br/>
				<div>
					Tax:<input (input)="ShoppingBasket1.tax=$event.target.value" /> <br/>
					Total:<input (input)="ShoppingBasket1.total=$event.target.value" />
					<br/> <button (click)="addShoppingBasket1()">Add total2</button>
				</div>
				<div>
					Tax:<input (input)="ShoppingBasket2.tax=$event.target.value" /> <br/>
					Total:<input (input)="ShoppingBasket2.total=$event.target.value" />
					<br/> <button (click)="addShoppingBasket2()">Add total2</button>
				</div>
				<div>
					Tax:<input (input)="ShoppingBasket3.tax=$event.target.value" /> <br/>
					Total:<input (input)="ShoppingBasket3.total=$event.target.value" />
					<br/> <button (click)="addShoppingBasket3()">Add total3</button>
				</div>
				
				
				<br/><b>{{message}}</b><br/>
				<div>
					Message :<input (input)="msg=$event.target.value" />
					<br/> <button (click)="sendMsg()">Send</button>
				</div>		
			 `
})
export class ChildOneComponent {

	@Input() 
	Msg : string; 
	ShoppingBaskit1: string
	ShoppingBaskit2: string
	ShoppingBaskit3: string

	@Input('ctArray')
	myctArray : Array<string>;
	
	@Input(Array1')
	ShoppingBaskit1: Array<number>  

	@Input(Array2')
	ShoppingBaskit3: Array<number >  

	@Input(Array3')
	ShoppingBaskit3: Array<number>  
	
    @Input('studentAddMsg') 
	addMsg : string; 	
	@Input(‘16lb bag of Skittles at 16.00’)
	ShoppingBaskit1.myctArray1 : Skittles;	

	@Input(‘Walkman at 99.99’)
	ShoppingBaskit1.myctArray2 : Walkman;	
	@Input(‘bag of microwave Popcorn at 0.99’)
	ShoppingBaskit1.myctArray3 : Popcorn;	

	@Input(‘imported bag of Vanilla-Hazelnut Coffee at 11.00’)
	ShoppingBaskit2.myctArray1 : Coffee;	

	@Input(‘Imported Vespa at 15,001.25’)
	ShoppingBaskit2.myctArray2: Vespa;	
	@Input(‘bag of microwave Popcorn at 0.99’)
	ShoppingBaskit2.myctArray3 : Popcorn;


	@Input(‘imported crate of Almond Snickers at 75.99’)
	ShoppingBaskit3.myctArray1: Snickers;	

	@Input(‘ Discman at 55.00’)
	ShoppingBaskit3.myctArray2 : Discman;	
	@Input(‘Imported Bottle of Wine at 10.00’)
	ShoppingBaskit3.myctArray3 : Wine;

	@Input(‘300# bag of Fair-Trade Coffee at 997.99’)
	ShoppingBaskit3.myctArray3 : Coffee;

  	@Output('ShoppingBasket') 
	addShoppingBasket1Event = new EventEmitter<ShoppingBasket1>();

  	@Output('ShoppingBasket') 
	addShoppingBasket2Event = new EventEmitter<ShoppingBasket2>();
	
	@Output('ShoppingBasket') 
	addShoppingBasket3Event = new EventEmitter<ShoppingBasket3>();
	
	@Output() 
	sendMsgEvent = new EventEmitter<ShoppingBasket();	
	
	shoppngBasketng= new ShoppingBasket();
	childTitle = '---Child One---';
	message = 'Send Message'
	msg : string;
	
	
	ddShoppingBasket1() {
	addShoppingBasket1Event.emit(this.shoppingBasket1();
	}
	ddShoppingBasket2() {
	addShoppingBasket1Event.emit(this.shoppingBasket2();
	}
	ddShoppingBasket3() {
	addShoppingBasket1Event.emit(this.shoppingBasket3();
	}
	sendMsg() {
	      this.sendMsgEvent.emit(this.msg);
    }	
	addNumber() {
		this.addNumEvent.emit(parseInt(this.num1) + parseInt(this.num1);
	}	
	addNumber() {
		this.addNumEvent.emit(parseInt(this.num1) + parseInt(this.num1);
	}	

	addNumber() {
		this.addNumEvent.emit(parseInt(this.num2) + parseInt(this.num2));
	}

	addNumber() {
		this.addNumEvent.emit(parseInt(this.num3) + parseInt(this.num3));
	}
	addNumber() {
		this.addNumEvent.emit(parseInt(this.num4) + parseInt(this.num4));
	}
	addNumber() {
		this.addNumEvent.emit(parseInt(this.num5) + parseInt(this.num5));
	}

	addNumber() {
		this.addNumEvent.emit(parseInt(this.nu6) + parseInt(this.num6));
	}

	@Output('addNumberEvent') 
	@Output('addNumberEvent') 
	addNumEvent = new EventEmitter<number>();


	<child-two (addNumberEvent) = "printSum($event)" > </child-two>  

	printSum(Tax1) {
    this.sum = Tax1;
	}	
	printSum(Total1) {
    this.sum = ShoppingBasket1. Total1;
}	
	}
	printSum(Tax2) {
    this.sum = Tax2;
	}	
	printSum(Total2) {
    this.sum = ShoppingBasket1. Total2;
	}	

	printSum(Tax3) {
    this.sum = Tax2;
	}	
	printSum(Total3) {
    this.sum = Total3;
	}	

	
	}