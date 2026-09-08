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

Week 3 includes guided classroom practice and one graded Lab notebook:

```text
week3_pandas_matplotlib_practice.ipynb   Classroom practice — not graded for Lab 3
lab3_covid_analysis.ipynb                Lab 3 submission — 100 points
```

The classroom notebook is practice only. **You do not need to submit it for Lab 3 credit.** If you saved it, you may keep it for your own reference, but the Lab 3 grader will not use it.

Create a separate `lab3_covid_analysis.ipynb` for the graded independent analysis. Analyze **the country assigned to you through the Canvas group set** and answer **two different research questions**. Each question must include:

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

# Graded Deliverable

By the deadline, your private IA340 GitHub repository must contain this file on `main`:

```text
lab3_covid_analysis.ipynb
```

In Canvas, submit the **GitHub repository URL** for your private IA340 repository. The grading workflow will use that repository to locate and review `lab3_covid_analysis.ipynb` on `main`.

The classroom practice notebook is **not** required for Lab 3 grading and will not be used to calculate the Lab 3 score.

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

# Save Lab 3 to GitHub and Submit

Run `lab3_covid_analysis.ipynb` from top to bottom after connecting Google Drive. Fix unresolved errors and keep the required outputs visible.

Choose **File → Save a copy in GitHub** and select:

- your private IA340 repository;
- branch: `main`;
- file path: `lab3_covid_analysis.ipynb`.

Submit the **repository URL** in Canvas:

```text
https://github.com/JMU-Data/<your-course-repository>
```

The grader will locate `lab3_covid_analysis.ipynb` in that repository. Do not submit a Colab sharing URL, PDF, screenshot, or ZIP file.

The classroom practice notebook is not a Lab 3 submission requirement.

---

# Deadline Rule

Your official completion time is the later of:

1. the Canvas submission timestamp; and
2. the latest GitHub commit on `main` that changes `lab3_covid_analysis.ipynb`.

Both the Lab 3 notebook save and the Canvas submission must be completed by the Canvas deadline to count as on time. The normal course late-work policy is applied after rubric scoring.

---

# Canvas Rubric — 100 Points

| Criterion | Points | What will be evaluated |
|---|---:|---|
| **Submission and Lab Notebook** | **20** | Canvas contains the correct private IA340 GitHub repository URL; `lab3_covid_analysis.ipynb` exists on `main`, is readable, contains saved outputs, and has no unresolved execution errors that prevent review. |
| **Research Questions and Assigned Country** | **20** | The notebook analyzes the student's Canvas-assigned country and contains two clear, meaningfully different, answerable research questions. At least one question uses an appropriate time grouping, and both questions can be verified from the notebook's visible evidence. |
| **Aggregation and Result Tables** | **20** | Each question includes an appropriate `groupby()` and aggregation, with a visible result table that directly supports the research question. The metric and grouping used in the calculation are clear. |
| **Visualizations** | **20** | Each question includes a visible chart that represents the same metric and aggregation shown in the corresponding result table. Titles, axes, and labels are clear enough to interpret the result. |
| **Findings, Validation, and Report** | **20** | Each question has a direct finding supported by specific visible evidence and a validation statement; the short report summarizes both findings and one limitation; Gemini use is recorded when applicable. |

## How the Work Will Be Checked

Only `lab3_covid_analysis.ipynb` is used for Lab 3 grading. The classroom practice notebook is not graded.

Automation is limited to a preliminary evidence check. It may confirm the submitted repository URL, confirm the Lab 3 notebook exists and is readable, check the Canvas-assigned country, flag missing required sections, detect plausible aggregation/result-table/figure evidence for both questions, and flag unresolved saved notebook errors.

The instructor makes the final grading decisions. Automation will **not** decide whether a research question is sufficiently clear, whether an aggregation is substantively appropriate, whether a finding is correct, whether a chart is the best choice, or whether the student's validation and interpretation are persuasive. Uncertain evidence is flagged for instructor review rather than automatically penalized.

---

<div style="margin-top: 2rem;">
  <a href="{{ site.baseurl }}/modules/module-3/">← Return to Module 3 Lecture</a> | <a href="{{ site.baseurl }}/">Course Home</a>
</div>