export const cleanUser = (data) => {
  const {city, state, firstname, ftp, profile_medium, weight } = data;
  const user = { firstname, city, state, ftp, weight, profile_medium };
  return user;
}

export const cleanSegment = (data) => {
  const { name, average_grade, city, distance, total_elevation_gain, elevation_high, elevation_low, athlete_segment_stats } = data;
  const segment = { name, average_grade, city, distance, total_elevation_gain, elevation_high, elevation_low, athlete_segment_stats }
  console.log(segment);
  return segment
}

export const cleanStats = (data) => {
  const { ytd_ride_totals, all_ride_totals, biggest_ride_distance, biggest_climb_elevation_gain } = data;
  const {count, distance, elapsed_time, elevation_gain} = ytd_ride_totals;
  const yearStats = {count, distance, elapsed_time, elevation_gain};
  const allStats = {
    yearStats,
    all_ride_totals,
    biggest_ride: biggest_ride_distance,
    biggest_climb : biggest_climb_elevation_gain
  }
  console.log(allStats);
  return allStats
}
