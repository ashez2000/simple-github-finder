const githubApi = (path) => {
  return fetch(`https://api.github.com${path}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
    },
  }).then((response) => response.json())
}

export default githubApi
