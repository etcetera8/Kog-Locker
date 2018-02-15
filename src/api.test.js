import { initialCall, segmentCall, statsCall, activitiesCall } from './api.js';
import { athleteUrl } from './mock-data';
describe('API calls', () => {
   beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve({title: 'a title'})
        }));
    });

  describe('initialCall', () => {
    it('should be called with the right parameters', () => {
      const result = initialCall()
      expect(window.fetch).toHaveBeenCalledWith(athleteUrl)
    })

    it('should return an object with an 200 status', async () => {
      const result = await initialCall()
      expect(typeof result).toEqual('object')
    })

    it('should return an error message if that status is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() => 
        Promise.reject({
          error: "Call Failed"
        }));
      const result = await initialCall();
      const errorResult = { error: 'Call Failed' };
      expect(result).toEqual(errorResult);
    })
  })

  describe('initialCall', () => {
    it('should be called with the right parameters', () => {

    })

    it('should return an object with an ok status', () => {

    })

    it('should return an error message if that status is not ok', () => {

    })  
  })

  describe('initialCall', () => {
    it('should be called with the right parameters', () => {

    })

    it('should return an object with an ok status', () => {

    })

    it('should return an error message if that status is not ok', () => {

    })
  })

  describe('initialCall', () => {
    it('should be called with the right parameters', () => {

    })

    it('should return an object with an ok status', () => {

    })

    it('should return an error message if that status is not ok', () => {

    })
  })
})