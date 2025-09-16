import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-collections',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './collections.page.html',
  styleUrl: './collections.page.css'
})
export class CollectionsPage {
  collections = signal([
    { title: 'Custom Engraved Tumblers', slug: 'tumblers', image: '/img/cat-tumblers.jpg', blurb: 'Powdercoat and stainless tumblers ready for corporate gifting or events.' },
    { title: 'Personalized Keychains', slug: 'keychains', image: '/img/cat-keychains.jpg', blurb: 'Durable metal and leather keychains with crisp engraving.' },
    { title: 'Laser-Etched Skate Decks', slug: 'skate-decks', image: '/img/cat-skate.jpg', blurb: 'Full-deck artwork with striking depth and contrast.' },
    { title: 'Wedding & Corporate Gifts', slug: 'wedding', image: '/img/cat-wedding.jpg', blurb: 'Keepsakes and gift sets that make a lasting impression.' },
    { title: 'Pet Tags & Metal Cards', slug: 'pet-tags', image: '/img/cat-pet.jpg', blurb: 'High-contrast tags and wallet cards that withstand daily use.' },
  ]);
}
