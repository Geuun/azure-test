/**
 * accessToken 을 이용하여 endpoint 에 요청을 보내고, 결과를 json 으로 반환한다.
 * @param endpoint
 * @param accessToken
 */
export default async function fetchAccessToken<T>(endpoint: string, accessToken: object): Promise<T> {
  const options = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  console.log(`Fetching ${endpoint} with options:`, options);

  const res = await fetch(endpoint, options)
    .then((res) => res.json())
    .catch((err) => console.error(err));

  return res;
}
