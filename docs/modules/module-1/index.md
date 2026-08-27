---
layout: default
title: "Module 1 - IA 340"
---

# Module 1: Introduction to Data Mining & AI

<nav style="display: flex; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem; border-bottom: 1px solid #eaecef; padding-bottom: 1rem; font-size: 0.95em;">
  <a href="{{ site.baseurl }}/" style="text-decoration: none; color: #57606a;">Home</a>
  <a href="{{ site.baseurl }}/syllabus/" style="text-decoration: none; color: #57606a;">Syllabus</a>
  <a href="{{ site.baseurl }}/modules/module-1/" style="text-decoration: none; font-weight: 600; color: #0969da;">Module 1</a>
  <a href="{{ site.baseurl }}/assignments/github-account-verification/" style="text-decoration: none; color: #57606a;">Lab 1</a>
</nav>

Welcome to IA 340! In this first week, we will introduce the core concepts of the course, discuss the evolving landscape of AI in data analysis, and set the foundation for your analytical workspace.

## Welcome / Syllabus Highlights
See the [Syllabus]({{ site.baseurl }}/syllabus/) for grading, attendance, communication, and AI policies.

## Intelligence Analysis Technical Curriculum
These courses are complementary within the Intelligence Analysis curriculum (note: IA 342 does not depend on concurrent IA 340). To understand where you are, let's look at how the three core courses fit together:

<div style="display: flex; flex-direction: column; gap: 1rem; margin: 2rem 0; font-family: system-ui, sans-serif;">
  <div style="display: flex; align-items: stretch; background: #e6f2ff; border-left: 4px solid #0969da; border-radius: 4px; overflow: hidden; box-shadow: 0 0 0 2px #0969da;">
    <div style="background: #0969da; color: white; padding: 1rem; display: flex; align-items: center; justify-content: center; font-weight: bold; width: 100px; flex-shrink: 0;">IA 340<br>(You are here)</div>
    <div style="padding: 1rem;">
      <strong>Data Mining</strong>: Collect, organize, and quantitatively analyze data.
    </div>
  </div>

  <div style="display: flex; align-items: stretch; background: #f6f8fa; border-left: 4px solid #57606a; border-radius: 4px; overflow: hidden; opacity: 0.8;">
    <div style="background: #57606a; color: white; padding: 1rem; display: flex; align-items: center; justify-content: center; font-weight: bold; width: 100px; flex-shrink: 0;">IA 342</div>
    <div style="padding: 1rem;">
      <strong>Visual Analytics</strong>: BI / visualization helps humans understand data.
    </div>
  </div>

  <div style="display: flex; align-items: stretch; background: #f6f8fa; border-left: 4px solid #57606a; border-radius: 4px; overflow: hidden; opacity: 0.8;">
    <div style="background: #57606a; color: white; padding: 1rem; display: flex; align-items: center; justify-content: center; font-weight: bold; width: 100px; flex-shrink: 0;">IA 343</div>
    <div style="padding: 1rem;">
      <strong>Interactive and AI Analytics</strong>: Interactive and AI systems help humans and AI interpret data together.
    </div>
  </div>
</div>

## Humans, AI Agents, and Teaching Stacks in GeoAI Education
In 2026, data analysis is fundamentally intertwined with Artificial Intelligence. We are moving from manual coding and querying to a hybrid approach. 

**[UCGIS 2026 Presentation: Humans, AI Agents, and Teaching Stacks in GeoAI Education](https://xbwei.github.io/data-analysis-with-generative-ai/UCGIS2026/talk.html)**

### Human vs. AI Capabilities
To effectively work with AI, you must understand the division of labor. AI can generate code, but **students still need to understand data, context, verification, and workflow design**.

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
  <div style="border: 1px solid #d0d7de; border-radius: 8px; padding: 1.5rem; background: #f6f8fa; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
    <h3 style="margin-top: 0; color: #0969da; border-bottom: 2px solid #0969da; padding-bottom: 0.5rem; display: inline-block;">🧠 Human Capability</h3>
    <ul style="color: #57606a; margin-bottom: 0; padding-left: 1.2rem;">
      <li><strong>Purpose:</strong> Defining what matters and why.</li>
      <li><strong>Care:</strong> Ethical boundaries and responsibility.</li>
      <li><strong>Judgment:</strong> Evaluating context and making critical decisions.</li>
    </ul>
  </div>
  <div style="border: 1px solid #d0d7de; border-radius: 8px; padding: 1.5rem; background: #f6f8fa; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
    <h3 style="margin-top: 0; color: #8250df; border-bottom: 2px solid #8250df; padding-bottom: 0.5rem; display: inline-block;">🤖 AI Capability</h3>
    <ul style="color: #57606a; margin-bottom: 0; padding-left: 1.2rem;">
      <li><strong>Speed:</strong> Instant synthesis and generation.</li>
      <li><strong>Scale:</strong> Processing massive amounts of information.</li>
      <li><strong>Memory:</strong> Retaining vast technical syntax and patterns.</li>
    </ul>
  </div>
</div>

### Prompt → Context → Harness
How does this philosophy connect to modern data analysis? You need to master three core layers of interacting with AI:

<div style="display: flex; flex-direction: column; gap: 1rem; margin: 2rem 0; font-family: system-ui, sans-serif;">
  
  <div style="display: flex; align-items: stretch; background: #f0f6fc; border-left: 4px solid #0969da; border-radius: 4px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
    <div style="background: #0969da; color: white; padding: 1rem; display: flex; align-items: center; justify-content: center; font-weight: bold; width: 120px; flex-shrink: 0;">1. Prompt</div>
    <div style="padding: 1rem;">
      <strong>Asking the right question.</strong> Define specific constraints and intent.
    </div>
  </div>

  <div style="display: flex; justify-content: center; color: #6e7781;">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
  </div>

  <div style="display: flex; align-items: stretch; background: #f6f8fa; border-left: 4px solid #8250df; border-radius: 4px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
    <div style="background: #8250df; color: white; padding: 1rem; display: flex; align-items: center; justify-content: center; font-weight: bold; width: 120px; flex-shrink: 0;">2. Context</div>
    <div style="padding: 1rem;">
      <strong>Providing the environment.</strong> Supplying schemas, data samples, and constraints so the AI is grounded in your reality.
    </div>
  </div>

  <div style="display: flex; justify-content: center; color: #6e7781;">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
  </div>

  <div style="display: flex; align-items: stretch; background: #fff8c5; border-left: 4px solid #bf8700; border-radius: 4px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
    <div style="background: #bf8700; color: white; padding: 1rem; display: flex; align-items: center; justify-content: center; font-weight: bold; width: 120px; flex-shrink: 0;">3. Harness</div>
    <div style="padding: 1rem;">
      <strong>Building the workflow.</strong> Combining human judgment, AI generation, and reliable data infrastructure into repeatable tools.
    </div>
  </div>
  
</div>

## Fall 2026 Semester Journey
Here is a high-level look at our learning progression this semester:

<div style="display: flex; flex-direction: column; gap: 1.5rem; margin: 2rem 0; font-family: system-ui, sans-serif; position: relative;">
  <!-- Vertical line connecting the steps -->
  <div style="position: absolute; left: 15px; top: 20px; bottom: 20px; width: 2px; background-color: #d0d7de; z-index: -1;"></div>

  <div style="display: flex; gap: 1.5rem;">
    <div style="width: 32px; height: 32px; border-radius: 50%; background: #0969da; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0; box-shadow: 0 0 0 4px white;">1</div>
    <div style="background: white; border: 1px solid #d0d7de; border-radius: 8px; padding: 1.2rem; flex-grow: 1; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h3 style="margin: 0 0 0.5rem 0; color: #0969da;">Workspace / Cloud Data</h3>
      <p style="margin: 0 0 0.25rem 0; font-size: 0.95em;"><strong>Tools:</strong> Google Colab, Drive, GitHub</p>
      <p style="margin: 0 0 0.25rem 0; font-size: 0.95em;"><strong>Major Skills:</strong> Cloud foundation, object storage, version control</p>
      <p style="margin: 0; font-size: 0.95em; color: #57606a;"><strong>Expected Output:</strong> A functioning, accessible cloud analytics environment</p>
    </div>
  </div>

  <div style="display: flex; gap: 1.5rem;">
    <div style="width: 32px; height: 32px; border-radius: 50%; background: #0969da; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0; box-shadow: 0 0 0 4px white;">2</div>
    <div style="background: white; border: 1px solid #d0d7de; border-radius: 8px; padding: 1.2rem; flex-grow: 1; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h3 style="margin: 0 0 0.5rem 0; color: #0969da;">Python Analysis</h3>
      <p style="margin: 0 0 0.25rem 0; font-size: 0.95em;"><strong>Tools:</strong> Python, Pandas</p>
      <p style="margin: 0 0 0.25rem 0; font-size: 0.95em;"><strong>Major Skills:</strong> Data manipulation, cleaning, scripting</p>
      <p style="margin: 0; font-size: 0.95em; color: #57606a;"><strong>Expected Output:</strong> Processed, structured datasets ready for modeling</p>
    </div>
  </div>

  <div style="display: flex; gap: 1.5rem;">
    <div style="width: 32px; height: 32px; border-radius: 50%; background: #2da44e; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0; box-shadow: 0 0 0 4px white;">3</div>
    <div style="background: white; border: 1px solid #d0d7de; border-radius: 8px; padding: 1.2rem; flex-grow: 1; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h3 style="margin: 0 0 0.5rem 0; color: #2da44e;">Relational Database / SQL</h3>
      <p style="margin: 0 0 0.25rem 0; font-size: 0.95em;"><strong>Tools:</strong> Cloud SQL databases</p>
      <p style="margin: 0 0 0.25rem 0; font-size: 0.95em;"><strong>Major Skills:</strong> ER modeling, structured querying</p>
      <p style="margin: 0; font-size: 0.95em; color: #57606a;"><strong>Expected Output:</strong> Designing and retrieving data from tabular structures</p>
    </div>
  </div>

  <div style="display: flex; gap: 1.5rem;">
    <div style="width: 32px; height: 32px; border-radius: 50%; background: #bf8700; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0; box-shadow: 0 0 0 4px white;">4</div>
    <div style="background: white; border: 1px solid #d0d7de; border-radius: 8px; padding: 1.2rem; flex-grow: 1; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h3 style="margin: 0 0 0.5rem 0; color: #bf8700;">MongoDB / Social & API Data</h3>
      <p style="margin: 0 0 0.25rem 0; font-size: 0.95em;"><strong>Tools:</strong> APIs, MongoDB</p>
      <p style="margin: 0 0 0.25rem 0; font-size: 0.95em;"><strong>Major Skills:</strong> Semi-structured data collection, NoSQL aggregation</p>
      <p style="margin: 0; font-size: 0.95em; color: #57606a;"><strong>Expected Output:</strong> Scraping and storing rich, real-world web data</p>
    </div>
  </div>

  <div style="display: flex; gap: 1.5rem;">
    <div style="width: 32px; height: 32px; border-radius: 50%; background: #8250df; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0; box-shadow: 0 0 0 4px white;">5</div>
    <div style="background: white; border: 1px solid #d0d7de; border-radius: 8px; padding: 1.2rem; flex-grow: 1; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h3 style="margin: 0 0 0.5rem 0; color: #8250df;">AI / Vector Analytics</h3>
      <p style="margin: 0 0 0.25rem 0; font-size: 0.95em;"><strong>Tools:</strong> GenAI APIs, Vector Embeddings</p>
      <p style="margin: 0 0 0.25rem 0; font-size: 0.95em;"><strong>Major Skills:</strong> AI-assisted classification, semantic search</p>
      <p style="margin: 0; font-size: 0.95em; color: #57606a;"><strong>Expected Output:</strong> Using AI to interpret and query complex text at scale</p>
    </div>
  </div>

  <div style="display: flex; gap: 1.5rem;">
    <div style="width: 32px; height: 32px; border-radius: 50%; background: #24292f; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0; box-shadow: 0 0 0 4px white;">6</div>
    <div style="background: white; border: 1px solid #d0d7de; border-radius: 8px; padding: 1.2rem; flex-grow: 1; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h3 style="margin: 0 0 0.5rem 0; color: #24292f;">Final Project</h3>
      <p style="margin: 0 0 0.25rem 0; font-size: 0.95em;"><strong>Tools:</strong> Combined Stack</p>
      <p style="margin: 0 0 0.25rem 0; font-size: 0.95em;"><strong>Major Skills:</strong> Workflow design, independent problem solving</p>
      <p style="margin: 0; font-size: 0.95em; color: #57606a;"><strong>Expected Output:</strong> An end-to-end data pipeline discovering new insights</p>
    </div>
  </div>
</div>

## Week 1 Action Items
To get started, you only have one assignment this week. You will set up your GitHub account, link your JMU Google account for Google Colab/Drive, enroll in the Coursera AI Certificate program, and optionally explore the recommended Gemini AI Pro student offer. We are using a "just-in-time" onboarding approach, so we will set up Google Cloud and other tools later when we actually need them.

👉 **[Go to Week 1 Assignment: Account Setup & AI Program Registration]({{ site.baseurl }}/assignments/github-account-verification/)**

---

<div style="margin-top: 2rem;">
  <a href="{{ site.baseurl }}/syllabus/">← Review Syllabus</a> | <a href="{{ site.baseurl }}/">Return to Course Home</a>
</div>
