import { Component } from '@angular/core';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuOpenComponent } from '../../ui/icons/menu-open/menu-open.component';
import { MenuCloseComponent } from '../../ui/icons/menu-close/menu-close.component';

@Component({
  selector: 'app-header',
  imports: [
    RouterModule,
    RouterLinkActive,
    CommonModule,
    MenuOpenComponent,
    MenuCloseComponent,
  ],
  templateUrl: './header.component.html',
  standalone: true,
})
export class HeaderComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
