import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.page.html',
  styleUrl: './pricing.page.css'
})
export class PricingPage {
  engravingTiers = signal([
    { level: 'Simple', description: 'Line art, initials, or text under 20 characters.', rate: 12 },
    { level: 'Standard', description: 'Multi-line artwork, badges, or detailed text layouts.', rate: 20 },
    { level: 'Intricate', description: 'Photorealistic engraving or heavy shading work.', rate: 35 },
  ]);

  volumeDiscounts = signal([
    { min: 10, discount: '5% off engraving' },
    { min: 20, discount: '10% off engraving' },
    { min: 50, discount: '20% off engraving' },
  ]);

  addOns = signal([
    { name: 'Color fill', price: 8 },
    { name: 'Rush proof (same day)', price: 15 },
    { name: 'Gift packaging', price: 4 },
  ]);
}
