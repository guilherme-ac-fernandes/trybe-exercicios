import { expect } from 'chai';
import * as sinon from 'sinon';
import { Request, Response } from 'express';
import { frameMock, frameMockWithId } from '../../mocks/frameMock';
import FrameController from '../../../controllers/Frame';
import FrameService from '../../../services/Frame';
import FrameModel from '../../../models/Frame';


describe('Frame Controller', () => {
  const frameModel = new FrameModel()
  const frameService = new FrameService(frameModel);
  const frameController = new FrameController(frameService);
  
  const req = {} as Request; 
  const res = {} as Response;

  before(() => {
    sinon.stub(frameService, 'create').resolves(frameMockWithId);
    sinon.stub(frameService, 'readOne').resolves(frameMockWithId);
    sinon.stub(frameService, 'read').resolves([frameMockWithId]);
    sinon.stub(frameService, 'destroy').resolves(frameMockWithId);
    sinon.stub(frameService, 'update').resolves(frameMockWithId);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(() => sinon.restore());

  describe('Create Frame', () => {
    it('Success', async () => {
      req.body = frameMock;
      await frameController.create(req, res);
      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(frameMockWithId)).to.be.true;
    });
  });

  describe('ReadOne Frame', () => {
    it('Success', async () => {
      req.params = { id: frameMockWithId._id };
      await frameController.readOne(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(frameMockWithId)).to.be.true;
    });
  });

  describe('Read Frame', () => {
    it('Success', async () => {
      await frameController.read(req, res);
      
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith([frameMockWithId])).to.be.true;
    });
  });

  describe('Destroy Frame', () => {
    it('Success', async () => {
      req.params = { id: frameMockWithId._id };
      await frameController.destroy(req, res);
      
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(frameMockWithId)).to.be.true;
    });
  });

  describe('Update Frame', () => {
    it('Success', async () => {
      req.params = { id: frameMockWithId._id };
      req.body = { ...frameMock };
      await frameController.update(req, res);
      
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(frameMockWithId)).to.be.true;
    });
  });
});