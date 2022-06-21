const pickEmoji = document.querySelector('.lhn-chat-container-chatbox-classic-tabs-chat-form-emojis-container');
const inputText = document.querySelector('.lhn-chat-container-chatbox-classic-tabs-chat-form-input');

import data from  'https://cdn.jsdelivr.net/npm/@emoji-mart/data' assert { type: 'json' };
import * as EmojiMart from 'https://cdn.jsdelivr.net/npm/emoji-mart@latest/dist/index.js';

const picker = new EmojiMart.Picker({
    parent: pickEmoji,
    data: data,
    onEmojiSelect: (event) => {
        inputText.value += event.native
    }
})