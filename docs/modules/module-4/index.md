---
layout: default
title: "Module 4: Relational Databases, Google Cloud & ER Diagram - IA 340"
---

# Module 4: Relational Databases, Google Cloud &amp; ER Diagram

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
  <a href="{{ site.baseurl }}/modules/module-4/" style="text-decoration: none; font-weight: 600; color: #0969da;">Module 4</a>
  <a href="{{ site.baseurl }}/assignments/lab-4/" style="text-decoration: none; color: #57606a;">Lab 4</a>
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
  width: 1.12%;
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
  min-height: 640px;
  height: calc(100% - 60px);
  display: flex;
  flex-direction: column;
  margin: 0.2rem 0;
}

.iframe-container iframe {
  width: 100%;
  flex: 1;
  min-height: 620px;
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
  height: 100%;
  overflow-y: auto;
  padding: 1.5rem 3rem;
  font-size: 1.15rem;
  line-height: 1.6;
}

#lectureDeck:fullscreen .slide.slide-interactive,
#lectureDeck:-webkit-full-screen .slide.slide-interactive,
.deck-container:fullscreen .slide.slide-interactive,
.deck-container:-webkit-full-screen .slide.slide-interactive {
  padding: 1rem 2rem;
}

#lectureDeck:fullscreen .slide h2,
#lectureDeck:-webkit-full-screen .slide h2,
.deck-container:fullscreen .slide h2,
.deck-container:-webkit-full-screen .slide h2 {
  font-size: 2.1rem;
  margin-bottom: 0.8rem;
}

#lectureDeck:fullscreen .slide-media-box img,
#lectureDeck:-webkit-full-screen .slide-media-box img,
.deck-container:fullscreen .slide-media-box img,
.deck-container:-webkit-full-screen .slide-media-box img {
  max-height: 60vh;
}

#lectureDeck:fullscreen .iframe-container,
#lectureDeck:-webkit-full-screen .iframe-container,
.deck-container:fullscreen .iframe-container,
.deck-container:-webkit-full-screen .iframe-container {
  flex: 1;
  height: calc(100vh - 120px) !important;
  min-height: 650px !important;
}

#lectureDeck:fullscreen .iframe-container iframe,
#lectureDeck:-webkit-full-screen .iframe-container iframe,
.deck-container:fullscreen .iframe-container iframe,
.deck-container:-webkit-full-screen .iframe-container iframe {
  height: 100% !important;
  min-height: 640px !important;
}

@media (max-height: 820px) {
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
      <span>📊 IA 340 Week 4 Lecture</span>
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

    <!-- SLIDE 1: Databases, Cloud Computing, and Hands-on PostgreSQL -->
    <div class="slide active" data-slide="1">
      <div class="slide-center-box">
        <h1 class="slide-main-title">Databases, Cloud Computing &amp; Hands-on PostgreSQL</h1>
        <p class="slide-subtitle">Understand the Choices, Then Build</p>
        <div class="slide-card-lead">
          <p style="margin-top: 0;"><strong>IA 340 &mdash; Data Mining, Modeling, and Knowledge Discovery</strong></p>
          <p>Dr. Xuebin Wei &bull; Monday September 14 and Wednesday September 16, 2026</p>
          <div style="display: flex; justify-content: space-around; margin: 1.2rem 0; gap: 1rem; flex-wrap: wrap;">
            <div style="background: #ffffff; border: 1px solid #d0d7de; border-left: 4px solid #0969da; border-radius: 6px; padding: 0.9rem 1.2rem; flex: 1; min-width: 260px; text-align: left;">
              <strong style="color: #0969da; font-size: 1.05rem;">Monday Focus:</strong>
              <div style="font-size: 0.92em; color: #57606a; margin-top: 0.4rem; line-height: 1.5;">
                Why databases &bull; Compute vs storage &bull; Data models &bull; Cloud benefits &bull; Google Cloud SQL setup &bull; <strong>$20 budget alert</strong>.
              </div>
            </div>
            <div style="background: #ffffff; border: 1px solid #d0d7de; border-left: 4px solid #1a7f37; border-radius: 6px; padding: 0.9rem 1.2rem; flex: 1; min-width: 260px; text-align: left;">
              <strong style="color: #1a7f37; font-size: 1.05rem;">Wednesday Focus:</strong>
              <div style="font-size: 0.92em; color: #57606a; margin-top: 0.4rem; line-height: 1.5;">
                <strong>Cloud SQL Studio first</strong> &bull; public schema &bull; Keys &amp; relationships &bull; ACID &bull; Normalization &bull; ERD Lab modeling &bull; SQL deployment.
              </div>
            </div>
          </div>
          <div style="background: #ddf4ff; border: 1px solid rgba(84, 174, 255, 0.4); border-radius: 6px; padding: 0.6rem 1rem; font-size: 0.92rem; color: #0969da; margin-top: 0.5rem;">
            <strong>Instance Lifecycle:</strong> Keep your Cloud SQL instance running through <strong>October 12, 2026</strong>. It will be reused for subsequent labs and the Mini Project.
          </div>
        </div>
        <div style="margin-top: 1.5rem;">
          <button class="deck-btn-primary" onclick="changeSlide(1)">Start Presentation ▶</button>
        </div>
      </div>
    </div>

    <!-- SLIDE 2: Step 01 — Monday — Why a database, and why the cloud? -->
    <div class="slide" data-slide="2">
      <span class="slide-badge">Step 01</span>
      <h2>01 — Monday — Why a database, and why the cloud?</h2>
      <div class="slide-text-large">
<p>Start with the reason for the tools, then build the service.</p>
<p><strong>Database needs → data formats and storage choices → database engines → cloud benefits and providers → Cloud SQL setup → Billing and budget alert.</strong></p>
<p>By the end of Monday, the instance is running and its <strong>$20 monthly budget alert</strong> is set. We will open Studio and design tables on Wednesday.</p>
      </div>
    </div>

    <!-- SLIDE 3: Step 02 — Why use a database? Think about a bank -->
    <div class="slide" data-slide="3">
      <span class="slide-badge">Step 02</span>
      <h2>02 — Why use a database? Think about a bank</h2>
      <div class="slide-text-large">
<p>A bank maintains account balances and transaction records. Customers can view their own balances and request deposits, withdrawals, or transfers. <strong>They cannot simply edit the balance field.</strong></p>
<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-4/why-database.svg" alt="A bank application validates customer requests and controls updates to shared account records" /></div>
<p>The authorized <strong>bank application</strong> checks a request and reads/writes the database. Many customers can use the service at once; permissions, constraints, and transactions help keep the records consistent.</p>
<p>Sharing a Drive folder or CSV alone does not supply those banking rules. Drive is useful for files; the bank needs controlled record-level operations. Rules help prevent invalid changes, but correct software and verified input are still necessary. <a href="https://www.postgresql.org/docs/18/tutorial-transactions.html" target="_blank" rel="noopener noreferrer">Transactions ↗</a> · <a href="https://www.postgresql.org/docs/18/ddl-constraints.html" target="_blank" rel="noopener noreferrer">Constraints ↗</a></p>
      </div>
    </div>

    <!-- SLIDE 4: Step 03 — Where does the computation happen? -->
    <div class="slide" data-slide="4">
      <span class="slide-badge">Step 03</span>
      <h2>03 — Where does the computation happen?</h2>
      <div class="slide-text-large">
<p>Colab and BI tools can ask a database for <strong>only the records or summary they need</strong>, rather than first importing the entire dataset.</p>
<p><strong>Left: Drive + Colab &bull; Center: The same example data &bull; Right: Database + Colab</strong></p>
<p>The question stays the same: <strong>What is the total population for 2024?</strong> Watch which computer filters/adds and what crosses the network.</p>
<p>Our earlier workflow calculates in Colab. The database route calculates the query on the database server and returns a small result. This separates notebook analysis from persistent data storage and management. PostgreSQL still needs its own CPU, memory, and disks.</p>
<p><strong>Important:</strong> asking for every row can recreate the memory problem. Drive also keeps files after Colab disconnects; persistence alone is not the database advantage. <a href="https://www.postgresql.org/docs/18/queries.html" target="_blank" rel="noopener noreferrer">Queries ↗</a> &bull; <a href="https://pandas.pydata.org/docs/user_guide/scale.html" target="_blank" rel="noopener noreferrer">Working with large data ↗</a></p>
<p style="margin-top: 1rem; color: #0969da; font-weight: 500;">Advance to the next slide to explore the interactive side-by-side workflow walkthrough.</p>
      </div>
    </div>

    <!-- SLIDE 5: Step 04 — Interactive: Same Data, Two Places to Compute -->
    <div class="slide slide-interactive" data-slide="5">
      <span class="slide-badge">Step 04</span>
      <h2>04 — Interactive: Same Data, Two Places to Compute</h2>
      <div class="slide-text-large">
<div class="iframe-container"><iframe src="{{ site.baseurl }}/assets/week-4/data-workflow.html" title="Same data. Two places to compute." loading="lazy"></iframe></div>
<p style="margin: 0.3rem 0; font-size: 0.9em; color: #57606a;">
  Interactive walkthrough: Same data. Two places to compute. | <a href="{{ site.baseurl }}/assets/week-4/data-workflow.html" target="_blank">Open in separate tab ↗</a>
</p>
      </div>
    </div>

    <!-- SLIDE 6: Step 05 — Structured, semi-structured, and unstructured data -->
    <div class="slide" data-slide="6">
      <span class="slide-badge">Step 05</span>
      <h2>05 — Structured, semi-structured, and unstructured data</h2>
      <div class="slide-text-large">
<p>Data format describes <strong>how information is organized</strong>. Storage describes <strong>where and how we manage it</strong>.</p>
<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-4/data-types.png" alt="Structured tables, semi-structured JSON or XML, and unstructured images, text, audio, and video" /></div>
<table>
<thead>
<tr><th>Data type</th><th>What its structure looks like</th><th>Familiar examples</th><th>Common storage choices</th></tr>
</thead>
<tbody>
<tr><td><strong>Structured</strong></td><td>Consistent fields, organized into rows and columns</td><td>County/year/population records; account transactions; a well-formed CSV</td><td>Relational databases such as PostgreSQL/MySQL; analytical warehouses such as BigQuery/Redshift</td></tr>
<tr><td><strong>Semi-structured</strong></td><td>Keys or tags organize records, but records need not all have identical fields</td><td>JSON returned by an API; XML documents</td><td>Document databases such as MongoDB; object storage; systems with JSON support</td></tr>
<tr><td><strong>Unstructured</strong></td><td>The main content is not arranged as a fixed table of fields</td><td>Photographs, audio, video, and free-form text</td><td>Object storage such as Cloud Storage/S3; data lakes built on that storage</td></tr>
</tbody>
</table>
<p>These are common matches, <strong>not exclusive rules</strong>. PostgreSQL can hold JSON; a data lake can contain CSV, JSON, and images. A social-media response may contain semi-structured metadata plus unstructured post text or images. <a href="https://www.ibm.com/think/topics/structured-vs-unstructured-data" target="_blank" rel="noopener noreferrer">Data formats ↗</a></p>
<p><strong>This week:</strong> design structured tables for the Census data we will load later.</p>
      </div>
    </div>

    <!-- SLIDE 7: Step 06 — Choose a data system for the job -->
    <div class="slide" data-slide="7">
      <span class="slide-badge">Step 06</span>
      <h2>06 — Choose a data system for the job</h2>
      <div class="slide-text-large">
<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-4/data-models.svg" alt="Data storage and database categories illustrated by their purpose" /></div>
<table>
<thead>
<tr><th>System</th><th>Useful for</th><th>Example</th></tr>
</thead>
<tbody>
<tr><td>File storage</td><td>Saving and sharing whole files</td><td>Google Drive</td></tr>
<tr><td>Relational database</td><td>Related records, SQL queries, constraints, transactions</td><td>PostgreSQL, MySQL</td></tr>
<tr><td>NoSQL database</td><td>Document, key–value, or graph models</td><td>MongoDB, Redis, Neo4j</td></tr>
<tr><td>Data warehouse</td><td>Analytical queries across large integrated datasets</td><td>BigQuery, Redshift</td></tr>
<tr><td>Data lake</td><td>Raw and curated datasets with tools and metadata</td><td>A lake built on S3 or Cloud Storage</td></tr>
</tbody>
</table>
<p>File storage and a data lake are not simply extra SQL engines. These categories describe different jobs, and some systems overlap. <a href="https://cloud.google.com/learn/what-is-a-data-warehouse" target="_blank" rel="noopener noreferrer">Data warehouses ↗</a> · <a href="https://cloud.google.com/learn/what-is-a-data-lake" target="_blank" rel="noopener noreferrer">Data lakes ↗</a></p>
      </div>
    </div>

    <!-- SLIDE 8: Step 07 — Google Drive is not our analytical data lake -->
    <div class="slide" data-slide="8">
      <span class="slide-badge">Step 07</span>
      <h2>07 — Google Drive is not our analytical data lake</h2>
      <div class="slide-text-large">
<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-4/data-lake.svg" alt="Cloud files contrasted with object storage supporting an analytical data lake" /></div>
<p>Google Drive is our personal/collaborative file store. An S3 or Google Cloud Storage <strong>bucket</strong> is object storage that can be a data lake's foundation. A lake also needs organization, metadata, access controls, and tools to process the data.</p>
<p>An empty bucket alone is not a complete analytical platform. A lake can contain structured CSV files as well as images or other formats. <a href="https://aws.amazon.com/big-data/datalakes-and-analytics/datalakes/" target="_blank" rel="noopener noreferrer">S3 data lakes ↗</a></p>
      </div>
    </div>

    <!-- SLIDE 9: Step 08 — Common relational database engines -->
    <div class="slide" data-slide="9">
      <span class="slide-badge">Step 08</span>
      <h2>08 — Common relational database engines</h2>
      <div class="slide-text-large">
<p>A <strong>database engine</strong> is the software that stores records, processes queries, and enforces database rules. These are alternatives—not the tools we use to draw a diagram or open a browser console.</p>
<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-4/database-engines.svg" alt="PostgreSQL and MySQL compared with Microsoft SQL Server and Oracle Database" /></div>
<table>
<thead>
<tr><th>Engine</th><th>Open source or commercial?</th></tr>
</thead>
<tbody>
<tr><td><strong>PostgreSQL</strong></td><td>Open source, under the PostgreSQL License</td></tr>
<tr><td><strong>MySQL</strong></td><td>Community Edition is open source; commercial editions/licenses also exist</td></tr>
<tr><td><strong>Microsoft SQL Server</strong></td><td>Proprietary/commercial; free Express and Developer editions have defined limits or purposes</td></tr>
<tr><td><strong>Oracle Database</strong></td><td>Proprietary/commercial; a limited free edition also exists</td></tr>
</tbody>
</table>
<p>We use <strong>PostgreSQL</strong>. Open-source software does not make its cloud hosting free. <a href="https://www.postgresql.org/about/licence/" target="_blank" rel="noopener noreferrer">PostgreSQL ↗</a> · <a href="https://www.mysql.com/products/community/" target="_blank" rel="noopener noreferrer">MySQL ↗</a> · <a href="https://www.microsoft.com/licensing/guidance/SQL" target="_blank" rel="noopener noreferrer">SQL Server ↗</a> · <a href="https://www.oracle.com/database/technologies/appdev/xe.html" target="_blank" rel="noopener noreferrer">Oracle ↗</a></p>
      </div>
    </div>

    <!-- SLIDE 10: Step 09 — Why cloud computing? -->
    <div class="slide" data-slide="10">
      <span class="slide-badge">Step 09</span>
      <h2>09 — Why cloud computing?</h2>
      <div class="slide-text-large">
<p>Cloud computing makes <strong>compute, storage, networking, and managed services</strong> available over a network. Providers operate real physical servers in data centers.</p>
<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-4/cloud-physical.svg" alt="Cloud computing relies on physical servers, networks, and data centers" /></div>
<p>The cloud is broader than a database. It can host applications, run virtual machines, store files, and provide AI or database services. A database can also run on your own computer; cloud hosting is a separate choice.</p>
<p>We will examine four advantages: <strong>accessibility, scalability, availability, and lower upfront cost</strong>. Each involves choices and trade-offs. <a href="https://cloud.google.com/learn/advantages-of-cloud-computing" target="_blank" rel="noopener noreferrer">Cloud benefits ↗</a></p>
      </div>
    </div>

    <!-- SLIDE 11: Step 10 — Cloud benefit: accessibility -->
    <div class="slide" data-slide="11">
      <span class="slide-badge">Step 10</span>
      <h2>10 — Cloud benefit: accessibility</h2>
      <div class="slide-text-large">
<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-4/many-users.svg" alt="Authorized users at campus, home, and another location connect to the same cloud service" /></div>
<p>Authorized applications and users can reach the service from different locations. Your notebook does not need to run on the same physical computer as the database.</p>
<p>For this course, browser tools and later Colab connections let us work without installing a local database server on every laptop. <strong>Accessible does not mean open to everyone:</strong> network routes, authentication, and permissions still apply. <a href="https://cloud.google.com/learn/advantages-of-cloud-computing" target="_blank" rel="noopener noreferrer">Cloud benefits ↗</a></p>
      </div>
    </div>

    <!-- SLIDE 12: Step 11 — Cloud benefit: scalability -->
    <div class="slide" data-slide="12">
      <span class="slide-badge">Step 11</span>
      <h2>11 — Cloud benefit: scalability</h2>
      <div class="slide-text-large">
<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-4/large-data.svg" alt="A small cloud allocation can be increased rather than purchasing new physical hardware" /></div>
<p><strong>Scale up:</strong> give an instance more CPU or memory.<br>
<strong>Scale out:</strong> distribute work across more machines, using a supported architecture.</p>
<p>Start with what the workload needs, then adjust. This avoids buying peak-size hardware before you need it. Scaling is not always automatic or disruption-free, and larger allocations generally cost more.</p>
<p>Our classroom stays on the small <strong><code>db-f1-micro</code></strong> configuration. We are explaining scalability, not asking you to upgrade it. <a href="https://cloud.google.com/learn/advantages-of-cloud-computing" target="_blank" rel="noopener noreferrer">Cloud benefits ↗</a> · <a href="https://docs.cloud.google.com/sql/docs/postgres/instance-settings" target="_blank" rel="noopener noreferrer">Instance settings ↗</a></p>
      </div>
    </div>

    <!-- SLIDE 13: Step 12 — Cloud benefit: availability and redundancy -->
    <div class="slide" data-slide="13">
      <span class="slide-badge">Step 12</span>
      <h2>12 — Cloud benefit: availability and redundancy</h2>
      <div class="slide-text-large">
<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-4/region-zones.svg" alt="A primary database and a configured standby are placed in different zones of one region" /></div>
<p><strong>Availability</strong> asks whether the service can respond when needed. <strong>Redundancy</strong> adds another usable component or copy so one failure need not stop everything.</p>
<p>Providers offer infrastructure and managed options for building highly available systems. <strong>Those options must be configured; cloud hosting alone is not a guarantee against downtime.</strong> Our low-cost classroom uses one zone, not an HA standby. <a href="https://docs.cloud.google.com/sql/docs/postgres/high-availability" target="_blank" rel="noopener noreferrer">Cloud SQL high availability ↗</a></p>
      </div>
    </div>

    <!-- SLIDE 14: Step 13 — Regions, zones, and data centers -->
    <div class="slide" data-slide="14">
      <span class="slide-badge">Step 13</span>
      <h2>13 — Regions, zones, and data centers</h2>
      <div class="slide-text-large">
<p><strong>A provider has regions; each region contains multiple zones.</strong></p>
<p>In our rehearsal, we choose <strong><code>us-central1 (Iowa)</code></strong> and a single zone to keep charges minimal for learning.</p>
<p>A production deployment needing higher availability can configure automatic standby in a second zone.</p>
<div style="background: #f6f8fa; border: 1px solid #d0d7de; border-radius: 6px; padding: 1rem; margin: 1rem 0;">
  <strong>Core Cloud Infrastructure Hierarchy:</strong>
  <ul style="margin: 0.5rem 0 0 1.2rem;">
    <li><strong>Data Center:</strong> A physical facility housing servers, power, and networking.</li>
    <li><strong>Availability Zone (AZ):</strong> One or more discrete data centers with independent power and cooling.</li>
    <li><strong>Region:</strong> A geographic area with multiple isolated zones connected via low-latency networks.</li>
    <li><strong>Standby / Failover:</strong> A redundant instance ready in an alternate zone in case the primary fails.</li>
  </ul>
</div>
<p><a href="https://docs.cloud.google.com/docs/geography-and-regions" target="_blank" rel="noopener noreferrer">Cloud geography ↗</a> &bull; <a href="https://docs.cloud.google.com/sql/docs/postgres/high-availability" target="_blank" rel="noopener noreferrer">High availability ↗</a></p>
<p style="margin-top: 1rem; color: #0969da; font-weight: 500;">Advance to the next slide to walk through the region, zone, and failover model interactively.</p>
      </div>
    </div>

    <!-- SLIDE 15: Step 14 — Interactive: Region → Zones → Placement Walkthrough -->
    <div class="slide slide-interactive" data-slide="15">
      <span class="slide-badge">Step 14</span>
      <h2>14 — Interactive: Region → Zones → Placement Walkthrough</h2>
      <div class="slide-text-large">
<div class="iframe-container"><iframe src="{{ site.baseurl }}/assets/week-4/cloud-regions.html" title="Region, Zones, and Database Placement" loading="lazy"></iframe></div>
<p style="margin: 0.3rem 0; font-size: 0.9em; color: #57606a;">
  Interactive walkthrough: Region &rarr; zones &rarr; database placement | <a href="{{ site.baseurl }}/assets/week-4/cloud-regions.html" target="_blank">Open in separate tab ↗</a>
</p>
      </div>
    </div>

    <!-- SLIDE 16: Step 15 — Cloud benefit: lower upfront cost and pay as you go -->
    <div class="slide" data-slide="16">
      <span class="slide-badge">Step 15</span>
      <h2>15 — Cloud benefit: lower upfront cost and pay as you go</h2>
      <div class="slide-text-large">
<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-4/cloud-cost.svg" alt="Cloud charges can include compute time, provisioned storage, and data transfer" /></div>
<p>Instead of purchasing servers, arranging power/cooling, and maintaining everything ourselves, we rent resources. <strong>Pay as you go</strong> ties charges to the service's billing units—for example allocated machine time, storage capacity, or data transfer.</p>
<p>For Cloud SQL, a running instance can accrue charges even with empty tables or no active query. <strong>Lower upfront cost is not a promise that every cloud system is cheaper.</strong> We must choose a small configuration and review Billing.</p>
<p>In this class, keep the required instance running through <strong>October 12, 2026</strong>; monitor credits and the budget rather than stopping it between classes. <a href="https://cloud.google.com/learn/advantages-of-cloud-computing" target="_blank" rel="noopener noreferrer">Cloud benefits ↗</a> · <a href="https://cloud.google.com/sql/pricing" target="_blank" rel="noopener noreferrer">Cloud SQL pricing ↗</a></p>
      </div>
    </div>

    <!-- SLIDE 17: Step 16 — Three major cloud providers -->
    <div class="slide" data-slide="17">
      <span class="slide-badge">Step 16</span>
      <h2>16 — Three major cloud providers</h2>
      <div class="slide-text-large">
<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-4/cloud-providers.svg" alt="Amazon Web Services, Microsoft Azure, and Google Cloud" /></div>
<p><strong>Amazon Web Services (AWS), Microsoft Azure, and Google Cloud</strong> provide much more than storage: compute, networking, databases, and other managed services. They are three major examples, not the only providers.</p>
<p>The same PostgreSQL engine can be hosted through different providers. Examples include <strong>Amazon RDS for PostgreSQL</strong>, <strong>Azure Database for PostgreSQL</strong>, and <strong>Google Cloud SQL for PostgreSQL</strong>.</p>
<p>Provider = who operates the cloud. Engine = the database software. <a href="https://aws.amazon.com/rds/" target="_blank" rel="noopener noreferrer">AWS RDS ↗</a> · <a href="https://azure.microsoft.com/en-us/products/postgresql/" target="_blank" rel="noopener noreferrer">Azure PostgreSQL ↗</a> · <a href="https://docs.cloud.google.com/sql/docs/postgres/introduction" target="_blank" rel="noopener noreferrer">Cloud SQL ↗</a></p>
      </div>
    </div>

    <!-- SLIDE 18: Step 17 — Why Google Cloud for this course? -->
    <div class="slide" data-slide="18">
      <span class="slide-badge">Step 17</span>
      <h2>17 — Why Google Cloud for this course?</h2>
      <div class="slide-text-large">
<p>Our course already uses <strong>Google Drive and Colab</strong>, and Google integrates <strong>Gemini assistance</strong> into parts of its cloud ecosystem. This gives us a connected environment for learning data and AI tools.</p>
<p>Google also offers free usage tiers for selected products and trial offers with eligibility/usage limits. Our course has <strong>education credits</strong>.</p>
<p><strong>Our custom Cloud SQL instance is a billable resource using those credits—not an always-free database.</strong> An eligible charge covered by remaining credits can produce a net amount due of zero.</p>
<p>We will manually design the ER diagram. AI integration is a reason for the platform choice, not a reason to skip learning table design. <a href="https://docs.cloud.google.com/gemini/docs/overview" target="_blank" rel="noopener noreferrer">Gemini for Google Cloud ↗</a> · <a href="https://cloud.google.com/free" target="_blank" rel="noopener noreferrer">Free offers and limits ↗</a></p>
      </div>
    </div>

    <!-- SLIDE 19: Step 18 — Monday hands-on — the service and tools we will use -->
    <div class="slide" data-slide="19">
      <span class="slide-badge">Step 18</span>
      <h2>18 — Monday hands-on — the service and tools we will use</h2>
      <div class="slide-text-large">
<p>Now apply the concepts. Keep these names separate from the list of database engines:</p>
<table>
<thead>
<tr><th>Item</th><th>Its role</th></tr>
</thead>
<tbody>
<tr><td><strong>Cloud SQL</strong></td><td>Google's managed relational-database service</td></tr>
<tr><td><strong>Our Cloud SQL instance <code>ia340</code></strong></td><td>The running service configured for PostgreSQL</td></tr>
<tr><td><strong>Cloud SQL Studio</strong></td><td>Browser tool for working with the database</td></tr>
<tr><td><strong>ERD Lab</strong></td><td>Visual design tool used on Wednesday; it exports the design as SQL</td></tr>
</tbody>
</table>
<p>We will use the existing <strong><code>postgres</code> database</strong> and <strong><code>postgres</code> username</strong> inside the instance. The identical spelling does not make the database and login the same object. <a href="https://docs.cloud.google.com/sql/docs/postgres/introduction" target="_blank" rel="noopener noreferrer">Cloud SQL ↗</a> · <a href="https://docs.cloud.google.com/sql/docs/postgres/manage-data-using-studio" target="_blank" rel="noopener noreferrer">Studio ↗</a></p>
      </div>
    </div>

    <!-- SLIDE 20: Step 19 — A project organizes your cloud resources -->
    <div class="slide" data-slide="20">
      <span class="slide-badge">Step 19</span>
      <h2>19 — A project organizes your cloud resources</h2>
      <div class="slide-text-large">
<p>Before creating a database, create a <strong>Google Cloud project</strong>: a named container for cloud resources, enabled services, and their settings. The project is not the database itself.</p>
<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-4/project-billing.svg" alt="A billing account funds a project that contains a database instance" /></div>
<p>A <strong>billing account</strong> pays for the resources in linked projects. Use the existing education billing account that received your <strong>$50 course credit</strong>; the remaining balance may already be lower. We do not redeem the coupon again this week. <a href="https://docs.cloud.google.com/resource-manager/docs/creating-managing-projects" target="_blank" rel="noopener noreferrer">Projects ↗</a></p>
      </div>
    </div>

    <!-- SLIDE 21: Step 20 — Open the project selector -->
    <div class="slide" data-slide="21">
      <span class="slide-badge">Step 20</span>
      <h2>20 — Open the project selector</h2>
      <div class="slide-text-large">
<p>In Google Cloud Console, open the project selector and click <strong>New project</strong>. Do not create the course database inside an unrelated project.</p>
<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-4/screenshots/Screenshot%202026-09-13%20142710.png" alt="Google Cloud resource selector and New project button" /></div>
      </div>
    </div>

    <!-- SLIDE 22: Step 21 — Create the course project and link billing -->
    <div class="slide" data-slide="22">
      <span class="slide-badge">Step 21</span>
      <h2>21 — Create the course project and link billing</h2>
      <div class="slide-text-large">
<p>Enter a course project name, such as <code>ia340demo</code>, and select your existing <strong>Billing Account for Education</strong>. Use your own available, unique project ID. The name in the image is the instructor's example.</p>
<p>The rehearsal uses <strong>No organization</strong>. Follow the course account's available setting; do not copy an unrelated organization. Click <strong>Create</strong>.</p>
<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-4/screenshots/Screenshot%202026-09-13%20142759.png" alt="New project form with a course project name and education billing account" /></div>
      </div>
    </div>

    <!-- SLIDE 23: Step 22 — Select the new project -->
    <div class="slide" data-slide="23">
      <span class="slide-badge">Step 22</span>
      <h2>22 — Select the new project</h2>
      <div class="slide-text-large">
<p>When creation finishes, select the new project. Check its name in the Console's top bar before enabling services or creating resources.</p>
<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-4/screenshots/Screenshot%202026-09-13%20142825.png" alt="Project-created notification with Select project" /></div>
<p><strong>Check:</strong> A project contains the resources; the linked billing account supplies payment or credits.</p>
      </div>
    </div>

    <!-- SLIDE 24: Step 23 — Find Cloud SQL -->
    <div class="slide" data-slide="24">
      <span class="slide-badge">Step 23</span>
      <h2>23 — Find Cloud SQL</h2>
      <div class="slide-text-large">
<p>With the course project selected, search the Console for <strong>Cloud SQL</strong>, then open the service.</p>
<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-4/screenshots/Screenshot%202026-09-13%20144007.png" alt="Searching the selected Google Cloud project for Cloud SQL" /></div>
      </div>
    </div>

    <!-- SLIDE 25: Step 24 — Choose the custom creation path -->
    <div class="slide" data-slide="25">
      <span class="slide-badge">Step 24</span>
      <h2>24 — Choose the custom creation path</h2>
      <div class="slide-text-large">
<p>On the welcome page, use <strong>Create custom instance</strong>. Do not accept the free/trial preset or the first large configuration simply because it appears first.</p>
<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-4/screenshots/Screenshot%202026-09-13%20144027.png" alt="Cloud SQL welcome page showing Create custom instance" /></div>
      </div>
    </div>

    <!-- SLIDE 26: Step 25 — Choose the PostgreSQL engine -->
    <div class="slide" data-slide="26">
      <span class="slide-badge">Step 25</span>
      <h2>25 — Choose the PostgreSQL engine</h2>
      <div class="slide-text-large">
<p>Select <strong>PostgreSQL</strong> from the available database engines. The other engines and AlloyDB promotion are not part of this lab.</p>
<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-4/screenshots/Screenshot%202026-09-13%20144043.png" alt="Cloud SQL engine selection with PostgreSQL" /></div>
      </div>
    </div>

    <!-- SLIDE 27: Step 26 — Enable the requested APIs -->
    <div class="slide" data-slide="27">
      <span class="slide-badge">Step 26</span>
      <h2>26 — Enable the requested APIs</h2>
      <div class="slide-text-large">
<p>The rehearsal prompts for <strong>Compute Engine API</strong> and <strong>Cloud SQL Admin API</strong>. Click <strong>Enable</strong> and wait. An API here enables the service's management interface; it is not a database table or a login.</p>
<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-4/screenshots/Screenshot%202026-09-13%20144059.png" alt="Enable Compute Engine API and Cloud SQL Admin API prompt" /></div>
<p>If an API is already enabled, continue without repeating the action. Do not start a separate VM for this managed-database lab.</p>
      </div>
    </div>

    <!-- SLIDE 28: Step 27 — Select Enterprise, not Enterprise Plus -->
    <div class="slide" data-slide="28">
      <span class="slide-badge">Step 27</span>
      <h2>27 — Select Enterprise, not Enterprise Plus</h2>
      <div class="slide-text-large">
<p>Choose <strong>Enterprise</strong>. We are selecting a small teaching configuration, not buying the larger production defaults.</p>
<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-4/screenshots/Screenshot%202026-09-13%20144349.png" alt="Enterprise edition selected for the Cloud SQL instance" /></div>
<p>The general availability claims on the edition screen do not mean every small shared-core configuration has the same service-level guarantee. <a href="https://docs.cloud.google.com/sql/docs/postgres/instance-settings" target="_blank" rel="noopener noreferrer">Instance settings ↗</a></p>
      </div>
    </div>

    <!-- SLIDE 29: Step 28 — Set the preset, version, instance name, and password -->
    <div class="slide" data-slide="29">
      <span class="slide-badge">Step 28</span>
      <h2>28 — Set the preset, version, instance name, and password</h2>
      <div class="slide-text-large">
<p>Choose <strong>Sandbox</strong>, <strong>PostgreSQL 18</strong>, and instance ID <strong><code>ia340</code></strong>. Keep the default database username <strong><code>postgres</code></strong>.</p>
<p>Set the password to <strong><code>IA340-data</code></strong>: uppercase <strong>I</strong>, uppercase <strong>A</strong>, digits <strong>3 4 0</strong>, <strong>hyphen (-)</strong>, lowercase <strong>d a t a</strong>; no spaces.</p>
<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-4/screenshots/Screenshot%202026-09-13%20144451.png" alt="Sandbox preset, PostgreSQL 18, instance ID ia340, and the shared classroom password setting" /></div>
<p><strong>Do not confuse instance ID <code>ia340</code> with database name.</strong> We will use the existing database <code>postgres</code>, as shown later in Studio. If a required password policy rejects the shared value, ask the instructor rather than silently using another password. <a href="https://docs.cloud.google.com/sql/docs/postgres/create-manage-users" target="_blank" rel="noopener noreferrer">Default user ↗</a></p>
      </div>
    </div>

    <!-- SLIDE 30: Step 29 — Choose the region and single-zone deployment -->
    <div class="slide" data-slide="30">
      <span class="slide-badge">Step 29</span>
      <h2>29 — Choose the region and single-zone deployment</h2>
      <div class="slide-text-large">
<p>Select <strong><code>us-central1 (Iowa)</code></strong> and <strong>Single zone</strong>. The optional zone control chooses a zone within this region; it does not create a standby.</p>
<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-4/screenshots/Screenshot%202026-09-13%20144512.png" alt="Iowa region and Single zone selected" /></div>
<p><strong>Explain before clicking:</strong> Region chooses geography; the single-zone setting chooses the availability design for this instance.</p>
      </div>
    </div>

    <!-- SLIDE 31: Step 30 — Choose the actual shared-core micro machine -->
    <div class="slide" data-slide="31">
      <span class="slide-badge">Step 30</span>
      <h2>30 — Choose the actual shared-core micro machine</h2>
      <div class="slide-text-large">
<p>Expand <strong>Customize your instance → Machine configuration</strong>. Select <strong>General purpose – Shared core</strong>, then the small <strong>1 vCPU, 0.614 GB</strong> option. In the final summary, verify <strong><code>db-f1-micro</code></strong>.</p>
<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-4/screenshots/Screenshot%202026-09-13%20144612.png" alt="General purpose Shared core and the 0.614 GB option" /></div>
<p>“1 vCPU” by itself does not identify the low-cost tier. The earlier larger instance also exposed a vCPU count; the <strong>machine type and RAM together</strong> distinguish this classroom configuration. Do not choose 1 vCPU with several GB of RAM and assume it is the same machine.</p>
<p>Use <strong>10 GB SSD</strong>. The instructor's later storage check left <strong>Auto storage increase enabled</strong>; that is accepted for this small exercise. Expansion, if triggered, can increase storage charges. <a href="https://docs.cloud.google.com/sql/docs/postgres/instance-settings" target="_blank" rel="noopener noreferrer">Settings ↗</a></p>
      </div>
    </div>

    <!-- SLIDE 32: Step 31 — Before network setup: address, port, and login -->
    <div class="slide" data-slide="32">
      <span class="slide-badge">Step 31</span>
      <h2>31 — Before network setup: address, port, and login</h2>
      <div class="slide-text-large">
<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-4/access-paths.svg" alt="Browser management access and an external PostgreSQL client connection" /></div>
<p><strong>Public IP</strong> is the externally routable address of the database service. <strong>Port <code>5432</code></strong> is the PostgreSQL connection endpoint on that address. <strong>Username and password</strong> authenticate a database login.</p>
<p>Authorized networks decide which source addresses may attempt a direct connection. Public access does not remove password checking. Private IP requires clients to have an actual private network route; using the same Google account is not enough. <a href="https://docs.cloud.google.com/sql/docs/postgres/authorize-networks" target="_blank" rel="noopener noreferrer">Networks ↗</a></p>
      </div>
    </div>

    <!-- SLIDE 33: Step 32 — The classroom public-access exception -->
    <div class="slide" data-slide="33">
      <span class="slide-badge">Step 32</span>
      <h2>32 — The classroom public-access exception</h2>
      <div class="slide-text-large">
<p>This exercise permits <strong><code>0.0.0.0/0</code></strong>—all IPv4 source addresses—to simplify later classroom connections. It is an allowed-source range, <strong>not your database's Public IP</strong>.</p>
<p>Everyone uses <strong><code>postgres</code> / <code>IA340-data</code></strong> for teaching convenience. A shared administrative login and broad network access are <strong>NOT production best practice</strong>. Someone with the endpoint and credentials could read, change, or delete the data.</p>
<p><strong>Do not publish your Public IP. Submit it ONLY in Canvas.</strong> Keeping it private is a precaution, not a replacement for proper access controls. A normal direct public connection should restrict needed source IPs and use individual, appropriately limited credentials. Colab/BI tools do not inherently require allowing the whole Internet. <a href="https://docs.cloud.google.com/sql/docs/postgres/authorize-networks" target="_blank" rel="noopener noreferrer">Network access ↗</a></p>
      </div>
    </div>

    <!-- SLIDE 34: Step 33 — Enable the classroom public network -->
    <div class="slide" data-slide="34">
      <span class="slide-badge">Step 33</span>
      <h2>33 — Enable the classroom public network</h2>
      <div class="slide-text-large">
<p>Enable <strong>Public IP</strong>. Add an authorized network named <code>publicaccess</code>, enter <strong><code>0.0.0.0/0</code></strong>, acknowledge the warning, and save the entry.</p>
<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-4/screenshots/Screenshot%202026-09-13%20144729.png" alt="Public IP and the explicitly acknowledged all-IPv4 classroom network" /></div>
<p>This is the temporary classroom exception explained above—not a recommended production configuration. The address range is not your submission.</p>
      </div>
    </div>

    <!-- SLIDE 35: Step 34 — Require encrypted connections -->
    <div class="slide" data-slide="35">
      <span class="slide-badge">Step 34</span>
      <h2>34 — Require encrypted connections</h2>
      <div class="slide-text-large">
<p>In <strong>Security</strong>, select <strong>Allow only SSL connections</strong>. Do not choose unencrypted traffic or the separate client-certificate requirement.</p>
<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-4/screenshots/Screenshot%202026-09-13%20145032.png" alt="Allow only SSL connections selected" /></div>
<p>This setting encrypts traffic in transit. Later Python/Colab code will request an encrypted connection; it does not require students to manage certificates. Leave unrelated server-certificate controls at the demonstrated defaults. <a href="https://docs.cloud.google.com/sql/docs/postgres/configure-ssl-instance" target="_blank" rel="noopener noreferrer">SSL modes ↗</a></p>
      </div>
    </div>

    <!-- SLIDE 36: Step 35 — Before backup setup: recovery is different from failover -->
    <div class="slide" data-slide="36">
      <span class="slide-badge">Step 35</span>
      <h2>35 — Before backup setup: recovery is different from failover</h2>
      <div class="slide-text-large">
<p>A <strong>backup</strong> preserves a recoverable copy from an earlier time. It can help after accidental deletion or corruption. <strong>Failover</strong> switches service to a configured standby after an outage.</p>
<p>A standby receives ongoing changes; it can also receive an accidental deletion. It therefore does not replace a historical backup.</p>
<p>For this small, reproducible teaching exercise, we use <strong>single zone, manual-only backup mode, and no point-in-time recovery</strong> to reduce cost and setup work. This is not the design for a production bank. Keep your ERD model so you can rebuild the structure. <a href="https://docs.cloud.google.com/sql/docs/postgres/high-availability" target="_blank" rel="noopener noreferrer">High availability ↗</a> · <a href="https://docs.cloud.google.com/sql/docs/postgres/instance-settings" target="_blank" rel="noopener noreferrer">Backup settings ↗</a></p>
      </div>
    </div>

    <!-- SLIDE 37: Step 36 — Use the demonstrated backup settings -->
    <div class="slide" data-slide="37">
      <span class="slide-badge">Step 36</span>
      <h2>36 — Use the demonstrated backup settings</h2>
      <div class="slide-text-large">
<p>Select <strong>Standard backups</strong>. For this disposable exercise, leave <strong>automated daily backups</strong> and <strong>point-in-time recovery</strong> unchecked. This results in manual-only backup capability, not an existing saved backup.</p>
<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-4/screenshots/Screenshot%202026-09-13%20145050.png" alt="Standard backups with automated daily backups and point-in-time recovery unchecked" /></div>
<p>Without a usable backup, accidental deletion may not be recoverable. Keep the ERD model/export so you can rebuild the empty structure if necessary.</p>
      </div>
    </div>

    <!-- SLIDE 38: Step 37 — Read the summary before creating -->
    <div class="slide" data-slide="38">
      <span class="slide-badge">Step 37</span>
      <h2>37 — Read the summary before creating</h2>
      <div class="slide-text-large">
<p>Verify <strong>Enterprise · PostgreSQL 18 · <code>db-f1-micro</code> · about 0.614 GB RAM · 10 GB SSD · Public IP · single zone · manual backups · PITR disabled</strong>.</p>
<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-4/screenshots/Screenshot%202026-09-13%20145125.png" alt="Final low-cost Cloud SQL configuration summary" /></div>
<p>Review the displayed estimate, then click <strong>Create</strong>. Throughput and IOPS rows describe capacity limits; they are not a separate instruction to buy more resources.</p>
      </div>
    </div>

    <!-- SLIDE 39: Step 38 — Wait for the operation to finish -->
    <div class="slide" data-slide="39">
      <span class="slide-badge">Step 38</span>
      <h2>38 — Wait for the operation to finish</h2>
      <div class="slide-text-large">
<p>Creation can take several minutes. Use <strong>Operations</strong> to check progress. Do not click Create again and accidentally make another instance.</p>
<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-4/screenshots/Screenshot%202026-09-13%20145819.png" alt="Cloud SQL operation showing instance creation in progress" /></div>
<p>Continue when the instance is running. Closing a browser tab does not stop a running instance or its charges.</p>
      </div>
    </div>

    <!-- SLIDE 40: Step 39 — Understand usage cost and credit offsets -->
    <div class="slide" data-slide="40">
      <span class="slide-badge">Step 39</span>
      <h2>39 — Understand usage cost and credit offsets</h2>
      <div class="slide-text-large">
<p>Open <strong>Billing</strong> for the linked education billing account. The instructor's account-period example shows <strong>$4.79 cost − $4.79 savings = $0.00</strong>.</p>
<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-4/screenshots/Screenshot%202026-09-13%20151503.png" alt="Billing overview displays usage cost, savings, and a zero net amount for the displayed period" /></div>
<p>The class credit can cover eligible costs while it remains available. <strong>A zero net amount does not mean no resources or credits were consumed, or that future usage is always free.</strong> Check both usage and remaining credits.</p>
<p>This screenshot covers the displayed account/date range; it is <strong>not a measured daily price for the new micro instance</strong>. To investigate spending, open <strong>Reports</strong>, select the period/project, and compare service or SKU usage before credit offsets. <a href="https://docs.cloud.google.com/billing/docs/how-to/reports" target="_blank" rel="noopener noreferrer">Billing reports ↗</a></p>
      </div>
    </div>

    <!-- SLIDE 41: Step 40 — Create the $20 monthly budget alert -->
    <div class="slide" data-slide="41">
      <span class="slide-badge">Step 40</span>
      <h2>40 — Create the $20 monthly budget alert</h2>
      <div class="slide-text-large">
<p>On the Billing overview's <strong>Create a budget alert</strong> card, choose a custom amount, enter <strong>20</strong>, and click <strong>Create</strong>. Then open <strong>View budgets & alerts</strong> and select the budget.</p>
<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-4/screenshots/Screenshot%202026-09-13%20151554.png" alt="Create a monthly billing-account budget alert with custom amount 20 dollars" /></div>
<p>The card describes an alert for the current month/billing account. In the full budget, verify its <strong>time range and project/account scope</strong> match what you intend to watch. A monthly budget resets for a new month; the course credit does not renew just because a budget resets. <a href="https://docs.cloud.google.com/billing/docs/how-to/budgets" target="_blank" rel="noopener noreferrer">Budgets ↗</a></p>
      </div>
    </div>

    <!-- SLIDE 42: Step 41 — Set the thresholds and notification recipients -->
    <div class="slide" data-slide="42">
      <span class="slide-badge">Step 41</span>
      <h2>41 — Set the thresholds and notification recipients</h2>
      <div class="slide-text-large">
<p>Open the budget's <strong>Actions</strong> section. The rehearsal configures four <strong>Actual</strong> spending thresholds:</p>
<ul>
  <li><strong>50%</strong> &bull; Triggers alert at <strong>$10</strong></li>
  <li><strong>90%</strong> &bull; Triggers alert at <strong>$18</strong></li>
  <li><strong>100%</strong> &bull; Triggers alert at <strong>$20</strong></li>
  <li><strong>150%</strong> &bull; Triggers alert at <strong>$30</strong></li>
</ul>
<p>Keep email notifications to <strong>billing admins and users</strong> as demonstrated, confirm you receive those emails, and click <strong>Save</strong>.</p>
<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-4/screenshots/Screenshot%202026-09-13%20151730.png" alt="Budget actions with four Actual thresholds and billing-admin/user email notifications" /></div>
<p><strong>A budget alert is a warning, NOT a $20 spending cap.</strong> It does not automatically stop the instance. Do not wait for an email before checking resources you know are running. <a href="https://docs.cloud.google.com/billing/docs/how-to/budgets" target="_blank" rel="noopener noreferrer">Budget alerts ↗</a></p>
      </div>
    </div>

    <!-- SLIDE 43: Step 42 — Check what the budget measures before relying on it -->
    <div class="slide" data-slide="43">
      <span class="slide-badge">Step 42</span>
      <h2>42 — Check what the budget measures before relying on it</h2>
      <div class="slide-text-large">
<p>The last screenshot shows the alert thresholds, but not the budget's <strong>Savings/credits</strong> selection.</p>
<p><strong>Additional setup check:</strong> inspect <strong>Scope → Savings</strong> in the full budget. If education credits are subtracted, net cost can stay at zero and a $20 net-spend alert may not warn you when $20 of credit has been used.</p>
<p>For a budget intended to monitor <strong>usage before credits</strong>, Google documents leaving the Savings options unselected. Confirm this choice with the instructor; it is additional guidance, not a setting proven by the screenshots. Continue checking remaining credit separately. <a href="https://docs.cloud.google.com/billing/docs/how-to/budgets" target="_blank" rel="noopener noreferrer">Budget calculation basis ↗</a></p>
      </div>
    </div>

    <!-- SLIDE 44: Step 43 — Monday checkpoint: service ready -->
    <div class="slide" data-slide="44">
      <span class="slide-badge">Step 43</span>
      <h2>43 — Monday checkpoint: service ready</h2>
      <div class="slide-text-large">
<p>Your course project is linked to the education billing account. The <strong><code>db-f1-micro</code> instance is Running</strong>, and the <strong>$20 monthly budget alert</strong> is saved.</p>
<p>Keep the instance running through <strong>October 12, 2026</strong>, including that day. Do not stop or delete it before then. We will use the same service for the next classes and Mini Project.</p>
<p><strong>Monday is complete. On Wednesday, we will open Studio, inspect the empty database, and design its tables.</strong></p>
      </div>
    </div>

    <!-- SLIDE 45: Step 44 — Wednesday — Open the empty database first -->
    <div class="slide" data-slide="45">
      <span class="slide-badge">Step 44</span>
      <h2>44 — Wednesday — Open the empty database first</h2>
      <div class="slide-text-large">
<p>Return to the instance created on Monday. Open <strong>Cloud SQL Studio</strong>, log in, and look around before creating any tables.</p>
<p><strong>Studio → empty database and public schema → rows, columns, and keys → relationships and ACID → normalization → ERD Lab design → implement the model.</strong></p>
      </div>
    </div>

    <!-- SLIDE 46: Step 45 — Log in through Cloud SQL Studio -->
    <div class="slide" data-slide="46">
      <span class="slide-badge">Step 45</span>
      <h2>45 — Log in through Cloud SQL Studio</h2>
      <div class="slide-text-large">
<p>Open <strong>Cloud SQL Studio</strong>. Select database <strong><code>postgres</code></strong>, <strong>Built-in database authentication</strong>, user <strong><code>postgres</code></strong>, and password <strong><code>IA340-data</code></strong>. Click <strong>Authenticate</strong>.</p>
<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-4/screenshots/Screenshot%202026-09-13%20150042.png" alt="Cloud SQL Studio login using database postgres and user postgres" /></div>
<p>This verifies the browser login route. A later external connection check through your Public IP is a separate test.</p>
      </div>
    </div>

    <!-- SLIDE 47: Step 46 — Understand the public schema and Explorer -->
    <div class="slide" data-slide="47">
      <span class="slide-badge">Step 46</span>
      <h2>46 — Understand the public schema and Explorer</h2>
      <div class="slide-text-large">
<p>The Explorer shows <strong>database <code>postgres</code> → schema <code>public</code> → Tables, Views, and other objects</strong>. New tables are not required yet.</p>
<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-4/screenshots/Screenshot%202026-09-13%20150116.png" alt="Studio Explorer with postgres database, public default schema, and empty object groups" /></div>
<p>A <strong>schema</strong> is like a folder organizing tables inside one database—more precisely a namespace. PostgreSQL schemas do not nest like disk folders. <code>public.name</code> means table <code>name</code> in schema <code>public</code>; <strong>this <code>public</code> is not the Public IP network setting</strong>. <a href="https://www.postgresql.org/docs/18/ddl-schemas.html" target="_blank" rel="noopener noreferrer">Schemas ↗</a></p>
      </div>
    </div>

    <!-- SLIDE 48: Step 47 — Recognize the objects in Explorer -->
    <div class="slide" data-slide="48">
      <span class="slide-badge">Step 47</span>
      <h2>47 — Recognize the objects in Explorer</h2>
      <div class="slide-text-large">
<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-4/database-tools.svg" alt="Database objects shown as stored tables, lookup structures, and automatic actions" /></div>
<table>
<thead>
<tr><th>Object</th><th>What it means</th></tr>
</thead>
<tbody>
<tr><td><strong>Schema</strong></td><td>A namespace, like a folder inside a database; ours is <code>public</code></td></tr>
<tr><td><strong>Table</strong></td><td>Stored rows and columns</td></tr>
<tr><td><strong>Primary / foreign key</strong></td><td>Rules identifying records and connecting related tables</td></tr>
<tr><td><strong>Index</strong></td><td>A lookup structure that can speed up searches</td></tr>
<tr><td><strong>View</strong></td><td>A saved query presented like a table</td></tr>
<tr><td><strong>Function / procedure</strong></td><td>Reusable operations stored in the database</td></tr>
<tr><td><strong>Trigger</strong></td><td>An action run automatically when a defined event occurs</td></tr>
</tbody>
</table>
<p>Today we will create tables and keys. The other objects are useful to recognize in the Explorer. <a href="https://www.postgresql.org/docs/18/ddl-schemas.html" target="_blank" rel="noopener noreferrer">Schemas ↗</a> · <a href="https://www.postgresql.org/docs/18/indexes-intro.html" target="_blank" rel="noopener noreferrer">Indexes ↗</a> · <a href="https://www.postgresql.org/docs/18/xfunc.html" target="_blank" rel="noopener noreferrer">Functions ↗</a> · <a href="https://www.postgresql.org/docs/18/trigger-definition.html" target="_blank" rel="noopener noreferrer">Triggers ↗</a></p>
      </div>
    </div>

    <!-- SLIDE 49: Step 48 — Check the default database user -->
    <div class="slide" data-slide="49">
      <span class="slide-badge">Step 48</span>
      <h2>48 — Check the default database user</h2>
      <div class="slide-text-large">
<p>Open <strong>Users</strong>. The rehearsal shows the built-in user <strong><code>postgres</code></strong>.</p>
<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-4/screenshots/Screenshot%202026-09-13%20145916.png" alt="Cloud SQL Users page showing the built-in postgres user" /></div>
<p>The username selects a database identity; the password proves the client can use that identity. <code>postgres</code> is an administrative user, not a limited read-only account.</p>
      </div>
    </div>

    <!-- SLIDE 50: Step 49 — Use the existing database named postgres -->
    <div class="slide" data-slide="50">
      <span class="slide-badge">Step 49</span>
      <h2>49 — Use the existing database named postgres</h2>
      <div class="slide-text-large">
<p>Open <strong>Databases</strong>. The rehearsal uses the existing <strong><code>postgres</code></strong> database.</p>
<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-4/screenshots/Screenshot%202026-09-13%20145931.png" alt="Databases page showing the default postgres database" /></div>
<table>
<thead>
<tr><th>Object</th><th>Our value</th></tr>
</thead>
<tbody>
<tr><td>Instance</td><td><code>ia340</code></td></tr>
<tr><td>Database inside the instance</td><td><code>postgres</code></td></tr>
<tr><td>Database login</td><td>also <code>postgres</code>—a different kind of object</td></tr>
</tbody>
</table>
<p>The repeated word <code>postgres</code> does not make a database and a user the same thing.</p>
      </div>
    </div>

    <!-- SLIDE 51: Step 50 — Relational tables: rows, columns, and related records -->
    <div class="slide" data-slide="51">
      <span class="slide-badge">Step 50</span>
      <h2>50 — Relational tables: rows, columns, and related records</h2>
      <div class="slide-text-large">
<p>A <strong>table</strong> stores a set of records. A <strong>row</strong> is one record; a <strong>column</strong> is one attribute with a defined data type.</p>
<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-4/table-anatomy.svg" alt="Two related tables with row, column, primary-key and foreign-key annotations" /></div>
<p>The diagram shows one table of localities and another of yearly population observations. Matching identifiers connect related facts without repeating the full locality description in every observation.</p>
<p>In the relational model, a <strong>relation is a table</strong>. Keys express relationships between those tables. A CSV can also have rows and columns, but the file alone does not enforce these relationships or coordinate transactions. <a href="https://www.postgresql.org/docs/18/ddl-basics.html" target="_blank" rel="noopener noreferrer">Tables ↗</a> · <a href="https://www.postgresql.org/docs/18/ddl-constraints.html" target="_blank" rel="noopener noreferrer">Keys ↗</a></p>
      </div>
    </div>

    <!-- SLIDE 52: Step 51 — Schema-on-write: define the structure before loading -->
    <div class="slide" data-slide="52">
      <span class="slide-badge">Step 51</span>
      <h2>51 — Schema-on-write: define the structure before loading</h2>
      <div class="slide-text-large">
<p><strong>Design the structure first → insert records that follow the structure.</strong> This is <strong>schema-on-write</strong>.</p>
<p>Before loading data into our PostgreSQL tables, choose the columns, types, required values, primary keys, and foreign keys. Records must satisfy those declared rules. The design can be changed deliberately later; it is not immutable.</p>
<table>
<thead>
<tr><th>Term</th><th>Meaning here</th></tr>
</thead>
<tbody>
<tr><td><strong>Data schema</strong></td><td>The structure and rules of the records</td></tr>
<tr><td><strong>PostgreSQL schema</strong></td><td>A namespace, like a folder, that organizes tables; ours is <code>public</code></td></tr>
</tbody>
</table>
<p>The current empty database has a <code>public</code> namespace but not yet our data tables. We will draw their design in ERD Lab and apply it in Studio. <a href="https://www.postgresql.org/docs/18/ddl-basics.html" target="_blank" rel="noopener noreferrer">Data definition ↗</a> · <a href="https://www.postgresql.org/docs/18/ddl-schemas.html" target="_blank" rel="noopener noreferrer">Schemas ↗</a></p>
      </div>
    </div>

    <!-- SLIDE 53: Step 52 — Primary key: identify one row -->
    <div class="slide" data-slide="53">
      <span class="slide-badge">Step 52</span>
      <h2>52 — Primary key: identify one row</h2>
      <div class="slide-text-large">
<p>A <strong>primary key (PK)</strong> identifies one row. It must be unique and not missing.</p>
<table>
<thead>
<tr><th>fips — PK</th><th>name</th></tr>
</thead>
<tbody>
<tr><td><code>51165</code></td><td>Rockingham County</td></tr>
<tr><td><code>51660</code></td><td>Harrisonburg city</td></tr>
</tbody>
</table>
<p>A second row with key <code>51165</code> would claim the same identity, even with another spelling of the name.</p>
<p>These are real Virginia county-level identifiers. Harrisonburg is an independent city, treated as a county equivalent in Census county-level data—not a neighborhood of Rockingham County. <a href="https://tigerweb.geo.census.gov/tigerwebmain/TIGERweb2020_tabblock_census2020_va.html" target="_blank" rel="noopener noreferrer">Local identifiers ↗</a> · <a href="https://www.postgresql.org/docs/18/ddl-constraints.html" target="_blank" rel="noopener noreferrer">Keys ↗</a></p>
      </div>
    </div>

    <!-- SLIDE 54: Step 53 — Composite primary key: two columns, one identity -->
    <div class="slide" data-slide="54">
      <span class="slide-badge">Step 53</span>
      <h2>53 — Composite primary key: two columns, one identity</h2>
      <div class="slide-text-large">
<p>A locality can have a population observation for more than one year.</p>
<table>
<thead>
<tr><th>fips</th><th>year</th><th>population</th></tr>
</thead>
<tbody>
<tr><td><code>51165</code></td><td>2010</td><td>76,314</td></tr>
<tr><td><code>51165</code></td><td>2020</td><td>83,757</td></tr>
<tr><td><code>51660</code></td><td>2020</td><td>51,814</td></tr>
</tbody>
</table>
<p>The <strong>pair <code>(fips, year)</code></strong> identifies one observation. The locality repeats across years; a year repeats across localities.</p>
<p>Mark both columns as PK to create <strong>one composite primary key</strong>. Do not mark either column independently Unique. <code>(51165, 2020)</code> cannot be stored twice; <code>(51165, 2030)</code> would be a different observation.</p>
<p>Source: Census 2010/2020 counts, <a href="https://www.census.gov/quickfacts/rockinghamcountyvirginia" target="_blank" rel="noopener noreferrer">Rockingham ↗</a> and <a href="https://www.census.gov/quickfacts/fact/table/harrisonburgcityvirginia/NES010223" target="_blank" rel="noopener noreferrer">Harrisonburg ↗</a>. <a href="https://www.postgresql.org/docs/18/ddl-constraints.html" target="_blank" rel="noopener noreferrer">Composite keys ↗</a></p>
      </div>
    </div>

    <!-- SLIDE 55: Step 54 — Foreign key: require a valid parent record -->
    <div class="slide" data-slide="55">
      <span class="slide-badge">Step 54</span>
      <h2>54 — Foreign key: require a valid parent record</h2>
      <div class="slide-text-large">
<p>A <strong>foreign key (FK)</strong> references a key in another table.</p>
<p>In our model, <code>population.fips</code> and <code>income.fips</code> reference the parent <strong><code>name.fips</code></strong>. A row with <code>fips = 51165</code> refers to Rockingham County, whose parent record must exist.</p>
<p>The foreign key preserves the relationship; it does not make all columns identical. A new observation with an unknown parent identifier is rejected.</p>
<p><strong>The same field can be both a foreign key and part of a composite primary key.</strong> That is how <code>fips</code> works in each yearly observation table. <a href="https://www.postgresql.org/docs/18/ddl-constraints.html" target="_blank" rel="noopener noreferrer">Foreign keys ↗</a></p>
      </div>
    </div>

    <!-- SLIDE 56: Step 55 — Three relationship types -->
    <div class="slide" data-slide="56">
      <span class="slide-badge">Step 55</span>
      <h2>55 — Three relationship types</h2>
      <div class="slide-text-large">
<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-4/relationships.svg" alt="One-to-one, one-to-many, and many-to-many with explicit cardinality marks" /></div>
<table>
<thead>
<tr><th>Relationship</th><th>Read it in both directions</th><th>Example</th></tr>
</thead>
<tbody>
<tr><td><strong>One-to-one (1:1)</strong></td><td>At most one matching record on each side</td><td>Student ↔ university login account, in our simplified model</td></tr>
<tr><td><strong>One-to-many (1:N)</strong></td><td>One parent can have many children; each child has one parent</td><td>Locality ↔ yearly population observations</td></tr>
<tr><td><strong>Many-to-many (M:N)</strong></td><td>Several records on either side may connect</td><td>Students ↔ courses, implemented through Enrollment</td></tr>
</tbody>
</table>
<p>A circle means <strong>zero is allowed</strong>; a bar means <strong>one</strong>; the three-pronged crow's foot means <strong>many</strong>. Minimum participation depends on the model. <a href="https://support.microsoft.com/en-us/office/create-a-diagram-with-crow-s-foot-database-notation-1ec22af9-3bd3-4354-b2b5-ed5752af6769" target="_blank" rel="noopener noreferrer">Notation ↗</a> · <a href="https://www.postgresql.org/docs/18/ddl-constraints.html" target="_blank" rel="noopener noreferrer">Relationship constraints ↗</a></p>
      </div>
    </div>

    <!-- SLIDE 57: Step 56 — One-to-one: one university account per student -->
    <div class="slide" data-slide="57">
      <span class="slide-badge">Step 56</span>
      <h2>56 — One-to-one: one university account per student</h2>
      <div class="slide-text-large">
<p>In this <strong>simplified teaching model</strong>, every enrolled student has one active university login account, and every account belongs to one student.</p>
<p>The account table stores a student identifier as <strong>FK + UNIQUE</strong>. The foreign key requires an existing student; Unique prevents giving that student a second account row.</p>
<p>The constraint gives <strong>at most one</strong> matching account. Ensuring that every student actually receives an account is also an application/workflow rule.</p>
<p>This is a concept example to explain constraints, not an additional Lab 4 table. <a href="https://www.postgresql.org/docs/18/ddl-constraints.html" target="_blank" rel="noopener noreferrer">Constraints ↗</a></p>
<p style="margin-top: 1rem; color: #0969da; font-weight: 500;">Advance to the next slide to inspect the 1:1 relationship walkthrough interactively.</p>
      </div>
    </div>

    <!-- SLIDE 58: Step 57 — Interactive: One-to-One (1:1) Walkthrough -->
    <div class="slide slide-interactive" data-slide="58">
      <span class="slide-badge">Step 57</span>
      <h2>57 — Interactive: One-to-One (1:1) Walkthrough</h2>
      <div class="slide-text-large">
<div class="iframe-container"><iframe src="{{ site.baseurl }}/assets/week-4/relational-design.html#one-to-one" title="One-to-one relationship walkthrough" loading="lazy"></iframe></div>
<p style="margin: 0.3rem 0; font-size: 0.9em; color: #57606a;">
  Interactive walkthrough: One-to-one (1:1) relationship | <a href="{{ site.baseurl }}/assets/week-4/relational-design.html#one-to-one" target="_blank">Open in separate tab ↗</a>
</p>
      </div>
    </div>

    <!-- SLIDE 59: Step 58 — One-to-many: one locality, multiple years -->
    <div class="slide" data-slide="59">
      <span class="slide-badge">Step 58</span>
      <h2>58 — One-to-many: one locality, multiple years</h2>
      <div class="slide-text-large">
<p>Rockingham County has one parent record. Its 2010 and 2020 population measurements are two different child records.</p>
<p><strong>Parent &rarr; children:</strong> one locality can have zero, one, or many observations.<br>
<strong>Child &rarr; parent:</strong> every stored observation refers to exactly one locality.</p>
<p>A foreign key can repeat. The <strong>locality&ndash;year pair</strong> must remain unique. Keeping the locality identifier in each observation preserves which locality that observation describes.</p>
<p><a href="https://www.postgresql.org/docs/18/ddl-constraints.html" target="_blank" rel="noopener noreferrer">Foreign keys ↗</a></p>
<p style="margin-top: 1rem; color: #0969da; font-weight: 500;">Advance to the next slide to inspect the 1:N relationship walkthrough interactively.</p>
      </div>
    </div>

    <!-- SLIDE 60: Step 59 — Interactive: One-to-Many (1:N) Walkthrough -->
    <div class="slide slide-interactive" data-slide="60">
      <span class="slide-badge">Step 59</span>
      <h2>59 — Interactive: One-to-Many (1:N) Walkthrough</h2>
      <div class="slide-text-large">
<div class="iframe-container"><iframe src="{{ site.baseurl }}/assets/week-4/relational-design.html#one-to-many" title="One-to-many relationship walkthrough" loading="lazy"></iframe></div>
<p style="margin: 0.3rem 0; font-size: 0.9em; color: #57606a;">
  Interactive walkthrough: One-to-many (1:N) relationship | <a href="{{ site.baseurl }}/assets/week-4/relational-design.html#one-to-many" target="_blank">Open in separate tab ↗</a>
</p>
      </div>
    </div>

    <!-- SLIDE 61: Step 60 — Many-to-many: students enroll in courses -->
    <div class="slide" data-slide="61">
      <span class="slide-badge">Step 60</span>
      <h2>60 — Many-to-many: students enroll in courses</h2>
      <div class="slide-text-large">
<p>One student can take several courses; one course can contain several students. For one fixed term, an <strong>Enrollment</strong> table records each student&ndash;course pair.</p>
<p><strong>Students &rarr; Enrollments &larr; Courses</strong> gives two one-to-many relationships. The pair <code>(student_id, course_id)</code> is the Enrollment composite primary key, and each column is also a foreign key.</p>
<p>For Lab 4, we build the county model (one parent, two child tables). Many-to-many is an essential analytical pattern you will see throughout data mining. <a href="https://www.postgresql.org/docs/18/ddl-constraints.html" target="_blank" rel="noopener noreferrer">Constraints ↗</a></p>
<p style="margin-top: 1rem; color: #0969da; font-weight: 500;">Advance to the next slide to watch enrollment rows link students and courses interactively.</p>
      </div>
    </div>

    <!-- SLIDE 62: Step 61 — Interactive: Many-to-Many (M:N) Walkthrough -->
    <div class="slide slide-interactive" data-slide="62">
      <span class="slide-badge">Step 61</span>
      <h2>61 — Interactive: Many-to-Many (M:N) Walkthrough</h2>
      <div class="slide-text-large">
<div class="iframe-container"><iframe src="{{ site.baseurl }}/assets/week-4/relational-design.html#many-to-many" title="Many-to-many relationship walkthrough" loading="lazy"></iframe></div>
<p style="margin: 0.3rem 0; font-size: 0.9em; color: #57606a;">
  Interactive walkthrough: Many-to-many (M:N) relationship | <a href="{{ site.baseurl }}/assets/week-4/relational-design.html#many-to-many" target="_blank">Open in separate tab ↗</a>
</p>
      </div>
    </div>

    <!-- SLIDE 63: Step 62 — ACID: Four Transaction Guarantees -->
    <div class="slide" data-slide="63">
      <span class="slide-badge">Step 62</span>
      <h2>62 — ACID: Four Transaction Guarantees</h2>
      <div class="slide-text-large">
<p><strong>ACID</strong> names four formal guarantees of reliable database transactions:</p>
<table>
<thead>
<tr><th>Guarantee</th><th>Formal Name</th><th>Plain Meaning</th></tr>
</thead>
<tbody>
<tr><td><strong>A</strong></td><td><strong>Atomicity</strong></td><td><strong>All or nothing:</strong> All operations in a transaction succeed, or none do. Complete the transfer or save none of it.</td></tr>
<tr><td><strong>C</strong></td><td><strong>Consistency</strong></td><td><strong>Preserve the rules:</strong> A completed transaction preserves the database's rules, constraints, and valid state.</td></tr>
<tr><td><strong>I</strong></td><td><strong>Isolation</strong></td><td><strong>Separate concurrent work:</strong> Concurrent transactions are separated so clients do not observe another transaction's half-finished work.</td></tr>
<tr><td><strong>D</strong></td><td><strong>Durability</strong></td><td><strong>Keep committed results:</strong> Once committed, the result remains stored even after a system or process failure and recovery.</td></tr>
</tbody>
</table>
<p>Think of a bank transfer: debiting Alice and crediting Bob must happen as a single protected transaction. If any step fails, the system rolls back so money neither vanishes nor appears from nowhere.</p>
<p><a href="https://www.postgresql.org/docs/18/tutorial-transactions.html" target="_blank" rel="noopener noreferrer">Transactions ↗</a> &bull; <a href="https://www.postgresql.org/docs/18/transaction-iso.html" target="_blank" rel="noopener noreferrer">Isolation ↗</a></p>
<p style="margin-top: 1rem; color: #0969da; font-weight: 500;">Advance to the next slide to walk through the bank transfer transaction step by step.</p>
      </div>
    </div>

    <!-- SLIDE 64: Step 63 — Interactive: Bank Transfer ACID Walkthrough -->
    <div class="slide slide-interactive" data-slide="64">
      <span class="slide-badge">Step 63</span>
      <h2>63 — Interactive: Bank Transfer ACID Walkthrough</h2>
      <div class="slide-text-large">
<div style="background: #f6f8fa; border: 1px solid #d0d7de; border-radius: 6px; padding: 0.6rem 1rem; margin-bottom: 0.4rem; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem; font-size: 0.92rem;">
  <div><strong>Starting Balances:</strong> Alice: $100 &bull; Bob: $50</div>
  <div><strong>Transfer:</strong> $20</div>
  <div><strong>Committed Result:</strong> Alice: $80 &bull; Bob: $70</div>
</div>
<div class="iframe-container"><iframe src="{{ site.baseurl }}/assets/week-4/acid-transactions.html" title="ACID: four guarantees, one bank transfer" loading="lazy"></iframe></div>
<p style="margin: 0.3rem 0; font-size: 0.9em; color: #57606a;">
  Interactive walkthrough: Bank ACID transactions | <a href="{{ site.baseurl }}/assets/week-4/acid-transactions.html" target="_blank">Open in separate tab ↗</a>
</p>
      </div>
    </div>

    <!-- SLIDE 65: Step 64 — Duplicates are not the same as redundancy -->
    <div class="slide" data-slide="65">
      <span class="slide-badge">Step 64</span>
      <h2>64 — Duplicates are not the same as redundancy</h2>
      <div class="slide-text-large">
<p><strong>Equal values are not automatically redundant facts.</strong> Look at what each record means.</p>
<table>
<thead>
<tr><th>Situation</th><th>What is repeated?</th><th>Can it simply be deleted?</th></tr>
</thead>
<tbody>
<tr><td><strong>Repeated value in distinct records</strong></td><td>The same locality identifier in 2010 and 2020 observations</td><td>No. Each row records a different year; removing a row loses an observation</td></tr>
<tr><td><strong>Redundant descriptive fact</strong></td><td>“51165 means Rockingham County” stored again for each year</td><td>Keep the fact once in the parent table and retain references; joins recover the description</td></tr>
<tr><td><strong>Accidental duplicate record</strong></td><td>The same locality–year observation is recorded twice</td><td>The extra copy adds no new observation; the primary key rejects it</td></tr>
</tbody>
</table>
<p><strong>Normalization reduces unnecessarily repeated facts without losing information.</strong> It does not mean deleting every repeated value or deleting legitimate observations. <a href="https://support.microsoft.com/en-us/topic/database-design-basics-eb2159cf-1e30-401a-8084-bd4f9c9ca1f5" target="_blank" rel="noopener noreferrer">Normalization ↗</a></p>
      </div>
    </div>

    <!-- SLIDE 66: Step 65 — First normal form — one value per cell -->
    <div class="slide" data-slide="66">
      <span class="slide-badge">Step 65</span>
      <h2>65 — First normal form — one value per cell</h2>
      <div class="slide-text-large">
<p><strong>1NF:</strong> one value in each field at the chosen level of detail; no lists of years or repeated groups of measurements inside a single cell.</p>
<p>Instead of packing 2010 and 2020 into the same cell, create one row per locality&ndash;year observation. Use <code>(fips, year)</code> to identify that row.</p>
<p>Rockingham County and Harrisonburg city each become two yearly rows. All four observations are preserved.</p>
<p>1NF makes the data tabular at the right level; it does <strong>not</strong> remove all redundancy by itself. <a href="https://support.microsoft.com/en-us/topic/database-design-basics-eb2159cf-1e30-401a-8084-bd4f9c9ca1f5" target="_blank" rel="noopener noreferrer">Normal forms ↗</a></p>
<p style="margin-top: 1rem; color: #0969da; font-weight: 500;">Advance to the next slide to walk through the 1NF transformation interactively.</p>
      </div>
    </div>

    <!-- SLIDE 67: Step 66 — Interactive: 1NF Walkthrough -->
    <div class="slide slide-interactive" data-slide="67">
      <span class="slide-badge">Step 66</span>
      <h2>66 — Interactive: 1NF Walkthrough</h2>
      <div class="slide-text-large">
<div class="iframe-container"><iframe src="{{ site.baseurl }}/assets/week-4/normalization.html#1nf" title="First normal form walkthrough" loading="lazy"></iframe></div>
<p style="margin: 0.3rem 0; font-size: 0.9em; color: #57606a;">
  Interactive walkthrough: 1NF &mdash; First normal form | <a href="{{ site.baseurl }}/assets/week-4/normalization.html#1nf" target="_blank">Open in separate tab ↗</a>
</p>
      </div>
    </div>

    <!-- SLIDE 68: Step 67 — Second normal form — depend on the whole key -->
    <div class="slide" data-slide="68">
      <span class="slide-badge">Step 67</span>
      <h2>67 — Second normal form — depend on the whole key</h2>
      <div class="slide-text-large">
<p><strong>2NF:</strong> after 1NF, non-key attributes must depend on the <strong>whole composite key</strong>, not just part of it.</p>
<p>For key <strong><code>(fips, year)</code></strong>, the population depends on both the locality and year. The locality's name depends on <code>fips</code> alone.</p>
<p>Store the name once in a locality table. Keep <code>fips</code>, <code>year</code>, and the population in the observation table.</p>
<p><strong>Goal:</strong> reduce redundant descriptive facts; preserve all observations and their foreign-key links without losing information. <a href="https://support.microsoft.com/en-us/topic/database-design-basics-eb2159cf-1e30-401a-8084-bd4f9c9ca1f5" target="_blank" rel="noopener noreferrer">Normal forms ↗</a></p>
<p style="margin-top: 1rem; color: #0969da; font-weight: 500;">Advance to the next slide to see four locality-name labels become two in the 2NF interactive.</p>
      </div>
    </div>

    <!-- SLIDE 69: Step 68 — Interactive: 2NF Walkthrough -->
    <div class="slide slide-interactive" data-slide="69">
      <span class="slide-badge">Step 68</span>
      <h2>68 — Interactive: 2NF Walkthrough</h2>
      <div class="slide-text-large">
<div class="iframe-container"><iframe src="{{ site.baseurl }}/assets/week-4/normalization.html#2nf" title="Second normal form walkthrough" loading="lazy"></iframe></div>
<p style="margin: 0.3rem 0; font-size: 0.9em; color: #57606a;">
  Interactive walkthrough: 2NF &mdash; Second normal form | <a href="{{ site.baseurl }}/assets/week-4/normalization.html#2nf" target="_blank">Open in separate tab ↗</a>
</p>
      </div>
    </div>

    <!-- SLIDE 70: Step 69 — Third normal form: put the state name with the state code -->
    <div class="slide" data-slide="70">
      <span class="slide-badge">Step 69</span>
      <h2>69 — Third normal form: put the state name with the state code</h2>
      <div class="slide-text-large">
<p><strong>3NF:</strong> after 2NF, remove the demonstrated dependency from one non-key attribute to another (transitive dependency).</p>
<p>Both Rockingham County and Harrisonburg city are in <strong>Virginia</strong>. In a locality table, the dependency is:</p>
<div style="font-size: 1.1rem; font-weight: 600; color: #0969da; text-align: center; margin: 0.8rem 0;">
  Locality identifier &rarr; state code &rarr; state name
</div>
<p><code>51</code> identifies Virginia. Saving &ldquo;Virginia&rdquo; inside every locality row repeats the same state description. Store <strong><code>51 &rarr; Virginia</code> once in a state table</strong>; keep the state code in each locality row.</p>
<p>This extends the example to explain further redundancy reduction; a state table is not an additional Lab 4 requirement. <a href="https://support.microsoft.com/en-us/topic/database-design-basics-eb2159cf-1e30-401a-8084-bd4f9c9ca1f5" target="_blank" rel="noopener noreferrer">Normal forms ↗</a></p>
<p style="margin-top: 1rem; color: #0969da; font-weight: 500;">Advance to the next slide to see transitive redundancy eliminated in the 3NF interactive.</p>
      </div>
    </div>

    <!-- SLIDE 71: Step 70 — Interactive: 3NF Walkthrough -->
    <div class="slide slide-interactive" data-slide="71">
      <span class="slide-badge">Step 70</span>
      <h2>70 — Interactive: 3NF Walkthrough</h2>
      <div class="slide-text-large">
<div class="iframe-container"><iframe src="{{ site.baseurl }}/assets/week-4/normalization.html#3nf" title="Third normal form walkthrough" loading="lazy"></iframe></div>
<p style="margin: 0.3rem 0; font-size: 0.9em; color: #57606a;">
  Interactive walkthrough: 3NF &mdash; Third normal form | <a href="{{ site.baseurl }}/assets/week-4/normalization.html#3nf" target="_blank">Open in separate tab ↗</a>
</p>
      </div>
    </div>

    <!-- SLIDE 72: Step 71 — Scaling a relational database -->
    <div class="slide" data-slide="72">
      <span class="slide-badge">Step 71</span>
      <h2>71 — Scaling a relational database</h2>
      <div class="slide-text-large">
<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-4/scaling.svg" alt="Vertical scaling upgrades one server; horizontal scaling spreads work across multiple servers" /></div>
<p><strong>Vertical scaling (scale up):</strong> add CPU/RAM to one server. It is relatively simple, but a larger allocation costs more and one machine has a capacity ceiling.</p>
<p><strong>Horizontal scaling (scale out):</strong> use more servers and distribute the work. Data partitioning, routing, and coordination add complexity; more servers also cost money.</p>
<p>Larger single machines can be expensive, especially when capacity sits idle. <strong>Horizontal is not automatically cheaper.</strong> The workload and deployment determine the total cost.</p>
<p>PostgreSQL is not restricted to vertical scaling: replicas can help read workloads, while distributed designs require more planning. We will revisit horizontal scaling with MongoDB. <a href="https://www.digitalocean.com/resources/articles/horizontal-scaling-vs-vertical-scaling" target="_blank" rel="noopener noreferrer">Scaling ↗</a> · <a href="https://www.mongodb.com/docs/manual/sharding/" target="_blank" rel="noopener noreferrer">Sharding ↗</a></p>
      </div>
    </div>

    <!-- SLIDE 73: Step 72 — From a table design to an ER diagram -->
    <div class="slide" data-slide="73">
      <span class="slide-badge">Step 72</span>
      <h2>72 — From a table design to an ER diagram</h2>
      <div class="slide-text-large">
<p>An <strong>entity–relationship diagram (ERD)</strong> is a blueprint: tables, attributes, primary keys, foreign keys, and relationship cardinalities.</p>
<p>On a crow's-foot diagram, read <strong>both ends of each line</strong>. It is not enough to draw a line between two boxes: identify the exact <strong>FK field → PK field</strong>.</p>
<p><strong>A drawing is the design. Creating the foreign-key constraint in PostgreSQL implements that design.</strong></p>
      </div>
    </div>

    <!-- SLIDE 74: Step 73 — What will we store? Design for Census data -->
    <div class="slide" data-slide="74">
      <span class="slide-badge">Step 73</span>
      <h2>73 — What will we store? Design for Census data</h2>
      <div class="slide-text-large">
<p>Next week we will load Census locality names, population, and income data. For now, design the structure and create empty tables.</p>
<table>
<thead>
<tr><th>Table</th><th>What one row will represent</th></tr>
</thead>
<tbody>
<tr><td><code>name</code></td><td>One county or county-equivalent identifier and its label</td></tr>
<tr><td><code>population</code></td><td>One locality's population for one year</td></tr>
<tr><td><code>income</code></td><td>One locality's income measure for one year</td></tr>
</tbody>
</table>
<p>This is <strong>schema-on-write in practice</strong>: decide the fields and relationships before loading the data.</p>
<p><strong>Design in ERD Lab → export your model → implement it in Studio → load Census records next week.</strong></p>
      </div>
    </div>

    <!-- SLIDE 75: Step 74 — Our ER model and exact names -->
    <div class="slide" data-slide="75">
      <span class="slide-badge">Step 74</span>
      <h2>74 — Our ER model and exact names</h2>
      <div class="slide-text-large">
<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-4/census-erd.svg" alt="Crow’s-foot ER diagram connects each observation fips foreign key to name.fips, with 1 and 0..many cardinalities" /></div>
<table>
<thead>
<tr><th>Table</th><th>Columns</th><th>Primary key</th><th>Foreign key</th></tr>
</thead>
<tbody>
<tr><td><code>name</code></td><td><code>fips</code>, <code>name</code></td><td><code>fips</code></td><td>—</td></tr>
<tr><td><code>income</code></td><td><code>fips</code>, <code>income</code>, <code>year</code></td><td><code>(fips, year)</code></td><td><code>fips</code> → <code>name.fips</code></td></tr>
<tr><td><code>population</code></td><td><code>fips</code>, <code>population</code>, <code>year</code></td><td><code>(fips, year)</code></td><td><code>fips</code> → <code>name.fips</code></td></tr>
</tbody>
</table>
<p>The <strong>double bar at the parent</strong> means exactly one parent for each observation. The <strong>circle and crow's foot at a child</strong> allow zero or many observations for a locality. That includes our initially empty observation tables.</p>
<p>Both links attach to the <strong><code>fips</code> rows</strong>, not just the table titles. Build these objects in <code>postgres</code> → <code>public</code>.</p>
      </div>
    </div>

    <!-- SLIDE 76: Step 75 — Wednesday hands-on — define the fields -->
    <div class="slide" data-slide="76">
      <span class="slide-badge">Step 75</span>
      <h2>75 — Wednesday hands-on — define the fields</h2>
      <div class="slide-text-large">
<p>Use <strong>character varying</strong> for <code>fips</code> and <code>name</code>, and <strong>integer</strong> for <code>income</code>, <code>population</code>, and <code>year</code>. <strong>Leave Size blank.</strong></p>
<p>Keep <code>fips</code> as text so leading zeros are preserved. Match the table and column names shown below; define your own model before exporting.</p>
      </div>
    </div>

    <!-- SLIDE 77: Step 76 — Open ERD Lab and sign in -->
    <div class="slide" data-slide="77">
      <span class="slide-badge">Step 76</span>
      <h2>76 — Open ERD Lab and sign in</h2>
      <div class="slide-text-large">
<p>Open <a href="https://erdlab.io/" target="_blank" rel="noopener noreferrer">ERD Lab ↗</a>. Use an available sign-in method or your existing account. No database IP or password is needed by the diagramming tool.</p>
<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-4/screenshots/Screenshot%202026-09-13%20150208.png" alt="ERD Lab sign-in options" /></div>
      </div>
    </div>

    <!-- SLIDE 78: Step 77 — Create a new visual model -->
    <div class="slide" data-slide="78">
      <span class="slide-badge">Step 77</span>
      <h2>77 — Create a new visual model</h2>
      <div class="slide-text-large">
<p>From the ERD Lab Dashboard, select <strong>New Project</strong>.</p>
<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-4/screenshots/Screenshot%202026-09-13%20150243.png" alt="ERD Lab Dashboard and New Project button" /></div>
      </div>
    </div>

    <!-- SLIDE 79: Step 78 — Start from scratch with PostgreSQL -->
    <div class="slide" data-slide="79">
      <span class="slide-badge">Step 78</span>
      <h2>78 — Start from scratch with PostgreSQL</h2>
      <div class="slide-text-large">
<p>Choose <strong>Create from scratch</strong>, enter a model title such as <code>ia340</code>, and select <strong>POSTGRESQL</strong>. Create the schema/model. Do not choose Generate with AI.</p>
<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-4/screenshots/Screenshot%202026-09-13%20150311.png" alt="ERD Lab Create from scratch with PostgreSQL database type" /></div>
<p>Here “schema/model” is the visual design project in ERD Lab; creating it does not connect to or change Cloud SQL.</p>
      </div>
    </div>

    <!-- SLIDE 80: Step 79 — Build the name table -->
    <div class="slide" data-slide="80">
      <span class="slide-badge">Step 79</span>
      <h2>79 — Build the name table</h2>
      <div class="slide-text-large">
<p>Add table <strong><code>name</code></strong>. Add <code>fips</code> as <strong>character varying</strong> and mark it <strong>Primary key</strong>. Add <code>name</code> as <strong>character varying</strong>. Leave the Size fields blank. Keep the fields required.</p>
<p>Keep the <strong><code>name</code> field Unique setting ON</strong> as shown in the course model. We use this setting for consistency with the lab walkthrough; it is not a general rule that every real-world county-name column must be unique.</p>
<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-4/screenshots/Screenshot%202026-09-13%20164741.png" alt="ERD Lab name table with fips as the primary key and name marked Unique" /></div>
      </div>
    </div>

    <!-- SLIDE 81: Step 80 — Build the income table and its composite key -->
    <div class="slide" data-slide="81">
      <span class="slide-badge">Step 80</span>
      <h2>80 — Build the income table and its composite key</h2>
      <div class="slide-text-large">
<p>Add <strong><code>income</code></strong> with <code>fips</code> as <strong>character varying</strong>, <code>income</code> as integer, and <code>year</code> as integer. Leave the Size field blank.</p>
<p>Mark <strong>both <code>fips</code> and <code>year</code> as Primary key</strong>. Together they form one <strong>composite primary key</strong>. On <code>fips</code>, enable Foreign key, choose parent <strong><code>name</code></strong>, field <strong><code>fips</code></strong>, and the child-to-parent <strong>Many to One</strong> relationship. Do not add individual Unique constraints to <code>fips</code> or <code>year</code>.</p>
<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-4/screenshots/Screenshot%202026-09-13%20164814.png" alt="ERD Lab income table with fips and year as a composite primary key and fips as a foreign key" /></div>
      </div>
    </div>

    <!-- SLIDE 82: Step 81 — Build the population table and its composite key -->
    <div class="slide" data-slide="82">
      <span class="slide-badge">Step 81</span>
      <h2>81 — Build the population table and its composite key</h2>
      <div class="slide-text-large">
<p>Add <strong><code>population</code></strong> with <code>fips</code> as <strong>character varying</strong>, <strong><code>population</code></strong> as integer, and <code>year</code> as integer. Leave the Size field blank.</p>
<p>Mark <code>fips</code> and <code>year</code> as Primary key so they form one composite key. Make <code>fips</code> a foreign key to <code>name.fips</code>, <strong>Many to One</strong>.</p>
<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-4/screenshots/Screenshot%202026-09-13%20164840.png" alt="ERD Lab population table with fips and year as a composite primary key and fips as a foreign key" /></div>
<p>A repeated county in a different year is valid. A repeated <code>(fips, year)</code> pair is not.</p>
      </div>
    </div>

    <!-- SLIDE 83: Step 82 — Read both relationship lines -->
    <div class="slide" data-slide="83">
      <span class="slide-badge">Step 82</span>
      <h2>82 — Read both relationship lines</h2>
      <div class="slide-text-large">
<p>The diagram should have <strong>three tables and two links</strong>: <code>income.fips</code> → <code>name.fips</code>, and <code>population.fips</code> → <code>name.fips</code>.</p>
<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-4/screenshots/Screenshot%202026-09-13%20151055.png" alt="Complete ERD Lab county, income, and population model" /></div>
<p>Read each link in both directions: <strong>many observation rows belong to one county; one county can have many observation rows</strong>. Do not draw a direct income-to-population foreign key. Save the model for next week.</p>
      </div>
    </div>

    <!-- SLIDE 84: Step 83 — Export PostgreSQL SQL from your own model -->
    <div class="slide" data-slide="84">
      <span class="slide-badge">Step 83</span>
      <h2>83 — Export PostgreSQL SQL from your own model</h2>
      <div class="slide-text-large">
<p>Use <strong>Export → Export SQL</strong> and choose <strong>Postgresql</strong>. The rehearsal used <strong>Default</strong>, which produced table-creation and foreign-key statements. Inspect the resulting SQL; Create is also appropriate when it produces those same required objects. Do not choose Drop.</p>
<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-4/screenshots/Screenshot%202026-09-13%20151124.png" alt="ERD Lab PostgreSQL SQL export dialog with Default selected in the rehearsal" /></div>
<p>Exporting SQL translates the tables and relationships you designed into PostgreSQL instructions.</p>
<blockquote><p><strong>TIP:</strong> Export the PostgreSQL SQL from your ERD Lab model. If the export looks wrong or you are unsure what to do next, <strong>ask the instructor before changing it manually</strong>.</p></blockquote>
      </div>
    </div>

    <!-- SLIDE 85: Step 84 — Apply the export in Cloud SQL Studio -->
    <div class="slide" data-slide="85">
      <span class="slide-badge">Step 84</span>
      <h2>84 — Apply the export in Cloud SQL Studio</h2>
      <div class="slide-text-large">
<p>Return to Studio, database <strong><code>postgres</code></strong>, user <strong><code>postgres</code></strong>. Paste your reviewed export and click <strong>Run</strong> once.</p>
<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-4/screenshots/Screenshot%202026-09-13%20151231.png" alt="Rehearsal SQL in Studio creates name, income, and population and adds two foreign keys" /></div>
<p>The export includes <strong>UNIQUE on <code>name.name</code></strong>, matching the course model used in the screenshots.</p>
<p>This screenshot is an example of what ERD Lab generated from the instructor's model—not a script to copy instead of doing the ER diagram. Review your own export. If tables already exist, ask before changing or deleting existing work. <a href="https://www.postgresql.org/docs/18/ddl-constraints.html" target="_blank" rel="noopener noreferrer">Constraints ↗</a></p>
      </div>
    </div>

    <!-- SLIDE 86: Step 85 — Refresh Explorer and inspect the actual tables -->
    <div class="slide" data-slide="86">
      <span class="slide-badge">Step 85</span>
      <h2>85 — Refresh Explorer and inspect the actual tables</h2>
      <div class="slide-text-large">
<p>Refresh <strong>public → Tables</strong>. Confirm <code>name</code> (2 columns), <code>income</code> (3), and <code>population</code> (3). Expand <strong>Keys</strong> to inspect each PK and the two FKs.</p>
<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-4/screenshots/Screenshot%202026-09-13%20151310.png" alt="Studio Explorer shows the three created tables, their column counts, indexes, and keys" /></div>
<p>The extra index on <code>name</code> follows the course model's Unique constraint; it is not a fourth table or an extra required task. Empty tables are normal before next week's data loading. Do not grade completeness from a table name alone; check the columns and relationships too.</p>
      </div>
    </div>

    <!-- SLIDE 87: Step 86 — Find the Public IP and distinguish the other identifiers -->
    <div class="slide" data-slide="87">
      <span class="slide-badge">Step 86</span>
      <h2>86 — Find the Public IP and distinguish the other identifiers</h2>
      <div class="slide-text-large">
<p>Open <strong>Connections → Summary</strong>. The required address is the row labeled <strong>Public IP address</strong>. The connection name and outgoing IP address are different values.</p>
<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-4/screenshots/Screenshot%202026-09-13%20145900.png" alt="Connections summary showing where to find the Public IP address and PostgreSQL port 5432" /></div>
<p>Copy your <strong>own</strong> Public IP privately. The instructor's live address is hidden in the teaching image; do not try to use it.</p>
      </div>
    </div>

    <!-- SLIDE 88: Step 87 — What a Public IPv4 address looks like -->
    <div class="slide" data-slide="88">
      <span class="slide-badge">Step 87</span>
      <h2>87 — What a Public IPv4 address looks like</h2>
      <div class="slide-text-large">
<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-4/public-ip.svg" alt="Public IPv4 address format separated from port and login details" /></div>
<p>An IPv4 address has four numbers separated by dots, for example <strong><code>203.0.113.10</code></strong>. That example is reserved for documentation and is <strong>not</strong> a server to connect to or submit.</p>
<p>Your submission is only the actual <strong>Public IP</strong> shown in your Console—not a URL, <code>:5432</code>, an instance connection name, your laptop's IP, or <code>0.0.0.0/0</code>.</p>
<p><strong>Do not publish your Public IP address. Submit it ONLY in Canvas—not GitHub or any other platform.</strong> <a href="https://www.rfc-editor.org/rfc/rfc5737" target="_blank" rel="noopener noreferrer">Documentation addresses ↗</a></p>
      </div>
    </div>

    <!-- SLIDE 89: Step 88 — Finish: verify and submit -->
    <div class="slide" data-slide="89">
      <span class="slide-badge">Step 88</span>
      <h2>88 — Finish: verify and submit</h2>
      <div class="slide-text-large">
<p>Use <a href="{{ site.baseurl }}/assignments/lab-4/">Lab 4</a> as the final checkpoint. Submit <strong>only your own Public IPv4 address privately in Canvas</strong>.</p>
<p>The checker uses <strong>database <code>postgres</code>, username <code>postgres</code>, password <code>IA340-data</code>, port <code>5432</code></strong>. Connection is the first gate; then it checks the three tables, fields, and keys.</p>
<p><strong>Keep the Cloud SQL instance running through October 12, 2026. Do not stop or delete it before then.</strong> We will continue using the same database for the next weeks of class and the Mini Project. Do not publish the Public IP.</p>
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
  <a href="{{ site.baseurl }}/assignments/lab-4/">Go to Lab 4 Checkpoint Instructions →</a>
  <span style="color: #d0d7de;">|</span>
  <a href="{{ site.baseurl }}/modules/module-3/google-cloud-coupon/">Google Cloud Education Credit Setup →</a>
</div>
