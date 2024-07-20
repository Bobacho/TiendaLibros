import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment-page',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './payment-page.component.html',
  styleUrl: './payment-page.component.css'
})
export class PaymentPageComponent implements OnInit {
  trackName: string | null = '';
  trackAlbum: string | null = '';
  trackCover: string | null = '';
  paymentForm: FormGroup;

  constructor(private route: ActivatedRoute, private fb: FormBuilder) {
    this.paymentForm = this.fb.group({
      cardName: ['', Validators.required],
      cardNumber: ['', Validators.required],
      expiryDate: ['', Validators.required],
      cvv: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.trackName = params['name'];
      this.trackAlbum = params['album'];
      this.trackCover = params['cover'];
    });
  }

  onSubmit(): void {
    if (this.paymentForm.valid) {
      console.log(this.paymentForm.value);
      // Lógica para procesar el pago
    }
  }
}