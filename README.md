# todo

- make website pretty (mobile/web app)
- pngtuber thing jojo was talking about
- host on netlify (or choose idk)
- make a top 5 league champs if user puts in summoner name (or 10)
- configure react-spline object, think about the styling

## apis

- unsplash: https://unsplash.com/documentation#get-a-users-public-profile

## how to hook up spotify

reference the "spotify.ts" file for help.

mainly looking for 4 things:

1. client id
2. client secret
3. access token
4. refresh token

how to acquire these things:

- developer.spotify.com
  - dashboard
  - create an app button
  - get client id
  - get client secret
  - editing settings button
  - add redirect uri
  - https://localhost:3000
- run app on dev (yarn start, npm run start)
- paste to url
- `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&scope=${SCOPES_YOU_WANT}`
  - for me i chose `user-read-currently-playing` and `user-top-read`
  - usually separated by `%20` so "user-read-currently-playing%20user-top-read"
  - more info on scopes: https://developer.spotify.com/documentation/general/guides/authorization/scopes/
- click in the url to obtain the code and copy it somewhere
  - if it looks like it's not there, it's there, trust
- need to get base64
  - `` const basic = btoa(`${clientId}:${clientSecret}`); `` or use some converter on the internet
- run this curl command in cmd (if windows, unsure for mac and linux) to get the refresh token
- `curl -H "Authorization: Basic ${BASE64} -d grant_type=authorization_code -d code=${CODE_FROM_URL} -d redirect_uri=${REDIRECT_URI} https://accounts.spotify.com/api/token`
- the response json should contain the refresh token
  - `{ "access_token": ..., "token_type": "Bearer", "expires_in": "3600, "refresh_token": ..., "scope": ... }`
  - access tokens expire, but are recreated every time it's called
  - refresh tokens are indefinite and should be saved in the `.env`
  - more info on OAuth: https://developer.spotify.com/documentation/ios/guides/token-swap-and-refresh/

## tailwindcss

- mt => margin top
- text-3xl => text sizing at 1.875rem
- spacing-sm => spacing of 8px
- text-black => text color to black
- dark:text-white => when dark mode is on, text color to white
- rounded-lg => border radius is rounded quite a bit
- p-4 => padding all around by 4
- w-full => full width
- bg-gradient-to-r => background gradient from left to right

## things i've learned

- noreferrer, if a user clicks a link on my website, the website won't know the click came from my website
- ?? is for when a value is undefined or null, || is for when a value is falsy for example 0
- cache-control in a response is used to let the browser when to refresh the data
