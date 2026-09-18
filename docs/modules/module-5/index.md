---
layout: default
title: "Module 5: Collect Census Data and Query Your Database - IA 340"
---

# Module 5: Collect Census Data and Query Your Database

<nav style="display: flex; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem; border-bottom: 1px solid #eaecef; padding-bottom: 1rem; font-size: 0.95em;">
  <a href="{{ site.baseurl }}/" style="text-decoration: none; color: #57606a;">Home</a>
  <a href="{{ site.baseurl }}/syllabus/" style="text-decoration: none; color: #57606a;">Syllabus</a>
  <a href="{{ site.baseurl }}/modules/module-1/" style="text-decoration: none; color: #57606a;">Module 1</a>
  <a href="{{ site.baseurl }}/assignments/github-account-verification/" style="text-decoration: none; color: #57606a;">Lab 1</a>
  <a href="{{ site.baseurl }}/modules/module-2/" style="text-decoration: none; color: #57606a;">Module 2</a>
  <a href="{{ site.baseurl }}/assignments/lab-2/" style="text-decoration: none; color: #57606a;">Lab 2</a>
  <a href="{{ site.baseurl }}/modules/module-3/" style="text-decoration: none; color: #57606a;">Module 3</a>
  <a href="{{ site.baseurl }}/assignments/lab-3/" style="text-decoration: none; color: #57606a;">Lab 3</a>
  <a href="{{ site.baseurl }}/modules/module-3/google-cloud-coupon/" style="text-decoration: none; color: #57606a;">Cloud Credit Setup</a>
  <a href="{{ site.baseurl }}/modules/module-4/" style="text-decoration: none; color: #57606a;">Module 4</a>
  <a href="{{ site.baseurl }}/assignments/lab-4/" style="text-decoration: none; color: #57606a;">Lab 4</a>
  <a href="{{ site.baseurl }}/modules/module-5/" style="text-decoration: none; font-weight: 600; color: #0969da;">Module 5</a>
  <a href="{{ site.baseurl }}/assignments/lab-5/" style="text-decoration: none; color: #57606a;">Lab 5</a>
</nav>

<style>
/* Presentation Slide Deck Styles */
.deck-container {
  max-width: 1280px;
  margin: 1rem auto 2.5rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  color: #1f2328;
}

.deck-nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1f2328;
  color: #f0f6fc;
  padding: 0.6rem 1.2rem;
  border-radius: 10px 10px 0 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  user-select: none;
}

.deck-title-tag {
  font-size: 0.92rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.deck-controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.deck-btn {
  background: #32383f;
  color: #f0f6fc;
  border: 1px solid #444c56;
  border-radius: 6px;
  padding: 0.35rem 0.8rem;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}

.deck-btn:hover:not(:disabled) {
  background: #0969da;
  border-color: #0969da;
  color: #ffffff;
}

.deck-btn:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.deck-progress-track {
  width: 100%;
  height: 4px;
  background: #2d333b;
}

.deck-progress-fill {
  height: 100%;
  background: #2da44e;
  width: 1.72%;
  transition: width 0.25s ease;
}

.deck-stage {
  background: #ffffff;
  border: 1px solid #d0d7de;
  border-top: none;
  border-radius: 0 0 10px 10px;
  height: 780px;
  min-height: 720px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.06);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.slide {
  display: none;
  height: 100%;
  padding: 1.8rem 2.5rem;
  box-sizing: border-box;
  overflow-y: auto;
  flex-direction: column;
  justify-content: flex-start;
  animation: slideFadeIn 0.2s ease-out;
}

.slide.active {
  display: flex;
}

.slide.slide-interactive {
  padding: 1rem 1.5rem;
}

.slide.slide-interactive h2 {
  margin-bottom: 0.4rem;
}

@keyframes slideFadeIn {
  from { opacity: 0.2; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}

.slide-badge {
  display: inline-block;
  align-self: flex-start;
  background: #ddf4ff;
  color: #0969da;
  border: 1px solid rgba(84, 174, 255, 0.4);
  padding: 0.2rem 0.65rem;
  border-radius: 2em;
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.slide h2 {
  margin-top: 0;
  margin-bottom: 0.75rem;
  color: #1f2328;
  font-size: 1.45rem;
  border-bottom: 2px solid #eaeef2;
  padding-bottom: 0.35rem;
}

.slide h3 {
  margin-top: 0.6rem;
  margin-bottom: 0.3rem;
  color: #1f2328;
  font-size: 1.15rem;
}

.slide-center-box {
  max-width: 900px;
  margin: auto;
  text-align: center;
}

.slide-main-title {
  font-size: 2.4rem;
  margin: 0.4rem 0 0.6rem;
  color: #0969da;
}

.slide-subtitle {
  font-size: 1.2rem;
  color: #57606a;
  margin: 0 auto 1.4rem;
}

.slide-card-lead {
  background: #f6f8fa;
  border: 1px solid #d0d7de;
  padding: 1.5rem 2rem;
  border-radius: 10px;
  text-align: left;
  font-size: 1.05rem;
  line-height: 1.65;
}

.slide-text-large {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  font-size: 0.98rem;
  line-height: 1.55;
  color: #24292f;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.slide-text-large p {
  margin: 0.35rem 0;
}

.slide-text-large pre {
  background: #f6f8fa;
  border: 1px solid #d0d7de;
  border-radius: 6px;
  padding: 0.7rem 1rem;
  overflow-x: auto;
  font-size: 0.92em;
  line-height: 1.4;
  margin: 0.4rem 0;
}

.slide-text-large code {
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace;
  font-size: 0.92em;
  background: rgba(175, 184, 193, 0.2);
  padding: 0.15em 0.35em;
  border-radius: 4px;
}

.slide-text-large pre code {
  background: transparent;
  padding: 0;
  border-radius: 0;
}

.slide-text-large table {
  width: 100%;
  border-collapse: collapse;
  margin: 0.5rem 0;
  font-size: 0.92rem;
}

.slide-text-large th, .slide-text-large td {
  padding: 0.4rem 0.65rem;
  border: 1px solid #d0d7de;
  text-align: left;
}

.slide-text-large th {
  background: #f6f8fa;
  font-weight: 600;
}

.slide-text-large blockquote {
  margin: 0.4rem 0;
  padding: 0.35rem 0.9rem;
  color: #57606a;
  border-left: 0.25em solid #d0d7de;
  background: #f6f8fa;
  border-radius: 0 6px 6px 0;
}

.slide-media-box {
  text-align: center;
  background: #f6f8fa;
  border: 1px solid #d0d7de;
  border-radius: 8px;
  padding: 0.4rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.03);
  margin: 0.4rem 0;
}

.slide-media-box img {
  max-width: 100%;
  max-height: 420px;
  height: auto;
  border-radius: 4px;
  display: block;
  margin: 0 auto;
}

.iframe-container {
  width: 100%;
  flex: 1;
  min-height: 600px;
  height: calc(100% - 60px);
  display: flex;
  flex-direction: column;
  margin: 0.2rem 0;
}

.iframe-container iframe {
  width: 100%;
  flex: 1;
  min-height: 580px;
  height: 100%;
  border: 1px solid #d0d7de;
  border-radius: 8px;
  background: #ffffff;
}

.deck-btn-primary {
  background: #0969da;
  color: #ffffff;
  border: 1px solid #0969da;
  border-radius: 8px;
  padding: 0.65rem 1.6rem;
  font-size: 1.05rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s ease;
}

.deck-btn-primary:hover {
  background: #0858b9;
}

/* Fullscreen mode */
#lectureDeck:fullscreen,
#lectureDeck:-webkit-full-screen,
.deck-container:fullscreen,
.deck-container:-webkit-full-screen {
  max-width: none !important;
  width: 100vw !important;
  height: 100vh !important;
  margin: 0 !important;
  border-radius: 0 !important;
  display: flex;
  flex-direction: column;
}

#lectureDeck:fullscreen .deck-stage,
#lectureDeck:-webkit-full-screen .deck-stage,
.deck-container:fullscreen .deck-stage,
.deck-container:-webkit-full-screen .deck-stage {
  height: calc(100vh - 48px) !important;
  min-height: calc(100vh - 48px) !important;
  flex: 1;
  border-radius: 0 !important;
  border: none !important;
  overflow: hidden;
}

#lectureDeck:fullscreen .slide.active,
#lectureDeck:-webkit-full-screen .slide.active,
.deck-container:fullscreen .slide.active,
.deck-container:-webkit-full-screen .slide.active {
  padding: 1.2rem 2.5rem !important;
  font-size: 1.05rem !important;
  line-height: 1.45 !important;
}

#lectureDeck:fullscreen .slide h2,
#lectureDeck:-webkit-full-screen .slide h2,
.deck-container:fullscreen .slide h2,
.deck-container:-webkit-full-screen .slide h2 {
  font-size: 1.6rem !important;
  margin-bottom: 0.4rem !important;
}

#lectureDeck:fullscreen .slide-media-box img,
#lectureDeck:-webkit-full-screen .slide-media-box img,
.deck-container:fullscreen .slide-media-box img,
.deck-container:-webkit-full-screen .slide-media-box img {
  max-height: 44vh !important;
}

@media (max-width: 860px) {
  .deck-stage { height: auto; min-height: 600px; }
  .slide { height: auto; overflow-y: auto; padding: 1.2rem 1rem; }
  .slide.slide-interactive { padding: 0.8rem 0.6rem; }
  .slide-media-box img { max-height: 250px; }
  .iframe-container { min-height: 560px; height: 600px; }
  .iframe-container iframe { min-height: 540px; height: 100%; width: 100%; }
}
</style>


<div class="deck-container" id="lectureDeck">
  <div class="deck-nav-bar">
    <div class="deck-title-tag">
      <span>📊 IA 340 Week 5 Lecture</span>
      <span style="opacity: 0.4;">|</span>
      <span id="slideCounter">Slide 1</span>
    </div>
    <div class="deck-controls">
      <button class="deck-btn" id="prevBtn" onclick="changeSlide(-1)" title="Previous (← / PageUp)">◀ Prev</button>
      <button class="deck-btn" id="nextBtn" onclick="changeSlide(1)" title="Next (→ / Space / PageDown)">Next ▶</button>
      <button class="deck-btn" onclick="toggleFullScreen()" title="Fullscreen Mode">⛶ Fullscreen</button>
    </div>
  </div>
  <div class="deck-progress-track">
    <div class="deck-progress-fill" id="progressBar"></div>
  </div>
  <div class="deck-stage">

    <!-- SLIDE 1: Title Slide -->
    <div class="slide active" data-slide="1">
      <div class="slide-center-box">
        <h1 class="slide-main-title">Collect Census Data &amp; Query Your Database</h1>
        <p class="slide-subtitle">Census API &rarr; Google Colab &rarr; Cloud SQL &rarr; Cloud SQL Studio Querying</p>
        <div class="slide-card-lead">
          <p style="margin-top: 0;"><strong>IA 340 &mdash; Data Mining, Modeling, and Knowledge Discovery</strong></p>
          <p>Dr. Xuebin Wei &bull; September 21&ndash;25, 2026</p>
          <div style="display: flex; justify-content: space-around; margin: 1.2rem 0; gap: 1rem; flex-wrap: wrap;">
            <div style="background: #ffffff; border: 1px solid #d0d7de; border-left: 4px solid #0969da; border-radius: 6px; padding: 0.9rem 1.2rem; flex: 1; min-width: 260px; text-align: left;">
              <strong style="color: #0969da; font-size: 1.05rem;">Monday Focus:</strong>
              <div style="font-size: 0.92em; color: #57606a; margin-top: 0.4rem; line-height: 1.5;">
                Census API Key &bull; Colab Secrets &bull; Database Connection &bull; County Directory (133 names) &bull; ACS 1-year Population &bull; Median Household Income &bull; <strong>8 Runnable Cells</strong>.
              </div>
            </div>
            <div style="background: #ffffff; border: 1px solid #d0d7de; border-left: 4px solid #1a7f37; border-radius: 6px; padding: 0.9rem 1.2rem; flex: 1; min-width: 260px; text-align: left;">
              <strong style="color: #1a7f37; font-size: 1.05rem;">Wednesday Focus:</strong>
              <div style="font-size: 0.92em; color: #57606a; margin-top: 0.4rem; line-height: 1.5;">
                <strong>Cloud SQL Studio SQL</strong> &bull; SELECT &bull; WHERE &bull; ORDER BY &bull; LIMIT &bull; LIKE &bull; Aggregates (COUNT, SUM, AVG) &bull; GROUP BY &bull; HAVING.
              </div>
            </div>
          </div>
          <div style="background: #ddf4ff; border: 1px solid rgba(84, 174, 255, 0.4); border-radius: 6px; padding: 0.6rem 1rem; font-size: 0.92rem; color: #0969da; margin-top: 0.5rem;">
            <strong>Course Guidelines:</strong> No Gemini this week. Read, run, and understand the workflow. Complete county catalogue is kept separate from annual observation coverage.
          </div>
        </div>
        <div style="margin-top: 1.5rem;">
          <button class="deck-btn-primary" onclick="changeSlide(1)">Start Lecture ▶</button>
        </div>
      </div>
    </div>


    <!-- SLIDE 2: From Census data to your database -->
    <div class="slide" data-slide="2">
      <span class="slide-badge">Overview</span>
      <h2>From Census data to your database</h2>
      <div class="slide-text-large">
        <div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-5/data-journey.svg" alt="Census datasets are exposed through an API. Colab requests data and can read or write your PostgreSQL database. Cloud SQL Studio can also read or write that same database." /></div>
        <p><strong>Census hosts the source data. The Census API provides access to it.</strong> Colab requests the data and sends SQL to your existing PostgreSQL database.</p>
        <p><strong>Both Colab and Cloud SQL Studio can run SELECT and INSERT</strong> when the database login has permission. Neither is limited to one operation. Studio is the browser interface for the same Cloud SQL database, not another database.</p>
        <p><strong>This week's emphasis:</strong> collect and insert in Colab on Monday; query and summarize in Studio on Wednesday.</p>
      </div>
    </div>


    <!-- SLIDE 3: Monday Workflow — 8 Runnable Cells -->
    <div class="slide" data-slide="3">
      <span class="slide-badge">Monday Plan</span>
      <h2>Monday — Collect several years and save them</h2>
      <div class="slide-text-large">
        <p>Monday's Colab notebook (<code>lab5.ipynb</code>) has <strong>exactly 8 runnable code cells</strong>, numbered 1&ndash;8:</p>
        <table style="margin-top: 0.8rem;">
          <thead>
            <tr><th style="width: 15%;">Cell</th><th style="width: 35%;">Action</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Cell 1</strong></td><td>Install packages</td><td><code>%pip -q install census us psycopg2-binary</code></td></tr>
            <tr><td><strong>Cell 2</strong></td><td>Database connection</td><td>Retrieve Secrets and initialize <code>psycopg2</code> connection and cursor</td></tr>
            <tr><td><strong>Cell 3</strong></td><td>Client &amp; Settings</td><td>Initialize Census client, select Virginia (<code>states.VA</code>), years (2015&ndash;2024), and <code>GEO</code></td></tr>
            <tr><td><strong>Cell 4</strong></td><td>County Directory</td><td>Fetch complete Virginia county/city directory via Decennial PL (133 names)</td></tr>
            <tr><td><strong>Cell 5</strong></td><td>Save County Names</td><td>Insert county identities into <code>name</code> table once (strip trailing state name)</td></tr>
            <tr><td><strong>Cell 6</strong></td><td>Population Loop</td><td>Collect ACS 1-year population (<code>B01003_001E</code>) across years and commit</td></tr>
            <tr><td><strong>Cell 7</strong></td><td>Income Loop</td><td>Collect ACS 1-year median household income (<code>B19013_001E</code>) across years and commit</td></tr>
            <tr><td><strong>Cell 8</strong></td><td>Cleanup</td><td>Close database cursor and connection sessions</td></tr>
          </tbody>
        </table>
        <p style="margin-top: 0.8rem; color: #57606a; font-size: 0.9em;"><em>Note: The separate INSERT demonstration is for conceptual reading and offline interaction, not an extra notebook code cell.</em></p>
      </div>
    </div>


    <!-- SLIDE 4: 01 — Get a Census API Key -->
    <div class="slide" data-slide="4">
      <span class="slide-badge">Step 01</span>
      <h2>01 — Get a Census API key before making a request</h2>
      <div class="slide-text-large">
        <p>An <strong>API (application programming interface)</strong> lets software request data or a service. You need <strong>your own free Census API key</strong> for Census data queries. It is not your database password.</p>
        <p><strong>Step 1 &mdash; Open the official registration page:</strong></p>
        <p><a href="https://api.census.gov/data/key_signup.html" target="_blank" rel="noopener noreferrer">https://api.census.gov/data/key_signup.html ↗</a></p>
        <p><strong>Step 2 &mdash; Complete the request form:</strong> Provide the requested name/organization and your email, as shown on the current form.</p>
        <div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-5/screenshots/Screenshot%202026-09-16%20101916.png" alt="Instructor screenshot of the Census API key request form." /></div>
        <p style="font-size: 0.9em; color: #57606a;"><em>Enter your own organization and email; the instructor details are examples, not values to copy.</em></p>
      </div>
    </div>


    <!-- SLIDE 5: 01 — Activate and Save in Colab Secrets -->
    <div class="slide" data-slide="5">
      <span class="slide-badge">Step 01</span>
      <h2>01 — Activate key and store in Colab Secrets</h2>
      <div class="slide-text-large">
        <p><strong>Step 3 &mdash; Open the Census email and follow the activation link.</strong></p>
        <ul>
          <li>Keep your key private.</li>
          <li>Request and activate it before Monday when possible; do not spend class waiting for the activation email.</li>
        </ul>
        <p><strong>Step 4 &mdash; Save it in Colab Secrets as <code>CENSUS_API_KEY</code>.</strong></p>
        <ul>
          <li>Enable <strong>Notebook access</strong> for this notebook.</li>
          <li><strong>Never paste the actual key into a notebook code cell or screenshot.</strong></li>
        </ul>
        <div style="background: #fff8df; border-left: 4px solid #9a6700; padding: 0.8rem 1.2rem; border-radius: 0 6px 6px 0; margin-top: 1rem;">
          <strong>Security Checkpoint:</strong> A key has been requested, activated, and saved in Secrets. We have not requested Census records yet.
        </div>
      </div>
    </div>


    <!-- SLIDE 6: 02 — Connect Colab to Existing Database -->
    <div class="slide" data-slide="6">
      <span class="slide-badge">Step 02</span>
      <h2>02 — Connect Colab to the database you already built</h2>
      <div class="slide-text-large">
        <div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-5/connection-details.svg" alt="Six connection settings: Public IP, port, database, username, password, and SSL." /></div>
        <p>Use your existing Week 4 Cloud SQL instance. The <strong>database</strong> is <code>postgres</code>, the <strong>schema</strong> is <code>public</code>, and the database username is <code>postgres</code>.</p>
        <p>Do not create another instance or state table. Port <code>5432</code> and <code>sslmode="require"</code> are fixed connection options.</p>
      </div>
    </div>


    <!-- SLIDE 7: 02 — Setup Colab Secrets -->
    <div class="slide" data-slide="7">
      <span class="slide-badge">Step 02</span>
      <h2>02 — Configure Colab Secrets</h2>
      <div class="slide-text-large">
        <p>Create a Colab notebook named <code>lab5.ipynb</code> in your own Drive. Open the <strong>key icon / Secrets</strong> panel, add the five secrets, and toggle <strong>Notebook access</strong>:</p>
        <table>
          <thead>
            <tr><th>Secret Name</th><th>Value Entered Privately</th></tr>
          </thead>
          <tbody>
            <tr><td><code>DB_HOST</code></td><td>Your instance's current Public IPv4 address (from Lab 4)</td></tr>
            <tr><td><code>DB_NAME</code></td><td><code>postgres</code></td></tr>
            <tr><td><code>DB_USER</code></td><td><code>postgres</code></td></tr>
            <tr><td><code>DB_PASSWORD</code></td><td>Your existing classroom database password (<code>IA340-data</code>)</td></tr>
            <tr><td><code>CENSUS_API_KEY</code></td><td>Your own activated Census API key</td></tr>
          </tbody>
        </table>
        <div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-5/screenshots/Screenshot%202026-09-16%20102608.png" alt="Colab Secrets names and Notebook access switches." /></div>
      </div>
    </div>


    <!-- SLIDE 8: Cell 1 — Install Packages -->
    <div class="slide" data-slide="8">
      <span class="slide-badge">Cell 1</span>
      <h2>Cell 1 &mdash; Install the three packages we need</h2>
      <div class="slide-text-large">
        <pre><code class="language-python">%pip -q install census us psycopg2-binary</code></pre>
        <div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-5/screenshots/Screenshot%202026-09-18%20141648.png" alt="Colab installation of census, us, and psycopg2-binary." /></div>
        <table>
          <thead>
            <tr><th>Package</th><th>Its Job</th></tr>
          </thead>
          <tbody>
            <tr><td><code>census</code></td><td>A Python wrapper that makes Census API requests</td></tr>
            <tr><td><code>us</code></td><td>State metadata: state names, abbreviations, and two-digit state FIPS codes</td></tr>
            <tr><td><code>psycopg2</code></td><td>The PostgreSQL database driver that connects Python to PostgreSQL</td></tr>
          </tbody>
        </table>
        <p style="font-size: 0.9em; color: #57606a;"><em>The package installed as <code>psycopg2-binary</code> is imported as <code>psycopg2</code>. Install one variant, not both.</em></p>
      </div>
    </div>


    <!-- SLIDE 9: Cell 2 — Create Connection and Cursor -->
    <div class="slide" data-slide="9">
      <span class="slide-badge">Cell 2</span>
      <h2>Cell 2 &mdash; Create a connection and a cursor</h2>
      <div class="slide-text-large">
        <pre><code class="language-python">import psycopg2
from google.colab import userdata

conn = psycopg2.connect(
    host=userdata.get("DB_HOST"),
    port=5432,
    dbname=userdata.get("DB_NAME"),
    user=userdata.get("DB_USER"),
    password=userdata.get("DB_PASSWORD"),
    sslmode="require",
    connect_timeout=10
)
cur = conn.cursor()</code></pre>
        <div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-5/screenshots/Screenshot%202026-09-18%20141730.png" alt="Colab connection and cursor created using Colab Secrets." /></div>
        <p><code>connect_timeout=10</code> prevents Colab from hanging indefinitely if your Cloud SQL instance is stopped or IP has changed.</p>
      </div>
    </div>


    <!-- SLIDE 10: 03 — Connection, Cursor, Execute, and Commit -->
    <div class="slide" data-slide="10">
      <span class="slide-badge">Step 03</span>
      <h2>03 &mdash; Connection, cursor, execute, and commit</h2>
      <div class="slide-text-large">
        <div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-5/sql-and-storage.svg" alt="The connection owns the database session and transaction. Its cursor sends SQL through execute. The connection commits the changes." /></div>
        <table>
          <thead>
            <tr><th>Name</th><th>What It Is</th><th>What We Use It For</th></tr>
          </thead>
          <tbody>
            <tr><td><code>conn</code></td><td><strong>Connection object</strong> (one open session)</td><td>Create cursors, commit a transaction, close connection</td></tr>
            <tr><td><code>cur</code></td><td><strong>Cursor object</strong> (<code>conn.cursor()</code>)</td><td>Send SQL via <code>cur.execute(sql)</code>; retrieve query results</td></tr>
            <tr><td><code>sql</code></td><td>Python string containing SQL</td><td>The statement PostgreSQL executes</td></tr>
            <tr><td><code>cur.execute(sql)</code></td><td>Method call on cursor</td><td>Execute the statement through this connection</td></tr>
            <tr><td><code>conn.commit()</code></td><td>Method call on connection</td><td>Finalize the transaction and persist its changes</td></tr>
          </tbody>
        </table>
        <p>A cursor is <strong>not the mouse pointer</strong> or a second database. The connection controls the transaction.</p>
      </div>
    </div>


    <!-- SLIDE 11: 03 — Read an INSERT & Execute/Commit -->
    <div class="slide" data-slide="11">
      <span class="slide-badge">Step 03</span>
      <h2>03 &mdash; Execute then commit (Demonstration only)</h2>
      <div class="slide-text-large">
        <p><strong>Do not run this illustrative INSERT in Studio or copy it into a Colab code cell.</strong></p>
        <pre><code class="language-python">sql = """INSERT INTO public.name (fips, name)
         VALUES ('51660', 'Harrisonburg city');"""
cur.execute(sql)
conn.commit()</code></pre>
        <div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-5/insert-commit.svg" alt="Execute performs the INSERT in the current transaction; commit finalizes it for other connections." /></div>
        <p><strong>Think: execute = perform the change; commit = finalize the transaction.</strong> In this Colab connection, autocommit is off. A separate connection cannot see the inserted rows until <code>conn.commit()</code> is called.</p>
      </div>
    </div>


    <!-- SLIDE 12: 03 — Interactive Demo: Execute then Commit -->
    <div class="slide slide-interactive" data-slide="12">
      <span class="slide-badge">Interactive 01</span>
      <h2>03 &mdash; Interactive: Execute then Commit</h2>
      <div class="slide-text-large">
        <div class="iframe-container"><iframe src="{{ site.baseurl }}/assets/week-5/insert-row.html" title="Connection and cursor: execute then commit" loading="lazy"></iframe></div>
        <p style="margin: 0.3rem 0; font-size: 0.9em; color: #57606a;">
          Interactive demonstration: Execute then Commit | <a href="{{ site.baseurl }}/assets/week-5/insert-row.html" target="_blank">Open demonstration separately ↗</a>
        </p>
      </div>
    </div>


    <!-- SLIDE 13: 04 — Read a Census API Request -->
    <div class="slide" data-slide="13">
      <span class="slide-badge">Step 04</span>
      <h2>04 &mdash; Read a Census API request</h2>
      <div class="slide-text-large">
        <p><strong>One URL, six parts</strong> &mdash; line breaks below are for teaching; the actual request is one continuous URL:</p>
        <div style="font: 17px/1.7 ui-monospace, Consolas, monospace; padding: 14px; border: 1px solid #d0d7de; border-radius: 8px; background: #fafbfc; margin: 0.4rem 0;">
          <span style="color: #243b53;">https://api.census.gov/data/</span><span style="color: #8250df; font-weight: 700;">2024</span><span style="color: #0969da; font-weight: 700;">/acs/acs1</span><br>
          <span style="color: #116329; font-weight: 700;">?get=NAME,B01003_001E,B19013_001E</span><br>
          <span style="color: #9a4d00; font-weight: 700;">&amp;for=county:*</span><br>
          <span style="color: #953800; font-weight: 700;">&amp;in=state:51</span><br>
          <span style="color: #57606a;">&amp;key=YOUR_CENSUS_API_KEY</span>
        </div>
        <div style="display: flex; gap: 8px 18px; flex-wrap: wrap; margin: 0.5rem 0; font-size: 0.92rem;">
          <span style="color: #8250df;"><strong>1 &bull; 2024:</strong> Survey year</span>
          <span style="color: #0969da;"><strong>2 &bull; acs/acs1:</strong> Data product</span>
          <span style="color: #116329;"><strong>3 &bull; get:</strong> Requested fields</span>
          <span style="color: #9a4d00;"><strong>4 &bull; for:</strong> County units</span>
          <span style="color: #953800;"><strong>5 &bull; in:</strong> Virginia (state 51)</span>
          <span style="color: #57606a;"><strong>6 &bull; key:</strong> API credential</span>
        </div>
        <p><code>county:*</code> asks for available county-level records in Virginia. It does not override publication thresholds.</p>
      </div>
    </div>


    <!-- SLIDE 14: 05 — County Identities vs Annual Observations -->
    <div class="slide" data-slide="14">
      <span class="slide-badge">Step 05</span>
      <h2>05 &mdash; County identities and annual observations</h2>
      <div class="slide-text-large">
        <p><strong>Population and income both use ACS 1-year (<code>c.acs1</code>) across 2015&ndash;2024.</strong></p>
        <table>
          <thead>
            <tr><th>Variable</th><th>Meaning</th><th>Unit</th></tr>
          </thead>
          <tbody>
            <tr><td><code>B01003_001E</code> &rarr; <code>population</code></td><td>Estimated total population of that area in the survey year</td><td>People</td></tr>
            <tr><td><code>B19013_001E</code> &rarr; <code>income</code></td><td>Estimated median household income in the past 12 months</td><td>Survey-year dollars</td></tr>
          </tbody>
        </table>
        <div style="background: #ddf4ff; border-left: 4px solid #0969da; padding: 0.7rem 1rem; border-radius: 0 6px 6px 0; margin-top: 0.6rem;">
          <strong>Why not all 133 counties each year?</strong> Standard ACS 1-year Detailed Tables generally cover geographic units with a population of <strong>65,000 or more</strong>.<br>
          Absence from an annual observation table does <strong>not</strong> mean the county does not exist or has zero population! We keep all 133 identities in <code>name</code>.
        </div>
      </div>
    </div>


    <!-- SLIDE 15: Cell 3 — State Filter and Years -->
    <div class="slide" data-slide="15">
      <span class="slide-badge">Cell 3</span>
      <h2>Cell 3 &mdash; Set the state filter and the years</h2>
      <div class="slide-text-large">
        <pre><code class="language-python">from census import Census, UnsupportedYearException
from us import states

c = Census(userdata.get("CENSUS_API_KEY"))
STATE = states.VA  # Virginia
YEARS = range(2015, 2025)  # 2015 through 2024
GEO = {"for": "county:*", "in": f"state:{STATE.fips}"}

print(STATE.name, STATE.fips)
print(list(YEARS))
print(GEO)</code></pre>
        <div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-5/screenshots/Screenshot%202026-09-18%20141818.png" alt="Cell 3 selects Virginia and prints its name, state FIPS, requested years, and GEO dictionary." /></div>
        <p><code>states.VA</code> supplies Virginia's FIPS code (<code>51</code>). <code>GEO</code> configures the geographic scope for the query.</p>
      </div>
    </div>


    <!-- SLIDE 16: 05 — Anatomy of Python Request -->
    <div class="slide" data-slide="16">
      <span class="slide-badge">Step 05</span>
      <h2>05 &mdash; Request structure with python-census</h2>
      <div class="slide-text-large">
        <div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-5/api-request.svg" alt="The API selects a product, year, variables, and geography before returning records to Colab." /></div>
        <table>
          <thead>
            <tr><th>Request Part</th><th>Meaning</th></tr>
          </thead>
          <tbody>
            <tr><td><code>c.acs1</code></td><td>ACS 1-year annual estimates helper</td></tr>
            <tr><td><code>"B01003_001E"</code>, <code>"B19013_001E"</code></td><td>Variables for population and median household income</td></tr>
            <tr><td><code>"for": "county:*"</code></td><td>All county-level units available in the selected product</td></tr>
            <tr><td><code>"in": f"state:{STATE.fips}"</code></td><td>Virginia (state 51)</td></tr>
            <tr><td><code>year=year</code></td><td>Current survey year being requested in the loop</td></tr>
          </tbody>
        </table>
      </div>
    </div>


    <!-- SLIDE 17: 05 — Interactive Demo: API Request -->
    <div class="slide slide-interactive" data-slide="17">
      <span class="slide-badge">Interactive 02</span>
      <h2>05 &mdash; Interactive: Census API Request</h2>
      <div class="slide-text-large">
        <div class="iframe-container"><iframe src="{{ site.baseurl }}/assets/week-5/api-request.html" title="Census county directory and annual observations" loading="lazy"></iframe></div>
        <p style="margin: 0.3rem 0; font-size: 0.9em; color: #57606a;">
          Interactive demonstration: Census API Request | <a href="{{ site.baseurl }}/assets/week-5/api-request.html" target="_blank">Open demonstration separately ↗</a>
        </p>
      </div>
    </div>


    <!-- SLIDE 18: Cell 4 — Read County Directory -->
    <div class="slide" data-slide="18">
      <span class="slide-badge">Cell 4</span>
      <h2>Cell 4 &mdash; Read complete county-name catalogue</h2>
      <div class="slide-text-large">
        <pre><code class="language-python">names = c.pl.get("NAME", GEO, year=2020)
print("County names returned:", len(names))
names[:3]</code></pre>
        <div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-5/screenshots/Screenshot%202026-09-18%20141843.png" alt="Cell 4 reads the complete county directory; the output reports 133 county names and previews three records." /></div>
        <p><code>c.pl</code> queries the <strong>2020 Decennial Census Public Law dataset</strong>. This returns all <strong>133 Virginia counties and independent cities</strong> regardless of whether ACS 1-year publishes annual estimates for them.</p>
      </div>
    </div>


    <!-- SLIDE 19: 06 — Database Model & Keys -->
    <div class="slide" data-slide="19">
      <span class="slide-badge">Step 06</span>
      <h2>06 &mdash; Database model and geographic keys</h2>
      <div class="slide-text-large">
        <div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-5/fips-and-keys.svg" alt="County identity uses the full five-character FIPS; a name is descriptive text, not a unique identifier." /></div>
        <table>
          <thead>
            <tr><th>Table</th><th>Row Meaning and Keys</th></tr>
          </thead>
          <tbody>
            <tr><td><code>name(fips, name)</code></td><td>One county/equivalent from complete catalogue; PK <code>fips</code>; descriptive <code>name</code> is not Unique</td></tr>
            <tr><td><code>population(fips, population, year)</code></td><td>One published county/year observation; PK <code>(fips, year)</code>; FK &rarr; <code>name.fips</code></td></tr>
            <tr><td><code>income(fips, income, year)</code></td><td>One published county/year observation; PK <code>(fips, year)</code>; FK &rarr; <code>name.fips</code></td></tr>
          </tbody>
        </table>
        <p>Full FIPS is <strong>2 state digits + 3 county digits</strong> (e.g., <code>51059</code> for Fairfax County). Stored as five-character <code>text</code>.</p>
      </div>
    </div>


    <!-- SLIDE 20: Cell 5 — Save County Names -->
    <div class="slide" data-slide="20">
      <span class="slide-badge">Cell 5</span>
      <h2>Cell 5 &mdash; First database write: save county names</h2>
      <div class="slide-text-large">
        <pre><code class="language-python">for data in names:
    fips = f"{int(data['state']):02d}{int(data['county']):03d}"
    county_name = data["NAME"].rsplit(", ", 1)[0]

    cur.execute(
        """INSERT INTO public.name (fips, name)
           VALUES (%s, %s)
           ON CONFLICT (fips) DO NOTHING;""",
        (fips, county_name)
    )

conn.commit()</code></pre>
        <div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-5/screenshots/Screenshot%202026-09-18%20141953.png" alt="Instructor Colab screenshot of the county-name loading loop and commit." /></div>
        <p><code>.rsplit(", ", 1)[0]</code> strips trailing <code>, Virginia</code> while keeping <code>County</code> or <code>city</code>. Parameter substitution (<code>%s, %s</code>) safely handles text containing apostrophes.</p>
      </div>
    </div>


    <!-- SLIDE 21: 06 — Studio Preview of County Names -->
    <div class="slide" data-slide="21">
      <span class="slide-badge">Step 06</span>
      <h2>06 &mdash; Studio preview of county names</h2>
      <div class="slide-text-large">
        <div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-5/screenshots/Screenshot%202026-09-18%20142006.png" alt="Studio preview of the county-name table." /></div>
        <p>After running Cell 5, Cloud SQL Studio reveals all 133 county records in <code>public.name</code>.</p>
        <p><strong>Why two separate observation tables?</strong> We preserve the Week 4 normalized schema. This models distinct annual measurements and prepares us for SQL joins next week.</p>
      </div>
    </div>


    <!-- SLIDE 22: 07 — Multi-Year Observations -->
    <div class="slide" data-slide="22">
      <span class="slide-badge">Step 07</span>
      <h2>07 &mdash; Multi-year observation architecture</h2>
      <div class="slide-text-large">
        <div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-5/response-to-tables.svg" alt="One county name links to population and income observations across multiple release years." /></div>
        <p>Each county identity in <code>name</code> connects to multiple annual observations in <code>population</code> and <code>income</code>.</p>
        <p>Observations exist only for years and counties published by Census ACS 1-year.</p>
      </div>
    </div>


    <!-- SLIDE 23: Cell 6 — Annual Population Loop -->
    <div class="slide" data-slide="23">
      <span class="slide-badge">Cell 6</span>
      <h2>Cell 6 &mdash; Annual population collection loop</h2>
      <div class="slide-text-large">
        <pre><code class="language-python">for year in YEARS:
    print(f"Collecting population: {year}")
    try:
        records = c.acs1.state_county(
            "B01003_001E", STATE.fips, Census.ALL, year=year
        )
    except UnsupportedYearException:
        print(f"{year}: this dataset/year is not supported; no rows inserted.")
        continue

    for data in records:
        fips = f"{int(data['state']):02d}{int(data['county']):03d}"
        population = int(data["B01003_001E"])
        sql = f"""INSERT INTO public.population (fips, population, year)
                  VALUES ('{fips}', {population}, {year})
                  ON CONFLICT (fips, year) DO NOTHING;"""
        cur.execute(sql)

    conn.commit()
    print(f"Finished population year {year}: {len(records)} source records")</code></pre>
        <p>Natural exception handling catches <code>UnsupportedYearException</code> (2020) without hardcoding skips or fake data.</p>
      </div>
    </div>


    <!-- SLIDE 24: 07 — Population Output & Studio Verification -->
    <div class="slide" data-slide="24">
      <span class="slide-badge">Step 07</span>
      <h2>07 &mdash; Population output and Studio preview</h2>
      <div class="slide-text-large">
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <div style="flex: 1; min-width: 300px;">
            <p><strong>Colab Progress Output:</strong></p>
            <div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-5/screenshots/Screenshot%202026-09-18%20142231.png" alt="Instructor population loop with per-release source-record progress." /></div>
          </div>
          <div style="flex: 1; min-width: 300px;">
            <p><strong>Studio Table Preview (270 rows):</strong></p>
            <div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-5/screenshots/Screenshot%202026-09-18%20142240.png" alt="Studio displays saved population observations with fips, population, and year." /></div>
          </div>
        </div>
        <p style="font-size: 0.9em; color: #57606a;">9 supported years &times; 30 published counties = 270 total population rows.</p>
      </div>
    </div>


    <!-- SLIDE 25: Cell 7 — Annual Income Loop -->
    <div class="slide" data-slide="25">
      <span class="slide-badge">Cell 7</span>
      <h2>Cell 7 &mdash; Annual income collection loop</h2>
      <div class="slide-text-large">
        <pre><code class="language-python">for year in YEARS:
    print(f"Collecting income: {year}")
    try:
        records = c.acs1.state_county(
            "B19013_001E", STATE.fips, Census.ALL, year=year
        )
    except UnsupportedYearException:
        print(f"{year}: this dataset/year is not supported; no rows inserted.")
        continue

    for data in records:
        fips = f"{int(data['state']):02d}{int(data['county']):03d}"
        income = int(data["B19013_001E"])
        sql = f"""INSERT INTO public.income (fips, income, year)
                  VALUES ('{fips}', {income}, {year})
                  ON CONFLICT (fips, year) DO NOTHING;"""
        cur.execute(sql)

    conn.commit()
    print(f"Finished income year {year}: {len(records)} source records")</code></pre>
        <p><code>B19013_001E</code> is median household income in nominal survey-year dollars.</p>
      </div>
    </div>


    <!-- SLIDE 26: 08 — Income Output & Studio Verification -->
    <div class="slide" data-slide="26">
      <span class="slide-badge">Step 08</span>
      <h2>08 &mdash; Income output and Studio preview</h2>
      <div class="slide-text-large">
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <div style="flex: 1; min-width: 300px;">
            <p><strong>Colab Progress Output:</strong></p>
            <div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-5/screenshots/Screenshot%202026-09-18%20142330.png" alt="Colab income collection and progress output." /></div>
          </div>
          <div style="flex: 1; min-width: 300px;">
            <p><strong>Studio Table Preview (270 rows):</strong></p>
            <div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-5/screenshots/Screenshot%202026-09-18%20142345.png" alt="Studio displays saved income observations with fips, income, and year." /></div>
          </div>
        </div>
        <p style="font-size: 0.9em; color: #57606a;">9 supported years &times; 30 published counties = 270 total income rows.</p>
      </div>
    </div>


    <!-- SLIDE 27: Cell 8 — Close Cursor and Connection -->
    <div class="slide" data-slide="27">
      <span class="slide-badge">Cell 8</span>
      <h2>Cell 8 &mdash; Close this notebook's database connection</h2>
      <div class="slide-text-large">
        <pre><code class="language-python">cur.close()
conn.close()</code></pre>
        <div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-5/screenshots/Screenshot%202026-09-18%20142400.png" alt="Instructor Colab screenshot of closing the cursor and connection after committing." /></div>
        <p><code>cur.close()</code> and <code>conn.close()</code> terminate the Python session cleanly. <strong>Neither deletes the database nor stops Cloud SQL.</strong></p>
        <p>Closing is <strong>not</strong> a substitute for <code>conn.commit()</code>. All committed data remains safe in Cloud SQL.</p>
      </div>
    </div>


    <!-- SLIDE 28: 10 — Save to GitHub -->
    <div class="slide" data-slide="28">
      <span class="slide-badge">Step 10</span>
      <h2>10 &mdash; Save completed notebook to GitHub</h2>
      <div class="slide-text-large">
        <p>In Colab, select <strong>File &rarr; Save a copy to GitHub</strong>.</p>
        <ul>
          <li>Repository: <strong>Your assigned private IA340 repository under <code>JMU-Data</code></strong></li>
          <li>Branch: <strong><code>main</code></strong></li>
          <li>File path: <strong><code>lab5.ipynb</code></strong></li>
        </ul>
        <div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-5/screenshots/Screenshot%202026-09-16%20104823.png" alt="Instructor example of Copy to GitHub, with the notebook file path lab5.ipynb." /></div>
        <p>Before saving, inspect notebook outputs: ensure no IP address, password, or Census API key is visible.</p>
      </div>
    </div>


    <!-- SLIDE 29: 10 — Lab 5 Canvas Submission Contract -->
    <div class="slide" data-slide="29">
      <span class="slide-badge">Checkpoint</span>
      <h2>10 &mdash; Lab 5 Canvas submission contract</h2>
      <div class="slide-text-large">
        <p><strong>Due Tuesday, September 22, 2026. Submit EXACTLY TWO bare values in Canvas (either order):</strong></p>
        <pre><code class="language-text">203.0.113.10
https://github.com/JMU-Data/ia340-fa26-1-student123</code></pre>
        <div style="background: #fff8df; border-left: 4px solid #9a6700; padding: 0.6rem 1rem; border-radius: 0 6px 6px 0; margin-top: 0.6rem;">
          <strong>URL Format Rules:</strong> The submitted GitHub URL must be the <strong>repository root URL only</strong>.
          <br>Do <strong>not</strong> submit <code>/tree/main</code>, <code>/blob/...</code>, direct notebook URLs, public <code>JMU-Data/IA340</code>, or Colab URLs!
        </div>
        <p style="margin-top: 0.8rem;"><a href="{{ site.baseurl }}/assignments/lab-5/" style="font-weight: 600;">Open Lab 5 Instructions &rarr;</a></p>
      </div>
    </div>


    <!-- SLIDE 30: Wednesday Focus — Cloud SQL Studio Querying -->
    <div class="slide" data-slide="30">
      <span class="slide-badge">Wednesday Focus</span>
      <h2>Wednesday &mdash; Query and summarize in Cloud SQL Studio</h2>
      <div class="slide-text-large">
        <p><strong>From this point onward, all query examples are SQL to run directly in Cloud SQL Studio.</strong></p>
        <div style="display: flex; gap: 1rem; margin: 1rem 0; flex-wrap: wrap;">
          <div style="flex: 1; min-width: 280px; background: #f6f8fa; border: 1px solid #d0d7de; border-radius: 8px; padding: 1rem;">
            <strong style="color: #0969da;">What We Will Practice:</strong>
            <ul style="margin-top: 0.5rem; padding-left: 1.2rem;">
              <li><code>SELECT</code> and <code>FROM</code></li>
              <li><code>WHERE</code> filtering &amp; combined conditions</li>
              <li><code>ORDER BY</code> and <code>LIMIT</code></li>
              <li><code>LIKE</code> pattern matching</li>
              <li>Calculated result columns (<code>AS</code>)</li>
              <li>Aggregates: <code>COUNT</code>, <code>SUM</code>, <code>AVG</code>, <code>MIN</code>, <code>MAX</code></li>
              <li><code>GROUP BY</code> and <code>HAVING</code></li>
            </ul>
          </div>
          <div style="flex: 1; min-width: 280px; background: #ddf4ff; border: 1px solid rgba(84, 174, 255, 0.4); border-radius: 8px; padding: 1rem;">
            <strong style="color: #0969da;">Practice Guidelines:</strong>
            <ul style="margin-top: 0.5rem; padding-left: 1.2rem;">
              <li>No Colab, Python, or cursor needed.</li>
              <li><strong>No Gemini this week.</strong></li>
              <li><strong>Practice only &mdash; not graded; no submission required.</strong></li>
            </ul>
          </div>
        </div>
      </div>
    </div>


    <!-- SLIDE 31: 11 — Open Cloud SQL Studio & First Query -->
    <div class="slide" data-slide="31">
      <span class="slide-badge">Step 11</span>
      <h2>11 &mdash; Open the saved database and ask a first question</h2>
      <div class="slide-text-large">
        <p>Open your Cloud SQL instance &rarr; <strong>Cloud SQL Studio</strong>. Sign in to database <code>postgres</code> with user <code>postgres</code>. Type a query in the editor and click <strong>Run</strong>:</p>
        <pre><code class="language-sql">SELECT *
FROM public.population
LIMIT 5;</code></pre>
        <div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-5/screenshots/Screenshot%202026-09-18%20142607.png" alt="Instructor rehearsal of SELECT star, FROM public.population, and LIMIT 5 in Cloud SQL Studio." /></div>
        <p>This is a small preview, <strong>not</strong> the five largest populations. You are querying Monday's saved records in PostgreSQL.</p>
      </div>
    </div>


    <!-- SLIDE 32: 11 — SQL Writing Rules, Comments & Semicolons -->
    <div class="slide" data-slide="32">
      <span class="slide-badge">Step 11</span>
      <h2>11 &mdash; SQL syntax, comments, and semicolons</h2>
      <div class="slide-text-large">
        <p>A <strong>semicolon ends a statement</strong>. Studio allows multiple statements; select the statement(s) you intend to run before clicking Run.</p>
        <pre><code class="language-sql">-- Statement 1: preview the county labels.
SELECT *
FROM public.name
LIMIT 5;

/* Statement 2:
   count population records for one release. */
SELECT COUNT(*) AS county_count
FROM public.population
WHERE year = 2024;</code></pre>
        <div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-5/screenshots/Screenshot%202026-09-18%20142642.png" alt="Two semicolon-separated SQL statements with comments; the displayed COUNT result for 2024 is 30." /></div>
      </div>
    </div>


    <!-- SLIDE 33: 11 — SQL Naming & Quotation Conventions -->
    <div class="slide" data-slide="33">
      <span class="slide-badge">Step 11</span>
      <h2>11 &mdash; SQL naming and quotation conventions</h2>
      <div class="slide-text-large">
        <table>
          <thead>
            <tr><th>What You Are Writing</th><th>PostgreSQL Rule</th><th>Course Convention</th></tr>
          </thead>
          <tbody>
            <tr><td>Keywords: <code>SELECT</code>, <code>FROM</code></td><td>Case-insensitive</td><td>UPPERCASE for readability</td></tr>
            <tr><td>Identifiers: <code>population</code>, <code>fips</code></td><td>Folds unquoted names to lowercase</td><td><strong>Lowercase, unquoted</strong></td></tr>
            <tr><td>Quoted Identifiers: <code>"Total Pop"</code></td><td>Preserves case and spaces</td><td>Avoid; double quotes required if created</td></tr>
            <tr><td>Text Values: <code>'Fairfax County'</code></td><td><strong>Single quotes</strong> for text strings</td><td>Single quotes with exact text</td></tr>
            <tr><td>Numeric Values: <code>2024</code>, <code>100000</code></td><td>Numbers do not use quotes</td><td>Numbers unquoted</td></tr>
          </tbody>
        </table>
        <div style="background: #fff8df; border-left: 4px solid #9a6700; padding: 0.6rem 1rem; border-radius: 0 6px 6px 0; margin-top: 0.8rem;">
          <strong>SQL Single and Double Quotes Are NOT Interchangeable!</strong><br>
          In PostgreSQL, <code>"double quotes"</code> are for table/column identifiers; <code>'single quotes'</code> are for text values!
        </div>
      </div>
    </div>


    <!-- SLIDE 34: 11 — Anatomy of a Query -->
    <div class="slide" data-slide="34">
      <span class="slide-badge">Step 11</span>
      <h2>11 &mdash; Anatomy of a SQL query</h2>
      <div class="slide-text-large">
        <div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-5/query-anatomy.svg" alt="A SQL query annotated by SELECT, FROM, WHERE, ORDER BY and LIMIT." /></div>
        <p>A SQL query specifies <strong>what columns to output</strong> (<code>SELECT</code>), <strong>what table to query</strong> (<code>FROM</code>), <strong>which rows qualify</strong> (<code>WHERE</code>), <strong>how to sort</strong> (<code>ORDER BY</code>), and <strong>how many rows to return</strong> (<code>LIMIT</code>).</p>
      </div>
    </div>


    <!-- SLIDE 35: 12 — SELECT and FROM -->
    <div class="slide" data-slide="35">
      <span class="slide-badge">Step 12</span>
      <h2>12 &mdash; SELECT and FROM: columns and a table</h2>
      <div class="slide-text-large">
        <pre><code class="language-sql">SELECT fips, population
FROM public.population;</code></pre>
        <p><code>SELECT</code> chooses the output columns. <code>FROM</code> names the source table.</p>
        <pre><code class="language-sql">SELECT *
FROM public.name;</code></pre>
        <p><strong><code>SELECT *</code> means all columns from the table named in <code>FROM</code> &mdash; NOT all tables in the database!</strong></p>
        <p>This returns both <code>fips</code> and <code>name</code> from <code>public.name</code>. It does not read <code>population</code> or <code>income</code>.</p>
      </div>
    </div>


    <!-- SLIDE 36: 12 — Interactive Demo: Choose Columns -->
    <div class="slide slide-interactive" data-slide="36">
      <span class="slide-badge">Interactive 03</span>
      <h2>12 &mdash; Interactive: Choose columns with SELECT</h2>
      <div class="slide-text-large">
        <div class="iframe-container"><iframe src="{{ site.baseurl }}/assets/week-5/select-columns.html" title="SELECT: choose output columns" loading="lazy"></iframe></div>
        <p style="margin: 0.3rem 0; font-size: 0.9em; color: #57606a;">
          Interactive demonstration: SELECT Columns | <a href="{{ site.baseurl }}/assets/week-5/select-columns.html" target="_blank">Open demonstration separately ↗</a>
        </p>
      </div>
    </div>


    <!-- SLIDE 37: 13 — WHERE: Choose Rows -->
    <div class="slide" data-slide="37">
      <span class="slide-badge">Step 13</span>
      <h2>13 &mdash; WHERE: choose rows</h2>
      <div class="slide-text-large">
        <div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-5/select-and-where.svg" alt="SELECT reduces output columns while WHERE filters matching rows; the source remains unchanged." /></div>
        <pre><code class="language-sql">SELECT fips, population, year
FROM public.population
WHERE fips = '51059';</code></pre>
        <p>Text FIPS needs single quotes. Numeric values do not:</p>
        <pre><code class="language-sql">SELECT fips, population
FROM public.population
WHERE year = 2024
  AND population > 100000;</code></pre>
      </div>
    </div>


    <!-- SLIDE 38: 13 — Interactive Demo: WHERE Rows -->
    <div class="slide slide-interactive" data-slide="38">
      <span class="slide-badge">Interactive 04</span>
      <h2>13 &mdash; Interactive: Filter rows with WHERE</h2>
      <div class="slide-text-large">
        <div class="iframe-container"><iframe src="{{ site.baseurl }}/assets/week-5/where-rows.html" title="WHERE comparisons and combined conditions" loading="lazy"></iframe></div>
        <p style="margin: 0.3rem 0; font-size: 0.9em; color: #57606a;">
          Interactive demonstration: WHERE Filter Rows | <a href="{{ site.baseurl }}/assets/week-5/where-rows.html" target="_blank">Open demonstration separately ↗</a>
        </p>
      </div>
    </div>


    <!-- SLIDE 39: 14 — Combine Conditions -->
    <div class="slide" data-slide="39">
      <span class="slide-badge">Step 14</span>
      <h2>14 &mdash; Combine conditions; use an interval or a list</h2>
      <div class="slide-text-large">
        <p><code>AND</code> requires both conditions; <code>OR</code> accepts either. Parentheses make grouping explicit:</p>
        <pre><code class="language-sql">SELECT fips, population
FROM public.population
WHERE year = 2024
  AND (population < 50000 OR population > 500000);</code></pre>
        <p><code>BETWEEN</code> includes both endpoints (inclusive):</p>
        <pre><code class="language-sql">SELECT fips, income
FROM public.income
WHERE year = 2024
  AND income BETWEEN 60000 AND 90000;</code></pre>
        <p><code>IN</code> matches any value in a list:</p>
        <pre><code class="language-sql">SELECT fips, population
FROM public.population
WHERE fips IN ('51059', '51107')
ORDER BY fips, year;</code></pre>
      </div>
    </div>


    <!-- SLIDE 40: 15 — ORDER BY and LIMIT -->
    <div class="slide" data-slide="40">
      <span class="slide-badge">Step 15</span>
      <h2>15 &mdash; ORDER BY and LIMIT: largest versus first</h2>
      <div class="slide-text-large">
        <pre><code class="language-sql">SELECT fips, population
FROM public.population
WHERE year = 2024
ORDER BY population DESC, fips
LIMIT 5;</code></pre>
        <ul>
          <li><code>DESC</code> sorts largest first; <code>ASC</code> sorts smallest first (default).</li>
          <li>The second sort column (<code>fips</code>) breaks ties deterministically.</li>
          <li>Without <code>ORDER BY</code>, SQL makes no guarantee about row order.</li>
          <li>Sorting the query result does not rearrange the stored database table.</li>
        </ul>
      </div>
    </div>


    <!-- SLIDE 41: 15 — Interactive Demo: Sort then Limit -->
    <div class="slide slide-interactive" data-slide="41">
      <span class="slide-badge">Interactive 05</span>
      <h2>15 &mdash; Interactive: Sort then Limit</h2>
      <div class="slide-text-large">
        <div class="iframe-container"><iframe src="{{ site.baseurl }}/assets/week-5/sort-limit.html" title="ORDER BY and LIMIT" loading="lazy"></iframe></div>
        <p style="margin: 0.3rem 0; font-size: 0.9em; color: #57606a;">
          Interactive demonstration: ORDER BY and LIMIT | <a href="{{ site.baseurl }}/assets/week-5/sort-limit.html" target="_blank">Open demonstration separately ↗</a>
        </p>
      </div>
    </div>


    <!-- SLIDE 42: 16 — LIKE: Pattern Matching -->
    <div class="slide" data-slide="42">
      <span class="slide-badge">Step 16</span>
      <h2>16 &mdash; LIKE: find a name by a pattern</h2>
      <div class="slide-text-large">
        <pre><code class="language-sql">SELECT fips, name
FROM public.name
WHERE name LIKE 'Fairfax%';</code></pre>
        <ul>
          <li><code>%</code> matches zero or more characters.</li>
          <li><code>_</code> matches exactly one character.</li>
          <li>For standard English text in PostgreSQL, <code>LIKE</code> is case-sensitive.</li>
          <li>County labels retain their type suffix (e.g., <code>Fairfax County</code>).</li>
        </ul>
      </div>
    </div>


    <!-- SLIDE 43: 16 — Filter by FIPS Prefix -->
    <div class="slide" data-slide="43">
      <span class="slide-badge">Step 16</span>
      <h2>16 &mdash; Select Virginia records by FIPS prefix</h2>
      <div class="slide-text-large">
        <pre><code class="language-sql">SELECT fips, name
FROM public.name
WHERE fips LIKE '51%'
ORDER BY fips;</code></pre>
        <p>The stored county FIPS has <strong>five characters</strong>: the first two identify the state. Virginia's state FIPS is <code>51</code>.</p>
        <p><code>'51%'</code> selects all Virginia county records using the formal structure of the geographic identifier, rather than guessing with name fragments.</p>
      </div>
    </div>


    <!-- SLIDE 44: 16 — Interactive Demo: LIKE Text Patterns -->
    <div class="slide slide-interactive" data-slide="44">
      <span class="slide-badge">Interactive 06</span>
      <h2>16 &mdash; Interactive: LIKE text patterns</h2>
      <div class="slide-text-large">
        <div class="iframe-container"><iframe src="{{ site.baseurl }}/assets/week-5/like-text.html" title="LIKE text patterns" loading="lazy"></iframe></div>
        <p style="margin: 0.3rem 0; font-size: 0.9em; color: #57606a;">
          Interactive demonstration: LIKE Text Patterns | <a href="{{ site.baseurl }}/assets/week-5/like-text.html" target="_blank">Open demonstration separately ↗</a>
        </p>
      </div>
    </div>


    <!-- SLIDE 45: 17 — Calculate a Result Column -->
    <div class="slide" data-slide="45">
      <span class="slide-badge">Step 17</span>
      <h2>17 &mdash; Calculate a result column and label it</h2>
      <div class="slide-text-large">
        <pre><code class="language-sql">SELECT fips, population / 1000.0 AS population_thousands
FROM public.population
WHERE year = 2024
ORDER BY population DESC, fips
LIMIT 5;</code></pre>
        <div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-5/screenshots/Screenshot%202026-09-18%20142840.png" alt="Studio calculates population_thousands for the five largest returned 2024 county-level estimates." /></div>
        <p><code>AS</code> labels the computed column in the query result. <code>1000.0</code> forces decimal division. This does <strong>not</strong> modify the underlying stored table.</p>
      </div>
    </div>


    <!-- SLIDE 46: 18 — Aggregate Functions -->
    <div class="slide" data-slide="46">
      <span class="slide-badge">Step 18</span>
      <h2>18 &mdash; Aggregate functions: turn rows into a summary</h2>
      <div class="slide-text-large">
        <div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-5/aggregation.svg" alt="Rows pass through WHERE, then COUNT, SUM, AVG, MIN, or MAX produces a summary." /></div>
        <pre><code class="language-sql">SELECT
    COUNT(*) AS county_count,
    SUM(population) AS covered_population,
    AVG(population) AS mean_county_population,
    MIN(population) AS smallest_population,
    MAX(population) AS largest_population
FROM public.population
WHERE year = 2024;</code></pre>
        <p><code>WHERE</code> filters the rows <strong>before</strong> aggregation. <code>covered_population</code> is the sum of the 30 published counties, <strong>not</strong> the total population of Virginia.</p>
      </div>
    </div>


    <!-- SLIDE 47: 18 — Interactive Demo: Aggregate Functions -->
    <div class="slide slide-interactive" data-slide="47">
      <span class="slide-badge">Interactive 07</span>
      <h2>18 &mdash; Interactive: Filter first, then aggregate</h2>
      <div class="slide-text-large">
        <div class="iframe-container"><iframe src="{{ site.baseurl }}/assets/week-5/aggregation.html" title="COUNT SUM AVG MIN MAX on filtered rows" loading="lazy"></iframe></div>
        <p style="margin: 0.3rem 0; font-size: 0.9em; color: #57606a;">
          Interactive demonstration: Aggregations | <a href="{{ site.baseurl }}/assets/week-5/aggregation.html" target="_blank">Open demonstration separately ↗</a>
        </p>
      </div>
    </div>


    <!-- SLIDE 48: 18 — Income Aggregation Warning -->
    <div class="slide" data-slide="48">
      <span class="slide-badge">Step 18</span>
      <h2>18 &mdash; Critical concept: aggregating median income</h2>
      <div class="slide-text-large">
        <pre><code class="language-sql">SELECT
    MIN(income) AS lowest_county_median,
    MAX(income) AS highest_county_median,
    AVG(income) AS mean_of_county_medians
FROM public.income
WHERE year = 2024;</code></pre>
        <div style="background: #fff8df; border-left: 4px solid #9a6700; padding: 1rem 1.2rem; border-radius: 0 6px 6px 0; margin-top: 1rem; font-size: 1.05rem; line-height: 1.6;">
          <strong>Statistical Invariant:</strong>
          <p style="margin-top: 0.4rem;"><strong>The average of county median household incomes is NOT Virginia's median household income!</strong></p>
          <p>Each stored income number is already a median of that county's households. Averaging or summing medians does not reproduce the underlying statewide household distribution.</p>
          <p>Never sum the income column as a state income total, and do not report <code>AVG(income)</code> as the state median.</p>
        </div>
      </div>
    </div>


    <!-- SLIDE 49: 19 — GROUP BY Year -->
    <div class="slide" data-slide="49">
      <span class="slide-badge">Step 19</span>
      <h2>19 &mdash; GROUP BY: summarize by year</h2>
      <div class="slide-text-large">
        <p><strong>Question A: How many observations and how much population for each survey year?</strong></p>
        <pre><code class="language-sql">SELECT
    year,
    COUNT(*) AS county_count,
    SUM(population) AS covered_population
FROM public.population
WHERE fips LIKE '51%'
GROUP BY year
ORDER BY year;</code></pre>
        <div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-5/screenshots/Screenshot%202026-09-18%20142952.png" alt="Studio example of grouping observations by year." /></div>
        <p>The query returns 9 rows (2015&ndash;2019 and 2021&ndash;2024), each with 30 county records. Total: 270 rows.</p>
      </div>
    </div>


    <!-- SLIDE 50: 19 — GROUP BY County -->
    <div class="slide" data-slide="50">
      <span class="slide-badge">Step 19</span>
      <h2>19 &mdash; GROUP BY: summarize by county FIPS</h2>
      <div class="slide-text-large">
        <p><strong>Question B: What is each county's average stored population estimate across the years?</strong></p>
        <pre><code class="language-sql">SELECT
    fips,
    COUNT(*) AS available_years,
    AVG(population) AS mean_annual_population
FROM public.population
WHERE year BETWEEN 2015 AND 2024
GROUP BY fips
ORDER BY mean_annual_population DESC, fips;</code></pre>
        <div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-5/screenshots/Screenshot%202026-09-18%20143023.png" alt="Studio example of grouping observations by county." /></div>
        <p>Each output row represents one county. <code>available_years</code> shows the count of annual observations published for that geography.</p>
      </div>
    </div>


    <!-- SLIDE 51: 19 — Interactive Demo: GROUP BY -->
    <div class="slide slide-interactive" data-slide="51">
      <span class="slide-badge">Interactive 08</span>
      <h2>19 &mdash; Interactive: GROUP BY year versus county</h2>
      <div class="slide-text-large">
        <div class="iframe-container"><iframe src="{{ site.baseurl }}/assets/week-5/group-by.html" title="GROUP BY year versus GROUP BY county FIPS" loading="lazy"></iframe></div>
        <p style="margin: 0.3rem 0; font-size: 0.9em; color: #57606a;">
          Interactive demonstration: GROUP BY | <a href="{{ site.baseurl }}/assets/week-5/group-by.html" target="_blank">Open demonstration separately ↗</a>
        </p>
      </div>
    </div>


    <!-- SLIDE 52: 19 — Missing Years & Coverage -->
    <div class="slide" data-slide="52">
      <span class="slide-badge">Investigation</span>
      <h2>19 &mdash; Discover missing years and county gaps</h2>
      <div class="slide-text-large">
        <p>Compare the GROUP BY year results with our 2015&ndash;2024 requested range: <strong>Which year is missing?</strong></p>
        <pre><code class="language-sql">SELECT COUNT(*) AS rows_in_2020
FROM public.population
WHERE fips LIKE '51%' AND year = 2020;</code></pre>
        <p>Now check Harrisonburg city (<code>51660</code>) in <code>name</code> vs <code>population</code>:</p>
        <pre><code class="language-sql">SELECT fips, name FROM public.name WHERE fips = '51660';
SELECT year, population FROM public.population WHERE fips = '51660' ORDER BY year;</code></pre>
        <div style="background: #ddf4ff; border-left: 4px solid #0969da; padding: 0.7rem 1rem; border-radius: 0 6px 6px 0; margin-top: 0.6rem;">
          Harrisonburg exists in <code>name</code> (from the complete Decennial directory), but returns <strong>zero rows</strong> in <code>population</code>!
          <br>A grouped query over <code>population</code> alone can never show Harrisonburg. Next week's <code>LEFT JOIN</code> will bridge this gap.
        </div>
      </div>
    </div>


    <!-- SLIDE 53: 19 — Instructor Reveal -->
    <div class="slide" data-slide="53">
      <span class="slide-badge">Explanation</span>
      <h2>19 &mdash; Understanding the 2020 gap and small places</h2>
      <div class="slide-text-large">
        <div style="background: #f6f8fa; border: 1px solid #d0d7de; border-radius: 8px; padding: 1rem; margin-bottom: 0.8rem;">
          <strong style="color: #0969da; font-size: 1.05rem;">Why is 2020 Missing?</strong>
          <p style="margin-top: 0.4rem;">The standard <strong>2020 ACS 1-year Detailed Tables</strong> were not published by Census due to pandemic-related data collection disruptions that prevented them from meeting statistical quality standards.</p>
        </div>
        <div style="background: #f6f8fa; border: 1px solid #d0d7de; border-radius: 8px; padding: 1rem; margin-bottom: 0.8rem;">
          <strong style="color: #0969da; font-size: 1.05rem;">Why is Harrisonburg Missing from Annual Observations?</strong>
          <p style="margin-top: 0.4rem;">ACS 1-year Detailed Tables require a population of <strong>65,000 or more</strong>. Harrisonburg city has ~51,814 residents. It appears in the full 2020 Decennial directory (<code>name</code>), but is below the annual ACS 1-year threshold.</p>
        </div>
        <p style="font-size: 0.9em; color: #57606a;"><em>Alternative sources for small places include the Population Estimates Program (PEP) and ACS 5-year estimates. For this lab, keep our observation tables ACS 1-year only &mdash; do not fill gaps with different products.</em></p>
      </div>
    </div>


    <!-- SLIDE 54: 20 — HAVING versus WHERE -->
    <div class="slide" data-slide="54">
      <span class="slide-badge">Step 20</span>
      <h2>20 &mdash; HAVING versus WHERE: filter rows, then filter groups</h2>
      <div class="slide-text-large">
        <div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-5/where-having.svg" alt="WHERE filters input rows; GROUP BY and AVG summarize each county; HAVING filters the resulting county groups." /></div>
        <pre><code class="language-sql">SELECT
    fips,
    COUNT(*) AS available_years,
    AVG(population) AS mean_annual_population
FROM public.population
WHERE year BETWEEN 2015 AND 2024
GROUP BY fips
HAVING AVG(population) > 100000
ORDER BY mean_annual_population DESC, fips;</code></pre>
        <div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-5/screenshots/Screenshot%202026-09-18%20143131.png" alt="Studio example of filtering county groups with HAVING." /></div>
        <p><strong>WHERE</strong> filters rows <em>before</em> grouping; <strong>HAVING</strong> filters groups <em>after</em> aggregation.</p>
      </div>
    </div>


    <!-- SLIDE 55: 20 — Interactive Demo: WHERE vs HAVING -->
    <div class="slide slide-interactive" data-slide="55">
      <span class="slide-badge">Interactive 09</span>
      <h2>20 &mdash; Interactive: WHERE versus HAVING</h2>
      <div class="slide-text-large">
        <div class="iframe-container"><iframe src="{{ site.baseurl }}/assets/week-5/where-having.html" title="WHERE rows and HAVING groups: step-by-step" loading="lazy"></iframe></div>
        <p style="margin: 0.3rem 0; font-size: 0.9em; color: #57606a;">
          Interactive demonstration: WHERE vs HAVING | <a href="{{ site.baseurl }}/assets/week-5/where-having.html" target="_blank">Open demonstration separately ↗</a>
        </p>
      </div>
    </div>


    <!-- SLIDE 56: 21 — Practice in Studio -->
    <div class="slide" data-slide="56">
      <span class="slide-badge">Practice</span>
      <h2>21 &mdash; In-class practice in Cloud SQL Studio</h2>
      <div class="slide-text-large">
        <p><strong>Classroom practice only &mdash; not graded; no submission required. No Gemini.</strong></p>
        <ol style="font-size: 0.92rem; line-height: 1.5; padding-left: 1.4rem;">
          <li>Find the stored name for Fairfax County (FIPS <code>51059</code>).</li>
          <li>Show 2024 population records below 100,000, largest first.</li>
          <li>Show the five highest 2024 median household income estimates.</li>
          <li>Find names containing <code>County</code>; then find Virginia records with <code>fips LIKE '51%'</code>.</li>
          <li>Show 2024 income for Fairfax County (<code>51059</code>) and Loudoun County (<code>51107</code>).</li>
          <li>Count covered 2024 counties and sum their population. Explain why the sum is not total Virginia population.</li>
          <li>List years and row counts in population and income. Which year is absent?</li>
          <li>Calculate each county's mean annual population and number of available years.</li>
          <li>Keep counties whose mean annual population exceeds 100,000 using <code>HAVING</code>.</li>
          <li>Compare Harrisonburg city (<code>51660</code>) in <code>name</code> vs <code>population</code>.</li>
          <li>Compute percentage change for Fairfax County from 2023 to 2024.</li>
        </ol>
      </div>
    </div>


    <!-- SLIDE 57: 21 — Practice Solutions Reveal -->
    <div class="slide" data-slide="57">
      <span class="slide-badge">Solutions</span>
      <h2>21 &mdash; Practice query solutions</h2>
      <div class="slide-text-large">
        <pre><code class="language-sql">-- 1: Fairfax name
SELECT fips, name FROM public.name WHERE fips = '51059';

-- 2: Small published counties in 2024
SELECT fips, population FROM public.population
WHERE fips LIKE '51%' AND year = 2024 AND population < 100000
ORDER BY population DESC, fips;

-- 3: Top 5 income in 2024
SELECT fips, income FROM public.income
WHERE fips LIKE '51%' AND year = 2024
ORDER BY income DESC, fips LIMIT 5;

-- 6: Covered population sum (not statewide total)
SELECT COUNT(*) AS covered_counties, SUM(population) AS covered_population
FROM public.population WHERE fips LIKE '51%' AND year = 2024;

-- 7: Group by year
SELECT year, COUNT(*) AS county_count FROM public.population
WHERE fips LIKE '51%' GROUP BY year ORDER BY year;

-- 9: Having threshold
SELECT fips, AVG(population) AS mean_pop FROM public.population
WHERE fips LIKE '51%' AND year BETWEEN 2015 AND 2024
GROUP BY fips HAVING AVG(population) > 100000 ORDER BY mean_pop DESC;</code></pre>
      </div>
    </div>


    <!-- SLIDE 58: Summary & Resources -->
    <div class="slide" data-slide="58">
      <span class="slide-badge">Summary</span>
      <h2>Week 5 Summary &amp; Reference Sources</h2>
      <div class="slide-text-large">
        <div style="background: #dafbe1; border-left: 4px solid #1a7f37; padding: 0.8rem 1.2rem; border-radius: 0 6px 6px 0; margin-bottom: 1rem;">
          <strong style="color: #1a7f37; font-size: 1.05rem;">Week 5 Accomplishments:</strong>
          <ul style="margin-top: 0.4rem; padding-left: 1.2rem;">
            <li>Requested and activated personal Census API key via Colab Secrets.</li>
            <li>Created connection/cursor to Cloud SQL PostgreSQL from Python.</li>
            <li>Populated 133 Virginia county identities in <code>name</code> via Decennial PL dataset.</li>
            <li>Collected 2015&ndash;2024 ACS 1-year population and income into PostgreSQL (270 rows each).</li>
            <li>Saved completed <code>lab5.ipynb</code> to assigned private JMU-Data GitHub repository.</li>
            <li>Explored data in Cloud SQL Studio using SQL filtering, sorting, aggregates, and grouping.</li>
          </ul>
        </div>
        <p><strong>Official Reference Documentation:</strong></p>
        <p style="font-size: 0.9em; line-height: 1.6;">
          <a href="https://www.census.gov/data/developers/data-sets/acs-1year.html" target="_blank">Census ACS 1-year ↗</a> &bull;
          <a href="https://api.census.gov/data/2024/acs/acs1/variables/B19013_001E.html" target="_blank">Median Household Income Variable ↗</a> &bull;
          <a href="https://api.census.gov/data/2024/acs/acs1/groups/B01003.html" target="_blank">Total Population Variable ↗</a> &bull;
          <a href="https://www.psycopg.org/docs/usage.html" target="_blank">Psycopg Documentation ↗</a> &bull;
          <a href="https://www.postgresql.org/docs/18/sql-insert.html" target="_blank">PostgreSQL INSERT ↗</a> &bull;
          <a href="https://www.postgresql.org/docs/18/queries-select-lists.html" target="_blank">SELECT Queries ↗</a> &bull;
          <a href="https://www.postgresql.org/docs/18/queries-table-expressions.html" target="_blank">GROUP BY &amp; HAVING ↗</a>
        </p>
        <div style="margin-top: 1rem; text-align: center;">
          <a href="{{ site.baseurl }}/assignments/lab-5/" class="deck-btn-primary" style="text-decoration: none; display: inline-block;">Go to Lab 5 Checkpoint Instructions &rarr;</a>
        </div>
      </div>
    </div>

  </div>
</div>

<script>
let currentSlide = 1;

function getTotalSlides() {
  return document.querySelectorAll('.slide').length;
}

function updateDeck() {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  
  if (currentSlide < 1) currentSlide = 1;
  if (currentSlide > totalSlides) currentSlide = totalSlides;

  slides.forEach((slide) => {
    const sNum = parseInt(slide.getAttribute('data-slide'));
    if (sNum === currentSlide) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });

  const counterEl = document.getElementById('slideCounter');
  if (counterEl) {
    counterEl.textContent = `Slide ` + currentSlide + ` of ` + totalSlides;
  }
  const progressEl = document.getElementById('progressBar');
  if (progressEl && totalSlides > 0) {
    progressEl.style.width = ((currentSlide / totalSlides) * 100) + `%`;
  }
  
  const prevBtn = document.getElementById('prevBtn');
  if (prevBtn) prevBtn.disabled = (currentSlide === 1);
  const nextBtn = document.getElementById('nextBtn');
  if (nextBtn) nextBtn.disabled = (currentSlide === totalSlides);

  history.replaceState(null, null, `#slide-` + currentSlide);
}

function changeSlide(direction) {
  const totalSlides = getTotalSlides();
  const next = currentSlide + direction;
  if (next >= 1 && next <= totalSlides) {
    currentSlide = next;
    updateDeck();
  }
}

function goToSlide(slideNum) {
  const totalSlides = getTotalSlides();
  if (slideNum >= 1 && slideNum <= totalSlides) {
    currentSlide = slideNum;
    updateDeck();
  }
}

function toggleFullScreen() {
  const deck = document.getElementById('lectureDeck');
  if (!document.fullscreenElement) {
    if (deck.requestFullscreen) {
      deck.requestFullscreen();
    } else if (deck.webkitRequestFullscreen) {
      deck.webkitRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

document.addEventListener('keydown', function(event) {
  if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') return;

  if (event.key === 'ArrowRight' || event.key === ' ' || event.key === 'PageDown') {
    event.preventDefault();
    changeSlide(1);
  } else if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
    event.preventDefault();
    changeSlide(-1);
  } else if (event.key === 'Home') {
    event.preventDefault();
    goToSlide(1);
  } else if (event.key === 'End') {
    event.preventDefault();
    goToSlide(getTotalSlides());
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const totalSlides = getTotalSlides();
  const hash = window.location.hash;
  if (hash && hash.startsWith('#slide-')) {
    const sNum = parseInt(hash.replace('#slide-', ''));
    if (!isNaN(sNum) && sNum >= 1 && sNum <= totalSlides) {
      currentSlide = sNum;
    }
  }
  updateDeck();
});
</script>

---

<div style="margin-top: 2rem; display: flex; flex-wrap: wrap; gap: 1rem; align-items: center;">
  <a href="{{ site.baseurl }}/">← Return to Course Home</a>
  <span style="color: #d0d7de;">|</span>
  <a href="{{ site.baseurl }}/assignments/lab-5/">Go to Lab 5 Checkpoint Instructions →</a>
</div>
