interface IParamsGET {
  headers?: Record<string, string>;
}

interface IParams {
  body: XMLHttpRequestBodyInit;
  headers?: Record<string, string>;
}

type IMethods = 'get' | 'post' | 'delete' | 'put' | 'patch';

export class Fetch {
  constructor() {
    this.makeRequest = this.makeRequest.bind(this);
  }

  makeRequest(method: IMethods, url: string, params: IParams | IParamsGET) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      if (params.headers) {
        const headersArr = Object.entries(params.headers);
        headersArr.forEach((it) => xhr.setRequestHeader(it[0], it[1]));
      }
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.response);
        } else {
          reject(new Error(`request fail. url: ${url} status: ${xhr.status};`));
        }
      };
      xhr.onerror = () => {
        reject(new Error(`request fail. url: ${url} status: ${xhr.status};`));
      };
      xhr.send();
    });
  }
}
