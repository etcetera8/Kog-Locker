import { cleanUser, cleanSegment, cleanStats, cleanActivities } from './cleaner.js';
import * as mock from './mock-data';

describe('cleaner functions', () => {
  
  it('cleanUser should return a cleaned user', () => {
    const result = cleanUser(mock.mockUser);
    const expected = mock.cleanUser;
    expect(result).toEqual(expected);
  })

  it('cleanSegment should return a cleaned segment', () => {
    const result = cleanSegment(mock.mockSegment);
    const expected = mock.cleanSegment
    expect(result).toEqual(expected);
  })

  it('cleanStats should return cleaned stats', () => {
    const result = cleanStats(mock.mockUserStats);
    
    const expected = mock.cleanUserStats;
    expect(result).toEqual(expected);
  })

  it('cleanActivities should return an array of cleaned activities', () => {
    const result = cleanActivities(mock.mockActivities);
    const expected = mock.cleanedActivities;
    expect(result).toEqual(expected);
  })
})