export const cleanUser = (userData) => {
  const {city, state, firstname, ftp, profile_medium, weight } = userData;
  const user = { firstname, city, state, ftp, weight, profile_medium };
  return user;
};

export const cleanSegment = (segmentData) => {
  const { name, average_grade, city, distance, total_elevation_gain, elevation_high, elevation_low, athlete_segment_stats } = segmentData;
  const segment = { name, average_grade, city, distance, total_elevation_gain, elevation_high, elevation_low, athlete_segment_stats };
  console.log(segment);
  return segment;
};

export const cleanStats = (statsData) => {
  const { ytd_ride_totals, all_ride_totals, biggest_ride_distance, biggest_climb_elevation_gain } = statsData;
  const {count, distance, elapsed_time, elevation_gain} = ytd_ride_totals;
  const yearStats = {count, distance, elapsed_time, elevation_gain};
  const allStats = {
    yearStats,
    all_ride_totals,
    biggest_ride: biggest_ride_distance,
    biggest_climb : biggest_climb_elevation_gain
  };
  console.log(allStats);
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
  console.log("activities: ", cleanedActivities);
  return cleanedActivities;
};
