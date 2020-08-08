export const httpGet = (controller: string): Promise<any> =>
  request(controller, 'get');

const request = (controller: string, method: string) => {
  return new Promise((resolve, reject) => {
    const options = {
      method: method,
      headers: new Headers({
        'Content-type': 'application/json',
        Accept: 'application/json',
      }),
    };

    //console.log('url ', controller);

    fetch(controller, options)
      .then((res: Response) => {
        return res.json();
      })
      .then((res: any) => {
        resolve(res);
      })
      .catch((error: Error) => {
        reject(error);
        //error ? setTimeout(request(controller, method), 1000) : reject(error);
      });
  });
};
