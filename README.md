# 🎨 Twitch Artist Role/Badge Granter

Simple Node.js script that gives you the **Artist role** and **Artist badge** on your own Twitch channel.  
Twitch’s dashboard doesn’t let you assign this badge to yourself, so this script does it using the GraphQL API.

---

## ⚙️ Setup

1. **Install Node.js** (v18 or newer).
2. **Download or clone this repository.**
3. **Open `index.js`** and fill in the following values:
   ```js
   const ACCESS_TOKEN = 'oauth-token-here'; // Your Twitch OAuth token
   const CHANNEL_ID = 'your-userID-here';   // Your Twitch user ID
   const GRANTEE_LOGIN = 'username-of-user'; // Your own username or any user you want to give artist to
