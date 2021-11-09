import { fetchWithoutToken, fetchWithToken } from '../../utils/fetch';

describe('Tests in the helper fetch', () => {
  let token = '';

  test('fetchWithoutToken should be works', async () => {
    const resp = fetchWithoutToken(
      'login',
      { email: 'eduardoberzunzal@gmail.com', password: '12345678' },
      'POST'
    );
    expect(resp instanceof Response).toBe(true);

    const body = await resp.json();
    expect(body.status).toBe('success');

    token = body.token;
  });

  test('fetchWithToken should be works', async () => {
    localStorage.setItem('token', token);
    const resp = await fetchWithToken('/me/password', {}, 'POST');
    const body = await resp.json();
    // expect(body.error).toBe('');
  });
});
