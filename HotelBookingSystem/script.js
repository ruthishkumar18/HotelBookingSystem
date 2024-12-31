document.addEventListener("DOMContentLoaded", function() {
    // Sample data for rooms
    const rooms = [
        { type: "Single Room", price: "$50", description: "A cozy single room with a queen-sized bed." },
        { type: "Double Room", price: "$100", description: "A spacious room with a double bed and extra amenities." },
        { type: "Suite", price: "$200", description: "A luxurious suite with all modern comforts and a king-sized bed." },
    ];

    // Display available rooms
    const roomsList = document.getElementById("roomsList");
    rooms.forEach(room => {
        const roomDiv = document.createElement("div");
        roomDiv.classList.add("room");
        roomDiv.innerHTML = `
            <h3>${room.type}</h3>
            <p>Price: ${room.price}</p>
            <p>${room.description}</p>
        `;
        roomsList.appendChild(roomDiv);
    });

    // Handle booking form submission
    const bookingForm = document.getElementById("bookingForm");
    bookingForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const checkin = document.getElementById("checkin").value;
        const checkout = document.getElementById("checkout").value;
        const roomType = document.getElementById("rooms").value;

        // You can add logic to save the booking or process it further here.

        alert(`Booking Successful!\nName: ${name}\nRoom Type: ${roomType}\nCheck-in: ${checkin}\nCheck-out: ${checkout}`);
    });
});
