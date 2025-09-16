import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

interface CollectionDetail {
  slug: string;
  title: string;
  intro: string;
  heroImage: string;
  highlights: string[];
  featuredProducts: Array<{ title: string; image: string; priceFrom: number; slug: string }>;
}

@Component({
  selector: 'app-collection-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './collection-detail.page.html',
  styleUrl: './collection-detail.page.css'
})
export class CollectionDetailPage {
  private readonly data = signal<CollectionDetail[]>([
    {
      slug: 'tumblers',
      title: 'Custom Engraved Tumblers',
      intro: 'Premium stainless and powdercoat tumblers with crisp, durable engraving. Perfect for gifting, events, and teams.',
      heroImage: '/img/cat-tumblers.jpg',
      highlights: [
        'Powdercoat, stainless, and color-coated options',
        'Volume pricing for 10+ pieces',
        'Dishwasher-safe etching with strong contrast',
      ],
      featuredProducts: [
        { title: '20oz Powdercoat Tumbler', image: '/img/p-20oz.jpg', priceFrom: 24, slug: '20oz-tumbler' },
        { title: '30oz Travel Tumbler', image: '/img/p-30oz.jpg', priceFrom: 32, slug: '30oz-travel' },
      ]
    },
    {
      slug: 'keychains',
      title: 'Personalized Keychains',
      intro: 'Custom engraved keychains in steel, leather, and acrylic. Durable finishes and fast turnaround.',
      heroImage: '/img/cat-keychains.jpg',
      highlights: [
        'Metal, leather, and acrylic substrates',
        'Dual-sided engraving available',
        'Perfect for promotional drops and events',
      ],
      featuredProducts: [
        { title: 'Brushed Steel Keychain', image: '/img/p-key.jpg', priceFrom: 12, slug: 'steel-keychain' },
        { title: 'Leather Loop Key Fob', image: '/img/p-key-2.jpg', priceFrom: 16, slug: 'leather-fob' },
      ]
    },
    {
      slug: 'skate-decks',
      title: 'Laser-Etched Skate Decks',
      intro: 'Full deck engravings with bold linework and shading suitable for collectors and display pieces.',
      heroImage: '/img/cat-skate.jpg',
      highlights: [
        'Maple and bamboo deck options',
        'Artwork proofing included with every order',
        'Optional color-fill finishing',
      ],
      featuredProducts: [
        { title: 'Street Deck Blank', image: '/img/p-deck.jpg', priceFrom: 89, slug: 'street-deck' },
        { title: 'Cruiser Deck Bamboo', image: '/img/p-deck-2.jpg', priceFrom: 99, slug: 'cruiser-deck' },
      ]
    },
  ]);

  private readonly route = inject(ActivatedRoute);

  private readonly slug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('slug') ?? '')),
    { initialValue: '' }
  );

  readonly collection = computed(() => this.data().find((item) => item.slug === this.slug()) ?? this.data()[0]);
}
