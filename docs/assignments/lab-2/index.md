---
layout: default
title: "Lab 2: Building Your AI Data Analytics Workspace - IA 340"
---

# Lab 2: Building Your AI Data Analytics Workspace

<nav style="display: flex; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem; border-bottom: 1px solid #eaecef; padding-bottom: 1rem; font-size: 0.95em;">
  <a href="{{ site.baseurl }}/" style="text-decoration: none; color: #57606a;">Home</a>
  <a href="{{ site.baseurl }}/syllabus/" style="text-decoration: none; color: #57606a;">Syllabus</a>
  <a href="{{ site.baseurl }}/modules/module-1/" style="text-decoration: none; color: #57606a;">Module 1</a>
  <a href="{{ site.baseurl }}/assignments/github-account-verification/" style="text-decoration: none; color: #57606a;">Lab 1</a>
  <a href="{{ site.baseurl }}/modules/module-2/" style="text-decoration: none; color: #57606a;">Module 2</a>
  <a href="{{ site.baseurl }}/assignments/lab-2/" style="text-decoration: none; font-weight: 600; color: #0969da;">Lab 2</a>
  <a href="{{ site.baseurl }}/modules/module-3/" style="text-decoration: none; color: #57606a;">Module 3</a>
  <a href="{{ site.baseurl }}/assignments/lab-3/" style="text-decoration: none; color: #57606a;">Lab 3</a>
</nav>

**Target Date:** Friday, September 4, 2026  
*(Note: Canvas is the authoritative source for the exact due date/time and submission status.)*  
**Submission Location:** Canvas  
**Points:** 100

## Google Drive → Colab + Gemini → GitHub → Canvas

### Goal

Run one complete, practical IA340 data-science workflow:

**public course data → your Google Drive → Colab + Gemini → GitHub notebook → Canvas**

This lab is intentionally small. You are **not** expected to memorize pandas syntax. You are expected to communicate clearly with Gemini, inspect the generated code, run it, verify the result, and revise when necessary.

### Cost

You do **not** need to buy anything for this lab.

- **GitHub:** your course repository is provided through the course's GitHub Education organization. No student payment is required for the private course repo or Team access.
- **Google Drive:** use the personal Google account you registered with your JMU email. The course dataset is small and should fit easily within normal free-account storage limits.
- **Google Colab:** the free tier is sufficient. Colab Pro is optional and **not required**.

> Colab runtimes are temporary. They can time out when inactive or when usage limits are reached, and the exact limits can vary. Do not treat the runtime filesystem as permanent storage.

---

# Part 1 — Prepare Your IA340 Folder in Google Drive

Create a folder named:

```text
IA340
```

in **My Drive** of the personal Google account you use for IA340.

Next, download the Week 2 dataset from the course repository:

👉 **[Download `diamonds.csv`]({{ site.baseurl }}/assets/data/diamonds.csv)**
*(Alternate direct raw URL: `https://raw.githubusercontent.com/JMU-Data/IA340/main/docs/assets/data/diamonds.csv`)*

Upload the downloaded file into your Drive folder so you have:

```text
My Drive/
└── IA340/
    └── diamonds.csv
```

![Google Drive IA340 folder containing diamonds.csv]({{ site.baseurl }}/assets/week-2/screenshots/lab-google-drive-diamonds.png)

### Checkpoint

Open Google Drive and confirm that `diamonds.csv` is inside your `IA340` folder before opening Colab.

---

# Part 2 — Authorize Colab with GitHub, Then Save the Blank Notebook

1. Open Google Colab.
2. Create a **blank notebook**.
3. Rename it:

```text
week2_workspace.ipynb
```

4. Choose **File → Save a copy in GitHub**.

### Step 2A — Authorize Google Colab to use your GitHub account

The first time you use this integration, GitHub should open an authorization page **before you can choose the repository and save the notebook**.

![GitHub authorization screen for Google Colab]({{ site.baseurl }}/assets/week-2/screenshots/lab-colab-github-authorization.png)

Use the **same personal GitHub account you submitted in Lab 1**. Authorize **Collaboratory by Google Colaboratory** to access the GitHub repositories needed for this course.

Under **Organization access**, check `JMU-Data`. The instructor has already approved the Google Colab OAuth app for the organization during course testing, so most students should only need to authorize their own GitHub account.

If you still see **Request access**, organization approval required, or your assigned repository is missing, request access if offered and contact the instructor. Do **not** switch GitHub accounts and do **not** create another repository.

### Step 2B — After authorization, save the first GitHub checkpoint

After GitHub authorization succeeds, Colab opens the **Copy to GitHub** dialog.

![Colab Copy to GitHub dialog shown after GitHub authorization]({{ site.baseurl }}/assets/week-2/screenshots/lab-colab-copy-to-github.png)

Select:

- **Repository:** your assigned private IA340 repository
- **Branch:** `main`
- **File path:** `week2_workspace.ipynb`
- **Commit message:** `Initialize Week 2 Colab notebook`

Then save the notebook.

> **IMPORTANT — THIS IS NOT YOUR FINAL SAVE.** At this point the GitHub notebook may be nearly empty. This first save only proves that the Colab ↔ GitHub authorization and save workflow works. You **must save the completed notebook to GitHub again at the end of the lab**.

---

# Part 3 — Connect Your Google Drive in Colab

Use the **Files** panel in Colab and select the Google Drive / Mount Drive button. You do not need to type a Drive password into the notebook.

When Colab asks, choose **Connect to Google Drive** and approve access for the Google account that contains your `IA340` folder.

![Colab permission dialog for connecting Google Drive]({{ site.baseurl }}/assets/week-2/screenshots/lab-colab-drive-permission.png)

A new Colab runtime may ask you to approve Drive access again. This is normal: connecting Drive gives notebook code access to files in that Drive.

After connecting, expand the Files panel and confirm that you can browse to your Drive and see the IA340 folder.

![Google Drive mounted in the Colab Files panel]({{ site.baseurl }}/assets/week-2/screenshots/lab-colab-drive-mounted.png)

Your data path will normally look similar to:

```text
/content/drive/MyDrive/IA340/diamonds.csv
```

---

# Part 4 — Ask Gemini to Load and Inspect the Data

Open Gemini in Colab and describe what you want in **natural language**. You do not need to copy the instructor's prompt word-for-word.

For example:

> I have a CSV file at `/content/drive/MyDrive/IA340/diamonds.csv`. Use pandas to load it into a DataFrame named `df`, show the first five rows, and show the number of rows and columns. Explain the code briefly.

![Gemini helping load diamonds.csv in Colab]({{ site.baseurl }}/assets/week-2/screenshots/lab-gemini-load-data.png)

The real dataset uses these columns:

```text
IDNO, WEIGHT, COLOR, CLARITY, RATER, PRICE
```

Inspect Gemini's code before running it. Then run it and verify that:

- the file loads without an error;
- the first rows look like diamond records; and
- the columns match the list above.

If the result is wrong, **revise your prompt or edit the Python code yourself**. Both are acceptable.

---

# Part 5 — Ask Gemini for One Aggregation

Ask Gemini to summarize the data using an aggregation. Your wording can differ from the example.

Example:

> Using the existing DataFrame `df`, group the diamonds by `COLOR` and calculate the average `PRICE` for each color. Keep the result in a clearly named variable and explain what the code does.

![Gemini-assisted aggregation in Colab]({{ site.baseurl }}/assets/week-2/screenshots/lab-gemini-aggregation.png)

Run the code and check that the result makes sense. You do **not** need to memorize `groupby()` syntax this week.

Your responsibility is to verify that Gemini used the correct columns and produced a sensible summary.

---

# Part 6 — Ask Gemini for One Chart

Ask Gemini to create a useful chart from the diamonds data. You do **not** have to reproduce the instructor's chart exactly.

For example, you might ask for a chart that shows the relationship between `WEIGHT` and `PRICE`, or a chart based on your aggregation.

A natural-language prompt could be:

> Create one clear chart that helps me understand the diamonds data. Use appropriate columns from `df`, add a title and axis labels, and briefly explain what the chart shows.

![Gemini-assisted chart in Colab]({{ site.baseurl }}/assets/week-2/screenshots/lab-gemini-chart.png)

Run the code, inspect the chart, and decide whether it actually answers the question you intended. If it does not, revise the prompt or modify the Python code.

---

# Part 7 — Use Markdown to Turn the Notebook into an Explanation

A final notebook should not be a pile of code cells. Add Markdown before and after the analysis so another person can understand what you did.

You may write the Markdown yourself **or ask Gemini to draft it**, then edit it so it accurately reflects your own notebook and results.

![Gemini helping draft Markdown for the notebook]({{ site.baseurl }}/assets/week-2/screenshots/lab-gemini-markdown.png)

Your notebook should contain at least:

```markdown
# IA340 Week 2

## Data Source and Loading
Explain that diamonds.csv is stored in your Google Drive IA340 folder and loaded into Colab.

## Aggregation
Explain what you grouped, what metric you calculated, and what the output means.

## Chart
Explain what the chart shows and one pattern you observe.

## Reflection
Briefly explain how you used Gemini and how you verified or revised its output.
```

### AI rule for this lab

**Natural language is flexible; verification is required.**

You may:

- ask Gemini in your own words;
- follow up conversationally when the first result is not right;
- edit Gemini-generated Python yourself; and
- write or revise Markdown yourself.

You may **not** treat AI output as automatically correct.

---

# Part 8 — FINAL Save to GitHub

This is the critical second save.

Choose **File → Save a copy in GitHub** again.

Select:

- your assigned private IA340 repository;
- branch: `main`;
- file: `week2_workspace.ipynb`.

Use a meaningful commit message such as:

```text
Complete Week 2 Colab analysis
```

> **DO NOT SKIP THIS STEP.** The first GitHub save contained an empty or nearly empty notebook. Your final save must contain the data-loading output, aggregation, chart, and Markdown.

For the notebook itself, **do not create a branch or pull request**. Monday's in-class activity taught and evaluated the branch/PR workflow on `README.md`. For the regular data-science notebook workflow, we are keeping delivery simple: save directly from Colab to `main` as `week2_workspace.ipynb`.

Colab may keep a working notebook copy in Google Drive, but **GitHub is not automatically synchronized**. Only an explicit GitHub save updates the version that will be graded.

Open the notebook on GitHub and confirm that it renders with:

- code cells;
- visible outputs;
- one aggregation result;
- one chart; and
- your Markdown explanations.

![Completed Week 2 notebook rendered on GitHub]({{ site.baseurl }}/assets/week-2/screenshots/lab-final-notebook-github.png)

---

# Part 9 — Submit Your Assigned Private Repository URL in Canvas

Submit your **assigned private IA340 GitHub repository root URL** in Canvas:

```text
https://github.com/JMU-Data/<your-assigned-private-repository>
```

> **Submit your assigned private IA340 GitHub repository URL in Canvas. The grader will inspect the required Week 2 evidence inside that repository.**

Do **not** submit:
- your personal GitHub profile URL;
- the direct `week2_workspace.ipynb` blob URL;
- a Pull Request URL; or
- the public `JMU-Data/IA340` course repository URL.

### Week 2 Evidence: Monday README Pull Request + Wednesday Notebook

Lab 2 evaluates both components of your Week 2 setup inside your private course repository:

1. **Monday in-class GitHub activity:** In your assigned private IA340 repository:
   - create a feature branch;
   - edit `README.md`;
   - commit your changes;
   - open a Pull Request into `main`;
   - inspect the diff; and
   - merge the Pull Request into `main`.

   Grading checks that at least one qualifying PR modifying `README.md` was opened into `main` and merged before the deadline. Grading does **not** evaluate README writing quality, PR descriptions, commit messages, or Markdown formatting.

2. **Wednesday Google Drive + Colab notebook:** Saved directly to `main/week2_workspace.ipynb` from Colab (no notebook PR required).

---

# Deadline Rule — Read Carefully

Your official completion time is determined by three required timestamps:

1. The time you submit your private repository URL in Canvas;
2. The time the qualifying Week 2 README Pull Request was merged into `main` (`merged_at`); and
3. The time of the latest GitHub commit on `main` that modifies `week2_workspace.ipynb`.

**All three must be at or before the authoritative Canvas deadline for the lab to be on time.**

Conceptually:

```text
completion_time = max(
  canvas_submission_time,
  qualifying_readme_pr_merged_time,
  latest_notebook_commit_time
)
```

**Important notes:**
- Once a qualifying Week 2 README PR has been merged on time, later unrelated README changes or PRs will not retroactively make Lab 2 late.
- The notebook completion time is determined by the **latest** commit that modifies `week2_workspace.ipynb`. Saving or updating the notebook after the deadline makes the lab submission late.
- Submitting the repository URL in Canvas after the deadline also makes the lab submission late.

The normal course late-work policy is applied to that official completion time.

---

# Canvas Rubric — 100 Points

The following five 20-point criteria are used for grading in Canvas:

| Criterion | Points | Evidence Checked in Submitted Private Repository |
|---|---:|---|
| **Private IA340 repository submission** | 20 | Canvas submission is the student's assigned private IA340 repository root URL (`https://github.com/JMU-Data/<assigned-repo>`); repository belongs to the correct course scope, exists, is accessible to course graders, and follows private repo conventions. Duplicate repository submissions across students are flagged for instructor review. |
| **Week 2 README pull-request workflow** | 20 | At least one qualifying PR modifying `README.md` was opened into `main` and merged into `main`. (Grading does not evaluate README writing quality, PR description, commit messages, or formatting.) |
| **Final Week 2 notebook** | 20 | `main/week2_workspace.ipynb` exists, is a valid and readable Jupyter notebook, and contains the final saved artifact for grading. (No pull request is required for the notebook.) |
| **Google Drive data load + aggregation** | 20 | **10 pts:** `diamonds.csv` is loaded from Google Drive / IA340 folder with saved successful evidence.<br>**10 pts:** At least one aggregation is completed with saved non-error output. |
| **Chart + Markdown explanation** | 20 | **10 pts:** At least one chart / visualization is successfully generated with saved output.<br>**10 pts:** Substantive Markdown explanations are present (beyond boilerplate or heading-only text; no semantic writing-quality grading or AI/Gemini mention required). |

Total: **100 Points**

Apply the course late-work penalty **after** rubric scoring, using the official completion-time rule above.

---

# What You Should Know After This Lab

You should be able to repeat this workflow:

**public dataset → personal Drive folder → Colab + Gemini → verify/revise analysis → explicit final GitHub save (`main`) + merged README PR → private repo URL → Canvas**

You should also understand that:

- Drive is persistent working-data storage;
- the Colab runtime is temporary;
- Gemini can generate Python and Markdown, but you verify the result;
- GitHub is the versioned course record; and
- a final GitHub save is required even if Colab has already saved a working copy elsewhere.

---

<div style="margin-top: 2rem;">
  <a href="{{ site.baseurl }}/modules/module-2/">← Return to Module 2</a> | <a href="{{ site.baseurl }}/">Course Home</a>
</div>
