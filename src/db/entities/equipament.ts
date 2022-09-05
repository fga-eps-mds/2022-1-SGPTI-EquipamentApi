/* eslint-disable no-use-before-define */
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { ScreenType } from '../../domain/entities/equipamentEnum/screenType'
import { Status } from '../../domain/entities/equipamentEnum/status'
import { StorageType } from '../../domain/entities/equipamentEnum/storageType'
import { Type } from '../../domain/entities/equipamentEnum/type'
import { Dismissed } from './dismissed'
import { EquipmentAcquisition } from './equipment-acquisition'
import { EquipmentBrand } from './equipment-brand'
import { OrderService } from './order-service'
import { Unit } from './unit'

@Entity()
export class Equipment {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({
    name: 'tipping_number',
    type: 'varchar'
  })
  tippingNumber: string

  @Column({
    name: 'serial_number',
    type: 'varchar'
  })
  serialNumber: string

  @Column()
  acquision: string

  @Column({
    type: 'enum',
    enum: Type
  })
  type: Type

  @Column({
    type: 'enum',
    enum: Status
  })
  status: Status

  @Column({
    type: 'varchar'
  })
  model: string

  @Column({
    type: 'varchar'
  })
  description: string

  @Column({
    name: 'initial_use_date',
    type: 'date'
  })
  initialUseDate: Date

  @Column({
    type: 'varchar',
    name: 'screen_size',
    nullable: true
  })
  screenSize: string

  @Column({
    name: 'invoice_number',
    type: 'varchar'
  })
  invoiceNumber: string

  @Column({
    type: 'varchar',
    nullable: true
  })
  power: string

  @Column({
    type: 'enum',
    enum: ScreenType,
    name: 'screen_type',
    nullable: true
  })
  screenType: ScreenType

  @Column({
    type: 'varchar',
    nullable: true
  })
  processor: string

  @Column({
    type: 'enum',
    enum: StorageType,
    name: 'storage_type',
    nullable: true
  })
  storageType: StorageType

  @Column({
    name: 'storage_amount',
    type: 'varchar',
    nullable: true
  })
  storageAmount: string

  @Column({ type: 'timestamptz' })
  @CreateDateColumn()
  createdAt: Date

  @Column({ type: 'timestamptz' })
  @UpdateDateColumn()
  updatedAt: Date

  @OneToMany(() => OrderService, (orderService) => orderService.equipment)
  orderServices: OrderService[]

  @OneToMany(() => Dismissed, (dismissed) => dismissed.equipment)
  dismisseds: Dismissed[]

  @ManyToOne(() => EquipmentBrand, (equipmentBrand) => equipmentBrand.equipment)
  brand: EquipmentBrand

  @ManyToOne(
    () => EquipmentAcquisition,
    (equipmentAcquisition) => equipmentAcquisition.equipment
  )
  acquisition: EquipmentBrand

  @OneToOne(() => Unit)
  @JoinColumn()
  unit: Unit
}
