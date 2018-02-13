import { key, userId } from './apiKey.js';
import { cleanUser, cleanSegment, cleanStats, cleanActivities } from './cleaner.js';
//import { mockUser, mockUserStats, mockActivities } from './mock-data.js';
//GET SPECIFIC SEGMENT CALL
//https://www.strava.com/api/v3/segments/609371?access_token=${key}

//GET LIST OF RECENT ACTIVITIES
//https://www.strava.com/api/v3/athlete/activities?access_token=${key}
const root = `https://www.strava.com/api/v3`;

export const initialCall = async () => {
  const response = await fetch(`${root}/athlete?access_token=${key}`)
  const data = await response.json();
  cleanUser(data)
}

export const segmentCall = async (segmentId) => {
  const response = await fetch(`${root}/segments/${segmentId}?access_token=${key}`);
  const data = await response.json();
  cleanSegment(data);
}

export const statsCall = async(id) => {
  const response = await fetch(`${root}/athletes/${id}/stats?access_token=${key}`);
  const data = await response.json();
  cleanStats(data)
}

export const activitiesCall = async(id) => {
  const response = await fetch(`${root}/athletes/${id}/activities?access_token=${key}`);
  const data = await response.json();
  cleanActivities(data);
}
