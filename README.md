# todo

- you must refresh riot games api key everytime
- spotify api
- tiktok stats
- league of legends stats
- make website pretty (mobile/web app)
- pngtuber thing jojo was talking about
- host on netlify (or choose idk)

/lol/summoner/v4/summoners/by-name/{summonerName}
{
"id": "i9XfHa3-PcT6SFzN-NFPrXJ4wbhhLYU9slHkn8kVp6EPTHE",
"accountId": "ZLmYMCpUCm1ZdoS5PfrM01F0y4rMafmWGyOBqi8Y4CrMLg",
"puuid": "kbl2OfQAq7XyXDmuGZBD1ciEDXx5WbH7kzJCkg1xqz_B_YM_SlwPwHcriTa_ywPPpY49ON_oRRwCwA",
"name": "DinoRAWR",
"profileIconId": 5373,
"revisionDate": 1658732794000,
"summonerLevel": 239
}

{
"puuid": "kbl2OfQAq7XyXDmuGZBD1ciEDXx5WbH7kzJCkg1xqz_B_YM_SlwPwHcriTa_ywPPpY49ON_oRRwCwA",
"gameName": "DinoRAWR",
"tagLine": "NA1"
}

https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/i9XfHa3-PcT6SFzN-NFPrXJ4wbhhLYU9slHkn8kVp6EPTHE

[
{
"leagueId": "6823dcf1-b9f7-4436-b8c2-a91671397825",
"queueType": "RANKED_FLEX_SR",
"tier": "GOLD",
"rank": "I",
"summonerId": "i9XfHa3-PcT6SFzN-NFPrXJ4wbhhLYU9slHkn8kVp6EPTHE",
"summonerName": "DinoRAWR",
"leaguePoints": 72,
"wins": 75,
"losses": 73,
"veteran": false,
"inactive": false,
"freshBlood": false,
"hotStreak": false
},
{
"leagueId": "c553dd57-302c-4f8e-bbb8-55acf14a4d05",
"queueType": "RANKED_SOLO_5x5",
"tier": "PLATINUM",
"rank": "IV",
"summonerId": "i9XfHa3-PcT6SFzN-NFPrXJ4wbhhLYU9slHkn8kVp6EPTHE",
"summonerName": "DinoRAWR",
"leaguePoints": 40,
"wins": 61,
"losses": 61,
"veteran": false,
"inactive": false,
"freshBlood": false,
"hotStreak": false
}
]

champion mastery

https://na1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/i9XfHa3-PcT6SFzN-NFPrXJ4wbhhLYU9slHkn8kVp6EPTHE

to map champion Id to http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json

to get latest version, versions[0] https://ddragon.leagueoflegends.com/api/versions.json
