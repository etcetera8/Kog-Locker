import { initialCall, segmentCall, statsCall, activitiesCall } from './api.js';
import { athleteUrl, segmentUrl, activitiesUrl, statsUrl, mockUserStats, cleanUserStats, mockActivities, cleanedActivities } from './mock-data';

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

  describe('segmentCall', () => {
    it('should be called with the right parameters', () => {
      const result = segmentCall()
      expect(window.fetch).toHaveBeenCalledWith(segmentUrl)
    })

    it('should return an object with an ok status', async () => {
      const result = await segmentCall()
      const keys = Object.keys(result);
      const expected = [ 'name', 'average_grade', 'city', 'distance','total_elevation_gain','elevation_high','elevation_low','athlete_segment_stats' ]
      expect(typeof result).toEqual('object');
      expect(keys).toEqual(expected);
    })

    it('should return an error message if that status is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() => 
        Promise.reject({
          error: "Call Failed"
        }));
      const result = await segmentCall();
      const errorResult = { error: 'Call Failed' };
      expect(result).toEqual(errorResult);
    })  
  })

  describe('statsCall', () => {
    it('should be called with the right parameters', async () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve(mockUserStats)
        }));

      const result = await statsCall(123)
      expect(window.fetch).toHaveBeenCalledWith(statsUrl)
    })

    it('should return an object with an ok status', async () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve(mockUserStats)
        }));
      const result = await statsCall(123)
      expect(typeof result).toEqual('object')
      expect(result).toEqual(cleanUserStats)
    })

    it('should return an error message if that status is not ok', async () => {
     window.fetch = jest.fn().mockImplementation(() => 
      Promise.reject({
        error: "Call Failed"
      }));
     const result = await statsCall(123)
     const errorResult = { error: 'Call Failed' };
     expect(result).toEqual(errorResult)
    })
  })

  describe('activitiesCall', () => {
    
    it('should be called with the right parameters', async () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve(mockActivities)
        }));
      const result = await activitiesCall(123);
      expect(window.fetch).toHaveBeenCalledWith(activitiesUrl);
    })

    it('should return an object with an ok status', async () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve(mockActivities)
        }));
      const result = await activitiesCall(123);
      expect(typeof result).toEqual('object');
      expect(result).toEqual(cleanedActivities)
    })

    it('should return an error message if that status is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() => 
        Promise.reject({
          error: "Call Failed"
        }));
      const result = await activitiesCall(123);
      const errorResult = { error: 'Call Failed' };
      expect(result).toEqual(errorResult)
    })
  })
})