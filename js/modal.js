 // Function to open the modal
 function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

// Function to close the modal
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Event listener for opening and closing modals
document.getElementById("openModal").addEventListener("click", function() {
    openModal("myModal");
});

document.getElementsByClassName("close")[0].addEventListener("click", function() {
    closeModal("myModal");
});

document.getElementById("openModalSingapore").addEventListener("click", function() {
    openModal("myModalSingapore");
});

document.getElementsByClassName("close")[1].addEventListener("click", function() {
    closeModal("myModalSingapore");
});

document.getElementById("openModalSwitzerland").addEventListener("click", function() {
    openModal("myModalSwitzerland");
});

document.getElementById("myModalSwitzerland").getElementsByClassName("close")[0].addEventListener("click", function() {
    closeModal("myModalSwitzerland");
});

document.getElementById("openModalAustralia").addEventListener("click", function() {
    openModal("myModalAustralia");
});

document.getElementById("myModalAustralia").getElementsByClassName("close")[0].addEventListener("click", function() {
    closeModal("myModalAustralia");
});

// Close the modal when the background is clicked
window.onclick = function(event) {
    if (event.target.classList.contains("modal")) {
        closeModal("myModal");
        closeModal("myModalSingapore");
        closeModal("myModalSwitzerland");
        closeModal("myModalAustralia");
    }
}
    

