# AI Agent Guidelines for IA340 (Data Mining)

This file defines the strict rules and workflows for any AI Agents (e.g., Antigravity, CodeX, Copilot) operating within this repository.

## 1. Role Assignment
- **Antigravity (Primary Agent)**: Responsible for course material design, lab creation, markdown formatting for GitHub Pages, and PR management.
- **Other Agents**: Do not execute tasks unless explicitly mentioned or delegated.

## 2. Strict Pull Request (PR) Workflow & Self-Auditing
- **NO DIRECT COMMITS TO MAIN.**
- Every change must be made on a new branch (e.g., `feat/week1-lab`, `update/syllabus`).
- The Agent must create a Pull Request for the changes.
- **MANDATORY PR SELF-AUDIT**: Before creating any PR, the Agent must explicitly verify that no sensitive data, student privacy information, or private grading scripts are included.
- **Never merge a PR automatically.** Merging is strictly reserved for the Instructor (User) or explicitly authorized by the Instructor after review.

## 3. Technology Stack & Content Rules
- **Cloud Platform**: Use Google Cloud Platform (GCP) exclusively. Do NOT generate AWS-related content or tutorials.
- **AI Models**: Default to Google Gemini API for coding examples and NLP tasks, utilizing the free tier.
- **Environment**: All code must be designed to run in Google Colab. Provide standard Colab headers and "Open in Colab" badges in documentation.
- **Database**: 
  - Phase 2: Google Cloud SQL (Relational)
  - Phase 3: MongoDB (NoSQL)

## 4. GitHub Pages Generation
- All human-readable content (Lectures, Labs, Syllabus) must be placed in the `/docs` folder using standard Markdown.
- Keep the writing style academic, engaging, and easy to follow for JMU students.

## 5. STRICT SECURITY, PRIVACY & GRADING RULES (CRITICAL)
- **Public vs. Private Separation**: This repository (`JMU-Data/IA340`) is **100% PUBLIC**. It is accessible to students and the general public.
- **NO Grading Scripts**: Any code written to check, grade, or audit student homework/databases **MUST NEVER** be committed to this repository. Such scripts must be saved elsewhere (e.g., a separate private repository or locally ignored folders).
- **NO Student Privacy Data**: The Agent must NEVER ask for, store, output, or commit any student emails, names, grades, or credentials.
- **Secret Management**: Student database URLs and credentials will be securely stored by the Instructor in **Google Cloud Secret Manager**. The Agent will only interact with these via secure API calls in local, non-public grading scripts. Do NOT hardcode or leak any secrets.
