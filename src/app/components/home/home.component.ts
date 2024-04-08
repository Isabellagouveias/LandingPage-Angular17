import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { BenefitComponent } from '../benefit/benefit.component';
import { ButtonPrimaryComponent } from '../button-primary/button-primary.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { NewsletterFormComponent } from '../newsletter-form/newsletter-form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    NgOptimizedImage,
    ButtonPrimaryComponent,
    NewsletterFormComponent,
    BenefitComponent,
    FooterComponent,
  ],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
