/* General */
html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: 'Arial', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    background: #0F0F1C;
    color: #E4F9FF;
}

/* Camera Background */
.camera-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
    background: transparent;
}

#camera-stream {
    width: auto;
    height: auto;
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
    display: none;
}

/* Infinite Background (Fallback) */
.infinite-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 200%;
    background: linear-gradient(135deg, #0F0F1C, #1F1F3E, #0F0F1C);
    animation: scroll-background 20s linear infinite;
    z-index: -1;
}

@keyframes scroll-background {
    0% {
        transform: translateX(0) translateY(0);
    }
    100% {
        transform: translateX(-50%) translateY(-50%);
    }
}

/* Header */
header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 20px;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10;
}

/* Logo */
.logo {
    font-size: 3rem;
    color: silver;
    text-transform: uppercase;
    font-weight: bold;
    display: flex;
    gap: 5px;
    justify-content: center;
}

/* Wave Effect */
.wave {
    animation: wave 3s infinite ease-in-out;
    text-shadow: 2px 2px 5px rgba(192, 192, 192, 0.5), 0 0 10px rgba(255, 255, 255, 0.3);
}

.wave:nth-child(1) { animation-delay: 0s; }
.wave:nth-child(2) { animation-delay: 0.3s; }
.wave:nth-child(3) { animation-delay: 0.6s; }
.wave:nth-child(4) { animation-delay: 0.9s; }
.wave:nth-child(5) { animation-delay: 1.2s; }
.wave:nth-child(6) { animation-delay: 1.5s; }
.wave:nth-child(7) { animation-delay: 1.8s; }
.wave:nth-child(8) { animation-delay: 2.1s; }
.wave:nth-child(9) { animation-delay: 2.4s; }

@keyframes wave {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.5);
    }
}

/* Fullscreen Button */
.fullscreen-btn {
    padding: 10px 20px;
    background: linear-gradient(145deg, #00C8FF, #1F1F3E);
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 1rem;
    box-shadow: 0 5px 10px rgba(0, 200, 255, 0.5);
    perspective: 1000px;
    transition: transform 0.5s, box-shadow 0.2s;
}

.fullscreen-btn:hover {
    transform: rotateY(360deg) scale(1.1);
    box-shadow: 0 10px 20px rgba(0, 200, 255, 0.8);
}

/* Main Content */
.main-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin: 20px;
    z-index: 1;
}

.section {
    width: 200px;
    height: 200px;
    background: rgba(31, 31, 62, 0.8);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    transition: transform 0.3s;
    cursor: pointer;
}

.section:hover {
    transform: scale(1.1);
    box-shadow: 0 10px 30px rgba(106, 13, 173, 0.8);
}

/* Footer */
footer {
    width: 100%;
    text-align: center;
    padding: 10px;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    z-index: 10;
}

/* Responsive Design */
@media (max-width: 768px) {
    .logo {
        font-size: 2.5rem;
    }

    .main-container {
        flex-direction: column;
        align-items: center;
    }

    .section {
        width: 150px;
        height: 150px;
    }

    .fullscreen-btn {
        font-size: 0.9rem;
    }
}

@media (max-width: 480px) {
    .logo {
        font-size: 2rem;
    }

    .fullscreen-btn {
        font-size: 0.8rem;
    }
}
