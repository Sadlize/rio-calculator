type Data = {
  json?: boolean;
  headers?: object;
};

type Options = {
  method: string;
  headers?: object;
  body?: string | object;
};

type Headers = {
  [key: string]: string;
};

export type FetchResponse = {
  data?: object;
  errorMessage?: string;
  errorCode?: number;
};

async function handleResponse(url: string, response: Response) {
  let body;
  try {
    body = await response.json();
  } catch (jsonError) {
    throw new Error(JSON.stringify(jsonError));
  }

  return response.ok
    ? { data: body }
    : {
        url,
        data: undefined,
        errorCode: response.status,
        errorMessage: Error(
          'Could not get the data on the request. Double-check the correctness of the entered values',
        ).message,
      };
}

async function generateMethod(
  method: string,
  url: string,
  { json, headers }: Data,
) {
  const options: Options = { method };
  const newHeaders = (headers || {}) as Headers;

  if (json) {
    newHeaders['Content-Type'] = 'application/json';
  }

  options.headers = newHeaders;

  try {
    return handleResponse(url, await fetch(url, options as RequestInit));
  } catch (error) {
    throw new Error(JSON.stringify(error));
  }
}

const methods: { [key: string]: (url: string, data: Data) => Promise<object> } =
  {
    get: (url, data) => generateMethod('get', url, data),
    post: (url, data) => generateMethod('post', url, data),
  };

export default methods;
