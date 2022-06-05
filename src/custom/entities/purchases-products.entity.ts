import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { ProductEntity } from '../../product/entities/product.entity';
import { PurchaseEntity } from '../../purchase/entities/purchase.entity';

@Entity({ name: 'purchases-products' })
export class PurchaseProductsEntity extends BaseEntity {
  @Column()
  quantityProduct!: number;

  @Column()
  totalPrice!: number;

  @ManyToOne(() => PurchaseEntity, (purchase) => purchase.purchaseProduct)
  @JoinColumn({ name: 'purchase_id' })
  purchase!: PurchaseEntity;

  @ManyToOne(() => ProductEntity, (product) => product.purchaseProduct)
  @JoinColumn({ name: 'product_id' })
  product!: ProductEntity;
}
