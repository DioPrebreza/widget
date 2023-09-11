const classicTabs = {
  content: document.querySelectorAll(".he-chat-container-chatbox-classic-tabs-content"),
  btns: document.querySelectorAll(".he-chat-container-chatbox-classic-footer-tabs-tab"),
};

const columnTabs = {
  content: document.querySelectorAll('.he-chat-container-chatbox-column-body-content'),
  btns: document.querySelectorAll('.he-chat-container-chatbox-column-footer-tabs-tab'),
};

const showTabContent = (tabs, tabName) => {
  tabs.content.forEach((content) => {
    content.style.display = "none";
  });

  tabs.btns.forEach((tab) => {
    tab.classList.remove("he-active-tab");
  });

  document.getElementById(tabName).style.display = 'block';
  event.target.classList.add("he-active-tab");
};

const setupTabClickHandler = (tabs, prefix) => {
  tabs.btns.forEach((tab) => {
    tab.addEventListener('click', (e) => {
      const name = `${prefix}-${e.target.innerText.toLowerCase()}`;
      showTabContent(tabs, name);
    });
  });
};

// For Classic Mode
setupTabClickHandler(classicTabs, 'he-classic');

// For Column Mode
setupTabClickHandler(columnTabs, 'he-col');
