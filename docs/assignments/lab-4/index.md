---
layout: default
title: "Lab 4: Cloud Database Completion Check - IA 340"
---

# Lab 4: Cloud Database Completion Check

<nav style="display: flex; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem; border-bottom: 1px solid #eaecef; padding-bottom: 1rem; font-size: 0.95em;">
  <a href="{{ site.baseurl }}/" style="text-decoration: none; color: #57606a;">Home</a>
  <a href="{{ site.baseurl }}/syllabus/" style="text-decoration: none; color: #57606a;">Syllabus</a>
  <a href="{{ site.baseurl }}/modules/module-1/" style="text-decoration: none; color: #57606a;">Module 1</a>
  <a href="{{ site.baseurl }}/assignments/github-account-verification/" style="text-decoration: none; color: #57606a;">Lab 1</a>
  <a href="{{ site.baseurl }}/modules/module-2/" style="text-decoration: none; color: #57606a;">Module 2</a>
  <a href="{{ site.baseurl }}/assignments/lab-2/" style="text-decoration: none; color: #57606a;">Lab 2</a>
  <a href="{{ site.baseurl }}/modules/module-3/" style="text-decoration: none; color: #57606a;">Module 3</a>
  <a href="{{ site.baseurl }}/assignments/lab-3/" style="text-decoration: none; color: #57606a;">Lab 3</a>
  <a href="{{ site.baseurl }}/modules/module-4/" style="text-decoration: none; color: #57606a;">Module 4</a>
  <a href="{{ site.baseurl }}/assignments/lab-4/" style="text-decoration: none; font-weight: 600; color: #0969da;">Lab 4</a>
  <a href="{{ site.baseurl }}/modules/module-3/google-cloud-coupon/" style="text-decoration: none; color: #57606a;">Cloud Credit Setup</a>
</nav>

**Target Date:** Friday, September 18, 2026  
*(Canvas is the authoritative source for the exact due date/time and submission status.)*  
**Submission Location:** Canvas  
**Points:** 100

Week 4 · September 14–18, 2026 · Dr. Xuebin Wei  
**100 points. Follow the official Canvas deadline.**

Complete the hands-on work during [the lecture]({{ site.baseurl }}/modules/module-4/). This lab is the final checkpoint—not a second project, report, or screenshot assignment.

## Fixed class settings

| Item | Required value |
|---|---|
| Service / engine | Google Cloud SQL / PostgreSQL |
| Demonstrated configuration | Enterprise, PostgreSQL 18, `db-f1-micro`, 10 GB SSD, single zone |
| Instance | `ia340` in the demonstration |
| **Database to connect to** | **`postgres` — the existing default database** |
| Schema | `public` — the namespace holding our tables, not a network setting |
| Username | `postgres` — lowercase |
| Password | **`IA340-data`**: uppercase **I**, uppercase **A**, digits **3 4 0**, **hyphen (-)**, then lowercase **d a t a**; no spaces |
| Port | `5432` |
| Classroom network | Public IPv4; temporary authorized source range `0.0.0.0/0` |
| Security option | **Allow only SSL connections**, as demonstrated |
| Submission | **Only your instance's Public IPv4 address** |

For teaching convenience, everyone uses the same database username **`postgres`** and password **`IA340-data`**. This is a classroom shortcut, **NOT production best practice**. Because the credentials are shared, **protect your Public IP address**. Keeping the address private is a precaution, not a substitute for production access controls. Submit it ONLY in Canvas. Do not put it on GitHub, a public screenshot, an ERD share page, social media, or any other public location. Someone with both the address and the shared credentials could read, modify, or delete your database.

## Process recap

**Monday:** understand databases and cloud services → create the project and link education billing → configure the small PostgreSQL instance → review usage/credits and create the **$20 monthly budget alert**.

**Wednesday:** open Cloud SQL Studio and inspect the empty database/public schema → learn rows, columns, keys, relationships, ACID, and normalization → build the ER diagram → export and implement it → check the actual tables and submit the Public IP.

## Required structure

Use the exact lowercase table and field names below in **database `postgres`, schema `public`**:

| Table | Columns | Keys |
|---|---|---|
| `name` | `fips` text identifier; `name` county label | PK `fips` |
| `income` | `fips`; `income` integer; `year` integer | Composite PK `(fips, year)`; FK `fips` → `name.fips` |
| `population` | `fips`; `population` integer; `year` integer | Composite PK `(fips, year)`; FK `fips` → `name.fips` |

In ERD Lab, use **character varying** for `fips` and `name`, and integer for `income`, `population`, and `year`. **Leave the Size fields blank for this lab.** Keep **Unique enabled for `name`** as shown in the course model, and keep the fields required. Do not make observation `fips` or `year` independently Unique; the **combination `(fips, year)`** identifies one observation. Keep `fips` as text so leading zeros are preserved.

> **TIP:** Export the PostgreSQL SQL from your ERD Lab model. If the export looks wrong or you are unsure what to do next, **ask the instructor before changing it manually**.

![Studio Explorer showing the three tables and their keys]({{ site.baseurl }}/assets/week-4/screenshots/Screenshot%202026-09-13%20151310.png)

Keep the three tables ready for next week’s Census data. Keep your ERD model for reuse.

## Submit ONE Public IPv4 address

Copy **Public IP address** from your own Cloud SQL instance's Connections/Overview page and paste only the address into Canvas.

An IPv4 address has four numbers separated by dots. **Format example only:**

```text
203.0.113.10
```

This is a documentation-only address, not your server. Do not submit or connect to it. Use your instance's actual **Public IP**, not its outgoing IP, a private address, your laptop's address, or the range `0.0.0.0/0`.

Do not add `https://`, `postgresql://`, `:5432`, a database name, username, or password. Do not submit a Console link, GitHub link, ERD share link, SQL file, or screenshot package.

## Rubric

| Criterion | Points | Full-credit evidence |
|---|---:|---|
| **Connection** | **50** | The instructor can connect through the submitted Public IP to database **`postgres`**, port **`5432`**, with the fixed login and encrypted connection. |
| **Tables and fields** | **30** | Three actual tables exist in `public`; exact names are `name`, `income`, and `population`; all eight expected columns and appropriate types match the model. |
| **Keys and relationships** | **20** | County PK and both composite PKs are correct; two FKs reference `name.fips`; there are no incorrect individual uniqueness restrictions. |
| **Total** | **100** | **Connection 50 + tables/relationships 50** |

**Connection is required. If the instructor cannot connect to your database using the required Public IP, database name, username, password, port, and SSL setting, the Lab 4 score is 0/100.** If the connection works, the remaining 50 points are based on the required tables, fields, keys, and relationships.

Exact table and column names matter. The required primary keys and foreign-key relationships must also be correct.

## Before finishing

- [ ] My Cloud SQL instance is **running**, and the `postgres` database/login works.
- [ ] My tables, fields, primary keys, and two foreign keys match the current model.
- [ ] I reviewed usage before credits and created the $20 budget alert; an alert is not a spending cap.
- [ ] I submitted only my **Public IP in Canvas** and did not publish it elsewhere.

**Keep the Cloud SQL instance running through October 12, 2026. Do not stop or delete it before then.** We will continue using the same project, database, tables, and ERD model for the upcoming work and Mini Project.

References: [Studio](https://docs.cloud.google.com/sql/docs/postgres/manage-data-using-studio), [network access](https://docs.cloud.google.com/sql/docs/postgres/authorize-networks), [schemas](https://www.postgresql.org/docs/18/ddl-schemas.html), [keys](https://www.postgresql.org/docs/18/ddl-constraints.html), [budget alerts](https://docs.cloud.google.com/billing/docs/how-to/budgets), [documentation IPs](https://www.rfc-editor.org/rfc/rfc5737).

---

<div style="margin-top: 2rem; display: flex; flex-wrap: wrap; gap: 1rem; align-items: center;">
  <a href="{{ site.baseurl }}/">← Return to Course Home</a>
  <span style="color: #d0d7de;">|</span>
  <a href="{{ site.baseurl }}/modules/module-4/">Go to Module 4 Lecture Deck →</a>
  <span style="color: #d0d7de;">|</span>
  <a href="{{ site.baseurl }}/modules/module-3/google-cloud-coupon/">Google Cloud Education Credit Setup →</a>
</div>
