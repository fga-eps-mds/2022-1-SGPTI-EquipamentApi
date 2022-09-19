import { mock } from 'jest-mock-extended'
import { Status } from '../src/domain/entities/equipamentEnum/status'
import { Type } from '../src/domain/entities/equipamentEnum/type'
import { Equipment } from '../src/domain/entities/equipment'
import { OrderService } from '../src/domain/entities/order-service'
import { FindOrderServiceController } from '../src/presentation/controller/find-orders-service'
import { ok, serverError } from '../src/presentation/helpers'
import {
  FindOrderService,
  FindOrderServiceUseCaseData
} from '../src/useCases/find-order-service/find-order-service'

const useCaseMocked = mock<FindOrderService>()
const findOrderServiceController = new FindOrderServiceController(useCaseMocked)

const mockedEquipment: Equipment = {
  id: 'id',
  acquisitionDate: new Date(),
  createdAt: new Date(),
  updatedAt: new Date(),
  status: Status.ACTIVE,
  tippingNumber: 'any',
  model: 'DELL G15',
  serialNumber: 'any',
  type: Type.CPU,
  initialUseDate: new Date().toISOString(),
  invoiceNumber: 'any'
}

const orderService: OrderService = {
  createdAt: new Date(),
  updatedAt: new Date(),
  date: new Date(),
  id: 'any_id',
  receiverName: '',
  equipment: mockedEquipment,
  authorId: 'any_author',
  destination: {
    createdAt: new Date(),
    id: 'any_id',
    name: 'any_name',
    updatedAt: new Date(),
    localization: 'any_localization'
  },
  equipmentSnapshot: mockedEquipment,
  sender: 'any_sender',
  senderFunctionalNumber: 'any_sender_number',
  history: {
    equipment: mockedEquipment,
    equipmentSnapshot: {},
    createdAt: new Date(),
    id: 'any_id',
    updatedAt: new Date()
  }
}

const request: FindOrderServiceUseCaseData = {
  authorFunctionalNumber: '',
  authorId: '',
  date: '',
  destination: '',
  equipmentId: '',
  receiverName: '',
  sender: '',
  senderFunctionalNumber: '',
  serialNumber: '',
  status: '',
  tippingNumber: '',
  type: ''
}

describe('Should test CreateEquipmentController', () => {
  it('should find order services with success', async () => {
    useCaseMocked.execute.mockResolvedValue({
      isSuccess: true,
      data: [orderService]
    })

    const response = await findOrderServiceController.perform(request)

    expect(response).toEqual(ok(response.data))
    expect(useCaseMocked.execute).toHaveBeenCalledWith(request)
  })

  it('should return server error if success without data', async () => {
    useCaseMocked.execute.mockResolvedValue({
      isSuccess: true
    })

    const response = await findOrderServiceController.perform(request)

    expect(response).toEqual(serverError())
    expect(useCaseMocked.execute).toHaveBeenCalledWith(request)
  })
})
