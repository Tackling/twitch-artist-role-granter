const ACCESS_TOKEN = 'oauth-token-here'; // Your GQL Access Token 'OAuth abc123...'
const CHANNEL_ID = 'your-userID-here'; // Broadcaster's channel ID
const GRANTEE_LOGIN = 'username-of-user'; // The user receiving the role
const ROLE = 'ARTIST'; // Role to grant
const GQL_URL = 'https://gql.twitch.tv/gql'; // Twitch GQL API
const payload = [
  {
    operationName: 'grantCommunityRole',
    variables: {
      input: {
        channelID: CHANNEL_ID,
        granteeLogin: GRANTEE_LOGIN,
        role: ROLE
      }
    },
    extensions: {
      persistedQuery: {
        version: 1,
        sha256Hash: '7a681d869bb3ad6457693daea566c8672afd66dc91c81b52b8b1bb7961fae4ec'
      }
    }
  }
];

const headers = {
  'Client-ID': 'kimne78kx3ncx6brgo4mv6wki5h1ko', // Twitch WEB Client ID — Don't change
  'Authorization': ACCESS_TOKEN.startsWith('OAuth') ? ACCESS_TOKEN : `OAuth ${ACCESS_TOKEN}`,
  'Content-Type': 'application/json'
};

async function grantRole() {
  try {
    const response = await fetch(GQL_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (!response.ok) {
      console.error(`❌ Error ${response.status}:`, JSON.stringify(data, null, 2));
    } else {
      console.log('✅ Success');
      console.log(JSON.stringify(data, null, 2));
    }
  } catch (err) {
    console.error('❌ Request failed:', err.message);
  }
}

grantRole();
