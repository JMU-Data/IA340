---
layout: default
title: "Lab 6: My County: SQL and Python Analysis - IA 340"
---

# Lab 6: My County: SQL and Python Analysis

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
  <a href="{{ site.baseurl }}/assignments/lab-6/" style="text-decoration: none; font-weight: 600; color: #0969da;">Lab 6</a>
</nav>

**IA 340 · Dr. Xuebin Wei · 100 points**  
**Deadline: see Canvas for the authoritative due date and time.**

Use your instructor-assigned county or independent city for **Q1, Q2, and Q3**. Save two files in your assigned private GitHub repository: **`lab6.sql`** and **`lab6.ipynb`**.

---

## Find your FIPS

Start with your assigned official county or city name. Write a query yourself, or ask Gemini to find the matching FIPS in `public.name`. Check that the returned name is the right place. (For example, Fairfax County and Fairfax city are different places with distinct FIPS codes.)

Record your county name and five-character FIPS as comments at the top of `lab6.sql`. Use that same county in all three questions. No area-list download or new Census collection is required.

---

## SQL work (lab6.sql)

Write the queries yourself or use Gemini. Run and test them in Cloud SQL Studio before saving them. Each question must be a **SQL comment** beginning with `--`; the query below it must be **active SQL**, not commented out.

### Q1 — Population growth

- **Question:** For your assigned county, what was the annual population growth rate for each available year in 2015–2024, compared with the previous calendar year?
- **Database output:** Return the county FIPS, current year, previous year's population, current year's population, and growth rate. Use the columns **`fips`**, **`year`**, **`previous_value`**, **`current_value`**, and **`growth_rate`**, ordered by year ascending.
- **Important:** This is the query executed by the database; **do not paste the result rows into `lab6.sql`**.

Keep each available current-year row. If the previous calendar year's population is missing, show `NULL` for `previous_value` and `growth_rate`. Never treat 2019&rarr;2021 as a one-year change.

### Q2 — Household-income growth

- **Question:** For your assigned county, what was the annual growth rate of nominal median household income for each available year in 2015–2024, compared with the previous calendar year?
- **Database output:** Return the county FIPS, current year, previous year's income, current year's income, and growth rate. Use the same columns **`fips`**, **`year`**, **`previous_value`**, **`current_value`**, and **`growth_rate`**, ordered by year ascending.
- **Important:** This is the query executed by the database; **do not paste the result rows into `lab6.sql`**.

Keep each available current-year row. If the previous calendar year's income is missing, show `NULL` for `previous_value` and `growth_rate`. Never treat 2019&rarr;2021 as a one-year change.

### Data note for Q1 and Q2

For both questions, the class data have nine available years: **2015–2019 and 2021–2024**. The 2015 and 2021 rows have no previous-calendar-year value. This gives nine result rows, including seven calculable annual rates. Do not create a 2020 observation or fill a missing rate with zero. A zero baseline cannot be divided by; report an unavailable rate (`NULL`) instead. Keep genuine negative growth.

A growth rate may be shown as a decimal or a percentage, provided the table and chart clearly use the same convention. State the unit once. The instructor's Fairfax result is an acceptable example of keeping missing rates visible. Income means **nominal median household income**, not GDP or inflation-adjusted growth.

### Q3 — Your own question

- **Question:** Define one different, specific question about your **same assigned county** that the existing data can answer.
- **Output:** Choose columns that answer your question and can be shown in a useful chart. State the period, measure, and any threshold or comparison. Do not simply repeat Q1 or Q2. Correlation does not imply causation.

### Save lab6.sql

The file needs your county/FIPS comments followed by **Q1, Q2, Q3**, each with its question comment and actual runnable query. Replace all placeholders before submitting.

In GitHub: **your assigned repository &rarr; Add file &rarr; Create new file &rarr; `lab6.sql` &rarr; Commit changes on `main`**. (Or edit the file if it is already present.)

Do not include Q0, Python code, screenshots, result tables, result-check notes, or data-modification practice in `lab6.sql`. Do not surround the SQL file with Markdown backticks.

---

## Notebook work (lab6.ipynb)

In the new **`lab6.ipynb`**, enable Notebook access to the four Colab Secrets: **`DB_HOST`**, **`DB_NAME`**, **`DB_USER`**, and **`DB_PASSWORD`**. We query the existing database, so a Census API key is not needed.

Database connection/setup, required fake-name practice operations (`INSERT`, `UPDATE`, `DELETE`, rollback), and **Q0** are **required work**. Q0 compares the covered areas across Virginia. It is the only question that is not limited to your assigned county. Q0, Q1, and Q2 are required guided/assigned work; Q3 is your own question.

Then reuse your own Q1, Q2, and Q3 SQL from `lab6.sql`. Choose the chart types yourself; Gemini can help with the Python code. Show the result table, the chart, and a **1–2 sentence interpretation directly below each chart**.

**No separate Validation section, extra source-check queries, or verification program is required.** You can still check a result manually when deciding whether Gemini's answer is reasonable.

### Notebook organization

Use real **Markdown/text cells** for the notebook title, each question, each interpretation, Final Summary, and Gemini Use. Do not type those headings as Python comments.

For **Q1**, use this exact sequence:

1. Markdown/text:
   ```markdown
   ## Q1 — Population Growth
   ### Question
   ```
   followed by the full county-specific question.
2. Markdown/text:
   ```markdown
   ### SQL
   ```
   Then a code cell containing `sql_q1`.
3. Markdown/text:
   ```markdown
   ### Python/Pandas
   ```
   Then a code cell executing `sql_q1` and creating/displaying `q1`.
4. Markdown/text:
   ```markdown
   ### Visualization
   ```
   Then a code cell visualizing `q1`.
5. Markdown/text:
   ```markdown
   ### Interpretation
   ```
   Then 1–2 sentences answering the question from the table/chart.

Follow the exact same pattern for **Q2** and **Q3**:

- **`## Q2 — Household-Income Growth`** with `### Question`, `### SQL` (containing `sql_q2`), `### Python/Pandas` (creating/displaying `q2`), `### Visualization` (plotting `q2`), and `### Interpretation` (1–2 sentences answering Q2).
- **`## Q3 — My Own Question`** with `### Question`, `### SQL` (containing `sql_q3`), `### Python/Pandas` (creating/displaying `q3`), `### Visualization` (plotting `q3`), and `### Interpretation` (1–2 sentences answering Q3).

Preserve the required variable naming conventions:
- `sql_q1` / `q1`
- `sql_q2` / `q2`
- `sql_q3` / `q3`

Q1, Q2, and Q3 must all use your **assigned county**.

### Final Summary

Write **1–2 sentences** stating whether you completed Q1, Q2, and Q3 and created a visualization for each. Identify anything unfinished. Keep the actual findings under each question's Interpretation.

### Gemini Use

Write **1–2 sentences** about whether Gemini was helpful, any issue you noticed, and whether you checked its answer. A manual calculation is enough; no separate validation code or report is required. If you did not use Gemini, say so.

---

## Rubric — 100 points

| Criterion | Points | What is assessed |
|---|---:|---|
| **SQL correctness and assigned county** | **30** | Assess:<br>• Q1 uses the assigned county<br>• Q2 uses the assigned county<br>• SQL is executable<br>• Correct previous-calendar-year logic is used where required<br>• Required output fields are correct (`fips, year, previous_value, current_value, growth_rate`)<br>• Q1 population analysis is correct<br>• Q2 household-income analysis is correct<br>• Questions remain explanatory text/comments rather than being embedded incorrectly as SQL |
| **Notebook setup, Q0–Q2 analysis, and visualization** | **30** | Assess:<br>• Database connection/setup is present and correct<br>• Required pre-Q0 practice (`INSERT`, `UPDATE`, `DELETE`, rollback) is completed<br>• Q0 is completed according to the Lab 6 requirements with saved outputs<br>• Q1 correctly executes/reuses its SQL (`sql_q1`), creates/displays the required pandas DataFrame (`q1`), creates a suitable visualization, and includes an interpretation supported by the result<br>• Q2 correctly executes/reuses its SQL (`sql_q2`), creates/displays the required pandas DataFrame (`q2`), creates a suitable visualization, and includes an interpretation supported by the result |
| **Q3: question and supported answer** | **20** | Assess:<br>• Q3 uses the same assigned county<br>• The student asks a clear, specific question that the available data can answer (different from Q1 and Q2)<br>• The question is actually answered through the complete workflow: **Question &rarr; SQL &rarr; Python/Pandas &rarr; Visualization &rarr; Interpretation** |
| **Markdown organization, format, and submission** | **20** | Assess:<br>• Required explicit Markdown headings are present for Q1, Q2, and Q3: **Question**, **SQL**, **Python/Pandas**, **Visualization**, **Interpretation**<br>• **Final Summary** is present<br>• **Gemini Use** is present<br>• Required submission files (`lab6.sql` and `lab6.ipynb`) are present at the assigned repository root on `main`<br>• Submitted GitHub repository URL matches the Lab 6 submission requirements |
| **Total** | **100** | |

Unless specified otherwise by the instructor, each criterion has **PASS (full criterion points)** and **MISSING (0 points)** as default ratings. The instructor may enter manual intermediate criterion scores in Canvas SpeedGrader. Equivalent correct queries and suitable chart types are accepted. Q3 and interpretations receive human review.

---

## Submit ONE GitHub repository URL in Canvas

At the root of your assigned private course repository, on **`main`**, keep:

- **`lab6.sql`** — your three questions as comments and three executable queries.
- **`lab6.ipynb`** — the required practice, Q0, and Q1–Q3 with real Markdown headings, result tables, charts, interpretations, Final Summary, and Gemini Use.

For the notebook, use **File &rarr; Save a copy to GitHub**. Open both saved files on GitHub to confirm that the instructor can read them and the notebook outputs are visible. Keep credentials in Secrets; do not save their values or database addresses in the files or outputs.

In Canvas, submit **only your actual repository-root URL** for your section:

```text
IA340-1: https://github.com/JMU-Data/ia340-fa26-1-<your-github-username>
IA340-2: https://github.com/JMU-Data/ia340-fa26-2-<your-github-username>
```

Replace `<your-github-username>` with your own GitHub username. **The URL must stop at the repository name.**

These are **NOT** valid submissions:
```text
https://github.com/JMU-Data/ia340-fa26-1-<your-github-username>/tree/main
https://github.com/JMU-Data/ia340-fa26-1-<your-github-username>/blob/main/lab6.ipynb
https://github.com/JMU-Data/ia340-fa26-1-<your-github-username>/blob/main/lab6.sql
https://github.com/JMU-Data/IA340
https://colab.research.google.com/...
```

Do not submit a `/blob/main/...` file link, Colab sharing URL, database IP, public course repository URL, screenshots, ZIP file, or a separate report.

---

<div style="margin-top: 2rem; display: flex; flex-wrap: wrap; gap: 1rem; align-items: center;">
  <a href="{{ site.baseurl }}/">← Return to Course Home</a>
  <span style="color: #d0d7de;">|</span>
  <a href="{{ site.baseurl }}/modules/module-6/">Go to Module 6 Lecture →</a>
</div>
