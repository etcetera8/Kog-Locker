import { key } from './apiKey.js';
import { cleanUser, cleanSegment, cleanStats, cleanActivities } from './cleaner.js';
const root = `https://www.strava.com/api/v3`;

export const loginUser = async () => {
  const response = await (`https://www.strava.com/oauth/authorize?client_id=22618&response_type=code&redirect_uri=http://localhost:3000/exchange_token&approval_prompt=force`);
  window.location = `https://www.strava.com/oauth/authorize?client_id=22618&response_type=code&redirect_uri=http://localhost:3000/exchange_token&approval_prompt=force`;
  console.log(response);
  
  const postMethod = await fetch(`https://www.strava.com/oauth/token/client_id=22618/client_secret=4743dc9e7119eded2406318547275bb57e7d6fc8/code=7539fd0aab6f1307a29a7ff187702854e9e915df`, {
    method: 'POST'
  });
  const postRespons = await postMethod.json();
  // console.log(signIn);

}

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
