import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonPrimaryComponent } from '../button-primary/button-primary.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, NgOptimizedImage, ButtonPrimaryComponent],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
