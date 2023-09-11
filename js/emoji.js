const pickEmojiContainers = document.querySelectorAll('.he-emojis-container');
const inputText = document.querySelector('.he-form-input');

import data from 'https://cdn.jsdelivr.net/npm/@emoji-mart/data' assert { type: 'json' };
import * as EmojiMart from 'https://cdn.jsdelivr.net/npm/emoji-mart@latest/dist/index.js';

for (const emojiContainer of pickEmojiContainers) {
  new EmojiMart.Picker({
    parent: emojiContainer,
    data: data,
    onEmojiSelect: (event) => {
      inputText.value += event.native;
    }
  });
}
