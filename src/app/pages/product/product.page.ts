import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { calcTotal, Complexity } from '../../core/pricing';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

interface ProductView {
  slug: string;
  title: string;
  subtitle?: string;
  basePrice: number;
  images: string[];
  options: Array<{ key: string; label: string; type: 'select' | 'radio'; values: string[] }>;
}

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './product.page.html',
  styleUrl: './product.page.css'
})
export class ProductPage {
  private readonly products = signal<ProductView[]>([
    {
      slug: '20oz-tumbler',
      title: '20oz Powdercoat Tumbler',
      subtitle: 'Keeps drinks icy for 12+ hours with engraving that never fades.',
      basePrice: 24,
      images: ['/img/p-20oz.jpg', '/img/p-20oz-detail.jpg'],
      options: [
        { key: 'color', label: 'Color', type: 'select', values: ['Black', 'White', 'Sand'] },
        { key: 'engraving', label: 'Engraving Complexity', type: 'radio', values: ['simple', 'standard', 'intricate'] },
      ]
    },
    {
      slug: 'steel-keychain',
      title: 'Brushed Steel Keychain',
      subtitle: 'Slim, durable keychain with crisp fiber laser engraving and optional backside art.',
      basePrice: 12,
      images: ['/img/p-key.jpg'],
      options: [
        { key: 'finish', label: 'Finish', type: 'select', values: ['Brushed', 'Matte'] },
        { key: 'engraving', label: 'Engraving Complexity', type: 'radio', values: ['simple', 'standard', 'intricate'] },
      ]
    }
  ]);

  private readonly route = inject(ActivatedRoute);
  private readonly fb = inject(FormBuilder);

  private readonly slug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('slug') ?? '')),
    { initialValue: '' }
  );

  readonly product = computed(() => this.products().find((item) => item.slug === this.slug()) ?? this.products()[0]);

  readonly form = this.fb.nonNullable.group({
    quantity: 1,
    engraving: 'standard' as Complexity,
    color: 'Black',
    finish: 'Brushed',
    text: ''
  });

  readonly total = computed(() => {
    const current = this.product();
    const qty = this.form.get('quantity')?.value ?? 1;
    const complexity = (this.form.get('engraving')?.value ?? 'standard') as Complexity;
    return calcTotal(current.basePrice, complexity, qty);
  });
}
