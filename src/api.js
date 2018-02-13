import { key } from './apiKey.js';
import { cleanUser, cleanSegment, cleanStats, cleanActivities } from './cleaner.js';
//import { mockUser, mockUserStats, mockActivities } from './mock-data.js';
//GET SPECIFIC SEGMENT CALL
//https://www.strava.com/api/v3/segments/609371?access_token=${key}

//GET LIST OF RECENT ACTIVITIES
//https://www.strava.com/api/v3/athlete/activities?access_token=${key}
const root = `https://www.strava.com/api/v3`;

export const initialCall = async () => {
  const response = await fetch(`${root}/athlete?access_token=${key}`);
  const userData = await response.json();
  cleanUser(userData);
};

export const segmentCall = async (segmentId) => {
  const response = await fetch(`${root}/segments/${segmentId}?access_token=${key}`);
  const segmentData = await response.json();
  cleanSegment(segmentData);
};

export const statsCall = async(id) => {
  const response = await fetch(`${root}/athletes/${id}/stats?access_token=${key}`);
  const statsData = await response.json();
  cleanStats(statsData);
};

export const activitiesCall = async(id) => {
  const response = await fetch(`${root}/athletes/${id}/activities?access_token=${key}`);
  const activityData = await response.json();
  cleanActivities(activityData);
};
