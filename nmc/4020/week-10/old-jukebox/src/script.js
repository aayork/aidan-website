const clientId = "4cca50a69c3b431ba89cf09aba1e2422";
const params = new URLSearchParams(window.location.search);
const code = params.get("code");
let accessToken;
let audio = null;
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const searchResults = document.getElementById("search-results");

searchButton.addEventListener("click", async () => {
  await search(accessToken);
});

if (!code) {
  redirectToAuthCodeFlow(clientId);
} else {
  const accessToken = await getAccessToken(clientId, code);
  const profile = await fetchProfile(accessToken);
  params.append(
    "scope",
    "user-read-private user-read-email user-read-playback-state"
  );
  populateUI(profile);
}

export async function redirectToAuthCodeFlow(clientId) {
  const verifier = generateCodeVerifier(128);
  const challenge = await generateCodeChallenge(verifier);

  localStorage.setItem("verifier", verifier);

  const params = new URLSearchParams();
  params.append("client_id", clientId);
  params.append("response_type", "code");
  params.append("redirect_uri", "http://localhost:5173/callback");
  params.append("scope", "user-read-private user-read-email");
  params.append("code_challenge_method", "S256");
  params.append("code_challenge", challenge);

  document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
}

function generateCodeVerifier(length) {
  let text = "";
  let possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

async function generateCodeChallenge(codeVerifier) {
  const data = new TextEncoder().encode(codeVerifier);
  const digest = await window.crypto.subtle.digest("SHA-256", data);
  return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export async function getAccessToken(clientId, code) {
  const verifier = localStorage.getItem("verifier");

  const params = new URLSearchParams();
  params.append("client_id", clientId);
  params.append("grant_type", "authorization_code");
  params.append("code", code);
  params.append("redirect_uri", "http://localhost:5173/callback");
  params.append("code_verifier", verifier);

  const result = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params,
  });

  const { access_token } = await result.json();
  accessToken = access_token;
  return access_token;
}

async function fetchProfile(token) {
  const result = await fetch("https://api.spotify.com/v1/me", {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });

  return await result.json();
}

function populateUI(profile) {
  document.getElementById("displayName").style.margin = "7px 5px 5px 15px";
  document.getElementById("displayName").innerText = profile.display_name;
  if (profile.images[0]) {
    const profileImage = new Image(200, 200);
    profileImage.src = profile.images[0].url;
    profileImage.width = 30; // set the width of the image to 100px
    profileImage.height = 30; // set the height of the image to 100px
    profileImage.style.borderRadius = "50%"; // set the border radius to make it round
    profileImage.style.position = "absolute";
    profileImage.style.top = "20px";
    profileImage.style.left = "12.5px";
    document.getElementById("avatar").appendChild(profileImage);
    document.getElementById("imgUrl").innerText = profile.images[0].url;
  }
}

async function search(accessToken) {
  const query = searchInput.value;
  const response = await fetch(
    `https://api.spotify.com/v1/search?q=${query}&type=track`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  const data = await response.json();
  searchResults.innerHTML = "";
  data.tracks.items.forEach((item) => {
    const name = item.name;
    const artist = item.artists[0].name;
    const trackId = item.id;
    const result = document.createElement("div");
    result.innerHTML = `
      <div style="margin: 10px;">${name} - ${artist}</div>
      <button class="play-button" data-track-id="${trackId}">Play</button>
    `;
    searchResults.appendChild(result);
  });
  const playButtons = document.getElementsByClassName("play-button");
  Array.from(playButtons).forEach((button) => {
    button.addEventListener("click", async () => {
      const trackId = button.getAttribute("data-track-id");
      const trackResponse = await fetch(
        `https://api.spotify.com/v1/tracks/${trackId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const trackData = await trackResponse.json();
      const previewUrl = trackData.preview_url;
      if (previewUrl) {
        playSong(previewUrl);
      }
    });
  });
}

function playSong(previewUrl) {
  if (audio) {
    audio.pause();
  }
  audio = new Audio(previewUrl);
  audio.play();
}
