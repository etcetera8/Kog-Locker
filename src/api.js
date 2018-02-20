import { key } from './apiKey.js';
import { cleanUser, cleanSegment, cleanStats, cleanActivities } from './cleaner.js';
const root = `https://www.strava.com/api/v3`;

export const initialCall = async () => {
  try {
    const response = await fetch(`${root}/athlete?access_token=${key}`);
    const userData = await response.json();
    return cleanUser(userData);
  } catch (error) {
    return error;
  }
};

export const segmentCall = async (segmentId) => {
  try { 
    const response = await fetch(`${root}/segments/${segmentId}?access_token=${key}`);
    const segmentData = await response.json();
    return cleanSegment(segmentData);
  } catch (error) {
    return {error, message: "failed to fetch"};
  }
};

export const statsCall = async(id) => {
  try {
    const response = await fetch(`${root}/athletes/${id}/stats?access_token=${key}`);
    const statsData = await response.json();
    return cleanStats(statsData);
  } catch (error) {
  return error;
  }
};

export const activitiesCall = async(id) => {
  try {
    const response = await fetch(`${root}/athletes/${id}/activities?access_token=${key}`);
    const activityData = await response.json();
    return cleanActivities(activityData);
  } catch (error) {
    return error;
  }
};
