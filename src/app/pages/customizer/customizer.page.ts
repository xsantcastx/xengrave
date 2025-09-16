import { CommonModule } from '@angular/common';
import { Component, OnDestroy, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-customizer',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './customizer.page.html',
  styleUrl: './customizer.page.css'
})
export class CustomizerPage implements OnDestroy {
  private readonly fb = inject(FormBuilder);

  readonly form = this.fb.nonNullable.group({
    text: 'Diego',
    x: 80,
    y: 120,
  });

  readonly text = signal(this.form.value.text);
  readonly x = signal(this.form.value.x);
  readonly y = signal(this.form.value.y);

  private readonly subscription = this.form.valueChanges.subscribe((value) => {
    this.text.set(value.text ?? '');
    this.x.set(value.x ?? 0);
    this.y.set(value.y ?? 0);
  });

  onFile(event: Event) {
    const input = event.target as HTMLInputElement | null;
    if (!input?.files?.length) {
      return;
    }
    const [file] = input.files;
    console.log('Selected artwork file:', file.name);
    // TODO: integrate with Firebase Storage upload service.
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
