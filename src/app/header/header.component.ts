import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() { }
collapsed = true;

  @Output() featureSelected = new EventEmitter<string>();
  onSelect(feature: string): void
  {
    this.featureSelected.emit(feature);
  }

  ngOnInit(): void {
  }

}
