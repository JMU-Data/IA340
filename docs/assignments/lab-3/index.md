---
layout: default
title: "Lab 3: Independent Country COVID-19 Analysis - IA 340"
---

# Lab 3: Independent Country COVID-19 Analysis

<nav style="display: flex; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem; border-bottom: 1px solid #eaecef; padding-bottom: 1rem; font-size: 0.95em;">
  <a href="{{ site.baseurl }}/" style="text-decoration: none; color: #57606a;">Home</a>
  <a href="{{ site.baseurl }}/syllabus/" style="text-decoration: none; color: #57606a;">Syllabus</a>
  <a href="{{ site.baseurl }}/modules/module-1/" style="text-decoration: none; color: #57606a;">Module 1</a>
  <a href="{{ site.baseurl }}/assignments/github-account-verification/" style="text-decoration: none; color: #57606a;">Lab 1</a>
  <a href="{{ site.baseurl }}/modules/module-2/" style="text-decoration: none; color: #57606a;">Module 2</a>
  <a href="{{ site.baseurl }}/assignments/lab-2/" style="text-decoration: none; color: #57606a;">Lab 2</a>
  <a href="{{ site.baseurl }}/modules/module-3/" style="text-decoration: none; color: #57606a;">Module 3</a>
  <a href="{{ site.baseurl }}/assignments/lab-3/" style="text-decoration: none; font-weight: 600; color: #0969da;">Lab 3</a>
</nav>
**Target Date:** Friday, September 11, 2026  
*(Canvas is the authoritative source for the exact due date/time and submission status.)*  
**Submission Location:** Canvas  
**Points:** 100

## Goal

Week 3 produces **two separate notebooks**:

```text
week3_pandas_matplotlib_practice.ipynb   Classroom practice — 40 points
lab3_covid_analysis.ipynb                Independent country analysis — 60 points
```

The lecture notebook is created and saved during class. **Do not continue the Lab inside that notebook.** Create a separate `lab3_covid_analysis.ipynb` for the independent analysis.

For the Lab, analyze **the country assigned to you through the Canvas group set** and answer **two different research questions**. Each question must include:

```text
question in Markdown
→ relevant country data
→ groupby and aggregation
→ visible result table
→ matching visualization
→ finding and validation in Markdown
```

You may use Gemini to help write, explain, revise, or troubleshoot code. You remain responsible for the final result.

> **Accuracy responsibility:** You are responsible for the accuracy of your code, calculations, tables, visualizations, findings, and conclusions—even when Gemini helps generate, revise, or explain the work.

---

# Graded Deliverables

By the deadline, your private IA340 GitHub repository must contain **both** Week 3 notebooks on `main`:

```text
week3_pandas_matplotlib_practice.ipynb
lab3_covid_analysis.ipynb
```

The first file is the completed classroom practice. The second file is the independent Lab. In Canvas, submit the **GitHub repository URL** for your private IA340 repository. The grading workflow will use that repository to locate and score both required notebook files on `main`.

Use this structure in the Lab notebook:

```markdown
# Independent Country Analysis

## Assigned Country

## Question 1
### Research Question
### Analysis
### Visualization
### Finding and Validation

## Question 2
### Research Question
### Analysis
### Visualization
### Finding and Validation

## Short Analysis Report

## Gemini Use
```

---

# Dataset

Use the **same official ECDC historical CSV and exact Drive filename used in the lecture**:

```text
My Drive/IA340/covid_2020.csv
```

Official ECDC archive page:

<https://www.ecdc.europa.eu/en/publications-data/download-todays-data-geographic-distribution-covid-19-cases-worldwide>

During classroom practice, the official ECDC fields are standardized into the `covid` DataFrame with these six columns:

| Column | Meaning |
|---|---|
| `date` | reporting date |
| `country` | country or territory |
| `cases` | daily reported cases |
| `deaths` | daily reported deaths |
| `pop` | country population |
| `cum` | 14-day cumulative cases per 100,000 people |

Do not switch to a different file or filename for the independent analysis. The ECDC archive ends in December 2020 and is used for learning data analysis, not for describing current public-health conditions.

---

# Use Your Canvas-Assigned Country

The instructor will create a Canvas group set with **30 country groups** and randomly assign each student to one group.

Your Canvas group name is your required country for this lab. You may **not** choose a different country.

Under `## Assigned Country`:

- state the exact Canvas group name assigned to you;
- filter the full COVID-19 dataset to that country using the method practiced in class;
- show the first few rows of the filtered data; and
- show how many rows are available.

The lab intentionally does **not** provide the filtering code. Selecting and filtering the assigned country is part of the assignment. You may write the code yourself or ask Gemini for help, but you must inspect the result.

The Canvas group names are designed to match the country values used in the dataset. The grader will use your Canvas group name as the expected country and compare it with the country actually analyzed in your notebook.

If your notebook analyzes a different country from your Canvas group, the independent-analysis portion is not considered complete until it is corrected.

### Example structure

The screenshot below is from an instructor test run and uses the United States only to illustrate the notebook structure. **Your required country is the country shown in your Canvas group.**

<img src="{{ site.baseurl }}/assets/week-3/screenshots/lab%20Screenshot%202026-09-02%20104449.png" alt="Instructor test-run example showing an Assigned Country section and filtered country rows in Colab" style="max-width:100%; border:1px solid #d0d7de; border-radius:8px;">

---

# Question 1

Under `### Research Question`, write one complete, answerable question about your Canvas-assigned country.

Question 1 must:

- be answerable with the available fields;
- use a meaningful grouping, such as month, quarter, or another justified category;
- require at least one `groupby()` operation and aggregation;
- produce a visible result table; and
- lead to a chart that represents the same result.

One possible direction is to ask which month had the highest total reported cases. You may choose a different question.

Under `### Finding and Validation`, directly answer the question and cite specific values, dates, months, ranks, or labels visible in your output. Explain how you checked that the written answer matches the table and chart.

Example of a research-question section with code below it:

<img src="{{ site.baseurl }}/assets/week-3/screenshots/lab%20Screenshot%202026-09-02%20105028.png" alt="Example Lab Question 1 asking about a weekly pattern and beginning the analysis code" style="max-width:100%; border:1px solid #d0d7de; border-radius:8px;">

---

# Question 2

Write a second research question about the **same Canvas-assigned country**.

Question 2 must be meaningfully different from Question 1. Change at least one of the following:

- the metric—for example, cases, deaths, or `cum`;
- the aggregation—for example, total, average, maximum, or count;
- the time grouping—for example, month or quarter; or
- the analytical purpose—for example, peak, trend, distribution, or relationship.

Possible directions include:

- Which quarter had the highest average 14-day rate?
- How did monthly reported deaths change during the available period?
- Which month had the greatest number of days above a justified case threshold?
- Which month had the highest average daily cases rather than the highest total?

Question 2 must also include a `groupby()` aggregation, visible result table, appropriate visualization, direct finding, and validation.

Do not simply copy Question 1 and replace one column name.

---

# Time Data

At least one of your two questions must use a time unit created from `date`, such as:

```text
year
month
quarter
```

Use the `.dt` methods practiced in the lecture. Choose a time unit that makes sense for the question.

---

# Visualization

Use the simple pandas plotting methods introduced in class:

```text
.plot.line()
.plot.bar()
.plot.barh()
.plot.hist()
.plot.box()
.plot.scatter()
```

For each question:

- choose a plot type that matches the question;
- use the same metric shown in the result table;
- add a clear title and axis labels; and
- keep the chart visible in the saved notebook.

`df.plot(kind="bar")` is also valid, but the named methods above are usually easier to read.

Gemini may sometimes propose direct Matplotlib or another plotting library. The screenshot below shows an AI-assisted draft from an instructor test run. The simple pandas plotting methods from class are sufficient; if you keep different generated plotting code, you must understand what it does and verify that the chart represents the same data and metric as your analysis.

<img src="{{ site.baseurl }}/assets/week-3/screenshots/lab%20Screenshot%202026-09-02%20105047.png" alt="Instructor test-run visualization generated with AI assistance for a weekly COVID case pattern" style="max-width:100%; border:1px solid #d0d7de; border-radius:8px;">

---

# Short Analysis Report

Under `## Short Analysis Report`, write a concise Markdown report that states:

- your Canvas-assigned country;
- the answer to Question 1 with specific evidence;
- the answer to Question 2 with specific evidence;
- how the two findings relate or differ; and
- one limitation of the historical dataset or your analysis.

The report must be based on the visible tables and charts in your notebook.

An AI-generated interpretation can be a useful draft, but it may go beyond what the data actually establish. For example, causal explanations about reporting delays or behavior require evidence beyond a simple grouped chart. **Keep only claims you can support and verify. You are responsible for the accuracy of the final report.**

<img src="{{ site.baseurl }}/assets/week-3/screenshots/lab%20Screenshot%202026-09-02%20105059.png" alt="Instructor test-run interpretation illustrating a draft that must be checked for supported and unsupported claims" style="max-width:100%; border:1px solid #d0d7de; border-radius:8px;">

---

# Gemini Use

Gemini is allowed. Useful requests include:

> Explain what this filter or `groupby()` code does.

> Help me fix this `KeyError` by comparing my code with the actual column names.

> Rewrite this long pandas expression as two or three simpler steps.

> Suggest a simple pandas plot that matches this research question.

> Tell me which values in my summary table I should compare to validate my written answer. Do not invent the result.

Under `## Gemini Use`, briefly state:

- what Gemini helped with; and
- what you checked or revised before keeping the result.

A prompt transcript is not required. Never include passwords, access tokens, credentials, or sensitive personal information.

Gemini assistance does not transfer responsibility for accuracy. Check the filtered country, calculations, displayed tables, chart axes/metrics, and written conclusions yourself before saving the notebook.

---

# Save #2 of 2 — Save the Lab to GitHub and Submit

You should already have completed **Save #1** during the lecture:

```text
week3_pandas_matplotlib_practice.ipynb
```

Now run the separate Lab notebook from top to bottom after connecting Google Drive. Fix unresolved errors and keep the required outputs visible.

Choose **File → Save a copy in GitHub** and select:

- your private IA340 repository;
- branch: `main`;
- file path: `lab3_covid_analysis.ipynb`.

**This is Save #2.** The two Week 3 notebooks must remain as separate files on `main`.

Submit the **repository URL** in Canvas:

```text
https://github.com/JMU-Data/<your-course-repository>
```

The grader will locate both fixed notebook filenames in that repository. Do not submit a Colab sharing URL, PDF, screenshot, or ZIP file.

---

# Deadline Rule

Your official completion time is the latest of:

1. the Canvas submission timestamp;
2. the latest GitHub commit on `main` that changes `week3_pandas_matplotlib_practice.ipynb`; and
3. the latest GitHub commit on `main` that changes `lab3_covid_analysis.ipynb`.

The two notebook saves and the Canvas submission must be completed by the Canvas deadline to count as on time. The normal course late-work policy is applied after rubric scoring.

---

# Canvas Rubric — 100 Points

| Criterion | Points | What will be evaluated |
|---|---:|---|
| **Classroom Practice: Pandas Operations** | **20** | The separate `week3_pandas_matplotlib_practice.ipynb` contains the completed class work for loading/standardizing the official ECDC file, inspection, selection, slicing, filtering, sorting, and data-quality checks. Outputs are visible and sensible. |
| **Classroom Practice: GroupBy, Time, and Visualization** | **20** | The separate lecture-practice notebook contains the completed class work for `groupby()`, aggregation, `as_index`, time fields such as month/quarter, and the basic pandas plotting examples, with no unresolved execution errors. |
| **Independent Question 1** | **20** | The question is about the Canvas-assigned country and can be answered with the data. The notebook shows an appropriate aggregation, visible result table, matching visualization, direct finding, and validation with specific evidence. |
| **Independent Question 2** | **20** | A second meaningfully different question is answered for the same Canvas-assigned country with an appropriate aggregation, visible result table, matching visualization, direct finding, and validation with specific evidence. |
| **Assigned-Country Compliance, Report, and Submission** | **20** | The Lab analyzes the student's Canvas-assigned country consistently; the short report summarizes both findings and one limitation; Gemini use is recorded; both Week 3 notebooks are saved separately to `main`; and Canvas receives the GitHub repository URL so both Week 3 notebooks can be graded. |

## How the Work Will Be Checked

The first **40 points** are checked from `week3_pandas_matplotlib_practice.ipynb`, primarily with deterministic Python rules: required operations, stored outputs, and absence of traceback errors.

The **60-point independent analysis** is checked from `lab3_covid_analysis.ipynb` and is graded primarily by the instructor. Automation is intentionally limited to a pre-check: confirm the file exists and runs cleanly, confirm the notebook uses the student's Canvas-assigned country, and flag missing question/table/chart sections. These checks support grading but do not replace instructor judgment. An LLM will **not** decide whether the questions, findings, or validation are correct.

---

<div style="margin-top: 2rem;">
  <a href="{{ site.baseurl }}/modules/module-3/">← Return to Module 3 Lecture</a> | <a href="{{ site.baseurl }}/">Course Home</a>
</div>