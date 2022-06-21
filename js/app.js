const chatBtn = document.querySelector(".lhn-chat-btn");
// const chatbox = document.querySelector('.lhn-chat-container');

const emojiBox = document.querySelector('.lhn-emojis-btn');
const emojiBoxContainer = document.querySelector('.lhn-emojis-container');
const chatMenu = document.querySelector(".lhn-chat-properties-menu");
const chatPropertiesBtn = document.querySelector('.lhn-chat-properties-btn');

// const additionalMenu = document.querySelector(".lhn-chat-container-additional");
// const closeAdditionalBtn = document.querySelector(".lhn-close-additional")

/** Common */

// Scroll to the bottom of the chat
const scrollToBottom = () => {
    const chatBody = document.querySelector(".lhn-inbox");
    chatBody.scrollTop = chatBody.scrollHeight;
}

// Toggle Chat Menu (Properties)
const toggleChatMenu = () => {
    chatMenu.classList.toggle('lhn-show-menu');
}
chatPropertiesBtn.addEventListener('click', toggleChatMenu);

// Toggle Emojis
const toggleEmojis = (event) => {
    emojiBoxContainer.classList.toggle('lhn-show-emojis');
    event.stopPropagation();
}
emojiBox.addEventListener('click', toggleEmojis)


/** Classic Mode */
// Toggle Chat
const classicChat = document.querySelector('.lhn-chat-container-chatbox-classic');
const toggleClassicChat = () => {
    classicChat.classList.toggle('lhn-show-classic');
    scrollToBottom();
}
chatBtn.addEventListener('click', toggleClassicChat)

// Close Additional Menu
const classicAdditional = document.querySelector('.lhn-chat-container-additional-classic');
const closeAdditionalBtn = document.querySelector('.lhn-chat-container-additional-classic-body-form-btns-cancel-button');
// TODO: Temporary btn, need to remove
const classicAdditionalMenuBtn = document.querySelector(".lhn-additional-btn");

const toggleClassicAdditional = () => {
    classicAdditional.classList.toggle("lhn-show-additional-classic");
}
const closeClassicAdditonal = () => {
    if (classicAdditional.classList.contains("lhn-show-additional-classic")) {
        classicAdditional.classList.remove("lhn-show-additional-classic");
}
}
chatBtn.addEventListener('click', closeClassicAdditonal);
closeAdditionalBtn.addEventListener('click', toggleClassicAdditional);
classicAdditionalMenuBtn.addEventListener('click', toggleClassicAdditional);

/** Preview Mode */

/** Column Mode */

/** Full Screen Mode */