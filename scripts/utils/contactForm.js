export default function displayModal() {
    const modal = document.querySelector("#contact_button");
	modal.style.display = "block";
}

export function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}
