const editOption = ID("edit-option");
const profileEditImg = ID("profile-edit-img");
const editNameImg = ID("edit-name-img");
const editUsernameImg = ID("edit-username-img");
const updateContaner = ID("update-contaner");
const closeUpdate = ID("close-update");
const updateTitle = ID("update-title");
const updateNamePH = ID("update-name-ph");
const errorLabel = ID("error-label");
const saveUpdate = ID("save-update");
const updateInputBox = ID("update-input-box");
const updateInput = ID("update-input");

editOption.on(() => {
    profileEditImg.classList.toggle("active");
})

updateInput.on("keyup", (e) => {
    let val = e.target.value;
    if (!val.length || !val) {
        updateInputBox.classList.remove("active");
        return;
    } else {
        updateInputBox.classList.add("active");
    }

})


let updateFlag = 0;

editNameImg.on(() => {
    updateFlag = 0;
    updateNameUserWindow(
        { title: "Update Name", placeholder: "Enter new name" }
    )
})
editUsernameImg.on(() => {
    updateFlag = 1;
    updateNameUserWindow(
        { title: "Update Username", placeholder: "Enter new username" }
    )
})

closeUpdate.on(() => {
    updateContaner.classList.remove("active");
})

function updateNameUserWindow({ title, placeholder }) {
    updateContaner.classList.add("active");
    updateTitle.innerText = title;
    updateNamePH.innerText = placeholder;
}