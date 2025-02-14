const eventDivs = document.querySelectorAll('.activity');
const modal = document.querySelector('[data-modal]');
const modalContent = document.getElementById('modal-content');
const modalHeading = document.getElementById('modal-heading');


function openModal(event) {
    const activityDiv = event.target.closest('.activity');
    if (!activityDiv) return;

    const eventId = activityDiv.getAttribute('data-id');
    if (!eventId) return;

    fetch('./eventData.json') 
        .then(response => response.json())
        .then(data => {
            const eventData = data.find(event => event.id == eventId);

            if (eventData) {
                
                modalHeading.innerHTML = `<h2>${eventData.title}</h2><button id = 'btn-close' data-close-modal>&times;</button>`;

                
                modalContent.innerHTML = `
                    <div class="event-details">
                        <p><strong><span class = 'duration'>◷</span></strong>${eventData.date}</p>
                        <p><strong></strong> ${eventData.description || "No description available."}</p>
                        <p><strong>Rules:</strong></p>
                        <ul>${eventData.rules.map(rule => `<li>${rule}</li>`).join('')}</ul>
                        <p><strong>Cost:</strong><span class = 'price'> ${eventData.cost}</span></p>
                        <p><strong>Contact:</strong> ${eventData.contact}</p>
                    </div>
                `;

                modal.showModal(); 

                
                document.querySelector('[data-close-modal]').addEventListener('click', () => {
                    modal.close();
                });

            } else {
                console.error(`No event found with ID ${eventId}`);
            }
        })
        .catch(error => console.error("Error fetching event data:", error));
}


eventDivs.forEach(div => {
    div.addEventListener('click', openModal);
});
