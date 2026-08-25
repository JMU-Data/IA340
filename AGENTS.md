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
- **Cloud/Browser-First Teaching**: Course materials should prioritize browser-based and cloud-first workflows over complex local machine setups.
- **Provider & Services**: Defer exact choices for AI providers, specific relational-database services, and endpoints until explicitly approved by the Owner. Do NOT assume a fixed commitment to GCP exclusively, Gemini API, or Google Cloud SQL unless confirmed.
- **Out of Scope**: Do NOT generate AWS-centered course direction or tutorials.

## 5. Security & Privacy Rules (CRITICAL)
- **Student Data Privacy**: Student PII, grades, credentials, private roster information, or other student-sensitive data must never be committed to or published through this public repository.
- **No Hardcoded Secrets**: Never hardcode API keys, passwords, or credentials in notebooks or markdown files. Always use environment variables or appropriate secure storage for secrets management in educational materials.

## 6. Asset Storage & Sharing Policy
- **GitHub Repository**: Store all code, Markdown (lectures, labs, syllabus), and images here. All additions must be made via PR.
- **Google Drive**: Used for heavy assets, raw materials, and AI-generated videos (e.g., Google Vids). Agents are authorized to read from and write to the Instructor's specified Google Drive folders for course preparation.
- **Video Embeds**: For videos generated in Google Vids, embed them directly in Markdown if a URL is available. Otherwise, embed YouTube links provided by the Instructor.

## 7. Multi-device / Fresh Clone Bootstrap (Critical)
The Owner uses Antigravity across multiple devices (personal and school computers). To ensure continuity, this repository must be completely self-describing from GitHub alone. On a fresh device, Antigravity MUST:
1. **Fetch & Inspect**: Run `git fetch --all --prune` and inspect the current branch/status.
2. **Read Authority**: Read `AGENTS.md` and `README.md` as the authoritative source of truth.
3. **Contextualize**: Inspect relevant open Issues, open PRs, and recently merged PRs to rebuild context.
4. **Resume**: Resume work on an existing remote PR branch when applicable; otherwise, branch from the current remote `main`.
5. **Bootstrap from Source**: Rely solely on repository-tracked configuration/lock files. Do NOT depend on local project memory, chat history, uncommitted files, or machine-specific IDE state.
6. **Minimal Local Auth**: Request only the minimum Owner-side machine-local auth/setup when credentials are missing. Machine-local `.env`, auth files, and local absolute paths must never become the repository source of truth.
