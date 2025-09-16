import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css'
})
export class HomePage {
  featured = signal([
    { title: 'Custom Tumblers', slug: 'tumblers', image: '/img/cat-tumblers.jpg' },
    { title: 'Personalized Keychains', slug: 'keychains', image: '/img/cat-keychains.jpg' },
    { title: 'Laser-Etched Skate Decks', slug: 'skate-decks', image: '/img/cat-skate.jpg' },
    { title: 'Wedding & Corporate Gifts', slug: 'wedding', image: '/img/cat-wedding.jpg' },
  ]);

  bestsellers = signal([
    { title: '20oz Powdercoat Tumbler', slug: '20oz-tumbler', price: 24, image: '/img/p-20oz.jpg' },
    { title: 'Brushed Steel Keychain', slug: 'steel-keychain', price: 12, image: '/img/p-key.jpg' },
    { title: 'Map Engraved Wallet Card', slug: 'wallet-card', price: 18, image: '/img/p-card.jpg' },
  ]);

  badges = signal([
    { label: 'Proof in 24h' },
    { label: 'Ships in 48–72h' },
    { label: 'Industrial-grade precision' },
  ]);

  logos = signal([
    'logo-makerforge.svg',
    'logo-grindhouse.svg',
    'logo-driftunion.svg',
  ]);
}
