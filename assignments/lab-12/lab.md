# IA340 · Lab 12 — Post-Election Tweet Analysis and RAG

**Wednesday, November 11, 2026 · Google Colab · 100 points · Due: see Canvas**

[Week 12 Lecture](../../modules/module-12/) · [Lab 8 collection instructions](../lab-8/) · [Lab 11 Gemini examples](../lab-11/)

## What you will submit

**Finish the Lecture first.** Create a new Colab notebook called **`lec12.ipynb`**. Copy and run every lecture code cell in order using your existing `lab8.tweet_collection`. Keep the outputs. Save the notebook in your assigned IA340 GitHub repository.

Next create a **second** notebook named **`lab12.ipynb`**. This notebook contains the three Lab parts below: **Part 1 — Collect**, **Part 2 — Gemini analysis and charts**, and **Part 3 — RAG chatbot**, followed by an **AI Use** section. You will upload **both notebooks** to the root of the assigned GitHub repository.

<div class="mini-path"><span>Complete Lecture</span><b>→</b><span>Part 1 · Collect</span><b>→</b><span>Part 2 · Analyze</span><b>→</b><span>Part 3 · RAG</span><b>→</b><span>AI Use</span></div>

### Lecture — 30 points

In `lec12.ipynb`, follow the lecture's alternating theory-and-code demonstrations. Use the existing `lab8.tweet_collection`: connect to MongoDB and Gemini, try the existing text index, generate and store embeddings, create a Vector Search index, retrieve tweet evidence, and run the RAG chatbot. **Run the cells yourself**; do not submit the instructor screenshots as your own outputs.

## Lab — `lab12.ipynb`

### Part 1 — Collect new election tweets (15 points)

**Step 1. Reuse Lab 8 code to collect data.** Use the **Twitter/X API**, exactly as in Lab 8, with the fixed keyword/search query **`election`**. Collect **50–200 unique new tweets** (about **100** is a good target) related to the period after the November 3, 2026 U.S. election. Your retrieved posts must have timestamps consistent with this period; if the API returns older posts, adjust the allowed time filters while preserving the keyword.

In a Markdown cell, write the **keyword**, **exact X API query** (including any date/time filters), **collection date**, and **research question**: *How do people in my collected tweets react to the election outcome, and which people do they mention?*

Save the records in a **new MongoDB database `lab12`**, collection **`tweet_collection`**. Preserve the original tweet data, use the `tweet.id` uniqueness pattern from Lab 8, and show the total count plus a few original tweets. Reuse Lab 8 collection limits and avoid duplicate API requests.

### Part 2 — Use Gemini to analyze tweets and make two bar charts (25 points)

**Step 2. Analyze the collected tweets with a large language model.** You **must** adapt your **Week 11 Gemini API** code, design your own prompts, call the Gemini model on the tweet texts, and save the results to the matching MongoDB documents. Do not use keyword-only heuristics or manually label the entire collection.

**Analysis A — Reaction to the election outcome.** Ask Gemini to assign **exactly one** of these labels to each tweet:

| Label | Meaning |
|---|---|
| **Happy** | Clearly pleased or satisfied with the election outcome. |
| **Unhappy** | Clearly disappointed or dissatisfied with the election outcome. |
| **No clear reaction** | Unclear, neutral, mixed, or not discussing a reaction to the outcome. |

Example prompt: *"Read the following tweet. Classify its explicit reaction to the election outcome as Happy, Unhappy, or No clear reaction. Return exactly one label. Do not infer the author's opinion from a party, username, or unstated beliefs. Tweet: ..."*

Save the result in **`tweet.reaction`**. Display at least **five original tweets beside their labels** to check whether the model followed your instructions. If a model request fails, leave it missing; do not turn a failure into "No clear reaction."

**Chart 1 — Reaction bar chart.** Use MongoDB queries or pandas to count **Happy**, **Unhappy**, and **No clear reaction**. Show the **counts and percentages** in a DataFrame, followed by **one labeled bar chart**. Report missing/failed labels separately from the three reaction categories.

**Analysis B — People explicitly mentioned.** Using the **same Week 11 Gemini pattern**, design another prompt that extracts **the names of people actually written in each tweet**. Return a **list of names**; an empty list `[]` means that the tweet mentions nobody by name. Do not invent names based on titles, roles, parties, or pronouns. Save the list in **`tweet.people`**, then display at least **five original tweets alongside their extracted names**. Treat failed API requests as missing, not as empty lists.

**Chart 2 — People mentioned bar chart.** Count each named person **at most once per tweet**. Standardize obvious duplicate spellings, show a DataFrame with the **top 10 people and their counts**, and create **one labeled bar chart**. Mention count is not the same as approval or support.

**Part 2 Summary (Markdown).** After the two charts, write a short summary **in your own words**: what the reaction counts show, which people appeared most often, and one limitation of the sample or Gemini analysis. Your charts describe **your collected tweets**, not national voter sentiment.

### Part 3 — Build a Vector Search RAG chatbot (20 points)

**Step 3. Adapt the Lecture RAG code to your new collection.** Continue in the same `lab12.ipynb`. Set your collection to **`client["lab12"]["tweet_collection"]`** and follow this order:

1. Generate **Gemini embeddings** from the original `tweet.text` of all collected tweets and save them in `tweet.embedding`.
2. Create the **MongoDB Atlas Vector Search index** using the same embedding model, dimensions, field path, and cosine similarity demonstrated in the lecture. Wait until the index is queryable.
3. Reuse the lecture's **`vector_search()`**, prompt template, and Gemini chatbot to ask questions about your own election tweets. **You do not need to run keyword/text search or compare search methods in this Lab part.**

Ask **at least three meaningful questions**, such as:

- Why do some tweets express unhappiness about the election results? What reasons do they actually mention?
- What are some tweets happy about? What positive reactions appear?
- Which people are mentioned in connection with the election results, and what do those tweets say?

For **each** question, preserve the **exact question**, the **retrieved tweet IDs and source text**, and **the actual Gemini answer**. Under it, write **your own 1–2 sentence summary**, explaining what you learned and whether the cited tweets support the answer. The chatbot can generate different wording on later runs; preserve **what you actually observed**, rather than inventing or rewriting a model response.

**Part 3 Summary (Markdown).** After the chat examples, summarize the main themes you noticed and explain a limitation or question that your tweets could not answer. Do not extrapolate a few retrieved tweets to all voters. For dataset-wide numbers, refer back to Part 2's charts.

### AI Use — 10 points

End `lab12.ipynb` with a separate **AI Use** Markdown cell. Briefly explain **which AI tools you used**, **how you used them**, and **which outputs, labels, or answers you personally checked or corrected**.

## Save and submit — two notebooks, two Canvas values

Save **both** `lec12.ipynb` and `lab12.ipynb` **at the root of your assigned private IA340 GitHub repository**, with code, readable output, Markdown explanations, and your written summaries. **Any questions and discussions you include in the notebooks will be stored on GitHub** and can be read by anyone with repository access; if you post work to a public repo, anyone can read it. Keep your writing respectful and do not publish secrets or personal information.

Submit **exactly two values, each on its own line, in private Canvas**:

1. **Your GitHub repository root URL**.
2. **Your working MongoDB connection string** (only in private Canvas, never in GitHub).

**IA340-1:** `https://github.com/JMU-Data/ia340-fa26-1-<your-github-username>`  
**IA340-2:** `https://github.com/JMU-Data/ia340-fa26-2-<your-github-username>`

Use **Colab Secrets** for API keys, the X token, and the MongoDB URI. Never put credentials in your repository, notebook outputs, screenshots, prompts, or code. If a credential is exposed, rotate it promptly.

## Rubric — 100 points

| Component | Points | What is assessed |
|---|---:|---|
| **Lecture — `lec12.ipynb`** | **30** | Complete and run the lecture examples in your own notebook; keep the outputs and upload to GitHub. |
| **Part 1 — Collect** | **15** | Use Lab 8 code to collect 50–200 new `election` tweets into `lab12.tweet_collection` and document the query/count. |
| **Part 2 — Gemini + two charts** | **25** | Use Gemini API for reaction classification and name extraction; save and inspect results; create two specified bar charts and a Part 2 Summary. |
| **Part 3 — RAG chatbot** | **20** | Generate embeddings, build the Vector Search index, record at least three Q&A turns and source evidence, and write a Part 3 Summary. |
| **AI Use** | **10** | Describe your AI tools, how you used them, and what you checked yourself. |
| **Total** | **100** | |

**Additional deductions:** incorrect/inaccessible GitHub repository URL **−10**; missing/nonworking MongoDB connection string **−10**; exposed credentials **−20 once**. These deductions apply after the rubric, and the final score cannot be less than zero. Fix broken access and rotate any exposed credential.
