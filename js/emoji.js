const pickEmoji = document.querySelectorAll('.lhn-emojis-container');
const inputText = document.querySelector('.lhn-form-input');

// const pickEmoji = document.querySelector('.lhn-chat-container-chatbox-classic-tabs-chat-form-emojis-container');
// const inputText = document.querySelector('.lhn-chat-container-chatbox-classic-tabs-chat-form-input');

import data from  'https://cdn.jsdelivr.net/npm/@emoji-mart/data' assert { type: 'json' };
import * as EmojiMart from 'https://cdn.jsdelivr.net/npm/emoji-mart@latest/dist/index.js';

const parent = pickEmoji.forEach((emoji) => {
    const picker = new EmojiMart.Picker({
        parent: emoji,
        data: data,
        onEmojiSelect: (event) => { inputText.value += event.native }
    })
})