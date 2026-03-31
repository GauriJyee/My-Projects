
let messagesLogin = [
  "Welcome back, fashionista! ❤︎",
  "Your wardrobe missed you ✦",
  "Ready to slay today? ☻",
  "Let’s style your day ☕︎",
  "Back again? Let’s glow up ☘︎",
  "Outfit check? Let’s upgrade ✿",
  "You + great outfit = unstoppable ✭",
  "Style level: loading… ✧",
  "Let’s turn heads today ❤︎",
  "Confidence starts with your outfit ✤",
  "You don’t follow trends… you create them ✓",
  "A little style magic for today ❃",
  "Let’s dress your mood ❥",
  "Your closet, your vibe ❉",
  "Soft looks, strong confidence ♛",
  "Style starts here… ☘︎",
  "Today’s outfit = today’s energy ⚘",
  "Pick something beautiful ♠︎"
];
let messagesSignUp = [
  "Welcome! Let’s build your perfect wardrobe ✫",
  "New here? Let’s get you styled ❦",
  "Welcome! Your style journey starts now ♚",
  "Let’s create your dream closet ✾",
  "Step in… your wardrobe awaits ✧",
  "App Introduction Feel ♟",
  "Let’s set up your style world ✶",
  "Tell us your vibe, we’ll style the rest ☻",
  "Build your wardrobe, your way ⛳︎",
  "Your personal styling journey begins here ❖",
  "Let’s design your perfect look ♛",
  "A new beginning, a new style ✰",
  "Style starts with you ☀︎",
  "Your closet, your story ☾",
  "Let’s create something beautiful ☕︎",
  "Start fresh, style better ✩",
  "Initializing your style experience… ❥",
  "Let’s personalize your wardrobe ❉",
  "Creating your fashion profile ❀",
  "Smart styling begins now ✮",
  "Setting up your style preferences ♤"];
let loginMsg = document.querySelector(".welcomeMsgLogin");
if (loginMsg) {
  let randomIndex1 = Math.floor(Math.random() * messagesLogin.length);
  loginMsg.innerText = messagesLogin[randomIndex1];
}
let signUpMsg = document.querySelector(".welcomeMsgSignUp");
if (signUpMsg) {
  let randomIndex2 = Math.floor(Math.random() * messagesSignUp.length);
  signUpMsg.innerText = messagesSignUp[randomIndex2];
}

