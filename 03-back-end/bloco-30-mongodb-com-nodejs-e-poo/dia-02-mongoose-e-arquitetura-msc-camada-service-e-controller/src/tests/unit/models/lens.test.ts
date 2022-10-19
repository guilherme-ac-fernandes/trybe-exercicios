import { expect } from 'chai';
import sinon from 'sinon';
import LensModel from '../../../models/Lens';
import { Model } from 'mongoose';
import { lensMock, lensMockWithId } from '../../mocks/lensMock';

describe('Lens Model', () => {
  const lensModel = new LensModel();

	before(() => {
		sinon.stub(Model, 'create').resolves(lensMockWithId);
		sinon.stub(Model, 'findOne').resolves(lensMockWithId);
    sinon.stub(Model, 'find').resolves([lensMockWithId]);
    sinon.stub(Model, 'findByIdAndDelete').resolves(lensMockWithId);
    sinon.stub(Model, 'findByIdAndUpdate').resolves(lensMockWithId);
	});

	after(() => {
		sinon.restore();
	});

  describe('creating a lens', () => {
    it('successfully created', async () => {
      const newLens = await lensModel.create(lensMock);
      expect(newLens).to.be.deep.equal(lensMockWithId);
    });
  });
    
  describe('searching a frame', () => {
    it('successfully found', async () => {
      const lensFound = await lensModel.readOne('62cf1fc6498565d94eba52cd');  
      expect(lensFound).to.be.deep.equal(lensMockWithId);
    });

    it('_id not found', async () => {
      try {
        await lensModel.readOne('123ERRADO');
      } catch (error: any) {
        expect(error.message).to.be.eq('InvalidMongoId');
      }
    });
  });

  describe('searching all lens', () => {
    it('successfully found', async () => {
      const lensFound = await lensModel.read();
      expect(lensFound).to.be.deep.equal([lensMockWithId]);
    });
  });

  describe('deleteting a lens', () => {
    it('successfully delete', async () => {
      const lensDelete = await lensModel.destroy('62cf1fc6498565d94eba52cd');
      expect(lensDelete).to.be.deep.equal(lensMockWithId);
    });

    it('_id not found', async () => {
      try {
        await lensModel.destroy('123ERRADO');
      } catch (error: any) {
        expect(error.message).to.be.eq('InvalidMongoId');
      }
    });
  });

  describe('updating a lens', () => {
    it('successfully update', async () => {
      const frameUpdate = await lensModel.update('62cf1fc6498565d94eba52cd', lensMock);
      expect(frameUpdate).to.be.deep.equal(lensMockWithId);
    });

    it('_id not found', async () => {
      try {
        await lensModel.update('123ERRADO', lensMock);
      } catch (error: any) {
        expect(error.message).to.be.eq('InvalidMongoId');
      }
    });
  });
});
