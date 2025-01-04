import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, provideRouter } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { log } from 'console';
import { Customer } from '../../models/customer.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-customer-list',
  imports: [MatButtonModule,
    RouterModule,
    CommonModule,
    MatIconModule
  ],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent implements OnInit {

  // Inject Customer Service
  private customerService = inject(CustomerService);

  customers!: Customer[];
  ngOnInit(): void {
    this.customerService.get().subscribe(
      data => {
        console.log('Customer:', data);
        this.customers = data
      },
      error => {
        console.error('Error:', error);
      }
    );
  }
  onDeleteClick(customer: Customer) {
    throw new Error('Method not implemented.');
  }


}
