// Function to toggle visibility of services list
function toggleServices() {
    const servicesList = document.querySelector('.services ul');
    servicesList.classList.toggle('hidden');
}

// Attach click event to the "Toggle Services" button
const toggleButton = document.getElementById('toggleServices');
toggleButton.addEventListener('click', toggleServices);
