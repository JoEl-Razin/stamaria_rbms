const response = await fetch(
  'APP_URL',
  {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer JWT_TOKEN',
    }
  }
).then((res) => res.json());
