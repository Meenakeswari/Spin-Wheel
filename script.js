let container = document.querySelector('.container');
let btn = document.getElementById('spin');
let currentRotation = 0;
let segmentCount = 8; // Number of segments in the wheel
let segmentAngle = 360 / segmentCount; // Angle of each segment

btn.onclick = function() {
    // Calculate a new rotation
    let randomDegree = Math.ceil(Math.random() * 3600);
    let totalRotation = currentRotation + randomDegree;

    // Apply the new rotation
    container.style.transform = `rotate(${totalRotation}deg)`;
    currentRotation = totalRotation;
};

// Event listener for the end of the transition
container.addEventListener('transitionend', function() {
    // Calculate the final rotation angle
    let rotation = currentRotation % 360;

    // Ensure the rotation is a positive value
    if (rotation < 0) {
        rotation += 360;
    }

    // Calculate the segment where the arrow points
    let segmentNumber = Math.floor((360 - rotation + segmentAngle / 2) % 360 / segmentAngle) + 1;

    // Show different popup messages based on the segment number
    switch (segmentNumber) {
        case 1:
            Swal.fire({
                title: 'Wow!',
                text: `Your Lucky Number is @1.`,
                icon: 'success',
                confirmButtonText: 'Cool!'
            });
            break;
        case 2:
            Swal.fire({
                title: 'Wow',
                text: `Your Lucky Number is @2.`,
                icon: 'success',
                confirmButtonText: 'Cool!'
            });
            break;
        case 3:
            Swal.fire({
                title: 'Wow',
                text: `Your Lucky Number is @3.`,
                icon: 'success',
                confirmButtonText: 'Cool!'
            });
            break;
        case 4:
            Swal.fire({
                title: 'Wow',
                text: `Your Lucky Number is @4.`,
                icon: 'success',
                confirmButtonText: 'Cool!'
            });
            break;
        case 5:
            Swal.fire({
                title: 'Wow',
                text: `Your Lucky Number is @5.`,
                icon: 'success',
                confirmButtonText: 'Cool!'
            });
            break;
        case 6:
            Swal.fire({
                title: 'Wow',
                text: `Your Lucky Number is @6.`,
                icon: 'success',
                confirmButtonText: 'Cool!'
            });
            break;
        case 7:
            Swal.fire({
                title: 'Wow',
                text: `Your Lucky Number is @7.`,
                icon: 'success',
                confirmButtonText: 'Cool!'
            });
            break;
        case 8:
            Swal.fire({
                title: 'Wow',
                text: `Your Lucky Number is @8.`,
                icon: 'success',
                confirmButtonText: 'Cool!'
            });
            break;
        default:
            Swal.fire({
                title: 'Unexpected!',
                text: `The wheel has stopped at an unexpected number.`,
                icon: 'question',
                confirmButtonText: 'Weird...'
            });
            break;
    }
});
