import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.page.html',
  styleUrl: './gallery.page.css'
})
export class GalleryPage {
  pieces = signal(
    Array.from({ length: 12 }).map((_, index) => ({
      image: `/img/gallery-${(index % 6) + 1}.jpg`,
      title: `Custom engraving ${index + 1}`,
    }))
  );
}
