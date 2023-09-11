const chatBtn = document.querySelector(".he-chat-btn");
const chatbox = document.querySelector('.he-chat-container');

const emojiBox = document.querySelectorAll('.he-emojis-btn');
const emojiBoxContainer = document.querySelectorAll('.he-emojis-container');
const chatMenu = document.querySelectorAll(".he-chat-properties-menu");
const chatPropertiesBtn = document.querySelectorAll('.he-chat-properties-btn');

const faqQuestions = document.querySelectorAll('.he-chat-container-chatbox-classic-tabs-faq-body-question');
const faqAnswers = document.querySelectorAll('.he-chat-container-chatbox-classic-tabs-faq-body-answer');

const faqColQuestions = document.querySelectorAll('.he-chat-container-chatbox-column-body-faq-body-question');
const faqColAnswers = document.querySelectorAll('.he-chat-container-chatbox-column-body-faq-body-answer')


/** Classic Mode */
const classicChat = document.querySelector('.he-chat-container-chatbox-classic');
const toggleClassicChat = () => {
  classicChat.classList.toggle('he-show-classic');
  scrollToBottom();
}
chatBtn.addEventListener('click', toggleClassicChat)


/** Column Mode */
const closeColumnBtn = document.querySelector('.he-chat-container-chatbox-column-header-top-btns-close');
const columnChat = document.querySelector('.he-chat-container-chatbox-column');

const closeColumn = () => {
  columnChat.classList.remove('he-show-column');
  chatbox.style.display = 'none';
  chatBtn.style.display = 'block'
}

const openColumn = () => {
  columnChat.classList.add('he-show-column');
  chatbox.style.display = 'block';
}

closeColumnBtn.addEventListener('click', closeColumn);
chatBtn.addEventListener('click', openColumn);

/**
 * Common
 */
const allModes = document.querySelectorAll('.he-chat-container-chatbox-mode');
allModes.forEach((mode) => {
  // The mode that is being used
  let modeName = mode.classList[0].split("-")[mode.classList[0].split("-").length - 1];
  if (mode.classList.contains('he-current-mode')) {
    if (modeName == 'column') {
      chatbox.style.display = 'none';
      document.querySelector("body").style.display = 'flex';
      document.querySelector(".he-chat-container").style.position = 'unset';
    }
  }
})

// Scroll to the bottom of the chat
const scrollToBottom = () => {
  const chatBody = document.querySelectorAll(".he-inbox");
  chatBody.forEach((chat) => {
    chat.scrollTop = chat.scrollHeight;
  })
}

// Toggle Emojis
const toggleEmojis = (event) => {
  emojiBoxContainer.forEach((emoji) => {
    emoji.classList.toggle('he-show-emojis')
  })
  event.stopPropagation();
}
emojiBox.forEach((box) => {
  box.addEventListener('click', toggleEmojis)
})

// Toggle Menu / Properties
const toggleChatMenu = () => {
  chatMenu.forEach((menu) => {
    menu.classList.toggle('he-show-menu')
  })

}
chatPropertiesBtn.forEach(btn => {
  btn.addEventListener('click', toggleChatMenu)
})

function handleFAQDropdowns(questions, answers) {
  questions.forEach((question, index) => {
    question.addEventListener('click', () => {
      //Close all other FAQ answers
      answers.forEach((answer, i) => {
        if (i !== index && answer.classList.contains('open')) {
          answer.classList.remove('open');
        }
      });

      //Toggle the visibility of the corresponding FAQ answer
      answers[index].classList.toggle('open');
    });
  });
}

handleFAQDropdowns(faqQuestions, faqAnswers);
handleFAQDropdowns(faqColQuestions, faqColAnswers);
