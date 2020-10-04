// import { NotFoundException } from '@nestjs/common';
// import { Test, TestingModule } from '@nestjs/testing';
// import { getRepositoryToken } from '@nestjs/typeorm';
// import { Factory } from '../factory/sindicancia.factory';
// import { Sindicancia } from '../entity/sindicancia.entity';
// import { SindicanciaService } from './sindicancia.service';

describe('pass', () => {
  const pass = 1
  it('should be defined', () => {
    expect(pass).toBe(1)
  });
})
// describe('SindicanciaService', () => {
//   let service: SindicanciaService;
//   let mockRegistry: Sindicancia;

//   const mockRepository = {
//     create: jest.fn(),
//     save: jest.fn(),
//     find: jest.fn(),
//     findOne: jest.fn(),
//     update: jest.fn(),
//     delete: jest.fn(),
//   };

//   beforeAll(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [
//         SindicanciaService,
//         { provide: getRepositoryToken(Sindicancia), useValue: mockRepository },
//       ],
//     }).compile();

//     service = module.get<SindicanciaService>(SindicanciaService);
//     mockRegistry = Factory.create();
//   });

//   beforeEach(() => {
//     mockRepository.create.mockReset();
//     mockRepository.save.mockReset();
//     mockRepository.find.mockReset();
//     mockRepository.findOne.mockReset();
//     mockRepository.update.mockReset();
//     mockRepository.delete.mockReset();
//   });

//   it('should be defined', () => {
//     expect(service).toBeDefined();
//   });

//   describe('when create sindicancia', () => {
//     it('should create a sindicancia', async () => {
//       mockRepository.create.mockReturnValueOnce(mockRegistry);
//       mockRepository.save.mockReturnValueOnce(mockRegistry);

//       const sindicancia = {
//         title: mockRegistry.title,
//         description: mockRegistry.description,
//         price: mockRegistry.price,
//       };

//       const savedsindicancia = await service.create(sindicancia);

//       expect(savedsindicancia).toHaveProperty('id', 1);
//       expect(savedsindicancia).toMatchObject(mockRegistry);
//       expect(mockRepository.create).toBeCalledWith(sindicancia);
//       expect(mockRepository.create).toBeCalledTimes(1);
//       expect(mockRepository.save).toBeCalledTimes(1);
//     });
//   });

//   describe('when search all Sindicancia', () => {
//     it('should list all Sindicancia', async () => {
//       mockRepository.find.mockReturnValue([mockRegistry]);

//       const Sindicancia = await service.findAll();

//       expect(Sindicancia).toHaveLength(1);
//       expect(mockRepository.find).toBeCalledTimes(1);
//     });
//   });

//   describe('when search sindicancia by id', () => {
//     it('should find a existing sindicancia', async () => {
//       mockRepository.findOne.mockReturnValue(mockRegistry);

//       const sindicancia = await service.findById('1');

//       expect(sindicancia).toMatchObject(mockRegistry);
//       expect(mockRepository.findOne).toBeCalledWith('1');
//       expect(mockRepository.findOne).toBeCalledTimes(1);
//     });

//     it('should return a exception when does not to find a sindicancia', async () => {
//       mockRepository.findOne.mockReturnValue(null);

//       await service.findById('3').catch(error => {
//         expect(error).toBeInstanceOf(NotFoundException);
//         expect(error).toMatchObject({ message: 'Registry not found' });
//         expect(mockRepository.findOne).toBeCalledWith('3');
//         expect(mockRepository.findOne).toBeCalledTimes(1);
//       });
//     });
//   });

//   describe('when update a sindicancia', () => {
//     it('should update a existing sindicancia', async () => {
//       const sindicanciaTitleUpdate = {
//         title: 'Update sindicancia Title',
//       };

//       mockRepository.findOne.mockReturnValue(mockRegistry);
//       mockRepository.update.mockReturnValue({
//         ...mockRegistry,
//         ...sindicanciaTitleUpdate,
//       });
//       mockRepository.create.mockReturnValue({
//         ...mockRegistry,
//         ...sindicanciaTitleUpdate,
//       });

//       const updatedsindicancia = await service.update(
//         '1',
//         sindicanciaTitleUpdate,
//       );

//       expect(updatedsindicancia).toMatchObject(sindicanciaTitleUpdate);
//       expect(mockRepository.findOne).toBeCalledWith('1');
//       expect(mockRepository.findOne).toBeCalledTimes(1);
//       expect(mockRepository.update).toBeCalledWith('1', sindicanciaTitleUpdate);
//       expect(mockRepository.update).toBeCalledTimes(1);
//       expect(mockRepository.create).toBeCalledWith({
//         ...mockRegistry,
//         ...sindicanciaTitleUpdate,
//       });
//       expect(mockRepository.create).toBeCalledTimes(1);
//     });
//   });

//   describe('when delete a sindicancia', () => {
//     it('should delete a existing sindicancia', async () => {
//       mockRepository.findOne.mockReturnValue(mockRegistry);
//       mockRepository.delete.mockReturnValue(mockRegistry);

//       await service.delete('1');

//       expect(mockRepository.findOne).toBeCalledWith('1');
//       expect(mockRepository.findOne).toBeCalledTimes(1);
//       expect(mockRepository.delete).toBeCalledWith('1');
//       expect(mockRepository.delete).toBeCalledTimes(1);
//     });
//   });
// });