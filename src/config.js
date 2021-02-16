module.exports = {
  apiUrl:
    process.env.NODE_ENV === 'development'
      ? process.env.REACT_APP_API_ENDPOINT_DEV
      : process.env.REACT_APP_API_ENDPOINT_PROD,
  heapUrl: process.env.NODE_ENV === 'development' ? '497288854' : '2047108713',
};
