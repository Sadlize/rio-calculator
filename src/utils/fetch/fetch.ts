type Data = {
  json?: boolean;
  headers?: object;
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
  const options: RequestInit = { method };
  const newHeaders: HeadersInit = new Headers();

  if (json) {
    newHeaders.set('Content-Type', 'application/json');
  }

  if (headers) {
    Object.entries(headers).forEach(([header, value]) =>
      newHeaders.set(header, value),
    );
  }

  options.headers = newHeaders;

  try {
    return handleResponse(url, await fetch(url, options));
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
