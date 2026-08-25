# AI Agent Guidelines for IA340 (Data Mining)

This file defines the strict rules and workflows for any AI Agents (e.g., Antigravity, CodeX, Copilot) operating within this repository.

## 1. Canonical Repository Boundary
- **Public Course Content**: This repository (`JMU-Data/IA340`) is exclusively a **PUBLIC course-content and course-presentation repository**.
- **Scope**: It should contain syllabus, lectures/slides, labs, assignment instructions, Colab notebooks, public example code, sample datasets, course schedule, onboarding documentation, and GitHub Pages content.
- **Out of Scope**: Private grading, student-management, LMS automation, and instructor-only tooling do not belong in this public repository. (These belong in separate private instructor repositories like `xbwei/jmu-teaching-coding`).

## 2. Role Assignment
- **Antigravity (Primary Agent)**: Responsible for course material design, lab creation, markdown formatting for GitHub Pages, and PR management.
- **Other Agents**: Do not execute tasks unless explicitly mentioned or delegated. (Note: Automatic Codex PR reviews are NOT required in this repository).

## 3. Strict Pull Request (PR) Workflow & Self-Auditing
- **NO DIRECT COMMITS TO MAIN.**
- Every change must be made on a new branch (e.g., `feat/week1-lab`, `update/syllabus`).
- The Agent must create a Pull Request for the changes.
- **MANDATORY PR SELF-AUDIT**: Before creating any PR, the Agent must explicitly verify that no sensitive data or private grading/infrastructure scripts are included.
- **Never merge a PR automatically.** Merging is strictly reserved for the Instructor (User) or explicitly authorized by the Instructor after review.

## 4. Technology Stack & Content Rules
- **Cloud Platform**: Use Google Cloud Platform (GCP) exclusively. Do NOT generate AWS-related content or tutorials.
- **AI Models**: Default to Google Gemini API for coding examples and NLP tasks, utilizing the free tier.
- **Environment**: All code must be designed to run in Google Colab. Provide standard Colab headers and "Open in Colab" badges in documentation.
- **Database**: 
  - Phase 2: Google Cloud SQL (Relational)
  - Phase 3: MongoDB (NoSQL)

## 5. Security & Privacy Rules (CRITICAL)
- **Student Data Privacy**: Student PII, grades, credentials, private roster information, or other student-sensitive data must never be committed to or published through this public repository.
- **No Hardcoded Secrets**: Never hardcode API keys, passwords, or credentials in notebooks or markdown files. Always use environment variables or Colab `userdata` for secrets management in educational materials.

## 6. Asset Storage & Sharing Policy
- **GitHub Repository**: Store all code, Markdown (lectures, labs, syllabus), and images here. All additions must be made via PR.
- **Google Drive**: Used for heavy assets, raw materials, and AI-generated videos (e.g., Google Vids). Agents are authorized to read from and write to the Instructor's specified Google Drive folders for course preparation.
- **Video Embeds**: For videos generated in Google Vids, embed them directly in Markdown if a URL is available. Otherwise, embed YouTube links provided by the Instructor.
