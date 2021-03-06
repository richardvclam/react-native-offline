module.exports = {
  get reducer() {
    return require('./reducer').default;
  },
  get withNetworkConnectivity() {
    return require('./withNetworkConnectivity').default;
  },
  get ConnectivityRenderer() {
    return require('./ConnectivityRenderer').default;
  },
  get createNetworkMiddleware() {
    return require('./createNetworkMiddleware').default;
  },
  get offlineActionTypes() {
    return require('./actionTypes').default;
  },
  get networkEventsListenerSaga() {
    return require('./sagas').default;
  },
  get checkInternetConnectionOnStartup() {
    return require('./checkInternetConnectionOnStartup').default;
  },
};
