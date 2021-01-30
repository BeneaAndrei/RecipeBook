import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

@ViewChild('nameInput', {static: true}) nameInputRef: ElementRef;
@ViewChild('amountInput', {static: true}) amountInputRef: ElementRef;
@Output() ingredientAdded = new EventEmitter<Ingredient>();

  onIngredientAdded(): void
  {
    const nameIngredient = this.nameInputRef.nativeElement.value;
    const amountIngredient = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(nameIngredient, amountIngredient);
    this.ingredientAdded.emit(newIngredient);

  }
  constructor() { }

  ngOnInit(): void {
  }

}
