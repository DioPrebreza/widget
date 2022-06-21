const tabcontent = document.querySelectorAll(".lhn-chat-container-chatbox-classic-tabs-content");
const tabBtns = document.querySelectorAll(".lhn-chat-container-chatbox-classic-footer-tabs-tab");

const openTab = (tabName) => {

    tabcontent.forEach((content) => {
        content.style.display = "none"
    })

    tabBtns.forEach((tab) => {
        tab.classList.remove("lhn-active-tab")
    })

    document.getElementById(tabName).style.display = 'block';
    event.target.classList.add("lhn-active-tab");
}

tabBtns.forEach((tab) => {
    tab.addEventListener('click', (e) => {
        let name = 'lhn-' + e.target.innerText.toLowerCase()
        openTab(name)
    })
})