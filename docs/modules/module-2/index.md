---
layout: default
title: "Module 2: Building Your AI Data Analytics Workspace - IA 340"
---

# Module 2: Building Your AI Data Analytics Workspace

<nav style="display: flex; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem; border-bottom: 1px solid #eaecef; padding-bottom: 1rem; font-size: 0.95em;">
  <a href="{{ site.baseurl }}/" style="text-decoration: none; color: #57606a;">Home</a>
  <a href="{{ site.baseurl }}/syllabus/" style="text-decoration: none; color: #57606a;">Syllabus</a>
  <a href="{{ site.baseurl }}/modules/module-1/" style="text-decoration: none; color: #57606a;">Module 1</a>
  <a href="{{ site.baseurl }}/assignments/github-account-verification/" style="text-decoration: none; color: #57606a;">Lab 1</a>
  <a href="{{ site.baseurl }}/modules/module-2/" style="text-decoration: none; font-weight: 600; color: #0969da;">Module 2</a>
  <a href="{{ site.baseurl }}/assignments/lab-2/" style="text-decoration: none; color: #57606a;">Lab 2</a>
</nav>

<style>
/* Presentation Slide Deck Styles */
.deck-container {
  max-width: 1180px;
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
  padding: 0.65rem 1.25rem;
  border-radius: 10px 10px 0 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  user-select: none;
}

.deck-title-tag {
  font-size: 0.95rem;
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
  padding: 0.4rem 0.85rem;
  font-size: 0.88rem;
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
  width: 5.26%;
  transition: width 0.25s ease;
}

.deck-stage {
  background: #ffffff;
  border: 1px solid #d0d7de;
  border-top: none;
  border-radius: 0 0 10px 10px;
  min-height: 560px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.06);
  position: relative;
  overflow: hidden;
}

.slide {
  display: none;
  padding: 2.2rem 2.8rem;
  box-sizing: border-box;
  animation: slideFadeIn 0.2s ease-out;
}

.slide.active {
  display: block;
}

@keyframes slideFadeIn {
  from { opacity: 0.2; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}

.slide-badge {
  display: inline-block;
  background: #ddf4ff;
  color: #0969da;
  border: 1px solid rgba(84, 174, 255, 0.4);
  padding: 0.22rem 0.7rem;
  border-radius: 2em;
  font-size: 0.78rem;
  font-weight: 600;
  margin-bottom: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.slide h2 {
  margin-top: 0;
  margin-bottom: 1.2rem;
  color: #1f2328;
  font-size: 1.65rem;
  border-bottom: 2px solid #eaeef2;
  padding-bottom: 0.45rem;
}

.slide-center-box {
  max-width: 860px;
  margin: 2rem auto;
  text-align: center;
}

.slide-main-title {
  font-size: 2.4rem;
  margin: 0.5rem 0 0.8rem;
  color: #0969da;
}

.slide-subtitle {
  font-size: 1.25rem;
  color: #57606a;
  margin: 0 auto 1.8rem;
}

.slide-card-lead {
  background: #f6f8fa;
  border: 1px solid #d0d7de;
  padding: 1.6rem 2rem;
  border-radius: 10px;
  text-align: left;
  font-size: 1.12rem;
  line-height: 1.7;
}

.slide-text-large {
  max-width: 980px;
  margin: 1rem auto;
  font-size: 1.1rem;
  line-height: 1.75;
  color: #24292f;
}

.slide-visual-full {
  text-align: center;
  background: #f6f8fa;
  border: 1px solid #d0d7de;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.03);
  margin: 1rem auto;
}

.slide-visual-full img, .slide-visual-full svg {
  max-width: 100%;
  max-height: 440px;
  width: auto;
  height: auto;
  border-radius: 6px;
  display: block;
  margin: 0 auto;
}

.caption-text {
  text-align: center;
  font-size: 0.95rem;
  color: #57606a;
  margin-top: 0.8rem;
}

.video-container-large {
  position: relative;
  width: 100%;
  max-width: 940px;
  margin: 0 auto;
  padding-bottom: 52.8%;
  height: 0;
  overflow: hidden;
  border-radius: 10px;
  border: 1px solid #d0d7de;
  background: #000;
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
}

.video-container-large iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.slide-media-box {
  text-align: center;
  background: #f6f8fa;
  border: 1px solid #d0d7de;
  border-radius: 8px;
  padding: 0.75rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.03);
  margin: 0.75rem 0;
}

.slide-media-box img {
  max-width: 100%;
  max-height: 380px;
  height: auto;
  border-radius: 4px;
  display: block;
  margin: 0 auto;
}

.alert-takeaway {
  background: #dafbe1;
  border-left: 4px solid #1a7f37;
  padding: 1rem 1.25rem;
  border-radius: 0 8px 8px 0;
  font-size: 1.05rem;
  color: #1a7f37;
  font-weight: 500;
  line-height: 1.6;
}

.alert-teaching-point {
  background: #ddf4ff;
  border-left: 4px solid #0969da;
  padding: 1rem 1.25rem;
  border-radius: 0 8px 8px 0;
  font-size: 1.05rem;
  color: #0969da;
  font-weight: 500;
  line-height: 1.6;
}

.alert-warning-point {
  background: #fff8c5;
  border-left: 4px solid #9a6700;
  padding: 1rem 1.25rem;
  border-radius: 0 8px 8px 0;
  font-size: 1.05rem;
  color: #7d4e00;
  font-weight: 500;
  line-height: 1.6;
}

.deck-btn-primary {
  background: #0969da;
  color: #ffffff;
  border: 1px solid #0969da;
  border-radius: 8px;
  padding: 0.75rem 1.8rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s ease;
}

.deck-btn-primary:hover {
  background: #0858b9;
}

.deck-btn-lab {
  background: #1a7f37;
  color: #ffffff;
  border: 1px solid #1a7f37;
  border-radius: 8px;
  padding: 0.75rem 1.8rem;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  transition: background 0.15s ease;
}

.deck-btn-lab:hover {
  background: #14622b;
  color: #ffffff;
}

/* Fullscreen mode */
:fullscreen .deck-container,
:-webkit-full-screen .deck-container {
  max-width: 100vw;
  height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
}

:fullscreen .deck-stage,
:-webkit-full-screen .deck-stage {
  flex: 1;
  border-radius: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

:fullscreen .slide.active,
:-webkit-full-screen .slide.active {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.5rem 3rem;
}

:fullscreen .slide-visual-full img,
:fullscreen .slide-visual-full svg,
:-webkit-full-screen .slide-visual-full img,
:-webkit-full-screen .slide-visual-full svg {
  max-height: 74vh;
}

:fullscreen .video-container-large,
:-webkit-full-screen .video-container-large {
  max-width: 80vw;
  padding-bottom: 45vw;
}

@media (max-width: 860px) {
  .deck-stage { min-height: 480px; }
  .slide { padding: 1.5rem 1.2rem; }
  .slide-visual-full img, .slide-visual-full svg { max-height: 340px; }
}
</style>

<div class="deck-container" id="lectureDeck">
  <div class="deck-nav-bar">
    <div class="deck-title-tag">
      <span>📊 IA 340 Week 2 Lecture</span>
      <span style="opacity: 0.4;">|</span>
      <span id="slideCounter">Slide 1 of 19</span>
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

    <!-- SLIDE 1: Title -->
    <div class="slide active" data-slide="1">
      <div class="slide-center-box">
        <h1 class="slide-main-title">Building Your AI Data Analytics Workspace</h1>
        <p class="slide-subtitle">IA 340 — Data Mining, Modeling, and Knowledge Discovery</p>
        <div class="slide-card-lead">
          <p style="margin-top: 0;">Week 2 establishes the workspace we will reuse throughout the semester:</p>
          <div style="font-size: 1.25rem; font-weight: 700; color: #0969da; text-align: center; margin: 1rem 0;">
            Google Drive → Google Colab + Gemini → GitHub → Canvas
          </div>
          <p style="margin-bottom: 0; color: #57606a;">Today we first understand the tools and workflow, then use them.</p>
        </div>
        <div style="margin-top: 2rem;">
          <button class="deck-btn-primary" onclick="changeSlide(1)">Start Presentation ▶</button>
        </div>
      </div>
    </div>

    <!-- SLIDE 2: 01 — A Reproducible Analytics Pipeline -->
    <div class="slide" data-slide="2">
      <span class="slide-badge">Workflow Foundations</span>
      <h2>01 — A Reproducible Analytics Pipeline</h2>
      <div class="slide-text-large">
        <p>A typical analytics process moves through four stages:</p>
        <div style="text-align: center; font-size: 1.25rem; font-weight: 700; color: #0969da; margin: 0.8rem 0;">
          Collect → Store → Analyze → Share
        </div>
        <ul style="line-height: 1.8;">
          <li><strong>Collect:</strong> APIs, social media, sensors, and open-data portals</li>
          <li><strong>Store:</strong> files, cloud storage, and databases</li>
          <li><strong>Analyze:</strong> Python, SQL, and AI-assisted workflows</li>
          <li><strong>Share:</strong> notebooks, charts, GitHub, dashboards, and reports</li>
        </ul>
        <div class="slide-visual-full">
          <img src="{{ site.baseurl }}/assets/week-2/analytics-pipeline.svg" alt="A reproducible analytics pipeline from collection through sharing" />
        </div>
        <div class="alert-teaching-point" style="margin-top: 1rem;">
          <strong>Reproducibility:</strong> Another person should be able to inspect what data you used, what you changed, and what you concluded.
        </div>
      </div>
    </div>

    <!-- SLIDE 3: 02 — Four Tools, Four Jobs -->
    <div class="slide" data-slide="3">
      <span class="slide-badge">Architecture & Platforms</span>
      <h2>02 — Four Tools, Four Jobs</h2>
      <div class="slide-text-large">
        <p>The four platforms in our Week 2 workspace are not interchangeable.</p>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 1rem;">
          <thead>
            <tr style="background: #f6f8fa;">
              <th style="padding: 0.6rem; border: 1px solid #d0d7de; text-align: left;">Tool</th>
              <th style="padding: 0.6rem; border: 1px solid #d0d7de; text-align: left;">Primary Job in IA340</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 0.6rem; border: 1px solid #d0d7de;"><strong>Google Drive</strong></td>
              <td style="padding: 0.6rem; border: 1px solid #d0d7de;">Persistent storage for working data such as <code>diamonds.csv</code></td>
            </tr>
            <tr>
              <td style="padding: 0.6rem; border: 1px solid #d0d7de;"><strong>Google Colab</strong></td>
              <td style="padding: 0.6rem; border: 1px solid #d0d7de;">Browser-based Python notebook, editor, and temporary compute runtime</td>
            </tr>
            <tr>
              <td style="padding: 0.6rem; border: 1px solid #d0d7de;"><strong>GitHub</strong></td>
              <td style="padding: 0.6rem; border: 1px solid #d0d7de;">Versioned project record: README, notebooks, commits, branches, and pull requests</td>
            </tr>
            <tr>
              <td style="padding: 0.6rem; border: 1px solid #d0d7de;"><strong>Canvas</strong></td>
              <td style="padding: 0.6rem; border: 1px solid #d0d7de;">Official assignment submission, feedback, and grade record</td>
            </tr>
          </tbody>
        </table>
        <div class="slide-visual-full">
          <img src="{{ site.baseurl }}/assets/week-2/ia340-workspace.svg" alt="Google Drive, Colab, GitHub, and Canvas connected as the IA340 workflow" />
        </div>
        <div class="alert-takeaway" style="margin-top: 1rem;">
          <strong>No Paid Plan Required:</strong> GitHub Education provides private course repo access; free personal Google account (linked to JMU email) provides working-data storage; Colab free tier is sufficient.
        </div>
      </div>
    </div>

    <!-- SLIDE 4: 03 — Data Storage Landscape -->
    <div class="slide" data-slide="4">
      <span class="slide-badge">Data Infrastructure</span>
      <h2>03 — Data Storage Landscape</h2>
      <div class="slide-text-large">
        <div class="slide-visual-full">
          <img src="{{ site.baseurl }}/assets/week-2/storage-landscape.svg" alt="Data storage landscape comparing local files, Google Drive, GitHub, data lakes, data warehouses, and databases" />
        </div>
        <p>There is no single "best" place for every kind of data:</p>
        <ul style="line-height: 1.8;">
          <li><strong>Drive</strong> = simple working files;</li>
          <li><strong>Data lake</strong> = large raw / mixed-format analytical data;</li>
          <li><strong>Data warehouse</strong> = curated structured data for analytics, BI, and reporting;</li>
          <li><strong>Database</strong> = managed queryable data for applications and transactions;</li>
          <li><strong>GitHub</strong> = code, notebooks, documentation, and project history.</li>
        </ul>
        <div class="alert-teaching-point">
          <strong>Choose storage based on the job.</strong> IA340 starts with the simplest useful layer, then moves toward databases and more enterprise-oriented data platforms later.
        </div>
      </div>
    </div>

    <!-- SLIDE 5: 04 — Why We Use Google Drive in IA340 -->
    <div class="slide" data-slide="5">
      <span class="slide-badge">Course Architecture</span>
      <h2>04 — Why We Use Google Drive in IA340</h2>
      <div class="slide-text-large">
        <div class="slide-visual-full">
          <img src="{{ site.baseurl }}/assets/week-2/storage-choice.svg" alt="Google Drive compared with an enterprise data lake" />
        </div>
        <p>For Week 2, <strong>Google Drive is our working-data layer</strong> because it is simple, persistent, browser-based, and easy to connect to Colab.</p>
        <ul style="line-height: 1.8;">
          <li><strong>Good fit:</strong> personal, student, and small-team files such as <code>diamonds.csv</code>.</li>
          <li><strong>Not an enterprise data lake:</strong> large organizations usually use scalable object storage plus pipelines, governance, security, and lifecycle controls.</li>
        </ul>
        <div class="alert-teaching-point">
          <strong>IA340 approach:</strong> start simple now; move toward enterprise storage and databases later.
        </div>
      </div>
    </div>

    <!-- SLIDE 6: 05 — Google Colab: Python in Your Browser -->
    <div class="slide" data-slide="6">
      <span class="slide-badge">Interactive Compute</span>
      <h2>05 — Google Colab: Python in Your Browser</h2>
      <div class="slide-text-large">
        <p>Google Colab is a <strong>browser-based Jupyter/Python notebook environment</strong>: write Python, run it online, and see results in the same notebook.</p>
        <div class="slide-visual-full">
          <img src="{{ site.baseurl }}/assets/week-2/colab-notebook.svg" alt="A Colab notebook combining Markdown, Python code, and output" />
        </div>
        <p><strong>Student-friendly by design:</strong></p>
        <ul style="line-height: 1.8;">
          <li>no local Python/Jupyter installation required;</li>
          <li>common data-science libraries are readily available;</li>
          <li>works in a browser across many computers;</li>
          <li>the free tier is enough for IA340 Week 2.</li>
        </ul>
        <div class="alert-warning-point">
          <strong>Runtime ≠ storage.</strong> Colab runtimes are temporary and can time out when inactive or when usage limits are reached. Keep working data in Drive and make an explicit final save to GitHub for the course record.
        </div>
        <p style="margin-top: 1rem;"><a href="https://colab.research.google.com/" target="_blank">Open Google Colab ↗</a></p>
      </div>
    </div>

    <!-- SLIDE 7: 06 — Gemini in Colab: AI Pair Programmer -->
    <div class="slide" data-slide="7">
      <span class="slide-badge">AI Pair Programming</span>
      <h2>06 — Gemini in Colab: AI Pair Programmer</h2>
      <div class="slide-text-large">
        <p>Gemini can assist directly inside Colab with three common tasks:</p>
        <div style="font-size: 1.15rem; font-weight: 600; text-align: center; color: #0969da; margin: 1rem 0;">
          Generate code &bull; Explain code &bull; Fix / improve code &bull; Draft Markdown explanations
        </div>
        <div class="alert-takeaway" style="font-size: 1.15rem; text-align: center; padding: 1.2rem;">
          <strong>For IA340, the rule is:</strong><br>
          <span style="font-size: 1.3rem; font-weight: 700; color: #0969da;">Ask → Inspect → Run → Verify → Explain</span>
        </div>
        <p style="margin-top: 1.2rem;">AI can help write the code, but <strong>you are responsible for understanding it and checking the result</strong>.</p>
        <div class="alert-warning-point">
          <strong>Security Rule:</strong> Never put passwords, API keys, tokens, or sensitive data into an AI prompt.
        </div>
        <p style="margin-top: 1rem;"><a href="https://research.google.com/colaboratory/faq.html" target="_blank">Google Colab FAQ — AI features ↗</a></p>
      </div>
    </div>

    <!-- SLIDE 8: 07 — Join the JMU-Data Organization -->
    <div class="slide" data-slide="8">
      <span class="slide-badge">Organization Access</span>
      <h2>07 — Join the JMU-Data Organization</h2>
      <div class="slide-text-large">
        <p>Your IA340 private course repository has already been provisioned. Depending on your existing GitHub membership, you may receive <strong>one or both</strong> invitation types.</p>
        <div class="slide-media-box">
          <img src="{{ site.baseurl }}/assets/week-2/screenshots/github-organization-invitation.png" alt="GitHub invitation to join the JMU-Data organization" />
        </div>
        <p style="text-align: center;">Select <strong>Join @JMU-Data</strong>.</p>
        <p style="color: #57606a; font-size: 0.95em;">If you were already a member of <code>JMU-Data</code>, you may not receive this invitation again.</p>
      </div>
    </div>

    <!-- SLIDE 9: 08 — Open the Private Repository Invitation -->
    <div class="slide" data-slide="9">
      <span class="slide-badge">Repository Setup</span>
      <h2>08 — Open the Private Repository Invitation</h2>
      <div class="slide-text-large">
        <p>GitHub may also email you a repository invitation.</p>
        <div class="slide-media-box">
          <img src="{{ site.baseurl }}/assets/week-2/screenshots/github-repository-email-invitation.png" alt="Email notification for a private IA340 repository invitation" />
        </div>
        <p style="text-align: center;">Select <strong>View invitation</strong> to open the GitHub invitation page.</p>
        <div class="alert-teaching-point">
          The invitation expires, so accept it before class.
        </div>
      </div>
    </div>

    <!-- SLIDE 10: 09 — Accept and Open Your Assigned Repository -->
    <div class="slide" data-slide="10">
      <span class="slide-badge">Repository Access</span>
      <h2>09 — Accept and Open Your Assigned Repository</h2>
      <div class="slide-text-large">
        <p>On the GitHub invitation page, select <strong>Accept invitation</strong>.</p>
        <div class="slide-media-box">
          <img src="{{ site.baseurl }}/assets/week-2/screenshots/github-repository-accept-invitation.png" alt="GitHub page for accepting access to an assigned private IA340 repository" />
        </div>
        <p>Then open <a href="https://github.com/orgs/JMU-Data/repositories" target="_blank">https://github.com/orgs/JMU-Data/repositories</a>. Your assigned repository follows one of these patterns:</p>
        <pre style="background: #f6f8fa; padding: 0.75rem; border-radius: 6px; border: 1px solid #d0d7de;"><code>IA340-1: ia340-fa26-1-&lt;your-github-username&gt;
IA340-2: ia340-fa26-2-&lt;your-github-username&gt;</code></pre>
        <p><strong>Access and privacy rules:</strong></p>
        <ul style="line-height: 1.8;">
          <li>Use the <strong>assigned private repository</strong>. Do not create a replacement IA340 repository.</li>
          <li>You can access your own private course repository.</li>
          <li>You cannot view classmates' private repositories.</li>
          <li>The instructor and authorized organization administrators can manage course repositories.</li>
          <li>The public <code>JMU-Data/IA340</code> repository contains course materials; it is not your submission repository.</li>
        </ul>
      </div>
    </div>

    <!-- SLIDE 11: 10 — GitHub Student Benefits -->
    <div class="slide" data-slide="11">
      <span class="slide-badge">Student Resources</span>
      <h2>10 — GitHub Student Benefits — Recommended, Not Required</h2>
      <div class="slide-text-large">
        <p>Eligible students can apply for the <strong>GitHub Student Developer Pack</strong>. This is separate from your IA340 repository access.</p>
        <p>Current student benefits include:</p>
        <ul style="line-height: 1.8;">
          <li><strong>GitHub Pro at no cost while you are a verified student</strong>;</li>
          <li>access to <strong>GitHub Copilot Student</strong> for eligible verified students;</li>
          <li>additional developer, cloud, learning, and productivity offers from GitHub partners;</li>
          <li>GitHub Education learning experiences and resources.</li>
        </ul>
        <div class="alert-takeaway">
          <strong>IA340 policy:</strong> the Student Developer Pack is <strong>recommended but NOT required</strong>. You do not need it to access your assigned course repository or complete IA340 assignments.
        </div>
        <p style="margin-top: 1rem;"><a href="https://education.github.com/pack/" target="_blank">GitHub Student Developer Pack ↗</a></p>
      </div>
    </div>

    <!-- SLIDE 12: 11 — A Repository Is Files + Project History -->
    <div class="slide" data-slide="12">
      <span class="slide-badge">Version Control</span>
      <h2>11 — A Repository Is Files + Project History</h2>
      <div class="slide-text-large">
        <p>A normal folder stores files. A GitHub <strong>repository</strong> stores files plus the history of how the project changed.</p>
        <div class="slide-visual-full">
          <img src="{{ site.baseurl }}/assets/week-2/repo-anatomy.svg" alt="A GitHub repository combining files with commits, branches, pull requests, and main" />
        </div>
        <p>A simple IA340 repository may contain <code>README.md</code>, <code>week2_workspace.ipynb</code>, <code>mini-project/</code>, and <code>final-project/</code>.</p>
        <p>GitHub adds:</p>
        <ul style="line-height: 1.8;">
          <li><strong>commits</strong> — what changed?</li>
          <li><strong>branches</strong> — where can a change be prepared safely?</li>
          <li><strong>pull requests</strong> — what change is being proposed and reviewed?</li>
          <li><strong>main</strong> — what is the accepted version?</li>
        </ul>
      </div>
    </div>

    <!-- SLIDE 13: 12 — Commit + Branch -->
    <div class="slide" data-slide="13">
      <span class="slide-badge">Core Mechanics</span>
      <h2>12 — Commit + Branch</h2>
      <div class="slide-text-large">
        <p>A <strong>commit</strong> is a meaningful checkpoint in the project history. A useful commit message says what changed:</p>
        <pre style="background: #f6f8fa; padding: 0.6rem; border: 1px solid #d0d7de; border-radius: 6px;"><code>Add Week 2 README sections</code></pre>
        <p>A <strong>branch</strong> is a safe place to prepare a change without immediately changing <code>main</code>:</p>
        <pre style="background: #f6f8fa; padding: 0.6rem; border: 1px solid #d0d7de; border-radius: 6px;"><code>main
  └── week2-readme</code></pre>
        <div class="slide-visual-full">
          <img src="{{ site.baseurl }}/assets/week-2/branch-pr-merge.svg" alt="A feature branch diverging from main and returning through pull request, review, and merge" />
        </div>
        <p style="color: #57606a;">For IA340, we are using a basic browser-only workflow. We are not learning command-line Git or advanced branching strategies this week.</p>
      </div>
    </div>

    <!-- SLIDE 14: 13 — Pull Request + Diff + Merge -->
    <div class="slide" data-slide="14">
      <span class="slide-badge">Collaboration & Review</span>
      <h2>13 — Pull Request + Diff + Merge</h2>
      <div class="slide-text-large">
        <p>A <strong>pull request (PR)</strong> proposes bringing a change from a branch into <code>main</code>.</p>
        <div style="font-size: 1.15rem; font-weight: 700; color: #0969da; text-align: center; margin: 0.5rem 0 1rem;">
          branch → edit → commit → pull request → inspect the diff → merge
        </div>
        <ul style="line-height: 1.8;">
          <li><strong>Pull request:</strong> What change is being proposed?</li>
          <li><strong>Files changed / diff:</strong> What lines were added or removed?</li>
          <li><strong>Merge:</strong> Accept the reviewed change into <code>main</code>.</li>
        </ul>
        <div class="video-container-large" style="margin-top: 1rem;">
          <iframe src="https://www.youtube-nocookie.com/embed/epaSoKIHtWw" title="GitHub Pull Request Workflow" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <p class="caption-text">
          <a href="https://www.youtube.com/watch?v=epaSoKIHtWw" target="_blank">Open the video on YouTube ↗</a>
        </p>
      </div>
    </div>

    <!-- SLIDE 15: 14 — Live GitHub Demo -->
    <div class="slide" data-slide="15">
      <span class="slide-badge">In-Class Walkthrough</span>
      <h2>14 — Live GitHub Demo</h2>
      <div class="slide-text-large">
        <p>We will inspect one real public course repository:</p>
        <div style="text-align: center; margin: 1.5rem 0;">
          <a href="https://github.com/JMU-Data/IA340" target="_blank" class="deck-btn-primary" style="text-decoration: none; display: inline-block;">
            Open JMU-Data/IA340 on GitHub ↗
          </a>
        </div>
        <p>During the live demo, we will:</p>
        <ol style="line-height: 1.8;">
          <li>identify the <code>main</code> branch and project files,</li>
          <li>read the repository README,</li>
          <li>open the current pull-request list,</li>
          <li>choose a merged pull request,</li>
          <li>inspect <strong>Files changed</strong>, and</li>
          <li>identify the merged result.</li>
        </ol>
        <p style="color: #57606a;">The exact pull request may change. The important skill is knowing where to inspect the project and its history.</p>
      </div>
    </div>

    <!-- SLIDE 16: 15 — Markdown Basics: Source → Rendered Output -->
    <div class="slide" data-slide="16">
      <span class="slide-badge">Technical Communication</span>
      <h2>15 — Markdown Basics: Source → Rendered Output</h2>
      <div class="slide-text-large">
        <p>Markdown is a lightweight plain-text formatting language used in both <strong>GitHub README files</strong> and <strong>Colab text cells</strong>. In data analytics, Markdown is how you explain the question, workflow, evidence, and interpretation around your code.</p>
        <p>The key idea is simple: <strong>you write plain-text Markdown source, and GitHub or Colab renders it as formatted output.</strong></p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
          <thead>
            <tr style="background: #f6f8fa;">
              <th style="padding: 0.5rem; border: 1px solid #d0d7de; text-align: left;">Source</th>
              <th style="padding: 0.5rem; border: 1px solid #d0d7de; text-align: left;">Result</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style="padding: 0.4rem; border: 1px solid #d0d7de;"><code># Title</code></td><td style="padding: 0.4rem; border: 1px solid #d0d7de; font-weight: bold; font-size: 1.2em;">large heading</td></tr>
            <tr><td style="padding: 0.4rem; border: 1px solid #d0d7de;"><code>## Section</code></td><td style="padding: 0.4rem; border: 1px solid #d0d7de; font-weight: bold; font-size: 1.1em;">section heading</td></tr>
            <tr><td style="padding: 0.4rem; border: 1px solid #d0d7de;"><code>**bold**</code></td><td style="padding: 0.4rem; border: 1px solid #d0d7de;"><strong>bold</strong></td></tr>
            <tr><td style="padding: 0.4rem; border: 1px solid #d0d7de;"><code>*italic*</code></td><td style="padding: 0.4rem; border: 1px solid #d0d7de;"><em>italic</em></td></tr>
            <tr><td style="padding: 0.4rem; border: 1px solid #d0d7de;"><code>- item</code></td><td style="padding: 0.4rem; border: 1px solid #d0d7de;">&bull; bullet list</td></tr>
            <tr><td style="padding: 0.4rem; border: 1px solid #d0d7de;"><code>1. item</code></td><td style="padding: 0.4rem; border: 1px solid #d0d7de;">1. numbered list</td></tr>
            <tr><td style="padding: 0.4rem; border: 1px solid #d0d7de;"><code>[text](URL)</code></td><td style="padding: 0.4rem; border: 1px solid #d0d7de;"><a href="#">clickable link</a></td></tr>
            <tr><td style="padding: 0.4rem; border: 1px solid #d0d7de;"><code>`code`</code></td><td style="padding: 0.4rem; border: 1px solid #d0d7de;"><code>inline code</code></td></tr>
            <tr><td style="padding: 0.4rem; border: 1px solid #d0d7de;"><code>&gt; note</code></td><td style="padding: 0.4rem; border: 1px solid #d0d7de; border-left: 3px solid #d0d7de; padding-left: 0.5rem; color: #57606a;">blockquote / callout</td></tr>
          </tbody>
        </table>

        <div class="alert-teaching-point">
          A good notebook is not only executable code. It should make your reasoning readable.
        </div>
      </div>
    </div>

    <!-- SLIDE 17: 16 — In-Class Activity: First README Pull Request -->
    <div class="slide" data-slide="17">
      <span class="slide-badge">Hands-On Activity</span>
      <h2>16 — In-Class Activity: Your First README Pull Request</h2>
      <div class="slide-text-large">
        <p>Use the <strong>private IA340 repository already assigned to you</strong>.</p>
        <ol style="line-height: 1.8;">
          <li>Open your assigned repository.</li>
          <li>From <code>main</code>, create a branch named <code>week2-readme</code>.</li>
        </ol>
        <div class="slide-media-box">
          <img src="{{ site.baseurl }}/assets/week-2/screenshots/lecture-github-create-branch.png" alt="GitHub create-branch dialog using week2-readme from main" />
        </div>
        <ol start="3" style="line-height: 1.8;">
          <li>Edit <code>README.md</code> and use Markdown to add:
            <ul>
              <li><code>## About This Repository</code></li>
              <li><code>## Week 2</code></li>
              <li><strong>bold text</strong> somewhere meaningful</li>
              <li>at least one bullet list</li>
              <li>a link to <a href="https://github.com/JMU-Data/IA340" target="_blank">https://github.com/JMU-Data/IA340</a></li>
              <li>one sentence describing what you expect to learn in IA340</li>
            </ul>
          </li>
          <li>Commit to <code>week2-readme</code> with a meaningful message.</li>
        </ol>
        <div class="slide-media-box">
          <img src="{{ site.baseurl }}/assets/week-2/screenshots/lecture-github-readme-commit.png" alt="GitHub README editor and Commit changes dialog" />
        </div>
        <ol start="5" style="line-height: 1.8;">
          <li>Open a pull request into <code>main</code> titled <strong>Add Week 2 README</strong>.</li>
        </ol>
        <div class="slide-media-box">
          <img src="{{ site.baseurl }}/assets/week-2/screenshots/lecture-github-pull-request.png" alt="GitHub pull request for the Week 2 README branch" />
        </div>
        <ol start="6" style="line-height: 1.8;">
          <li>Open <strong>Files changed</strong> and inspect the diff.</li>
          <li>Merge the pull request.</li>
          <li>Return to <code>main</code> and confirm the README shows the merged change.</li>
          <li>Open <strong>Pull requests → Closed</strong> and confirm the PR is marked <strong>Merged</strong>.</li>
        </ol>
        <div class="alert-warning-point">
          <strong>Security Checkpoint:</strong> Never commit passwords, API keys, access tokens, private credentials, or sensitive data.
        </div>
      </div>
    </div>

    <!-- SLIDE 18: 17 — Wednesday: Lab Workflow Preview -->
    <div class="slide" data-slide="18">
      <span class="slide-badge">Lab Preview</span>
      <h2>17 — Wednesday: Drive → Colab + Gemini → GitHub → Canvas</h2>
      <div class="slide-text-large">
        <p>On Wednesday, we use a simpler <strong>data-science delivery workflow</strong> than Monday's PR exercise:</p>
        <pre style="background: #f6f8fa; padding: 1rem; border: 1px solid #d0d7de; border-radius: 6px; font-family: monospace; line-height: 1.6;"><code>Download diamonds.csv from the public IA340 repo
        ↓
create IA340/ in your Google Drive and upload diamonds.csv
        ↓
blank Colab notebook + Gemini
        ↓
load data → aggregation → chart → Markdown explanation
        ↓
FINAL explicit save of week2_workspace.ipynb to GitHub main
        ↓
submit the direct GitHub notebook URL in Canvas</code></pre>
        <ul style="line-height: 1.8;">
          <li>Monday's branch/PR activity teaches how GitHub review works. For this lab, <strong>you do not need a branch or pull request</strong>: Colab saves the notebook directly to <code>main</code> so we can keep the workflow focused on data analysis.</li>
          <li>Gemini is a natural-language assistant, not a fixed recipe. Your prompt does <strong>not</strong> need to match the instructor's words exactly. Explain what you want, inspect the generated Python/Markdown, run it, verify the output, and revise either the prompt or the code if needed.</li>
        </ul>
      </div>
    </div>

    <!-- SLIDE 19: 18 — Takeaways & Next Steps -->
    <div class="slide" data-slide="19">
      <span class="slide-badge">Summary & Next Steps</span>
      <h2>18 — Week 2 Takeaways & Next Steps</h2>
      <div class="slide-text-large">
        <p>By the end of Week 2, you should be able to:</p>
        <ul style="line-height: 1.8;">
          <li>explain what Google Colab is and why a browser-based Python notebook is useful;</li>
          <li>use Gemini in Colab responsibly to generate, explain, or troubleshoot a small piece of Python;</li>
          <li>accept and open your assigned private IA340 repository;</li>
          <li>explain why your repository is private and isolated from classmates;</li>
          <li>use Markdown in both README files and Colab notebooks;</li>
          <li>complete a browser-only branch → PR → diff → merge workflow;</li>
          <li>explain the different roles of Drive, Colab, GitHub, and Canvas; and</li>
          <li>move a small notebook workflow from Drive and Colab into GitHub and submit the <strong>direct notebook URL</strong> in Canvas.</li>
        </ul>
        <div class="alert-takeaway" style="margin-top: 1.5rem;">
          <strong>The objective is a working, repeatable AI-assisted workflow—not advanced Git or advanced pandas.</strong>
        </div>
        <div style="text-align: center; margin-top: 2rem;">
          <a href="{{ site.baseurl }}/assignments/lab-2/" class="deck-btn-lab">
            Proceed to Lab 2 Instructions ▶
          </a>
        </div>
      </div>
    </div>

  </div>
</div>

<script>
let currentSlide = 1;
const totalSlides = 19;

function updateDeck() {
  const slides = document.querySelectorAll('.slide');
  slides.forEach(slide => {
    const sNum = parseInt(slide.getAttribute('data-slide'));
    if (sNum === currentSlide) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });

  document.getElementById('slideCounter').textContent = `Slide ${currentSlide} of ${totalSlides}`;
  document.getElementById('progressBar').style.width = `${(currentSlide / totalSlides) * 100}%`;
  
  document.getElementById('prevBtn').disabled = (currentSlide === 1);
  document.getElementById('nextBtn').disabled = (currentSlide === totalSlides);

  history.replaceState(null, null, `#slide-${currentSlide}`);
}

function changeSlide(direction) {
  const next = currentSlide + direction;
  if (next >= 1 && next <= totalSlides) {
    currentSlide = next;
    updateDeck();
  }
}

function goToSlide(slideNum) {
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
    goToSlide(totalSlides);
  }
});

window.addEventListener('DOMContentLoaded', () => {
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

<div style="margin-top: 2rem;">
  <a href="{{ site.baseurl }}/">← Return to Course Home</a> | <a href="{{ site.baseurl }}/assignments/lab-2/">Go to Lab 2 Instructions →</a>
</div>
