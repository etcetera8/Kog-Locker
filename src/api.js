import { key, userId } from './apiKey.js';
import { cleanUser, cleanSegment, cleanStats } from './cleaner.js';
import { mockUser, mockUserStats } from './mock-data.js';
//GET SPECIFIC SEGMENT CALL
//https://www.strava.com/api/v3/segments/609371?access_token=${key}

//GET LIST OF RECENT ACTIVITIES
//https://www.strava.com/api/v3/athlete/activities?access_token=${key}

export const initialCall = async () => {
  //const response = await fetch(`https://www.strava.com/api/v3/athlete?access_token=${key}`)
  //const data = await response.json();
  cleanUser(mockUser)
}

export const segmentCall = async (segmentId) => {
  const response = await fetch(`https://www.strava.com/api/v3/segments/${segmentId}?access_token=${key}`);
  const data = await response.json();
  cleanSegment(data);
}

export const statsCall = async() => {
  // const response = await fetch();
  // const data = await response.json();
  cleanStats(mockUserStats)
}

