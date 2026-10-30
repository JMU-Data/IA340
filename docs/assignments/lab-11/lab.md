# IA340 · Lab 11 — Anger and Organization Analysis

**Wednesday, November 4, 2026 · Google Colab · 100 points · Due: see Canvas**

## Goal

Use **your existing `lab8.tweet_collection`** for two new analyses: anger and organizations. Refer to your own completed **`lec11.ipynb`** and adapt its code. No new tweets, collection, profile-location analysis, or Google Sheets activity is required.

<div class="mini-path"><span>Connect</span><b>→</b><span>Analyze + save</span><b>→</b><span>Query → DataFrame → chart</span><b>→</b><span>Explain</span></div>

## 1 · Connect

Create **`lab11.ipynb`**. Reuse your Lecture notebook’s imports, MongoDB `client`, Gemini connection, `gemini_help()` helper, and `tweet_data` setup. Keep **`GOOGLE_CLOUD_API_KEY`** and **`MONGODB_CONNECTION_STRING`** in Colab Secrets.

Use the same Lab 8 tweet IDs and text. A manual backup is optional; preserve the original documents and their existing fields.

## 2 · Analyze and save two new fields

Adapt the Lecture’s sentiment loop to **detect anger**, and its people-extraction loop to **extract organizations**. Write the prompts yourself. Retain the progress display and per-tweet error handling.

| Analysis | Result to produce | Save in MongoDB |
|---|---|---|
| **Anger** | Whether the tweet expresses anger: **True or False**. Request a consistent answer format. | `tweet.anger` |
| **Organizations** | A **list** of all explicitly named organizations. Use `[]` when no organizations are mentioned. | `tweet.organizations` |

Save the results in each matching original tweet document. Inspect a few responses against their source text. Report skipped requests; a request failure is not a valid False result or an empty list.

## 3 · Query, display, and visualize

For each of the two new fields, follow the same workflow used in the Lecture and Lab 10:

1. **MongoDB:** generate and run the query for your analysis. Inspect the result, then export Python with **Include Driver Syntax**. Reuse the existing Secrets-based `client`.
2. **Colab:** run the exported query to get `result`. Reuse the Lecture’s standard result-to-DataFrame cell and display **`df_posts`**.
3. **Visualization:** ask Gemini in Colab to help create a chart from the displayed DataFrame. Check the actual column names and returned counts, then run the suggested code.

Create an **anger distribution chart** and an **organization mention chart**. The anger query must use **`tweet.anger`**, not the Lecture’s `tweet.sentiment`. A tweet may contribute several organizations to the organization chart.

Keep the executed query, displayed DataFrame, chart, and a brief interpretation together for each question. You may reuse `df_posts`; finish the current question before overwriting it for the next one. Use your own results, not the instructor’s example counts.

## 4 · Findings and AI Use

In one final **Markdown cell**, write a **Summary & AI Use** reflection (10 points total):

- **Summary (findings):** In about 3–5 sentences, explain the anger distribution, the most frequently mentioned organizations, and what the two charts reveal. Base your interpretation on your actual query and pandas results. This is **your interpretation**, not a third LLM analysis task.
- **AI Use (methods):** In about 2–3 sentences, explain where you used the Gemini LLM API for text analysis and whether MongoDB’s query assistant or Gemini in Colab helped with queries or charts. Describe what you verified or modified yourself.

You do **not** need to submit prompt histories or create another AI-generated summary.

## Submit

Save **`lec11.ipynb`** and **`lab11.ipynb`** at the root of your assigned private GitHub repository, with code and readable executed outputs. Submit **two values on separate lines in private Canvas**:

1. Your **GitHub repository root URL**.
2. Your **working MongoDB connection string**, only in the private Canvas submission field.

**IA340-1:** `https://github.com/JMU-Data/ia340-fa26-1-<your-github-username>`  
**IA340-2:** `https://github.com/JMU-Data/ia340-fa26-2-<your-github-username>`

Never put a connection string, password, API key, or bearer token in GitHub, notebook code/output, screenshots, or AI prompts. Do not submit your Google Cloud API key.

## Rubric — 100 points

| Component | Points | What is assessed |
|---|---:|---|
| **Lecture · LLM data generation** | **20** | Complete the sentiment, people, and translation analyses and save their results in the original MongoDB documents; generate one overall summary in Colab. |
| **Lecture · MongoDB queries and visualization** | **20** | Query the saved results; show pandas outputs, sentiment and people charts, and the translation table. |
| **Lab · LLM data generation** | **20** | Independently generate and save `tweet.anger` and `tweet.organizations` in the original collection; organizations must be stored as lists. |
| **Lab · MongoDB queries and visualization** | **30** | Run both queries, display both DataFrames, create both charts, and explain the results using the actual data. |
| **Lab · Summary & AI Use** | **10** | In a final Markdown cell, explain the findings of the two analyses and briefly describe where Gemini LLM API, MongoDB's query assistant, and Gemini in Colab were used, including what you checked or adjusted. |
| **Total** | **100** | **Lecture 40 + Lab 60.** |

**Deductions:** incorrect/inaccessible GitHub URL **−10**; missing/unusable private Canvas MongoDB connection string **−10**; exposed credential **−20 once**. Scores cannot fall below zero. Revoke/rotate any exposed secret and remove it from the exposed location.

*The optional Google Sheets activity is not graded.*
