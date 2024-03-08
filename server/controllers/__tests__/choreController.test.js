const { beforeEach } = require('node:test');
const db = require('../../models/choreifyModels');
const queries = require('../../models/queries');
const choreController = require('../choreController');

jest.mock('../../models/choreifyModels');

const mockReq = () => {
  const req = {};
  req.body = {};
  req.headers = {};
  return req;
};
const mockRes = () => {
  const res = {};
  res.locals = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe('chore controller', () => {
  it('is an object', () => {
    expect(choreController).toBeInstanceOf(Object);
  });
  it('has a createChore method', () => {
    expect(choreController).toHaveProperty('getChores');
  });
  it('has a getChores method', () => {
    expect(choreController).toHaveProperty('createChore');
  });

  describe('getChores method', () => {

    it('should make a call to the database', () => {
      const mockedNext = jest.fn();
      const mockedRes = mockRes();
      const mockedReq = mockReq();
      db.query.mockImplementationOnce(() => { return new Promise((resolve, reject) => { resolve({ rows: 'data' }) })});
      choreController.getChores(mockedReq, mockedRes, mockedNext);
      expect(db.query).toHaveBeenCalledWith('SELECT * FROM chores;');
    });
    it('should assign result from the DB to res.locals', async () => {
      const mockedNext = jest.fn();
      const mockedRes = mockRes();
      const mockedReq = mockReq();
      db.query.mockImplementationOnce(() => Promise.resolve({ rows: 'data' }));
      await choreController.getChores(mockedReq, mockedRes, mockedNext);
      expect(mockedRes.locals.choreList).toEqual('data');
    });
    it('should invoke the next middleware function upon successful DB query', async () => {
      const mockedNext = jest.fn();
      const mockedRes = mockRes();
      const mockedReq = mockReq();
      db.query.mockImplementationOnce(() => Promise.resolve({ rows: 'data' }));
      await choreController.getChores(mockedReq, mockedRes, mockedNext);
      expect(mockedNext).toHaveBeenCalled();
    });
    it('should pass async errors to gloabl error handler', (done) => {
      const mockedNext = (err) => {
        expect(err).toEqual(promError);
        done();
      };
      const mockedRes = mockRes();
      const mockedReq = mockReq();
      const promError = new Error('fail');
      db.query.mockImplementationOnce(() => Promise.reject(promError));
      choreController.getChores(mockedReq, mockedRes, mockedNext);
    });
    it('should invoke the global error handler if data is undefined', async () => {
      const mockedNext = jest.fn();
      const mockedRes = mockRes();
      const mockedReq = mockReq();
      db.query.mockImplementationOnce(() => Promise.resolve(undefined));
      await choreController.getChores(mockedReq, mockedRes, mockedNext);
      expect(mockedNext).toHaveBeenCalledWith({ err: 'Problem fetching chores from database' });
    });

  });
  
  describe('createChore method', () => {
    it('should make a call to the DB with proper arguments and invoke the next middleware function', async () => {
      const mockedReq = mockReq();
      mockedReq.body = 'data to be passed to db';
      const mockedRes = mockRes();
      const mockedNext = jest.fn();
      db.query.mockImplementationOnce(() => Promise.resolve({ rows: [] }));
      await choreController.createChore(mockedReq, mockedRes, mockedNext);
      expect(db.query).toHaveBeenCalledWith(`INSERT INTO chores `
      + `(title, description, group_id, chore_status, due_date, assigner_id, created_date) `
      + `VALUES ($1, $2, $3, $4, $5, $6, $7);`, mockedReq.body);
      expect(mockedNext).toHaveBeenCalled();
    });
    it('should pass async errors to the global error handler', (done) => {
      const mockedReq = mockReq();
      mockedReq.body = 'data to be passed to db';
      const mockedRes = mockRes();
      const promError = new Error('boom');
      const mockedNext = (err) => {
        expect(err).toEqual(promError);
        done();
      }
      db.query.mockImplementationOnce(() => Promise.reject(promError));
      choreController.createChore(mockedReq, mockedRes, mockedNext);
    });
    it('should invoke the global error handler if data.rows is undefined', async () => {
      const mockedNext = jest.fn();
      const mockedRes = mockRes();
      const mockedReq = mockReq();
      db.query.mockImplementationOnce(() => Promise.resolve({ rows: undefined }));
      await choreController.createChore(mockedReq, mockedRes, mockedNext);
      expect(mockedNext).toHaveBeenCalledWith({ err: 'Problem creating new chore in database' });
    });
    })
  });
