const chatBtn = document.querySelector(".lhn-chat-btn");
// const chatbox = document.querySelector('.lhn-chat-container');

const emojiBox = document.querySelectorAll('.lhn-emojis-btn');
const emojiBoxContainer = document.querySelectorAll('.lhn-emojis-container');
const chatMenu = document.querySelectorAll(".lhn-chat-properties-menu");
const chatPropertiesBtn = document.querySelectorAll('.lhn-chat-properties-btn');


/** Classic Mode */
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
const closeFullSc = document.querySelector('.lhn-chat-container-chatbox-fullsc-header-top-close');
const fullScChat = document.querySelector('.lhn-chat-container-chatbox-fullsc')

const toggleFullSc = () => {
    fullScChat.classList.toggle('lhn-show-fullsc')
}
chatBtn.addEventListener('click', toggleFullSc)
closeFullSc.addEventListener('click', toggleFullSc)


/**
 * Common
 */

// const modes = document.querySelectorAll('.lhn-chat-container-chatbox-mode');
// modes.forEach((mode) => {
//     // The mode that is being used
//     let modeName = mode.classList[0].split("-")[mode.classList[0].split("-").length - 1];
//     if (mode.classList.contains('lhn-current-mode')) {

//     }
// })

// Scroll to the bottom of the chat
const scrollToBottom = () => {
    const chatBody = document.querySelectorAll(".lhn-inbox");
    chatBody.forEach((chat) => {
        chat.scrollTop = chat.scrollHeight;
    })
}

// Toggle Emojis
const toggleEmojis = (event) => {
    emojiBoxContainer.forEach((emoji) => {
        emoji.classList.toggle('lhn-show-emojis')
    })
    event.stopPropagation();
}
emojiBox.forEach((box) => {
    box.addEventListener('click', toggleEmojis)
})

// Toggle Menu / Properties
const toggleChatMenu = () => {
    chatMenu.forEach((menu) => {
        menu.classList.toggle('lhn-show-menu')
    })
    
}
chatPropertiesBtn.forEach(btn => {
    btn.addEventListener('click', toggleChatMenu)
})