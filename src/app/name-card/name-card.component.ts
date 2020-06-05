import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-name-card',
  templateUrl: './name-card.component.html',
  styleUrls: ['./name-card.component.css']
})
export class NameCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  _cardName: number;
  @Input() email: string;
  @Input() phone: string;

  @Input()
  get cardName(){
    return this._cardName;
  }

  set cardName(cardName){
    let numCardName = Number(cardName);
    if(isNaN(numCardName)){
      this._cardName = 99
    } else {
      this._cardName = numCardName;
    }
  }

}
