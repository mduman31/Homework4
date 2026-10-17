<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MaryAnn's Galactic Hub</title>
    <link rel="stylesheet" href="style.css">
    <!-- Load custom JavaScript externally with defer for non-blocking rendering -->
    <script src="script.js" defer></script>
</head>
<body>

    <!-- Accessibility Skip Link -->
    <a href="#main-content" class="skip-link">Skip to main content</a>

    <div class="container">
        <header class="site-header">
            <p class="intro-text">Welcome To My Portfolio</p>
            <h1>Aloha!</h1>
            <p class="intro-text">By MaryAnn Duman</p>
            <div class="island-wave" aria-hidden="true"></div>
        </header>

        <main id="main-content" class="cards-grid">
            <!-- About Me Card -->
            <section class="card" aria-labelledby="about-heading">
                <h3 id="about-heading">About Me 🌺</h3>
                <p>Welcome to my space. <strong>"Ohana means family, and family means nobody gets left behind or forgotten."</strong> Here you will find my latest creations, projects, and designs inspired by things I love.</p>
            </section>

            <!-- Family Card -->
            <section class="card" aria-labelledby="family-heading">
                <h3 id="family-heading">👩‍👧‍👦 My Ohana</h3>
                <p>I am a mom to my own 6 kids: 4 girls (ages 14, 11, 8, and 5) and 2 boys (ages 6 and 2).</p>
                <p>I am also a fiancée and a stepmom to his 2 sons!</p>
            </section>

            <!-- Gaming & Hobbies Card -->
            <section class="card" aria-labelledby="gaming-heading">
                <h3 id="gaming-heading">🎮 Gaming & Hobbies</h3>
                <p>In my spare time, I love playing Fortnite on my PS5!</p>
                <a href="https://fortnitetracker.com" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   class="badge"
                   aria-label="View MaryAnn's Fortnite Stats on Fortnite Tracker, opens in a new tab">
                   View Fortnite Stats
                </a>
            </section>

            <!-- Career Goals Card -->
            <section class="card" aria-labelledby="career-heading">
                <h3 id="career-heading">💻 Galactic Career Goals</h3>
                <p>My dream job is <strong>Network Systems Administration & Engineering</strong>.</p>
            </section>

            <!-- Live Weather Card (Cleaned script out) -->
            <section class="card weather-card" aria-labelledby="weather-heading">
                <h3 id="weather-heading">Live Weather ⚡</h3>
                <p>New Castle, DE 19720</p>
                <div class="weather-widget-container">
                    <a class="weatherwidget-io" 
                       href="https://forecast7.com" 
                       data-label_1="NEW CASTLE" 
                       data-label_2="WEATHER" 
                       data-font="Helvetica" 
                       data-icons="Climacons Animated" 
                       data-mode="Current" 
                       data-theme="pure" 
                       data-basecolor="rgba(13, 32, 64, 0)" 
                       data-accent="rgba(247, 232, 255, 1)" 
                       data-textcolor="#d1e5f0"
                       aria-label="Live current weather tracking widget for New Castle, Delaware">
                       Loading local weather...
                    </a>
                </div>
            </section>
        </main>

        <footer>
            <p>&copy; 2026 MaryAnn Duman. All galactic rights reserved.</p>
        </footer>
    </div>

</body>
</html>
