const apiUrl = 'https://yard.moscow/api/v1/';

export const filterPublic = encodeURI('?filter[state]=public');

export const getApi = (resource, filter = '') =>
  fetch(apiUrl + resource + filter).then(res => res.json());
