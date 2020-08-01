const origin = (url?: string) => `http://ergast.com/api/f1/${url}`;

export const API = {
  origin,
  seasons: (pager: string = '') => origin(`2020/results.json?limit=10${pager}`),
  seasonPager: (pageNumber: number) => `${pageNumber !== 0 ? `&offset=${pageNumber}` : ''}`,
  driver: (driverId: string) => origin(`drivers/${driverId}.json`),
};
