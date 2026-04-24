import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `
    <div class="loader-overlay" *ngIf="isLoading">
      <div class="spinner"></div>
    </div>
  `,
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  @Input() isLoading = false;
}
