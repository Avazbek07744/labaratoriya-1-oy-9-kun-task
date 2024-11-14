let currentFloor = 1;
const totalFloors = 7;
const liftContainerHeight = 400;
let queue = [];

function moveLift(targetFloor) {
    if (queue.length === 0 || queue[queue.length - 1] !== targetFloor) {
        queue.push(targetFloor);
    }
    processQueue();
}

async function processQueue() {
    if (queue.length === 0) return;

    const targetFloor = queue[0];
    const lift = document.getElementById('lift');
    const floorHeight = liftContainerHeight / totalFloors;
    const liftPosition = (targetFloor - 1) * floorHeight;

    lift.style.bottom = `${liftPosition}px`;
    currentFloor = targetFloor;

    for (let i = 1; i <= totalFloors; i++) {
        const floorIndicator = document.getElementById(`liftFloor-${i}`);
        if (i === currentFloor) {
            floorIndicator.style.color = "#00ff00"; 
        } else {
            floorIndicator.style.color = "white"; 
        }
    }

    await new Promise(resolve => setTimeout(resolve, 2000));

    queue.shift();
    processQueue();
}
