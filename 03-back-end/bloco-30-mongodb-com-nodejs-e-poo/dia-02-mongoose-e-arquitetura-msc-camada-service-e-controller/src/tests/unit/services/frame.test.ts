import { expect } from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';
import FrameModel from '../../../models/Frame';
import FrameService from '../../../services/Frame';
import { frameMock, frameMockWithId } from '../../mocks/frameMock';

describe('Frame Service', () => {
	const frameModel = new FrameModel();
	const frameService = new FrameService(frameModel);

	before(() => {
		sinon.stub(frameModel, 'create').resolves(frameMockWithId);
		sinon.stub(frameModel, 'readOne')
			.onCall(0).resolves(frameMockWithId) 
			.onCall(1).resolves(null);
		sinon.stub(frameModel, 'read')
			.onCall(0).resolves([frameMockWithId]) 
			.onCall(1).resolves(null);
		sinon.stub(frameModel, 'destroy')
			.onCall(0).resolves(frameMockWithId) 
			.onCall(1).resolves(null);
		sinon.stub(frameModel, 'update')
			.onCall(0).resolves({ ...frameMockWithId, material: 'Diamente' })
			.onCall(1).resolves({ ...frameMockWithId, material: 'Diamente', color: 'blue' }) 
			.onCall(2).resolves(null);
	});

	after(() => sinon.restore());

	describe('Create Frame', () => {
		it('Success', async () => {
			const frameCreated = await frameService.create(frameMock);
			expect(frameCreated).to.be.deep.equal(frameMockWithId);
		});

		it('Failure', async () => {
			let error;
			try {
				await frameService.create({});
			} catch (err) {
				error = err
			}
			expect(error).to.be.instanceOf(ZodError);
		});
	});

	describe('ReadOne Frame', () => {
		it('Success', async () => {
			const frameCreated = await frameService.readOne(frameMockWithId._id);
			expect(frameCreated).to.be.deep.equal(frameMockWithId);
		});

		it('Failure', async () => {
      let error;
			try {
				await frameService.readOne(frameMockWithId._id);
			} catch (err:any) {
				error = err
			}
			expect(error, 'error should be defined').not.to.be.undefined;
			expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
		});
	});

	describe('Read Frame', () => {
		it('Success', async () => {
			const frameArray = await frameService.read();
			expect(frameArray).to.be.deep.equal([frameMockWithId]);
		});

		it('Failure', async () => {
      let error;
			try {
				await frameService.read();
			} catch (err:any) {
				error = err
			}
			expect(error, 'error should be defined').not.to.be.undefined;
			expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
		});
	});

	describe('Delete Frame', () => {
		it('Success', async () => {
			const frameArray = await frameService.destroy(frameMockWithId._id);
			expect(frameArray).to.be.deep.equal(frameMockWithId);
		});

		it('Failure', async () => {
      let error;
			try {
				await frameService.destroy(frameMockWithId._id);
			} catch (err:any) {
				error = err
			}
			expect(error, 'error should be defined').not.to.be.undefined;
			expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
		});
	});

	describe('Update Frame', () => {
		it('Success: update partial', async () => {
			const frameArray = await frameService.update(
				frameMockWithId._id,
				{ material: 'Diamente' },
			);
			expect(frameArray).to.be.deep.equal({ ...frameMockWithId, material: 'Diamente' });
		});

		it('Success: update all fields', async () => {
			const frameArray = await frameService.update(
				frameMockWithId._id,
				{ material: 'Diamente', color: 'blue' },
			);
			expect(frameArray).to.be.deep.equal({
				...frameMockWithId,
				material: 'Diamente',
				color: 'blue',
			});
		});

		it('Failure to update', async () => {
      let error;
			try {
				await frameService.update(frameMockWithId._id, { material: 'Diamente' });
			} catch (err:any) {
				error = err
			}
			expect(error, 'error should be defined').not.to.be.undefined;
			expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
		});

		it('Failure: frame invalid', async () => {
      let error;
			try {
				await frameService.update(frameMockWithId._id, { color: 'pk' });
			} catch (err:any) {
				error = err
			}
		
			expect(error).to.be.instanceOf(ZodError);
		});

		
	});
});