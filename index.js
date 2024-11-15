let currentFloor = 1;
const totalFloors = 7;
const liftContainerHeight = 400;
let queue = [];
let isMoving = false;

function callLift(floor) {
    if (!queue.includes(floor)) {
        queue.push(floor);
    }
    processQueue();
}

async function processQueue() {
    if (isMoving || queue.length === 0) return;
    isMoving = true;

    const lift = document.getElementById('lift');
    const targetFloor = queue.shift();
    const floorHeight = liftContainerHeight / totalFloors;
    const liftPosition = (targetFloor - 1) * floorHeight;

    lift.style.bottom = `${liftPosition}px`;
    lift.textContent = targetFloor;

    await new Promise(resolve => setTimeout(resolve, 3000));

    currentFloor = targetFloor;

    await new Promise(resolve => setTimeout(resolve, 2000));

    isMoving = false;
    processQueue();
}
