export interface Project {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  hardware: string[];
  status: string;
  image: string;
  github: string;
  live?: string;
}

export const projects: Project[] = [
  {
    title: 'Smart Home Automation System',
    description: 'Developed an ESP32-based IoT home automation system capable of controlling household appliances remotely through a mobile application.',
    technologies: ['ESP32', 'Relay Module', 'WiFi', 'Blynk'],
    features: ['Remote Appliance Control', 'IoT', 'Mobile App', 'Automation'],
    hardware: ['ESP32', 'Relay Module', 'AC Load', 'Breadboard'],
    status: 'Live Prototype',
    image: '/project1.jpg',
    github: 'https://github.com/kishore-robotics/smart-home-automation',
    live: '#',
  },
  {
    title: 'Smart Irrigation System',
    description: 'Developed an IoT irrigation system using ESP32 and soil moisture sensors for automatic watering in field environments.',
    technologies: ['ESP32', 'Relay', 'Pump', 'Soil Moisture Sensor'],
    features: ['Auto Watering', 'Soil Monitoring', 'Remote Alerts', 'Low Power'],
    hardware: ['ESP32', 'Relay', 'Water Pump', 'Soil Sensor'],
    status: 'Field Tested',
    image: '/project2.jpg',
    github: 'https://github.com/kishore-robotics/smart-irrigation',
    live: '#',
  },
  {
    title: 'Automatic Smart Dustbin',
    description: 'Touch-free smart dustbin using Arduino and ultrasonic sensing to improve sanitation in public and residential spaces.',
    technologies: ['Arduino UNO', 'Ultrasonic Sensor', 'Servo Motor'],
    features: ['Touch-free Operation', 'Obstacle Detection', 'Low Power', 'Reliable Actuation'],
    hardware: ['Arduino UNO', 'HC-SR04', 'Servo Motor', 'Plastic Container'],
    status: 'Prototype Ready',
    image: '/project3.jpg',
    github: 'https://github.com/kishore-robotics/smart-dustbin',
    live: '#',
  },
  {
    title: 'Obstacle Avoidance Robot',
    description: 'Autonomous robot capable of detecting and avoiding obstacles using ultrasonic sensing and motor control logic.',
    technologies: ['Arduino Nano', 'Ultrasonic Sensor', 'Motor Driver', 'Servo'],
    features: ['Autonomous Navigation', 'Obstacle Avoidance', 'Mobile Platform', 'Real-time Sensing'],
    hardware: ['Arduino Nano', 'HC-SR04', 'L298N Motor Driver', 'DC Motors'],
    status: 'Competition Ready',
    image: '/project4.jpg',
    github: 'https://github.com/kishore-robotics/obstacle-avoidance-robot',
    live: '#',
  },
  {
    title: 'Quadcopter Drone',
    description: 'Built a quadcopter with an APM flight controller to understand UAV architecture and flight stabilization systems.',
    technologies: ['APM Flight Controller', 'ESC', 'Brushless Motors', 'LiPo Battery'],
    features: ['Flight Stabilization', 'Remote Control', 'Payload Ready', 'Custom Frame'],
    hardware: ['APM Controller', 'ESCs', 'Brushless Motors', 'LiPo Battery'],
    status: 'Flight Tested',
    image: '/project5.jpg',
    github: 'https://github.com/kishore-robotics/quadcopter-drone',
    live: '#',
  },
  {
    title: 'Sign Language Translator Glove',
    description: 'Wearable glove using flex sensors to convert hand gestures into text output for communication assistance.',
    technologies: ['ESP32', 'Flex Sensors', 'LCD'],
    features: ['Gesture Translation', 'Wearable Interface', 'Text Output', 'Assistive Technology'],
    hardware: ['ESP32', 'Flex Sensors', 'LCD Display', 'Glove Frame'],
    status: 'Research Prototype',
    image: '/project6.jpg',
    github: 'https://github.com/kishore-robotics/sign-language-glove',
    live: '#',
  },
];
