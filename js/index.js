const toggleCancleNewBtn = ID("toggle-cancle-new-btn");
const indexHeader = ID("index-header");

toggleCancleNewBtn.on(() => {
    indexHeader.classList.toggle("active");
})