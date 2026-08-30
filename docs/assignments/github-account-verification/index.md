---
layout: default
title: "Lab 1: Account Setup & AI Program Registration - IA 340"
---

# Lab 1: Account Setup & AI Program Registration

<nav style="display: flex; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem; border-bottom: 1px solid #eaecef; padding-bottom: 1rem; font-size: 0.95em;">
  <a href="{{ site.baseurl }}/" style="text-decoration: none; color: #57606a;">Home</a>
  <a href="{{ site.baseurl }}/syllabus/" style="text-decoration: none; color: #57606a;">Syllabus</a>
  <a href="{{ site.baseurl }}/modules/module-1/" style="text-decoration: none; color: #57606a;">Module 1</a>
  <a href="{{ site.baseurl }}/assignments/github-account-verification/" style="text-decoration: none; font-weight: 600; color: #0969da;">Lab 1</a>
  <a href="{{ site.baseurl }}/modules/module-2/" style="text-decoration: none; color: #57606a;">Module 2</a>
  <a href="{{ site.baseurl }}/assignments/lab-2/" style="text-decoration: none; color: #57606a;">Lab 2</a>
</nav>

**Target Date:** Friday, August 28, 2026  
*(Note: Canvas is the authoritative source for the exact due date/time and submission status.)*  
**Submission Location:** Canvas

## Part 1: GitHub Account Verification

**Version control** is a system that records every change made to a file (or set of files) over time, so you can recall specific versions later and collaborate without overwriting each other's work. **GitHub** is the world's most popular platform built on top of Git — think of it as Google Docs with a complete, permanent edit history, but designed for code, data, and analysis notebooks.

<!-- ── Comparison diagram ─────────────────────────────────────── -->
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 1.5rem 0; font-size: 0.92em;">

  <div style="background: #fff8f0; border: 1px solid #f0c070; border-radius: 8px; padding: 1rem;">
    <div style="font-weight: 700; color: #b45309; margin-bottom: 0.6rem;">❌ Without Version Control</div>
    <div style="font-family: monospace; color: #57606a; line-height: 1.8;">
      analysis_final.py<br>
      analysis_final_v2.py<br>
      analysis_FINAL_USE_THIS.py<br>
      analysis_fix_Apr7.py<br>
      <span style="color:#b45309;">😰 Which one is the real final?</span>
    </div>
  </div>

  <div style="background: #f0fdf4; border: 1px solid #6ee7b7; border-radius: 8px; padding: 1rem;">
    <div style="font-weight: 700; color: #065f46; margin-bottom: 0.6rem;">✅ With Version Control (GitHub)</div>
    <div style="font-family: monospace; color: #57606a; line-height: 1.8;">
      analysis.py &nbsp;<span style="color:#065f46;">← one file</span><br>
      <span style="color:#6b7280;">↳ commit: "initial draft"</span><br>
      <span style="color:#6b7280;">↳ commit: "fix null values"</span><br>
      <span style="color:#6b7280;">↳ commit: "add visualization"</span><br>
      <span style="color:#065f46;">😌 Full history, always clean.</span>
    </div>
  </div>

</div>

### Key Concepts at a Glance

<!-- ── Key concept cards ──────────────────────────────────────── -->
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 0.75rem; margin: 1rem 0 1.5rem;">

  <div style="background: #f6f8fa; border: 1px solid #d0d7de; border-radius: 8px; padding: 0.9rem; text-align: center;">
    <div style="font-size: 1.6rem;">🗂️</div>
    <div style="font-weight: 700; margin: 0.3rem 0 0.2rem;">Repository</div>
    <div style="font-size: 0.85em; color: #57606a;">A project folder in the cloud that stores all your files <em>and</em> their full change history.</div>
  </div>

  <div style="background: #f6f8fa; border: 1px solid #d0d7de; border-radius: 8px; padding: 0.9rem; text-align: center;">
    <div style="font-size: 1.6rem;">💾</div>
    <div style="font-weight: 700; margin: 0.3rem 0 0.2rem;">Commit</div>
    <div style="font-size: 0.85em; color: #57606a;">A labeled snapshot of your changes — like pressing "Save" with a descriptive note.</div>
  </div>

  <div style="background: #f6f8fa; border: 1px solid #d0d7de; border-radius: 8px; padding: 0.9rem; text-align: center;">
    <div style="font-size: 1.6rem;">🌿</div>
    <div style="font-weight: 700; margin: 0.3rem 0 0.2rem;">Branch</div>
    <div style="font-size: 0.85em; color: #57606a;">A safe copy of your project where you can experiment without affecting the main version.</div>
  </div>

  <div style="background: #f6f8fa; border: 1px solid #d0d7de; border-radius: 8px; padding: 0.9rem; text-align: center;">
    <div style="font-size: 1.6rem;">🔀</div>
    <div style="font-weight: 700; margin: 0.3rem 0 0.2rem;">Pull Request</div>
    <div style="font-size: 0.85em; color: #57606a;">A request to merge your branch back in — where review and feedback happen.</div>
  </div>

</div>

**Why does IA 340 use GitHub?**  
This course hosts all lab instructions, Colab notebooks, and course materials on GitHub. As you progress through the semester, you will submit analysis notebooks, share code, and collaborate using the same tools used by data professionals.

### The Workflow You'll Use This Semester

You don't need to master this on Day 1 — but here's the flow you'll become familiar with:

<!-- ── Workflow pipeline ───────────────────────────────────────── -->
<div style="display: flex; flex-wrap: wrap; align-items: center; gap: 0.4rem; margin: 1rem 0 1.5rem; font-size: 0.88em;">

  <div style="background: #dbeafe; border: 1px solid #93c5fd; border-radius: 6px; padding: 0.5rem 0.8rem; text-align: center; min-width: 90px;">
    <div style="font-size: 1.1rem;">✏️</div>
    <div style="font-weight: 600; color: #1e40af;">Make Changes</div>
    <div style="color: #3b82f6; font-size: 0.82em;">edit your notebook</div>
  </div>
  <div style="color: #9ca3af; font-size: 1.2rem; font-weight: 300;">→</div>

  <div style="background: #ede9fe; border: 1px solid #c4b5fd; border-radius: 6px; padding: 0.5rem 0.8rem; text-align: center; min-width: 90px;">
    <div style="font-size: 1.1rem;">🌿</div>
    <div style="font-weight: 600; color: #5b21b6;">Branch</div>
    <div style="color: #7c3aed; font-size: 0.82em;">safe workspace</div>
  </div>
  <div style="color: #9ca3af; font-size: 1.2rem; font-weight: 300;">→</div>

  <div style="background: #fef9c3; border: 1px solid #fde047; border-radius: 6px; padding: 0.5rem 0.8rem; text-align: center; min-width: 90px;">
    <div style="font-size: 1.1rem;">🔀</div>
    <div style="font-weight: 600; color: #713f12;">Pull Request</div>
    <div style="color: #92400e; font-size: 0.82em;">propose changes</div>
  </div>
  <div style="color: #9ca3af; font-size: 1.2rem; font-weight: 300;">→</div>

  <div style="background: #dcfce7; border: 1px solid #86efac; border-radius: 6px; padding: 0.5rem 0.8rem; text-align: center; min-width: 90px;">
    <div style="font-size: 1.1rem;">👁️</div>
    <div style="font-weight: 600; color: #14532d;">Preview</div>
    <div style="color: #166534; font-size: 0.82em;">see it live</div>
  </div>
  <div style="color: #9ca3af; font-size: 1.2rem; font-weight: 300;">→</div>

  <div style="background: #fee2e2; border: 1px solid #fca5a5; border-radius: 6px; padding: 0.5rem 0.8rem; text-align: center; min-width: 90px;">
    <div style="font-size: 1.1rem;">✅</div>
    <div style="font-weight: 600; color: #7f1d1d;">Review</div>
    <div style="color: #991b1b; font-size: 0.82em;">instructor check</div>
  </div>
  <div style="color: #9ca3af; font-size: 1.2rem; font-weight: 300;">→</div>

  <div style="background: #f0fdf4; border: 2px solid #4ade80; border-radius: 6px; padding: 0.5rem 0.8rem; text-align: center; min-width: 90px;">
    <div style="font-size: 1.1rem;">🎉</div>
    <div style="font-weight: 700; color: #14532d;">Merged!</div>
    <div style="color: #166534; font-size: 0.82em;">published</div>
  </div>

</div>

**For now, all you need is a GitHub account.** The rest will be introduced step by step.

Throughout this course, we will use two distinct platforms:

<!-- ── Platform comparison ────────────────────────────────────── -->
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin: 0.75rem 0 1.25rem; font-size: 0.92em;">
  <div style="background: #f6f8fa; border-left: 4px solid #24292f; border-radius: 0 6px 6px 0; padding: 0.75rem 1rem;">
    <div style="font-weight: 700; margin-bottom: 0.25rem;">🐙 GitHub</div>
    <div style="color: #57606a;">Technical work · code · notebooks · collaboration</div>
  </div>
  <div style="background: #f6f8fa; border-left: 4px solid #e52030; border-radius: 0 6px 6px 0; padding: 0.75rem 1rem;">
    <div style="font-weight: 700; margin-bottom: 0.25rem;">🎓 Canvas</div>
    <div style="color: #57606a;">Official submission · gradebook · deadline authority</div>
  </div>
</div>

<div style="background: #f0f6fc; border-left: 4px solid #0969da; border-radius: 6px; padding: 1.2rem 1.5rem; margin: 1.5rem 0; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
  <div style="font-weight: 700; color: #0969da; font-size: 1.05em; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
    <span>📢 Policy Update & Clarification: Google AI Pro is Strictly Optional</span>
  </div>
  <p style="margin: 0 0 0.75rem 0; font-size: 0.95em; color: #24292f; line-height: 1.6;">
    Following our in-class walkthrough, please note this updated course policy regarding the Google AI Pro student offer:
  </p>
  <ul style="margin: 0; padding-left: 1.25rem; font-size: 0.92em; color: #57606a; line-height: 1.6;">
    <li><strong style="color: #24292f;">Zero Grade Impact:</strong> Whether you activate the AI Pro offer or not will <strong>never affect your grade</strong> in IA 340. All course labs, exercises, and final projects are fully supported using standard access without any paid tier.</li>
    <li><strong style="color: #24292f;">Payment Information:</strong> The AI Pro student promotion requires entering personal payment/credit card information for post-trial auto-renewal. Financial decisions are strictly your personal choice.</li>
    <li><strong style="color: #24292f;">Document Privacy & Verification Warning:</strong> During identity verification (SheerID), you may be prompted to upload verification documents. <strong>We strongly advise against uploading sensitive personal records such as official academic transcripts.</strong> If you choose to verify, you should at most upload a class schedule, and avoid sharing any sensitive documents. Due to these requirements, you do <strong>not</strong> need to apply for AI Pro.</li>
    <li><strong style="color: #24292f;">JMU Google Account Remains Required:</strong> You <strong>must</strong> still have an active Google account associated with your official James Madison University email (<code>@dukes.jmu.edu</code> or <code>@jmu.edu</code>) to access Google Colab, Google Drive, and course datasets.</li>
  </ul>
</div>

## Part 2: Google Account & AI Tools

In this course, we will utilize cloud notebooks and AI-assisted workflows for data mining.

- **Google Account (Required):** You must create or link a Google account using your **James Madison University email address** (`@dukes.jmu.edu` or `@jmu.edu`). This account is required to run Google Colab notebooks, access shared datasets on Google Drive, and submit technical labs.
- **Google AI Pro / Gemini Advanced (Optional Recommendation):** You may optionally explore the 1-year free student offer if you wish, but it is **not required**, requires payment information, and has **zero impact on your grade**.

## Part 3: Coursera & Google AI Professional Certificate

As part of the course curriculum, we will be utilizing the Google AI Professional Certificate program hosted on Coursera. You will join the JMU learning program using your JMU email to access this content.

## Instructions

Please complete the following setup steps during Week 1:

### 1. GitHub Setup
- **Create or Log In to GitHub:** Go to [GitHub.com](https://github.com/) and create an account (or log in if you have one). *Note: You are not required to use your JMU institutional email for GitHub, but you may if you prefer.*
- **Locate Your Profile URL:** Go to your profile page and copy the URL (e.g., `https://github.com/your-username`).

### 2. Google Account Setup (Required) & AI Pro (Optional)
- **Create/Link JMU Google Account (Required):** Ensure you have an active Google account associated with your **JMU email address** (`@dukes.jmu.edu` or `@jmu.edu`). You will use this account throughout the semester for Google Colab and cloud storage.
- **AI Pro Student Offer (Optional):** If you personally choose to claim the Gemini Advanced student offer, you can visit the [Google Gemini Student Offer page](https://gemini.google/students/). Remember:
  - *Do NOT upload sensitive documents like official transcripts.* If verification is requested, at most upload a class schedule and avoid submitting sensitive personal records.
  - *Set a calendar reminder* to cancel before the 1-year trial ends to prevent unintended charges.
  - *You may completely skip this step without any penalty.*

### 3. Coursera & AI Professional Certificate (Required)
- **Register for Coursera:** Create a Coursera account using your **JMU email address**.
- **Join the JMU Learning Program:** After creating your account, go to this specific link to enroll in the JMU program: [Google Learning Program for JMU IA Students](https://www.coursera.org/programs/google-learning-program-for-jmu-ia-students-j6l6g)
- **Enroll in the Certificate:** Once you have joined the JMU program via the link, enroll in the **Google AI Professional Certificate**.

## What to Submit (on Canvas)
Go to the official course Canvas page, navigate to the **Assignments** section, and find Lab 1.

Submit the following in the text box on Canvas to verify completion:
1. Your GitHub Username (e.g., `janedoe`)
2. Your GitHub Profile URL (e.g., `https://github.com/janedoe`)
3. A brief confirmation statement that you have configured your Google account using your JMU email address (`@dukes.jmu.edu` or `@jmu.edu`) and enrolled in the Coursera JMU AI Certificate Program (e.g., *"I have registered for GitHub, set up my JMU Google account, and enrolled in the Coursera AI Certificate program."*).

*Note: You do not need to create any repositories, write any code, or submit a GitHub repo for this assignment. Further setup will be handled in subsequent weeks.*

## Privacy Note
Your GitHub username and profile will be visible to other students in the course organization. Do not put private personal information (like your home address or phone number) in your public GitHub profile. Avoid sharing sensitive academic or financial documents during any third-party tool registrations.

---

<div style="margin-top: 2rem;">
  <a href="{{ site.baseurl }}/modules/module-1/">← Return to Module 1</a> | <a href="{{ site.baseurl }}/">Course Home</a>
</div>
