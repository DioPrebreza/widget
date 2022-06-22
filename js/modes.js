const menu = document.querySelectorAll(".lhn-chat-properties-menu-element");

// console.log(menu);

const modes = document.querySelectorAll('.lhn-chat-container-chatbox-mode');


const changeToMode = (modeName) => {
    modes.forEach((mode) => {
        // console.log(mode.classList);
        mode.classList.forEach((cl) => {
            if (cl.includes(modeName.toLowerCase())) {
                mode.classList.add('lhn-current-mode')
                console.log(mode);
            }
        })
    })
    // console.log(mode.toLowerCase());

}
modes.forEach((mode) => {
    // The mode that is being used
    let modeName = mode.classList[0].split("-")[mode.classList[0].split("-").length - 1];

    if (mode.classList.contains('lhn-current-mode')) {
        menu.forEach((m) => {
            m.classList.forEach((cl) => {
                if (cl.includes(modeName)) {
                    m.addEventListener('click', (e) => {
                        const name = e.target.innerHTML.split(" ");
                        if (name.length == 3) {
                            changeToMode(name[name.length - 1])
                        } else {
                            console.log(name[name.length - 2] + name[name.length - 1]);
                            // changeToMode(name[name.length - 2] + name[name.length - 1])
                        }
                        mode.classList.remove('lhn-current-mode')
                    })
                }
            })
        })
    }
})
