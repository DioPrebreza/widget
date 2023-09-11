const menuItems = document.querySelectorAll(".he-chat-properties-menu-element");
const chatbtn = document.querySelector(".he-chat-btn");
const chatInboxes = document.querySelectorAll(".he-inbox");
const modes = document.querySelectorAll('.he-chat-container-chatbox-mode');

const scrollChatToBottom = () => {
  chatInboxes.forEach((chat) => {
    chat.scrollTop = chat.scrollHeight;
  });
}

const changeToMode = (modeName) => {
  const normalizedModeName = modeName.toLowerCase();

  modes.forEach((mode) => {
    if (Array.from(mode.classList).some((cl) => cl.includes(normalizedModeName))) {
      mode.classList.add('he-current-mode');
    }
  });

  getMode();
  scrollChatToBottom();
}

const handleMenuItemClick = (e, modeName) => {
  const nameParts = e.target.innerHTML.split(" ");
  const newModeName = nameParts[nameParts.length - 1].toLowerCase();

  changeToMode(newModeName);
  modeName === 'column' ? (chatbtn.style.display = 'block') : (chatbtn.style.display = 'none');
}

const getMode = () => {
  modes.forEach((mode) => {
    const modeClassNameParts = mode.classList[0].split("-");
    const modeName = modeClassNameParts[modeClassNameParts.length - 1];

    if (mode.classList.contains('he-current-mode')) {
      menuItems.forEach((menuItem) => {
        menuItem.classList.forEach((menuItemClass) => {
          if (menuItemClass.includes(modeName)) {
            menuItem.addEventListener('click', (e) => {
              handleMenuItemClick(e, modeName);
              mode.classList.remove('he-current-mode');
            });
          }
        });
      });
    }
  });
}

getMode();
