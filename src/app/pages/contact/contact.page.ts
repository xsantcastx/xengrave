import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.page.html',
  styleUrl: './contact.page.css'
})
export class ContactPage {
  private readonly fb = inject(FormBuilder);

  readonly form = this.fb.group({
    name: this.fb.control('', { validators: [Validators.required] }),
    email: this.fb.control('', { validators: [Validators.required, Validators.email] }),
    phone: this.fb.control(''),
    quantity: this.fb.control(10, { validators: [Validators.required, Validators.min(1)] }),
    notes: this.fb.control(''),
    artwork: this.fb.control<File | null>(null),
  });

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log('Quote request submitted:', this.form.value);
    // TODO: Hook into Firebase Functions or email service.
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement | null;
    this.form.patchValue({ artwork: input?.files?.item(0) ?? null });
  }
}
