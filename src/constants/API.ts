const origin = (url?: string) => `http://ergast.com/api/f1/${url}`;

export const API = {
  origin,
  seasons: (pager: string = '') => origin(`2020/results.json?limit=10${pager}`),
  seasonPager: (pageNumber: number = 0) => `${pageNumber !== 0 ? `&offset=${pageNumber*10}` : ''}`,
  driver: (driverId: string) => origin(`drivers/${driverId}.json`),
};
