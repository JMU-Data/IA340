---
layout: default
title: "Lab 8 — MongoDB Atlas and Twitter/X Data Collection · IA340"
---

[← Course Home]({{ site.baseurl }}/) · [Week 8 Lecture]({{ site.baseurl }}/modules/module-7/)

# Lab 8 — MongoDB Atlas Setup and Twitter/X Data Collection

**IA 340 · 100 points · October 12–16, 2026 · Due date: see Canvas.**

Follow the [Week 8 lecture]({{ site.baseurl }}/modules/module-7/) in class. All setup steps, screenshots, and collection code are explained in the lecture. Create your own **`Lab8.ipynb`** Colab notebook as you follow along. Do not download a starter notebook or a dataset.

## Class settings

| Setting | Required value |
|---|---|
| Atlas organization | Course organization (`IA340-2026` in the instructor example) |
| Atlas project | **`first_last_ia340`** using your own first and last name |
| Deployment | **Free** tier, Google Cloud; cluster **`ia340`** |
| Database name | **`lab8`** — all lowercase (MongoDB names are case-sensitive) |
| Collection | **`tweet_collection`** |
| Database user / password | **`demo`** / **`IA340-data`** |
| Classroom IP access entry | `0.0.0.0/0` (as demonstrated; keep credentials private) |
| Unique index | `tweet.id` unique (not a text index) |
| Twitter/X search | Instructor-provided token via private Canvas; query **`election`** |

## Completion checklist

- [ ] I completed the Cloud SQL wrap-up. If stopping or deleting my old instance, I followed the lecture and the course resubmission rules.
- [ ] My Atlas project and **Free** cluster are ready. The database user can access **`lab8`**, and the IP access setting matches the lesson.
- [ ] I stored my full MongoDB URI privately in Colab Secrets as **`MONGODB_CONNECTION_STRING`** and the course-provided X token as **`TWITTER_BEARER_TOKEN`**.
- [ ] My notebook connects to **`lab8.tweet_collection`**, creates the unique `tweet.id` index, and checks the existing document count before collecting.
- [ ] I stored **50–200 unique real Twitter/X posts** using `election`. If the first batch contained fewer than 50, I used the **optional `next_token` example** and checked the count after each page.
- [ ] Each stored record contains `tweet.id`, `tweet.text`, available post fields, the correctly matched author where available, and `collection_meta` with source, query, and retrieval time.
- [ ] I checked the final count and inspected documents in Atlas Data Explorer.
- [ ] I committed **`Lab8.ipynb`** to my GitHub repository, including source code and non-sensitive outputs. **No API token, password, full MongoDB URI, or Colab Secret value** is in GitHub.

## Submit TWO items in Canvas

Paste these **two items on separate lines** in one Canvas submission:

**1. MongoDB connection string:** Your complete working MongoDB URI for **`lab8`**, including your own cluster hostname and the correct database-user password. Submit the full URI **only in Canvas**, never in GitHub or screenshots. The hostname `ia340.example.mongodb.net` is fictional; use your own Atlas cluster hostname. Do not include placeholder brackets in your submitted URI. **Python selects `lab8`**; do not append `/lab8` or `authSource` to this example.

**Example URI (fictional cluster hostname; username and password shown):**

```text
mongodb+srv://demo:IA340-data@ia340.example.mongodb.net/?appName=ia340
```

**2. GitHub notebook URL:** A URL pointing to **`Lab8.ipynb`** in your GitHub repository. The committed notebook should contain the code and non-sensitive execution evidence.

Do not submit a separate data file, screenshot, or written report. The instructor checks the stored data through MongoDB and the code through GitHub.

## Rubric — 100 points

| Criterion | Points | What the instructor checks |
|---|---:|---|
| **Connection string** | **20** | The instructor can connect using the URI submitted in Canvas. |
| **Twitter/X data collection** | **60** | **50–200** verified, unique real posts = **60**; **1–49 or over 200** = **30**; **0** = **0**. |
| **GitHub notebook** | **20** | `Lab8.ipynb` has the assigned collection code and readable, non-sensitive results. |
| **Total** | **100** | |

**Invalid connection string:** If the URI does not work when graded, the Lab receives **0**. Resubmit the assignment with a working URI for a recheck. **Late penalties apply** to submissions and evaluated file changes after the deadline.

**Need more posts?** Use the **optional `next_token` pagination code** in the lecture **only if the first batch stored fewer than 50 posts**. Check the count after each page and stop at 50–200; collecting more than 200 reduces the data score and consumes shared paid API credits.
