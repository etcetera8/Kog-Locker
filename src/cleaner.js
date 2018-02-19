export const cleanUser = (userData) => {
  const {city, state, firstname, ftp, profile_medium, weight } = userData;
  const user = { firstname, city, state, ftp, weight, profile_medium };
  return user;
};

const metersToMiles = (metered) => {
  return parseInt((metered * 0.000621371192).toFixed(2));
}

const metersToFeet = (meters) => {
  return  parseInt(Math.round(meters * 3.208))
}

const kilosToPounds = (kilos) => {
  return parseInt(kilos * 2.20462);
}


export const cleanSegment = (segmentData) => {
  const { name, average_grade, city, distance, total_elevation_gain, elevation_high, elevation_low, athlete_segment_stats, end_latlng, map } = segmentData;
  const segment = { 
    name, 
    average_grade, 
    city, 
    distance: metersToMiles(distance), 
    total_elevation_gain, 
    elevation_high: metersToFeet(elevation_high), 
    elevation_low: metersToFeet(elevation_low),
    athlete_segment_stats,
    polyline: map.polyline,
    end_latlng
  };
  return segment;
};

export const cleanStats = (statsData) => {
  const { recent_ride_totals, ytd_ride_totals, all_ride_totals, biggest_ride_distance, biggest_climb_elevation_gain } = statsData;
  const {count, distance, elapsed_time, elevation_gain} = ytd_ride_totals;
  const yearStats = {count, distance: metersToMiles(distance), elapsed_time, elevation_gain: metersToFeet(elevation_gain)};
  console.log(all_ride_totals);
  all_ride_totals.distance = metersToMiles(all_ride_totals.distance);
  all_ride_totals.elevation_gain = metersToFeet(all_ride_totals.elevation_gain)
  recent_ride_totals.distance = metersToMiles(recent_ride_totals.distance)
  //recent_ride_totals.elevation_gain = metersToMiles(recent_ride_totals.elevation_gain)
  const allStats = {
    yearStats,
    all_ride_totals,
    recent_ride_totals,
    biggest_ride: metersToMiles(biggest_ride_distance),
    biggest_climb : metersToFeet(biggest_climb_elevation_gain)
  };
  return allStats;
};

export const cleanActivities = (activityData) => {
  const cleanedActivities = activityData.map(ride => {
    const {max_watts, average_watts, average_heartrate, average_speed, average_temp, distance, kilojoules, max_heartrate, max_speed, moving_time, suffer_score, total_elevation_gain } = ride;
    return {
      max_watts,
      average_watts,
      average_heartrate,
      max_heartrate,
      average_speed,
      max_speed,
      distance,
      total_elevation_gain,
      kilojoules,
      average_temp,
      moving_time,
      suffer_score,
      map: ride.map.summary_polyline
    };
  });
  return cleanedActivities;
};
