import { IsNotEmpty, isNotEmpty } from 'class-validator';
import { BaseDto } from '../../config/base.dto';
import { CustomerEntity } from '../../customer/entities/customer.entity';

export class PurchaseDto extends BaseDto {
  @isNotEmpty()
  status!: StatusPurchare;

  @IsNotEmpty()
  paymentMethod!: string;

  @IsNotEmpty()
  customer!: CustomerEntity;
}

export enum StatusPurchare {
  IN_CART = 'IN_CART',
  PENDING_PAYMENT = 'PENDING_PAYMENT',
  PENDDING_APPROVED = 'PENDING_APPROVED',
  APPROVED = 'APPROVED',
  ERROR = 'ERROR',
}
