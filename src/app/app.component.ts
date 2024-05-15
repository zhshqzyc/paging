import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PagingComponent } from './paging/paging.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, PagingComponent],
})
export class AppComponent {
  title = 'paging';
  totalItems: number = 5;
  currentPage: number = 1;
  step: number = 2;
  pageSize: number = 25;

  change(value: number) {
    console.log(value);
  }
}
