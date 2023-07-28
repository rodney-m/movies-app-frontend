import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {
  @Input() page = 1;
  @Output() pageChange = new EventEmitter<string>

  changePage(action : string){
    this.pageChange.emit(action)
  }
}
