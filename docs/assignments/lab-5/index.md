---
layout: default
title: "Lab 5: Collect Census Data into Your Database - IA 340"
---

# Lab 5: Collect Census Data into Your Database

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
  <a href="{{ site.baseurl }}/assignments/lab-5/" style="text-decoration: none; font-weight: 600; color: #0969da;">Lab 5</a>
</nav>

**IA 340 · Dr. Xuebin Wei · 100 points**  
**Due Tuesday, September 22, 2026. See Canvas for the exact time.**

Use Monday's [lecture]({{ site.baseurl }}/modules/module-5/) to collect Virginia county data in your existing Cloud SQL database. **Do not use Gemini.**

## Complete the lab

Connect from Colab using Secrets. Use `states.VA` to select Virginia, load the complete county-name catalogue, and collect **ACS 1-year population and median household income for 2015–2024**. Work through the entire year range and retain the source's actual coverage; do not invent records for unpublished years or counties.

| Table | Required contents |
|---|---|
| `name` | County names and five-character text FIPS from the designated county directory; omit the trailing state name. |
| `population` | Published annual population estimates with the correct FIPS and year. |
| `income` | Published annual median household income estimates with the correct FIPS and year. |

Use the existing three tables and keys. Commit your data and inspect it in Studio. A county may appear in `name` without an observation in an annual table; do not insert NULL or zero placeholder rows.

Save the completed `lab5.ipynb` on `main` in your assigned private IA340 repository under `JMU-Data`. Keep IP addresses and personal API keys out of code, screenshots, and outputs. Read passwords and keys from Colab Secrets. The illustrative INSERT is an offline demonstration, not a separate database task.

## Submit EXACTLY TWO items in Canvas

Your Canvas text submission must contain **exactly two values, one per line**:

1. your Cloud SQL instance's current **Public IPv4 address**; and
2. the **root URL of your assigned private IA340 repository in the `JMU-Data` organization**.

The two lines may appear in either order. Do not add labels or other text.

### Public IPv4 — exact format

Paste only the four-part IPv4 address, exactly as in Lab 4. **Format example only:**

```text
203.0.113.10
```

This documentation address is only an example. Submit your own Cloud SQL **Public IP address**. Do **not** add `https://`, `postgresql://`, `:5432`, `/32`, a database name, username, password, or a Google Cloud Console URL.

### GitHub repository — exact format

Submit the **root URL of the private IA340 repository assigned to you under `JMU-Data`**. Use the format for your course section:

```text
IA340-1: https://github.com/JMU-Data/ia340-fa26-1-<your-github-username>
IA340-2: https://github.com/JMU-Data/ia340-fa26-2-<your-github-username>
```

For example, if your GitHub username were `student123` and you were in IA340-1, the required format would be:

```text
https://github.com/JMU-Data/ia340-fa26-1-student123
```

**The URL must stop at the repository name.** These are NOT valid submissions:

```text
https://github.com/JMU-Data/ia340-fa26-1-student123/tree/main
https://github.com/JMU-Data/ia340-fa26-1-student123/blob/main/lab5.ipynb
https://github.com/JMU-Data/IA340
https://github.com/student123/some-repository
https://colab.research.google.com/...
```

Do not submit the `main` branch URL, a notebook/file URL, the public `JMU-Data/IA340` course-materials repository, a personal GitHub repository, or a Colab URL. **A URL that points to the correct work but does not use the required repository-root format is still an invalid submission.**

A correct Canvas submission therefore contains two bare values, such as:

```text
203.0.113.10
https://github.com/JMU-Data/ia340-fa26-1-student123
```

The instructor will use the Public IP to inspect the saved database and the assigned private repository to verify that `lab5.ipynb` and the required collection code are present. **Both items are required; a missing or invalid item loses the points associated with that part of the rubric.**

Keep the database available through October 12, as directed in Lab 4.

## Rubric

| Criterion | Points | What is checked |
|---|---:|---|
| **Database access** | **20** | A valid Public IPv4 was submitted and the class connection settings allow access to the `postgres` database. |
| **GitHub repository and collection code** | **20** | The submitted URL is the **root URL of the student's assigned private `JMU-Data` IA340 repository in the required section-specific format**; that repository contains `lab5.ipynb` on `main`, and the notebook includes the required Census/`us`, ACS 1-year, database connection, annual collection, INSERT, and commit workflow. |
| **Data completeness** | **30** | Across the three tables, all required county identities and published population/income records for the requested years are present, without missing source records or duplicate keys. |
| **Data structure and consistency** | **30** | The database maintains the required Week 4 three-table structure (`name`, `population`, `income`), correct columns and data types, primary and foreign key relationships, five-character text FIPS and Virginia geography convention (`51...`), requested study year range (2015–2024), and no duplicate keys or artificial NULL/zero placeholder observation rows; stored structure is consistent with the required collection workflow. |
| **Total** | **100** | |

If the GitHub repository URL is missing or invalid, the GitHub/code criterion receives no credit, but the database can still be graded. If the Public IP is missing or the database cannot be accessed after instructor rechecking, database access receives no credit and the database completeness/consistency criteria cannot be verified; the GitHub/code criterion can still be graded.

Source publication gaps are not missing-work deductions, and there is no fixed rows-per-year target. The same data problem should not be deducted twice under completeness and consistency.

Wednesday's SQL exercises are classroom practice, not an additional submission. The syllabus late-work policy applies.

---

<div style="margin-top: 2rem; display: flex; flex-wrap: wrap; gap: 1rem; align-items: center;">
  <a href="{{ site.baseurl }}/">← Return to Course Home</a>
  <span style="color: #d0d7de;">|</span>
  <a href="{{ site.baseurl }}/modules/module-5/">Go to Module 5 Lecture →</a>
</div>
