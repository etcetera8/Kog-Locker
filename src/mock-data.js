/* eslint-disable */
export const athleteUrl = "https://www.strava.com/api/v3/athlete?access_token=4834ab5723e9f5095f99a36ab52e75380d17cb4e"
export const segmentUrl = "https://www.strava.com/api/v3/segments/undefined?access_token=4834ab5723e9f5095f99a36ab52e75380d17cb4e"
export const activitiesUrl = "https://www.strava.com/api/v3/athletes/123/activities?access_token=4834ab5723e9f5095f99a36ab52e75380d17cb4e"
export const statsUrl = "https://www.strava.com/api/v3/athletes/123/stats?access_token=4834ab5723e9f5095f99a36ab52e75380d17cb4e"



export const mockUser = {
  id: 9560317,
  username: null,
  resource_state: 3,
  firstname: "Parker",
  lastname: "Thomas",
  city: "Denver",
  state: "CO",
  country: "United States",
  sex: "M",
  premium: true,
  created_at: "2015-06-04T03:08:47Z",
  updated_at: "2018-02-11T15:51:13Z",
  badge_type_id: 1,
  profile_medium: "https://dgalywyr863hv.cloudfront.net/pictures/athletes/9560317/2891494/1/medium.jpg",
  profile: "https://dgalywyr863hv.cloudfront.net/pictures/athletes/9560317/2891494/1/large.jpg",
  friend: null,
  follower: null,
  email: "fugazi8@gmail.com",
  follower_count: 89,
  friend_count: 83,
  mutual_friend_count: 0,
  athlete_type: 0,
  date_preference: "%m/%d/%Y",
  measurement_preference: "feet",
  clubs: [
  {
  id: 121895,
  resource_state: 2,
  name: "Team Colavita Parisi Coffee",
  profile_medium: "https://dgalywyr863hv.cloudfront.net/pictures/clubs/121895/2306445/1/medium.jpg",
  profile: "https://dgalywyr863hv.cloudfront.net/pictures/clubs/121895/2306445/1/large.jpg",
  cover_photo: "https://dgalywyr863hv.cloudfront.net/pictures/clubs/121895/5683064/1/large.jpg",
  cover_photo_small: "https://dgalywyr863hv.cloudfront.net/pictures/clubs/121895/5683064/1/small.jpg",
  sport_type: "cycling",
  city: "Kansas City",
  state: "Missouri",
  country: "United States",
  private: true,
  member_count: 42,
  featured: false,
  verified: false,
  url: "tcpc-kc",
  membership: "member",
  admin: false,
  owner: false
  }
  ],
  ftp: 281,
  weight: 69.8532,
  bikes: [
  {
  id: "b4506235",
  primary: false,
  name: "Race",
  resource_state: 2,
  distance: 0
  },
  {
  id: "b4506234",
  primary: true,
  name: "TallBoy",
  resource_state: 2,
  distance: 0
  }
  ],
  shoes: [ ]
}

export const cleanUser = {"city": "Denver", "firstname": "Parker", "ftp": 281, "profile_medium": "https://dgalywyr863hv.cloudfront.net/pictures/athletes/9560317/2891494/1/medium.jpg", "state": "CO", "weight": 69.8532}


export const mockSegment = {
  id: 609371,
  resource_state: 3,
  name: "Lookout Mountain (Gate-BB Grave)",
  activity_type: "Ride",
  distance: 7361.19,
  average_grade: 5.4,
  maximum_grade: 31.1,
  elevation_high: 2230.3,
  elevation_low: 1843,
  start_latlng: [
  39.740329,
  -105.227683
  ],
  end_latlng: [
  39.731674,
  -105.239256
  ],
  start_latitude: 39.740329,
  start_longitude: -105.227683,
  end_latitude: 39.731674,
  end_longitude: -105.239256,
  climb_category: 3,
  city: "Golden",
  state: "Colorado",
  country: "United States",
  private: false,
  hazardous: false,
  starred: false,
  created_at: "2010-04-16T03:33:52Z",
  updated_at: "2018-02-12T09:11:49Z",
  total_elevation_gain: 0,
  map: {
  id: "s609371",
  polyline: "_xpqF",
  resource_state: 3
  },
  effort_count: 130710,
  athlete_count: 14830,
  star_count: 1031,
  athlete_segment_stats: {
    pr_elapsed_time: 1383,
    pr_date: "2017-09-17",
    effort_count: 8
  }
}
export const defaultBadges = {yearElevation: 5280, yearDistance: 500000, allElevation: 100000, allDistance: 120000}
export const cleanSegment = {"athlete_segment_stats": {"effort_count": 8, "pr_date": "2017-09-17", "pr_elapsed_time": 1383}, "average_grade": 5.4, "city": "Golden", "distance": 4, "elevation_high": 7155, "elevation_low": 5912, "end_latlng": [39.731674, -105.239256], "name": "Lookout Mountain (Gate-BB Grave)", "polyline": "_xpqF", "total_elevation_gain": 0}

export const mockUserStats = {
  biggest_ride_distance: 174857,
  biggest_climb_elevation_gain: 1271,
  recent_ride_totals: {
  count: 3,
  distance: 91564.900390625,
  moving_time: 18456,
  elapsed_time: 23560,
  elevation_gain: 2166,
  achievement_count: 58
  },
  recent_run_totals: {
  count: 2,
  distance: 7873.5,
  moving_time: 3106,
  elapsed_time: 3516,
  elevation_gain: 69.58277893066406,
  achievement_count: 11
  },
  recent_swim_totals: {
  count: 0,
  distance: 0,
  moving_time: 0,
  elapsed_time: 0,
  elevation_gain: 0,
  achievement_count: 0
  },
  ytd_ride_totals: {
  count: 7,
  distance: 240759,
  moving_time: 46670,
  elapsed_time: 55484,
  elevation_gain: 4847
  },
  ytd_run_totals: {
  count: 3,
  distance: 10560,
  moving_time: 4048,
  elapsed_time: 4533,
  elevation_gain: 97
  },
  ytd_swim_totals: {
  count: 0,
  distance: 0,
  moving_time: 0,
  elapsed_time: 0,
  elevation_gain: 0
  },
  all_ride_totals: {
  count: 612,
  distance: 20215516,
  moving_time: 3290788,
  elapsed_time: 3987884,
  elevation_gain: 250799
  },
  all_run_totals: {
  count: 13,
  distance: 56967,
  moving_time: 20243,
  elapsed_time: 23761,
  elevation_gain: 203
  },
  all_swim_totals: {
  count: 4,
  distance: 2409,
  moving_time: 2439,
  elapsed_time: 2444,
  elevation_gain: 0
  }
}

export const cleanUserStats = {"all_ride_totals": {"count": 612, "distance": 12561, "elapsed_time": 3987884, "elevation_gain": 804563, "moving_time": 3290788}, "biggest_climb": 4077, "biggest_ride": 108, "recent_ride_totals": {"achievement_count": 58, "count": 3, "distance": 56, "elapsed_time": 23560, "elevation_gain": 2166, "moving_time": 18456}, "yearStats": {"count": 7, "distance": 149, "elapsed_time": 55484, "elevation_gain": 15549}}

export const mockActivities = [
    {
      id: 1373879335,
      resource_state: 2,
      external_id: "garmin_push_2455958256",
      upload_id: 1483362035,
        athlete: {
        id: 9560317,
        resource_state: 1
        },
      name: "Afternoon Run",
      distance: 4240.9,
      moving_time: 1627,
      elapsed_time: 1917,
      total_elevation_gain: 34.4,
      type: "Run",
      start_date: "2018-01-25T00:21:33Z",
      start_date_local: "2018-01-24T17:21:33Z",
      timezone: "(GMT-07:00) America/Denver",
      utc_offset: -25200,
      start_latlng: [39.74, -104.98],
      end_latlng: [ 39.74, -104.98],
      location_city: null,
      location_state: null,
      location_country: "United States",
      start_latitude: 39.74,
      start_longitude: -104.98,
      achievement_count: 6,
      kudos_count: 3,
      comment_count: 0,
      athlete_count: 1,
      photo_count: 0,
      map: {
      id: "a1373879335",
      summary_polyline: "glpqFpdv_SA_n@vKOBiU~KgDb^dALfS_CtDyAgAsq@p@k@fv@",
      resource_state: 2
    },
      trainer: false,
      commute: false,
      manual: false,
      private: false,
      flagged: false,
      gear_id: null,
      from_accepted_tag: false,
      average_speed: 2.607,
      max_speed: 4.9,
      average_cadence: 77.1,
      has_heartrate: true,
      average_heartrate: 119.1,
      max_heartrate: 143,
      elev_high: 1639.2,
      elev_low: 1611,
      pr_count: 5,
      total_photo_count: 0,
      has_kudoed: false,
      workout_type: null,
      suffer_score: 23
      },
    {
      id: 1365148709,
      resource_state: 2,
      external_id: "garmin_push_2444925257",
      upload_id: 1474306965,
      athlete: {
      id: 9560317,
      resource_state: 1
    },
    name: "Lunch Ride",
    distance: 62867.3,
    moving_time: 8738,
    elapsed_time: 12064,
    total_elevation_gain: 949,
    type: "Ride",
    start_date: "2018-01-19T18:17:54Z",
    start_date_local: "2018-01-19T11:17:54Z",
    timezone: "(GMT-07:00) America/Denver",
    utc_offset: -25200,
    start_latlng: [
    39.74,
    -104.98
    ],
    end_latlng: [
    39.74,
    -104.98
    ],
    location_city: null,
    location_state: null,
    location_country: "United States",
    start_latitude: 39.74,
    start_longitude: -104.98,
    achievement_count: 22,
    kudos_count: 6,
    comment_count: 0,
    athlete_count: 1,
    photo_count: 0,
    map: {
    id: "a1365148709",
    summary_polyline: "a line",
    resource_state: 2
    },
    trainer: false,
    commute: false,
    manual: false,
    private: false,
    flagged: false,
    gear_id: null,
    from_accepted_tag: false,
    average_speed: 7.195,
    max_speed: 17,
    average_cadence: 79.3,
    average_temp: 16,
    average_watts: 136.9,
    weighted_average_watts: 176,
    kilojoules: 1195.8,
    device_watts: true,
    has_heartrate: true,
    average_heartrate: 135.3,
    max_heartrate: 172,
    max_watts: 868,
    elev_high: 2280.2,
    elev_low: 1579.8,
    pr_count: 14,
    total_photo_count: 0,
    has_kudoed: false,
    workout_type: 10,
    suffer_score: 111
  }
]

export const cleanedActivities = [{"average_heartrate": 119.1, "average_speed": 5, "average_temp": NaN, "average_watts": undefined, "distance": 2, "kilojoules": undefined, "map": "glpqFpdv_SA_n@vKOBiU~KgDb^dALfS_CtDyAgAsq@p@k@fv@", "max_heartrate": 143, "max_speed": 10, "max_watts": undefined, "moving_time": 1627, "suffer_score": 23, "total_elevation_gain": 110}, {"average_heartrate": 135.3, "average_speed": 16, "average_temp": 60.8, "average_watts": 136.9, "distance": 39, "kilojoules": 1195.8, "map": "a line", "max_heartrate": 172, "max_speed": 38, "max_watts": 868, "moving_time": 8738, "suffer_score": 111, "total_elevation_gain": 3044}]
    
