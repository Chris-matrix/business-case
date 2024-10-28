// Global array to store sensors
let sensors = [];

// Function to show a specific section and hide others
function showSection(sectionId) {
    document.querySelectorAll('section, form').forEach(el => el.classList.add('hidden'));
    document.getElementById(sectionId).classList.remove('hidden');
}

// Function to handle the sign-up form submission
function handleSignup(event) {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Here you would typically send this data to a server for registration
    // For this example, we'll just simulate a successful signup
    console.log(`User signed up: ${username}`);

    // Show the homepage after successful signup
    showSection('homepage');
}

// Function to handle logout
function logout() {
    // Here you would typically clear session data
    // For this example, we'll just show the signup form again
    showSection('signupForm');
}

// Function to add a new sensor
function addSensor() {
    const number = document.getElementById('sensorNumber').value;
    const type = document.getElementById('sensorType').value;
    const building = document.getElementById('sensorBuilding').value;
    const floor = document.getElementById('sensorFloor').value;
    const room = document.getElementById('sensorRoom').value;
    const status = 'off'; // Default status is off
    const delay = document.getElementById('delayTime').value;

    if (!number || !type || !building || !floor || !room || !delay) {
        alert("Please fill in all fields!");
        return;
    }

    const sensor = { number, type, building, floor, room, status, delay };
    sensors.push(sensor);
    updateSensorList();
}

// Function to update the list of sensors displayed on the page
function updateSensorList() {
    const sensorList = document.getElementById('sensors');
    sensorList.innerHTML = '';
    sensors.forEach(sensor => {
        const li = document.createElement('li');
        li.textContent = `Sensor ${sensor.number}: ${sensor.type} (${sensor.status}) - Building: ${sensor.building}, Floor: ${sensor.floor}, Room: ${sensor.room} (Delay: ${sensor.delay}s)`;
        sensorList.appendChild(li);
    });
}

// Function to simulate an alarm
function simulateAlarm() {
    if (sensors.length === 0) {
        alert("No sensors configured!");
        return;
    }

    const randomSensor = sensors[Math.floor(Math.random() * sensors.length)];
    randomSensor.status = 'on';
    const alarmInfo = document.getElementById('alarmInfo');
    alarmInfo.textContent = `ALARM: ${randomSensor.type.toUpperCase()} detected by Sensor ${randomSensor.number} in Building: ${randomSensor.building}, Floor: ${randomSensor.floor}, Room: ${randomSensor.room}!`;

    console.log(`Alarm information sent: ${randomSensor.type} alarm from Sensor ${randomSensor.number}`);
    updateSensorList();
}

// Add event listeners when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the signup form
    document.getElementById('signupForm').addEventListener('submit', handleSignup);

    // Initially show the signup form
    showSection('signupForm');
});