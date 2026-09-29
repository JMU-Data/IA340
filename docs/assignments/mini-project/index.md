---
layout: default
title: "Mini Project: State Population and Income Analysis - IA 340"
---

# IA340 Mini Project: State Population and Income Analysis

<nav style="display: flex; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem; border-bottom: 1px solid #eaecef; padding-bottom: 1rem; font-size: 0.95em;">
  <a href="{{ site.baseurl }}/" style="text-decoration: none; color: #57606a;">Home</a>
  <a href="{{ site.baseurl }}/syllabus/" style="text-decoration: none; color: #57606a;">Syllabus</a>
  <a href="{{ site.baseurl }}/modules/module-1/" style="text-decoration: none; color: #57606a;">Module 1</a>
  <a href="{{ site.baseurl }}/assignments/github-account-verification/" style="text-decoration: none; color: #57606a;">Lab 1</a>
  <a href="{{ site.baseurl }}/modules/module-2/" style="text-decoration: none; color: #57606a;">Module 2</a>
  <a href="{{ site.baseurl }}/assignments/lab-2/" style="text-decoration: none; color: #57606a;">Lab 2</a>
  <a href="{{ site.baseurl }}/modules/module-3/" style="text-decoration: none; color: #57606a;">Module 3</a>
  <a href="{{ site.baseurl }}/assignments/lab-3/" style="text-decoration: none; color: #57606a;">Lab 3</a>
  <a href="{{ site.baseurl }}/modules/module-3/google-cloud-coupon/" style="text-decoration: none; color: #57606a;">Cloud Credit Setup</a>
  <a href="{{ site.baseurl }}/modules/module-4/" style="text-decoration: none; color: #57606a;">Module 4</a>
  <a href="{{ site.baseurl }}/assignments/lab-4/" style="text-decoration: none; color: #57606a;">Lab 4</a>
  <a href="{{ site.baseurl }}/modules/module-5/" style="text-decoration: none; color: #57606a;">Module 5</a>
  <a href="{{ site.baseurl }}/assignments/lab-5/" style="text-decoration: none; color: #57606a;">Lab 5</a>
  <a href="{{ site.baseurl }}/modules/module-6/" style="text-decoration: none; color: #57606a;">Module 6</a>
  <a href="{{ site.baseurl }}/assignments/lab-6/" style="text-decoration: none; color: #57606a;">Lab 6</a>
  <a href="{{ site.baseurl }}/assignments/mini-project/" style="text-decoration: none; font-weight: 600; color: #0969da;">Mini Project</a>
</nav>

**Individual Project | 100 Points | 10% of Course Grade**  
**Due: Tuesday, October 6, 2026. See Canvas for the exact submission time.**

**LATE SUBMISSIONS AND RESUBMISSIONS AFTER THE DEADLINE ARE NOT ACCEPTED.**

## Project Overview

You will independently complete the data collection, database querying, and Python visualization workflow practiced in Labs 4–6.

**The instructor will randomly assign each student a U.S. state. You must use your assigned state.** Collect its county names, population estimates, and median household income estimates, and store the data in your existing Google Cloud SQL database.

Develop **three research questions**, use Gemini to help write and refine your SQL queries, visualize the results in Python, and briefly explain your findings.

Keep all project code, results, and explanations in **one notebook: `mini_project.ipynb`**.

## 1. Collect and Store Your Data

Begin your notebook with your assigned state's name and two-digit state FIPS code.

Adapt the **Lab 5 data collection workflow** to your assigned state. Use the **same Census clients, variables, and table structure used in Lab 5**. Do not choose different Census measures for this project.

Collect the following data:

| Database table | Census source / variable | What to collect |
|---|---|---|
| **`name`** | Decennial PL county directory: `c.pl.get("NAME", GEO, year=2020)` | County/independent-city names and five-character county FIPS codes for your assigned state |
| **`population`** | ACS 1-year **`B01003_001E`** | Total population for each available county-year |
| **`income`** | ACS 1-year **`B19013_001E`** | Median household income for each available county-year |

For the two ACS measures, use the same Lab 5 `c.acs1.state_county(...)` workflow and the **2015–2024** study period. Collect all records that the source actually publishes for your assigned state. Do not replace the population or income variables with other Census tables.

Use your existing Cloud SQL instance and the same three tables in database `postgres`, schema `public`: **`name`**, **`population`**, and **`income`**. Keep the required table structure, data types, primary keys, and foreign-key relationships from the earlier labs. Preserve five-character county FIPS codes as text.

Add your assigned state's data without deleting your earlier lab data. Your analysis queries must select the correct state or counties within that state.

Include the collection and database-loading code in `mini_project.ipynb`. Run the code, commit the changes, and inspect the saved records in Cloud SQL Studio.

**Working collection code alone is not enough. Your assigned state's data must actually be saved in your database.**

Collect all available source records for the required state and period. Do not invent observations or insert zero placeholders for unavailable data. Briefly note relevant source coverage gaps; you are not expected to create records that the source does not publish.

## 2. Develop and Test Three SQL Queries

Define **three distinct research questions** that your collected data can answer. Each question must identify the relevant geography, measure, and year or period. Across the three questions, use both population and median household income.

Your questions may examine changes over time, compare counties within your assigned state, or explore relationships between the available measures. They should not simply repeat the same analysis with a different county name.

Use **Gemini in Cloud SQL Studio** to help develop your queries. Provide your actual table structure and explain what each query should return. Run, inspect, and revise the SQL until it correctly answers the question.

Check the geographic filters, years, joins, and calculations. When matching population and income for the same county-year, join on both **FIPS and year**. Do not mistake a change across multiple years for a one-year growth rate.

Copy each tested SQL query into your project notebook. **You do not need a separate SQL file.**

## 3. Visualize and Interpret Your Results in Python

For each research question, execute your tested SQL from the notebook, load the results into a pandas DataFrame, display the result table, and create an appropriate visualization.

Use this consistent structure for **Q1, Q2, and Q3**:

| Markdown heading | Content immediately below it |
|---|---|
| `## Q1 — [Short Title]` and `### Question` | Your complete research question, written in a Markdown/text cell. |
| `### SQL Statement` | A code cell containing your tested SQL as a Python string. |
| `### Pandas Querying` | A separate code cell that executes the query, creates the DataFrame, and displays the results. |
| `### Visualization` | A separate code cell that creates a chart from the query results. |
| `### Interpretation` | A Markdown/text cell with **1–2 sentences** answering the question using the displayed results. |

Repeat the same structure for Q2 and Q3. Use actual Markdown/text cells for headings and explanations—not Python comments.

Each visualization must have a meaningful title, appropriate labels, and clearly identified units. It must use results queried from your database, not manually entered example values.

Your interpretation should explain the finding, not merely describe the chart type. For example, “This is a bar chart of income” does not answer a research question.

### Final Summarization

At the end of the notebook, add **`## Final Summarization`**. Write **2–3 sentences** summarizing your main findings and any important limitations or unfinished work.

Also include a brief **`## Gemini Use`** section explaining how Gemini helped and how you checked its output. You do not need to submit a full Gemini conversation or a separate verification report.

## 4. Save and Submit Your Work

Save **one completed notebook, `mini_project.ipynb`**, at the root of your assigned private IA340 repository under `JMU-Data`, on the **`main`** branch.

The notebook must contain your project overview, data collection and loading code, three questions with SQL and Python analysis, visible result tables and charts, interpretations, Final Summarization, and Gemini Use.

Open the saved notebook on GitHub before submitting. Confirm that the completed code, tables, charts, and Markdown explanations are visible.

Keep database connection information and API keys in **Colab Secrets**. Do not save your database IP address, passwords, or personal API keys in notebook code or outputs.

### Submit EXACTLY TWO values in Canvas

Submit the following, **one per line, without labels or additional text**:

1. Your Cloud SQL instance's current **Public IPv4 address**.
2. The **root URL of your assigned private IA340 GitHub repository**.

**Format example only—replace both values with your own:**

```text
203.0.113.10
https://github.com/JMU-Data/ia340-fa26-1-your-github-username
```

Use the repository assigned to your actual course section. The URL must stop at the repository name. Do not submit a notebook/file URL, a `/tree/main` URL, a Colab sharing link, or the public course-materials repository.

**No separate SQL file, ER diagram, screenshots, ZIP file, or written report is required.**

## Grading Rubric

| Criterion | Points | Requirements |
|---|---:|---|
| **Data Collection and Database** | **30** | Your database is accessible and contains the required available data for your **randomly assigned state**, using the existing three-table structure. Your notebook includes correct collection and loading code consistent with the saved data. |
| **Research Questions and SQL Queries** | **30** | Three distinct, answerable questions are stated clearly. The SQL included in the notebook correctly answers them using the appropriate geography, years, joins, and calculations. |
| **Python Visualization and Interpretation** | **30** | Each SQL query is executed in Python, its DataFrame is displayed, and an appropriate chart is created. Each visualization has a brief, evidence-based interpretation, and the notebook includes a Final Summarization. |
| **Format and Submission** | **10** | The completed `mini_project.ipynb` is saved in the correct repository on `main`, with the required Markdown structure and visible outputs. Gemini Use is included, and Canvas contains the correctly formatted Public IPv4 address and repository-root URL. |
| **Total** | **100** | |

Database records and notebook code may be checked with automated tools. Research questions, visualizations, and interpretations will also receive instructor review. Code running without an error does not necessarily mean the analysis is correct.

## Deadline and Database Availability

**LATE SUBMISSIONS AND RESUBMISSIONS AFTER THE DEADLINE ARE NOT ACCEPTED.**

All required work must be completed and saved, and both submission values must be submitted in Canvas, by the deadline on **Tuesday, October 6, 2026**. Submitting links on time does not permit completing or replacing the project after the deadline.

**Keep your Cloud SQL instance running and your project data accessible through at least Monday, October 12, 2026, so the instructor can verify your work after Fall Break. Do NOT stop or delete the instance or remove the project data before then.**

The database availability requirement does **not** extend the submission deadline.
