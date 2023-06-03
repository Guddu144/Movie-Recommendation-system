const request = async (method, url, params = {}) => {
  let token = localStorage.getItem('token');
  const req = {
    method: method,
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token
    },
  };

  if (method === 'GET') {
    const getParams = new URLSearchParams(params);
    url += `?${getParams}`;
  } else if (params instanceof FormData) {
    req.body = params;
  } else {
    req.headers['Content-Type'] = 'application/json';
    req.body = JSON.stringify(params);
  }

  const res = await fetch(url, req);
  const data = await res.json();

  // if (res.failed || !res.ok) {
  //     throw new ResponseError(data.message, data.errors);
  // }

  return data;
};

class ResponseError extends Error {
  constructor(msg, errors) {
    super(msg);
    this.errors = errors;
  }
}

const removeEmpty = val => {
  if (Array.isArray(val)) {
    return val
      .map(val => typeof val === 'object' ? removeEmpty(val) : val)
      .filter(val => !isEmpty(val));
  } else if (val && typeof val == 'object') {
    return Object.entries(val)
      .map(([k, v]) => ([k, removeEmpty(v)]))
      .reduce((acc, [k, v]) => {
        if (!isEmpty(v)) {
          acc[k] = v;
        }
        return acc;
      }, {});
  }
  return val;
};
