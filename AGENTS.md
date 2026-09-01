# AI Agent Guidelines for IA340 (Data Mining)

This file defines the strict rules and workflows for any AI Agents (e.g., Antigravity, CodeX, Copilot) operating within this repository.

## 1. Canonical Repository Boundary
- **Public Course Content**: This repository (`JMU-Data/IA340`) is exclusively a **PUBLIC course-content and course-presentation repository**.
- **Scope**: It should contain syllabus, lectures/slides, labs, assignment instructions, Colab notebooks, public example code, sample datasets, course schedule, onboarding documentation, and GitHub Pages content.
- **Out of Scope**: Private grading, student-management, LMS automation, and instructor-only tooling do not belong in this public repository. (These belong in separate private instructor repositories like `xbwei/jmu-teaching-coding`).

## 2. Role Assignment
- **Antigravity (Primary Agent)**: Responsible for course material design, lab creation, markdown formatting for GitHub Pages, and PR management.
- **Other Agents**: Do not execute tasks unless explicitly mentioned or delegated. (Note: Automatic Codex PR reviews are NOT required in this repository).

### Teaching-Coding Tools Usage Boundary (CRITICAL)
- **Tool Purpose**: The `teaching-coding` folder / repository (`xbwei/jmu-teaching-coding`) contains Python scripts and automation tools for managing Canvas LMS, grading validation, and tracking student performance.
- **Role Boundary (User, NOT Developer)**: In the context of IA340 and course management, Antigravity acts strictly as an **end-user / runner** of these scripts, **NOT their developer**. Antigravity will be instructed by the Instructor on how to run them when needed, but must NOT attempt to develop, refactor, or modify the `teaching-coding` code here.
- **Privacy & Isolation**: Tools from `teaching-coding`, student grades, LMS tokens, and grading outputs belong strictly to the private instructor environment and must NEVER be committed to or referenced in this public repository (`JMU-Data/IA340`).

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

## 8. Course Development & GitHub-Hosted PR Preview Workflow
1. **Engineering / Architecture Work**: 
   - Do not arbitrarily expand the scope on issues like repository architecture, automation, API/integration, security/privacy, cross-repo dependency, deployment architecture, or tool/service selection.
   - The Owner will brainstorm and finalize high-level requirements/decisions via ChatGPT or GitHub Issues first. 
   - Antigravity must treat these established requirements/Issues as strict implementation boundaries.
2. **Existing Teaching Materials as Substantive Sources**: 
   - Before rewriting course content, prioritize reading the Owner's specified existing materials (repo, Google Drive, old syllabus, lectures, labs, assignments, slides, etc.).
   - Reuse valid teaching content. Do not guess about outdated, conflicting, or uncertain material; explicitly flag it or ask the Owner.
   - New web content is a presentation/evolution layer; do not abandon mature teaching material without reason.
3. **Content Iteration**: 
   - The Owner can directly iterate with Antigravity on syllabus wording, module content, lab instructions, course-site visuals, HTML/CSS presentation, links, icons, and layout. 
   - These modifications do not require re-validation through ChatGPT or new Issues unless they involve new architecture/policy/security/cross-repo decisions.
4. **GitHub-Hosted PR Preview**: 
   - Substantial GitHub Pages / course-site visual or content work must be done on a feature branch.
   - Upon PR creation or update, GitHub Actions will automatically build and host a preview.
   - A clickable Preview Website link will appear in the PR.
   - The Owner will review from any device and provide feedback. Antigravity will iterate on the same branch/PR, and the preview will update automatically.
   - The local Jekyll preview is for optional debugging fallback only and is not a required Owner workflow. Agents should not require every machine to have Ruby/Jekyll installed.
5. **PR Fast-Path Principle**: 
   - Do not require unnecessary multi-round reviews for typos, small wording changes, URL corrections, or minor visual tweaks.
   - Substantive redesigns should still ultimately pass through a single PR. 
   - No direct commits to `main`; the Owner retains final merge authority.

## 9. Canvas Rubric & Lab Authoring Convention
All weekly labs and assignments in this course adhere to the standardized ratings rubric convention:
- **Scoring Mode**: Always use `"scoring": "ratings"` in Canvas Content Profiles (`canvas/module-*.json`).
- **Binary Rating Tiers**: Each criterion must define exactly two rating levels:
  - `PASS`: Full maximum points for that criterion (`points`).
  - `MISSING`: `0.0` points.
- **No Fixed `PARTIAL` Tier**: Intermediate `PARTIAL` ratings are intentionally excluded from pre-defined rubric buttons to keep SpeedGrader UX clean and predictable.
- **Manual Partial Credit**: Partial credit remains fully supported in Canvas SpeedGrader via manual criterion point entry when needed.
- **Automation Invariant**: Verification automation only inspects student submissions and leaves instructional feedback comments. Automation NEVER writes grades or rubric rating assessments.
