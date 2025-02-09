// const openButton = document.querySelector('[data-open-modal]')
// const closeButton = document.querySelector('[data-close-modal]')
// const modal = document.querySelector('[data-modal]')
// console.log(modal)
// openButton.addEventListener('click', () =>{
//     modal.showModal()
// })

// closeButton.addEventListener('click', () => {
//     modal.close()
// })
// const dialogBox = document.querySelector('dialog');

const eventDivs = document.querySelectorAll('.event'); // Select all event divs
const closeButton = document.querySelector('[data-close-modal]');
const modal = document.querySelector('[data-modal]');
const modalContent = document.getElementById('modal-content');
const modalHeading = document.getElementById('modal-heading');

// Function to fetch and show event details
function openModal(event) {
    const eventId = event.target.getAttribute('data-id'); // Get event's unique ID

    fetch('eventData.json') // Fetch the JSON data
        .then(response => response.json())
        .then(data => {
            const eventData = data.find(event => event.id == eventId); // Find event by ID

            if (eventData) {
                // Clear existing title before adding a new one
                modalHeading.innerHTML = `<h2>${eventData.title}</h2><button data-close-modal>&times;</button>`;

                // Fill modal with event details
                modalContent.innerHTML = `
                    <div class="event-details">
                        <p><strong>Date:</strong> ${eventData.date}</p>
                        <p><strong>Description:</strong> ${eventData.description || "No description available."}</p>
                        <p><strong>Rules:</strong></p>
                        <ul>${eventData.rules.map(rule => `<li>${rule}</li>`).join('')}</ul>
                        <p><strong>Cost:</strong> ${eventData.cost}</p>
                        <p><strong>Contact:</strong> ${eventData.contact}</p>
                    </div>
                `;

                modal.showModal(); // Open modal

                // Reattach close button event since we replaced modalHeading
                document.querySelector('[data-close-modal]').addEventListener('click', () => {
                    modal.close();
                });

            } else {
                console.error(`No event found with ID ${eventId}`);
            }
        })
        .catch(error => console.error("Error fetching event data:", error));
}

// Attach click event to all event divs
eventDivs.forEach(div => {
    div.addEventListener('click', openModal);
});

// Close modal on button click (initial close button)
// closeButton.addEventListener('click', () => {
//     modal.close();
// });
