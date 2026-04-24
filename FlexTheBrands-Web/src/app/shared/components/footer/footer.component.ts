import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <p>&copy; {{ year }} FlexTheBrands. All rights reserved.</p>
    </footer>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  year = new Date().getFullYear();
}
