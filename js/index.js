
if (isMobile) {
    cssRoot.style.setProperty("--cursor", "auto");
}

const toggleCancleNewBtn = ID("toggle-cancle-new-btn");
const indexHeader = ID("index-header");
const scrollBox = ID("scroll-box");
const profileBack = ID("profile-back");
const contactBox = $(".contact-box");

toggleCancleNewBtn.on(() => {
    indexHeader.classList.toggle("active");
})

// defualt chat open off
let bodyMaxScroll = scrollBox.scrollHeight - scrollBox.clientHeight
document.body.classList.remove("active")

contactBox.on((e) => {
    document.body.classList.add("active");
    bodyMaxScroll = scrollBox.scrollWidth - scrollBox.clientWidth;
    smoothScroll(scrollBox, "scrollLeft", bodyMaxScroll, 100);
})

profileBack.on(() => {
    smoothScroll(scrollBox, "scrollLeft", -bodyMaxScroll, 100);
})
