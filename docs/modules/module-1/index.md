---
layout: default
title: "Module 1 - IA 340"
---

# Module 1: Introduction to Data Mining & AI

Welcome to IA 340! In this first week, we will introduce the core concepts of the course, discuss the evolving landscape of AI in data analysis, and set the foundation for your analytical workspace.

## Welcome / Syllabus Highlights
Before we dive in, please review the full [Syllabus](../../syllabus/). Here are the key takeaways:
- **Communication**: Use your JMU institutional email to contact the instructor. Do not use Canvas messages.
- **Grading**: Labs (40%) and Projects (30%) make up the bulk of your grade. Attendance (20%) is mandatory.
- **AI Policy**: AI is part of the course and may be expected or required in specific assignments. You are responsible for inspecting, testing, verifying, and explaining any AI-assisted work.

## Intelligence Analysis Technical Curriculum
This course is part of a larger technical sequence in the Intelligence Analysis curriculum. To understand where you are, let's look at how the three core courses fit together:

<div style="display: flex; flex-direction: column; gap: 1rem; margin: 2rem 0; font-family: system-ui, sans-serif;">
  <div style="display: flex; align-items: stretch; background: #e6f2ff; border-left: 4px solid #0969da; border-radius: 4px; overflow: hidden; box-shadow: 0 0 0 2px #0969da;">
    <div style="background: #0969da; color: white; padding: 1rem; display: flex; align-items: center; justify-content: center; font-weight: bold; width: 100px; flex-shrink: 0;">IA 340<br>(You are here)</div>
    <div style="padding: 1rem;">
      <strong>Data Mining</strong>: Collect, organize, and quantitatively analyze data. Building the cloud and database foundation.
    </div>
  </div>

  <div style="display: flex; align-items: stretch; background: #f6f8fa; border-left: 4px solid #57606a; border-radius: 4px; overflow: hidden; opacity: 0.8;">
    <div style="background: #57606a; color: white; padding: 1rem; display: flex; align-items: center; justify-content: center; font-weight: bold; width: 100px; flex-shrink: 0;">IA 342</div>
    <div style="padding: 1rem;">
      <strong>Visual Analytics</strong>: BI and visualization techniques to help humans visually understand data.
    </div>
  </div>

  <div style="display: flex; align-items: stretch; background: #f6f8fa; border-left: 4px solid #57606a; border-radius: 4px; overflow: hidden; opacity: 0.8;">
    <div style="background: #57606a; color: white; padding: 1rem; display: flex; align-items: center; justify-content: center; font-weight: bold; width: 100px; flex-shrink: 0;">IA 343</div>
    <div style="padding: 1rem;">
      <strong>System Interpretation</strong>: Interactive and AI systems to help humans and AI interpret data.
    </div>
  </div>
</div>

## Course-Specific Core Lesson: AI in Data Analysis
In 2026, data analysis is fundamentally intertwined with Artificial Intelligence. We are moving from manual coding and querying to a hybrid approach. To succeed in this environment, you need to understand three core layers of interacting with AI:

<div style="display: flex; flex-direction: column; gap: 1rem; margin: 2rem 0; font-family: system-ui, sans-serif;">
  
  <div style="display: flex; align-items: stretch; background: #f0f6fc; border-left: 4px solid #0969da; border-radius: 4px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
    <div style="background: #0969da; color: white; padding: 1rem; display: flex; align-items: center; justify-content: center; font-weight: bold; width: 120px; flex-shrink: 0;">1. Prompt</div>
    <div style="padding: 1rem;">
      <strong>Asking the right question.</strong> Instead of generic prompts, write clear, specific constraints. <em>"Write a Python script using pandas to find the top 5 anomalies in this dataset."</em>
    </div>
  </div>

  <div style="display: flex; justify-content: center; color: #6e7781;">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
  </div>

  <div style="display: flex; align-items: stretch; background: #f6f8fa; border-left: 4px solid #8250df; border-radius: 4px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
    <div style="background: #8250df; color: white; padding: 1rem; display: flex; align-items: center; justify-content: center; font-weight: bold; width: 120px; flex-shrink: 0;">2. Context</div>
    <div style="padding: 1rem;">
      <strong>Providing the environment.</strong> AI needs schemas, documentation, and specific data samples so it can give you tailored, accurate solutions rather than generic hallucinations.
    </div>
  </div>

  <div style="display: flex; justify-content: center; color: #6e7781;">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
  </div>

  <div style="display: flex; align-items: stretch; background: #fff8c5; border-left: 4px solid #bf8700; border-radius: 4px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
    <div style="background: #bf8700; color: white; padding: 1rem; display: flex; align-items: center; justify-content: center; font-weight: bold; width: 120px; flex-shrink: 0;">3. Harness</div>
    <div style="padding: 1rem;">
      <strong>Building the workflow.</strong> Combining AI + trusted context/data + tools, workflows, and agents. The exact provider, API implementations, and automated processing details will be introduced later.
    </div>
  </div>
  
</div>

## Fall 2026 Roadmap
Here is a high-level look at our journey this semester:

1. **Workspace Setup**: Getting comfortable with Google Colab (our coding environment), Google Drive (our data lake), and GitHub (our version control platform).
2. **Python Analysis**: Using Python to manipulate, clean, and analyze datasets.
3. **Relational Databases & SQL**: Building structured databases and querying them.
4. **NoSQL, Social Data, & AI**: Working with unstructured data, collecting social media or API data, and integrating GenAI for advanced analysis.
5. **Final Project**: Applying all these skills to a comprehensive, end-to-end data mining project.

## Week 1 Action Items
To get started, you only have one assignment this week. We are using a "just-in-time" onboarding approach, so we will set up Google Cloud and other tools later when we actually need them.

👉 **[Go to Week 1 Assignment: GitHub Account Verification](../../assignments/github-account-verification/)**

---

<div style="margin-top: 2rem;">
  <a href="../../syllabus/">← Review Syllabus</a> | <a href="../../">Return to Course Home</a>
</div>
