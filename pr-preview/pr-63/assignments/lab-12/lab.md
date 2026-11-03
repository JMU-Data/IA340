# IA340 · Lab 12 — Explore Your Tweets with Gemini and RAG

**Wednesday, November 11, 2026 · Google Colab · 100 points · Due: see Canvas**

[Week 12 Lecture](../../modules/module-12/) · [Lab 8 collection instructions](../lab-8/)

## Goal

Choose your own keyword, collect a **new Twitter/X dataset**, and investigate a question that interests you. Use Gemini for a text-analysis task you design, visualize your findings, and build a RAG chatbot that answers questions using evidence from your tweets.

<div class="mini-path"><span>Collect new tweets</span><b>→</b><span>Analyze + chart</span><b>→</b><span>Retrieve + answer</span><b>→</b><span>Check the evidence</span></div>

| Setting | Use for this week |
|---|---|
| Lecture notebook | `lec12.ipynb` — use your existing `lab8.tweet_collection` |
| Lab notebook | `lab12.ipynb` — collect new data into `lab12.tweet_collection` |
| Collection size | **50–200 unique real tweets; aim for 100** |
| Keyword and question | Your choice; write both clearly in your notebook |
| Tools | The course Google Cloud Gemini workflow, MongoDB Atlas, and Google Colab |

## Before the Lab · Complete the Lecture notebook

In **`lec12.ipynb`**, follow the Week 12 lecture using the tweets already stored in **`lab8.tweet_collection`**. Keep the original text and other fields. Save your executed code and readable outputs showing:

- Generated embeddings, their dimensions, and the matching vector-index configuration and readiness check.
- A keyword-search and semantic-search comparison, with the retrieved source text visible.
- A RAG answer with source IDs that can be checked against the retrieved tweets.

The Lecture is worth **40 points**. Use your completed notebook as the reference for Part 2 below.

## Part 1 · Collect, analyze, and visualize new tweets

### 1.1 · Define your question and collect the data

Create **`lab12.ipynb`**. Begin with a Markdown cell that states:

1. Your **chosen keyword** and why you chose it.
2. The **exact Twitter/X API search query**, including any operators you use.
3. Your **research question**: what do you want to learn from these tweets?

Adapt your Lab 8 collection code. Select database **`lab12`** and collection **`tweet_collection`**, and collect fresh tweets for your chosen query. Preserve the original `tweet` and available matching `user` records, create the unique **`tweet.id`** index, and keep **`collection_meta`** with the source, exact query, and retrieval time. Your existing Lab 8 collection remains the Lecture dataset.

Use the course-approved X access and keep **`TWITTER_BEARER_TOKEN`**, **`MONGODB_CONNECTION_STRING`**, and **`GOOGLE_CLOUD_API_KEY`** in Colab Secrets. Reuse the existing classroom Gemini connection and MongoDB setup.

**Aim for 100 tweets; 50–200 unique real tweets meets the requirement.** Check the stored count before making a paid request. Follow the Lab 8 limited-pagination pattern if the first page leaves you below 50; check the count after each page and stop within the allowed range. If access fails or a query returns too few posts, record what happened and ask the instructor before repeatedly making requests.

Show your final **unique record count** and **retrieval date/time, including the time zone**, in the notebook. Inspect a few saved documents to confirm the text, query, and metadata match your collection.

### 1.2 · Design one Gemini text-analysis task

Choose **at least one analysis that produces useful categories** for your research question. For example, you could classify the main topic, identify the type of question a post asks, or classify its communication purpose. **You define the task and the labels**; there is no required set of topic names.

- In Markdown, describe the task, list your allowed labels, and explain what each label means. State how you will handle a tweet that does not fit a category clearly.
- Adapt the processing pattern from your Week 11 notebook. Include the prompt in your code, request a consistent response format, and save the valid result in the matching original document in **`lab12.tweet_collection`**. Choose and document a field name; `tweet.topic` is one possible example.
- Show **five original tweets alongside their generated labels**. For each, explain whether the label fits the text and identify any correction you made. This is a check of the model's output, not a new round of data collection.
- Report the number of valid results and failed or skipped requests. A failed request is **missing analysis**, not a category. Do not count missing or invalid results as a valid label.

Keep the original tweet text. Describe the labels as **model-generated classifications** when reporting your findings.

### 1.3 · Answer two analytical questions with two charts

Create the following two analyses using your **new Lab 12 dataset**:

| Analysis | Required result |
|---|---|
| **Quantitative analysis of an original field** | Ask a numerical question about the collected data, such as activity over time or recorded engagement. Use MongoDB or pandas to calculate the answer; display the result and an appropriate chart. |
| **Summary of your Gemini categories** | Query the saved classification field, calculate the category counts or percentages, display the result, and create a chart. State the number of valid labels used and account for missing results. |

For **each** analysis, keep the question, executed query/calculation, displayed DataFrame, chart, and a brief interpretation together. You may use MongoDB's query assistant or Gemini in Colab to help write code, then inspect the returned values and chart labels yourself.

Use database/Python calculations for totals and percentages. Explain what the **collected dataset** shows; it is not a representative sample of everyone on Twitter/X.

## Part 2 · Build and evaluate your RAG chatbot

### 2.1 · Generate embeddings and create the vector index

Adapt **`lec12.ipynb`** to **`lab12.tweet_collection`**. Generate embeddings from the **original tweet text**, save them with the matching records, and create the vector index using the same model, dimensions, field path, and similarity setting as your Lecture implementation.

Show the number of valid stored embeddings and the index readiness check. Report skipped or failed texts. Before querying, confirm that the question embedding uses the same embedding model and dimensions as the stored document vectors. Follow the Lecture's document/query task settings.

If the index is still building, wait for readiness and check again. If a call fails, inspect that stage and resume the affected work; do not recollect the dataset or silently replace failed embeddings with made-up values.

### 2.2 · Compare keyword search and semantic search

Choose an information need connected to your research question. Show the **keyword or phrase used for literal search** and the **question used for semantic search**, then run both on your Lab 12 data.

- For keyword matches, show the tweet/source IDs and original text.
- For semantic retrieval, show the tweet/source IDs, original text, and **vector-search scores**.
- Explain which returned tweets are useful for the question and why. Identify an irrelevant result if one appears.

**Report the results you actually get.** Keyword search does not have to fail, and semantic search does not have to be better for every query. A vector score measures similarity under the chosen search setup; it is not proof that the source answers the question.

### 2.3 · Generate answers with visible sources

Use the retrieved original tweets as context for Gemini. Your chatbot should answer from that evidence, cite the displayed source IDs, and state when the evidence is insufficient. Show the retrieved sources alongside the answer so someone can check its claims.

Include **one follow-up question** to a previous answer. Keep its subject clear in the query used for retrieval and inspect the newly retrieved evidence. A conversational answer still needs sources.

Do not use only the top retrieved tweets to calculate a percentage or total for the whole collection. Use the complete relevant dataset and the Part 1 aggregation workflow for those questions.

### 2.4 · Check three types of questions

Save the question, retrieved sources, chatbot answer, and **your own evidence check** for each test below. You may reuse the comparison and chat outputs above; extra copies are unnecessary.

| Test | What to demonstrate | What to explain yourself |
|---|---|---|
| **Supported question** | Ask a question that your collected tweets can answer. | Identify the source IDs that support the answer and check that the answer adds no unsupported details. |
| **Paraphrased question** | Express the same information need using different words. | Compare the retrieved sources and explain whether the meaning was preserved and the answer is still supported. |
| **Question without sufficient evidence** | Ask for a detail that your dataset does not establish. | Explain what evidence is missing and check whether the chatbot acknowledges that limitation. Similar-looking results alone are not enough. |

If a test exposes a problem, describe it. You may adjust the prompt or retrieval query, rerun that test, and explain what improved or remains uncertain. The aim is to evaluate your system honestly.

## Findings and AI Use

End **`lab12.ipynb`** with a **Summary & AI Use** Markdown cell:

- In about **4–6 sentences**, explain your main numerical and classification findings, what the keyword/semantic comparison showed, and one limitation revealed by the RAG tests. Refer to your actual outputs.
- In about **2–3 sentences**, explain how you used the Gemini API and any query/chart assistance, and what you checked or changed yourself.

Your final explanation is your interpretation of the evidence. A separate report, prompt-history export, or additional AI-generated summary is not required.

## Submit

Save **`lec12.ipynb`** and **`lab12.ipynb`** at the root of your assigned private GitHub repository, with code and readable executed outputs. Submit **two values on separate lines in private Canvas**:

1. Your **GitHub repository root URL**.
2. Your **working MongoDB connection string**, only in the private Canvas submission field.

**IA340-1:** `https://github.com/JMU-Data/ia340-fa26-1-<your-github-username>`  
**IA340-2:** `https://github.com/JMU-Data/ia340-fa26-2-<your-github-username>`

Never put a connection string, password, API key, or bearer token in GitHub, notebook code/output, screenshots, or AI prompts. Do not submit your Google Cloud API key.

## Rubric — 100 points

| Component | Points | What is assessed |
|---|---:|---|
| **Lecture · Embeddings and index** | **20** | `lec12.ipynb`: generate and save embeddings for existing Lab 8 tweets; show matching dimensions/index settings and readiness evidence. |
| **Lecture · Retrieval and source-based answer** | **20** | `lec12.ipynb`: compare keyword and semantic retrieval, display source text, and produce a RAG answer with checkable source IDs. |
| **Lab · New data collection** | **10** | `lab12.ipynb`: state the chosen keyword, exact API query, and research question; store 50–200 unique new tweets in `lab12.tweet_collection`, with metadata, retrieval time, and count evidence. |
| **Lab · Custom analysis and two charts** | **15** | Define and save a custom Gemini classification, inspect five labels against their texts, report missing results, and complete the original-field quantitative analysis and classification summary with two DataFrames, two charts, and interpretations. |
| **Lab · Retrieval and RAG chatbot** | **20** | Generate Lab 12 embeddings and a ready vector index, compare keyword/semantic retrieval, show source IDs/text/vector scores, and demonstrate source-based answers plus one follow-up. |
| **Lab · Evidence tests, reflection, and AI Use** | **15** | Check supported, paraphrased, and insufficient-evidence questions against their sources; explain actual findings and limitations, AI use, and what was verified or corrected. |
| **Total** | **100** | **Lecture 40 + Lab 60.** |

**Deductions:** incorrect/inaccessible GitHub URL **−10**; missing/unusable private Canvas MongoDB connection string **−10**; exposed credential **−20 once**. Scores cannot fall below zero. Revoke/rotate any exposed secret and remove it from the exposed location.
