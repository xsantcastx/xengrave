import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.page.html',
  styleUrl: './about.page.css'
})
export class AboutPage {
  process = signal([
    { title: 'Materials', description: 'Stainless, powdercoat tumblers, maple, bamboo, anodized aluminum, and acrylic stocked weekly.' },
    { title: 'Machines', description: '120w CO2, 50w fiber, and UV laser systems calibrated for consistent depth and contrast.' },
    { title: 'Quality Assurance', description: 'Dual-inspection on every piece: proofing before engraving and post-engraving QC with photo documentation.' },
    { title: 'Sustainability', description: 'Low-waste packing materials, reclaimed wood for prototyping, and VOC-free cleaning solutions.' },
  ]);
}
