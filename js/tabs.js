const tabcontent = document.querySelectorAll(".lhn-chat-container-chatbox-classic-tabs-content");
const tabBtns = document.querySelectorAll(".lhn-chat-container-chatbox-classic-footer-tabs-tab");

const fullScTabContent = document.querySelectorAll('.lhn-chat-container-chatbox-fullsc-body-content');
const fullScTabBtns = document.querySelectorAll('.lhn-chat-container-chatbox-fullsc-footer-tabs-tab');

const columnTabContent = document.querySelectorAll('.lhn-chat-container-chatbox-column-body-content');
const columnTabBtns = document.querySelectorAll('.lhn-chat-container-chatbox-column-footer-tabs-tab');

const fullScInnerContent = document.querySelectorAll('.lhn-chat-container-chatbox-fullsc-body-chat-main-inner');
const fullScInnerTabBtn = document.querySelectorAll('.lhn-chat-container-chatbox-fullsc-body-content-header-tab');

const columnInnerContent = document.querySelectorAll('.lhn-chat-container-chatbox-column-body-chat-main-inner');
const columnInnerTabBtn = document.querySelectorAll('.lhn-chat-container-chatbox-column-body-content-header-tab');

const openTab = (tabName) => {
    if (tabName.includes("lhn-fc")) {
        // Full Screen
        fullScTabContent.forEach((content) => {
            content.style.display = "none"
        })
        fullScTabBtns.forEach((tab) => {
            tab.classList.remove("lhn-active-tab")
        })
        } else if (tabName.includes('lhn-classic')) {
            // Classic
            tabcontent.forEach((content) => {
                content.style.display = "none"
            })
        
            tabBtns.forEach((tab) => {
                tab.classList.remove("lhn-active-tab")
            })

        } else if (tabName.includes('lhn-col')) {
            // Column
            columnTabContent.forEach((content) => {
                content.style.display = "none"
            })
        
            columnTabBtns.forEach((tab) => {
                tab.classList.remove("lhn-active-tab")
            })
        }

    document.getElementById(tabName).style.display = 'block';
    event.target.classList.add("lhn-active-tab");
}

// Mostly only for full screen
const openInnerTab = (tabName) => {
    // Full Screen
    if (tabName.includes('lhn-fc-inner')) {
        fullScInnerContent.forEach((content) => {
            content.style.display = "none";
        })

        fullScInnerTabBtn.forEach((btn) => {
            btn.classList.remove('lhn-selected-inner-tab');
        })
    } else if (tabName.includes('lhn-col-inner')) {
        columnInnerContent.forEach((content) => {
            content.style.display = "none";
        })

        columnInnerTabBtn.forEach((btn) => {
            btn.classList.remove('lhn-selected-inner-tab');
        })
    }

    document.getElementById(tabName).style.display = "block";
    event.target.classList.add('lhn-selected-inner-tab');
}

// For Classic Mode
tabBtns.forEach((tab) => {
    tab.addEventListener('click', (e) => {
        let name = 'lhn-' + e.target.innerText.toLowerCase()
        openTab(name)
    })
})

// For full Screen Mode
fullScTabBtns.forEach((tab) => {
    tab.addEventListener('click', (e) => {
        let name = 'lhn-fc-' + e.target.innerText.toLowerCase();
        openTab(name);
    })
})

// For Column Mode
columnTabBtns.forEach((tab) => {
    tab.addEventListener('click', (e) => {
        let name = 'lhn-col-' + e.target.innerText.toLowerCase();
        openTab(name);
    })
})


// Inner Tabs - Full Screen Mode
fullScInnerTabBtn.forEach((tab) => {
    tab.addEventListener('click', (e) => {
        let name = 'lhn-fc-inner-' + e.target.innerText.toLowerCase();
        openInnerTab(name)
    })
})

// Inner Tabs - Column Mode
columnInnerTabBtn.forEach((tab) => {
    tab.addEventListener('click', (e) => {
        let name = 'lhn-col-inner-' + e.target.innerText.toLowerCase();
        openInnerTab(name)
    })
})