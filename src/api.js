import { key } from './apiKey.js';
import { cleanUser, cleanSegment, cleanStats, cleanActivities } from './cleaner.js';
const root = `https://www.strava.com/api/v3`;

export const loginUser = async () => {
  const originalUrl = await (`https://www.strava.com/oauth/authorize?client_id=22618&response_type=code&redirect_uri=http://localhost:3000/exchange_token&approval_prompt=force`);
  window.location = `https://www.strava.com/oauth/authorize?client_id=22618&response_type=code&redirect_uri=http://localhost:3000/exchange_token&approval_prompt=force`;
};

export const getUser = async () => {
  const url = window.location.href;
  const token = url.substr(url.length - 40);  
  const options = { 
    method: "POST", 
    headers: { 
      Accept: "application/json", "Content-Type": "application/json" 
    }, 
    mode: "cors", 
    cache: "no-cache", 
    body: JSON.stringify(
      {
        token: token
      }
    )
  };

  const response = await fetch("http://localhost:3100/tokenexchange", options)
  const data = await response.json();
  const { access_token, athlete } = data;
  console.log(athlete);
  console.log(access_token);
  return data;
};

export const initialCall = async (token) => {
  try {
    const response = await fetch(`${root}/athlete?access_token=${token}`);
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

export const statsCall = async(token, id) => {
  try {
    const response = await fetch(`${root}/athletes/${id}/stats?access_token=${token}`);
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
