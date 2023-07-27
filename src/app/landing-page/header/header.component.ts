import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  active_navbar: string = 'menu'
  menu_btn: any = true
  closeBtn: any = false

  menu_button() {
    this.active_navbar = ''
    this.closeBtn = true
    this.menu_btn = false
  }

  close_btn() {
    this.active_navbar = 'menu'
    this.closeBtn = false 
    this.menu_btn = true
  }
}
