import { expect } from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';
import LensModel from '../../../models/Lens';
import LensService from '../../../services/Lens';
import { lensMock, lensMockWithId } from '../../mocks/lensMock';

describe('Frame Service', () => {
	const lensModel = new LensModel();
	const lensService = new LensService(lensModel);

	before(() => {
		sinon.stub(lensModel, 'create').resolves(lensMockWithId);
		sinon.stub(lensModel, 'readOne')
			.onCall(0).resolves(lensMockWithId) 
			.onCall(1).resolves(null);
		sinon.stub(lensModel, 'read')
			.onCall(0).resolves([lensMockWithId]) 
			.onCall(1).resolves(null);
		sinon.stub(lensModel, 'destroy')
			.onCall(0).resolves(lensMockWithId) 
			.onCall(1).resolves(null);
		sinon.stub(lensModel, 'update')
			.onCall(0).resolves({ ...lensMockWithId, degree: 10 })
			.onCall(1).resolves({
				...lensMockWithId,
				degree: 10,
				antiGlare: false,
				blueLightFilter: false,
			}) 
			.onCall(2).resolves(null);
	});

	after(() => sinon.restore());

	describe('Create Frame', () => {
		it('Success', async () => {
			const frameCreated = await lensService.create(lensMock);
			expect(frameCreated).to.be.deep.equal(lensMockWithId);
		});

		it('Failure', async () => {
			let error;
			try {
				await lensService.create({});
			} catch (err) {
				error = err
			}
			expect(error).to.be.instanceOf(ZodError);
		});
	});

	describe('ReadOne Frame', () => {
		it('Success', async () => {
			const frameCreated = await lensService.readOne(lensMockWithId._id);
			expect(frameCreated).to.be.deep.equal(lensMockWithId);
		});

		it('Failure', async () => {
      let error;
			try {
				await lensService.readOne(lensMockWithId._id);
			} catch (err:any) {
				error = err
			}
			expect(error, 'error should be defined').not.to.be.undefined;
			expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
		});
	});

	describe('Read Frame', () => {
		it('Success', async () => {
			const frameArray = await lensService.read();
			expect(frameArray).to.be.deep.equal([lensMockWithId]);
		});

		it('Failure', async () => {
      let error;
			try {
				await lensService.read();
			} catch (err:any) {
				error = err
			}
			expect(error, 'error should be defined').not.to.be.undefined;
			expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
		});
	});

	describe('Delete Frame', () => {
		it('Success', async () => {
			const frameArray = await lensService.destroy(lensMockWithId._id);
			expect(frameArray).to.be.deep.equal(lensMockWithId);
		});

		it('Failure', async () => {
      let error;
			try {
				await lensService.destroy(lensMockWithId._id);
			} catch (err:any) {
				error = err
			}
			expect(error, 'error should be defined').not.to.be.undefined;
			expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
		});
	});

	describe('Update Frame', () => {
		it('Success: update partial', async () => {
			const frameArray = await lensService.update(
				lensMockWithId._id,
				{ material: 'Diamente' },
			);
			expect(frameArray).to.be.deep.equal({ ...lensMockWithId, degree: 10 });
		});

		it('Success: update all fields', async () => {
			const frameArray = await lensService.update(
				lensMockWithId._id,
				{ degree: 10, antiGlare: false, blueLightFilter: false },
			);
			expect(frameArray).to.be.deep.equal({
				...lensMockWithId,
				degree: 10,
				antiGlare: false,
				blueLightFilter: false,
			});
		});

		it('Failure to update', async () => {
      let error;
			try {
				await lensService.update(lensMockWithId._id, { degree: 10 });
			} catch (err:any) {
				error = err
			}
			expect(error, 'error should be defined').not.to.be.undefined;
			expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
		});

		it('Failure: frame invalid', async () => {
      let error;
			try {
				await lensService.update(lensMockWithId._id, { degree: '10' });
			} catch (err:any) {
				error = err
			}
		
			expect(error).to.be.instanceOf(ZodError);
		});

		
	});
});