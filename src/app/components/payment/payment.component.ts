import { Component, OnInit, Input } from '@angular/core';

export interface Categorie {
  value: number;
  viewValue: string;
}

export interface Ticket {
  value: String;
  viewValue: string;
}

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  private selectedCategory : number;
  private selectedNumberofTickets : number;
  @Input() private startingPrice : number;
  private total : number;
  categories: Categorie[] = [
    {value: 10, viewValue: 'A'},
    {value: 20, viewValue: 'B'},
    {value: 30, viewValue: 'C'}
  ];
  tickets: Ticket[] = [
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'},
    {value: '3', viewValue: '3'},
    {value: '4', viewValue: '4'},
    {value: '5', viewValue: '5'},
    {value: '6', viewValue: '6'},
    {value: '7', viewValue: '7'},
    {value: '8', viewValue: '8'},
    {value: '9', viewValue: '9'},
    {value: '10', viewValue: '10 (MAX)'}
  ];
  constructor() { 
    this.startingPrice = 0;
    this.total = 0;
    this.selectedCategory = 0;
    this.selectedNumberofTickets = 0;
  }

  ngOnInit() {
    this.loadStripe();
  }

  onChangeCategory(selectedCategory){
    console.log(selectedCategory);
    this.selectedCategory = selectedCategory;
    this.updateTotal();
  }

  onChangeNumberofTickets(selectedNumberofTickets){
    this.selectedNumberofTickets = selectedNumberofTickets;
    this.updateTotal();
  }

  updateTotal(){
    this.total = this.selectedCategory * this.selectedNumberofTickets;
  }
  loadStripe() {
     
    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      window.document.body.appendChild(s);
    }
}
  pay(amount) {    
    if(!this.total) return;
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_aeUUjYYcx4XNfKVW60pmHTtI',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token)
        alert('Token Created!!');
      }
    });

    handler.open({
      name: 'Checkout',
      description: this.selectedNumberofTickets + " Tickets from Category " + this.categories[this.selectedCategory/10].viewValue,
      amount: amount * 100,
      currency: "tnd"
    });
  }
}
