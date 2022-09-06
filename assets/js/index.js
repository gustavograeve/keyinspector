const emoji_text = document.querySelector('#emoji');
const key_text = document.querySelector('#key');

let randomize_emojis = () => emoji[Math.floor(Math.random() * emoji.length)];

let handle_key_down = event => {
    key_text.innerText = event.key;
    emoji_text.innerText = randomize_emojis();
};

document.addEventListener('keydown', handle_key_down);
