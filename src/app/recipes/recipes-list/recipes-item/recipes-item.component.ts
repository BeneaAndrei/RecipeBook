import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../../recipe.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {

  constructor() { }

  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();

  onSelected(): void
  {
    this.recipeSelected.emit();
  }

  ngOnInit(): void {
  }

}
