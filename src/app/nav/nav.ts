import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Logo } from '../logo/logo';

@Component({
  selector: 'app-nav',
  imports: [RouterModule, Logo],
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
})
export class Nav {

}
