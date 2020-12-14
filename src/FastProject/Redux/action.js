export const addFacebookTime = time => ({
  type: 'ADD_FACEBOOK_TIME',
  facebookTime: time,
});

export const addGoogleTime = time => ({
  type: 'ADD_GOOGLE_TIME',
  googleTime: time,
}
);

export const logCounter = count => ({
  type: 'ADD_LOG_COUNTER',
  logCounter: count,
});
