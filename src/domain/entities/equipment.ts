import { EquipmentBrand } from './brand'
import { Dismissed } from './dismissed'
import { ScreenType } from './equipamentEnum/screenType'
import { Status } from './equipamentEnum/status'
import { StorageType } from './equipamentEnum/storageType'
import { Type } from './equipamentEnum/type'
import { History } from './history'
import { OrderService } from './order-service'
import { Unit } from './unit'

export type Equipment = {
  id: string

  tippingNumber: string

  serialNumber: string

  acquision: string

  type: Type

  status: Status

  model: string

  description: string

  initialUseDate: Date

  screenSize?: string

  invoiceNumber: string

  power?: string

  screenType?: ScreenType

  processor?: string

  storageType?: StorageType

  storageAmount?: string

  createdAt: Date

  updatedAt: Date

  orderServices: OrderService[]

  dismisseds: Dismissed[]

  brand: EquipmentBrand

  acquisition: EquipmentBrand

  history?: History

  unit: Unit
}
