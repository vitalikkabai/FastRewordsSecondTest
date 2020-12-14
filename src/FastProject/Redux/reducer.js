const initialStore = {};

const reducer = (store = initialStore, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_FACEBOOK_TIME': {
      return {
        ...store,
        facebookTime: action.facebookTime,
      };
    }
    case 'ADD_GOOGLE_TIME': {
      return {
        ...store,
        googleTime: action.googleTime,
      };
    }
    case 'ADD_LOG_COUNTER': {
      return {
        ...store,
        logCounter: action.logCounter,
      };
    }
    default: {
      return store;
    }
  }
};

export default reducer;
