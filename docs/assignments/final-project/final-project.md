# IA340 Final Project

## Post-Election Analysis

**Fall 2026 · 100 points**

Analyze Twitter/X discussions following the **2026 U.S. midterm elections**. Choose relevant keywords (such as `election` or `midterm`), collect your own tweets, analyze them using a large language model (LLM), and build a vector-search chatbot. Present your results in a MongoDB Charts dashboard and a supplementary NotebookLM interactive report.

Submit each of the four assignments separately in Canvas. **Enter only the required URL or connection string.**

| Canvas assignment | Points | Deadline | Submission |
|---|---:|---|---|
| **1. Notebook Analysis** | **35** | Friday, December 4 | GitHub repository root URL |
| **2. MongoDB Data** | **30** | Friday, December 4 | MongoDB connection string |
| **3. MongoDB Dashboard** | **20** | Friday, December 11 | Public dashboard URL |
| **4. NotebookLM Interactive Report** | **15** | Wednesday, December 16 | Interactive report URL |
| **Total** | **100** | | |

All deadlines are at **11:59 PM EST**.

### Submission and feedback policy

- **Late submissions and resubmissions are not accepted.** Late or missing submissions receive zero points.
- Submit completed work by each assignment's deadline. Incomplete work is graded according to the rubric.
- The instructor will make every effort to provide feedback after each deadline, but feedback is not guaranteed. You may collect additional tweets, correct your data, or reprocess it after December 4 to improve your dashboard. Grades for Assignments 1 and 2 will not change as a result of these corrections.

## Project requirements

- **Data collection:** Use [Lab 8](https://jmu-data.github.io/IA340/assignments/lab-8/) to collect **200–500 new, unique tweets** after the Final Project is assigned and by December 4. Preserve the original tweet, author, and other available API metadata, including `collection_meta`. The instructor will verify the collection dates using `collection_meta.retrieved_at`.
- **MongoDB:** Use database `final` and collection `tweet_collection`.
- **LLM processing:** Follow [Lecture 11](https://jmu-data.github.io/IA340/modules/module-11/) and [Lab 11](https://jmu-data.github.io/IA340/assignments/lab-11/). Save both results in the corresponding MongoDB documents:
  - `tweet.reaction` — A binary classification with exactly two allowed string values: `happy` or `not_happy`. Use `happy` if the tweet expresses happiness or satisfaction with the election outcome; otherwise, use `not_happy`.
  - `tweet.people` — A JSON list (array of strings) containing the names of people explicitly mentioned in the tweet. Use `[]` when no people are named.

  Do not record failed LLM requests as valid results.
- **Vector search:** Follow [Lecture 12](https://jmu-data.github.io/IA340/modules/module-12/) to generate 768-dimensional embeddings using `gemini-embedding-001`, save them in `tweet.embedding`, and create a working MongoDB Atlas Vector Search index with 768 dimensions and cosine similarity. Monitor your Gemini API usage and avoid unnecessary repeated processing. Use your vector-search chatbot to ask several questions about your collected tweets.
- **Notebook:** Complete the entire workflow (data collection, LLM processing, vector embeddings, vector index creation, and chatbot analysis) in one notebook, `final.ipynb`. Save it at the root of your assigned IA340 GitHub repository on `main`.

## Assignment 1 — Notebook Analysis

**35 points · Due Friday, December 4, 2026, at 11:59 PM EST**

Create and run one Google Colab notebook named `final.ipynb`. Include your code and saved execution outputs.

### Notebook requirements

1. **Collect and store data (Lab 8).** Adapt your Lab 8 Twitter/X collection code to use your selected keywords and store the collected tweets in `final.tweet_collection`.
2. **LLM processing (Lecture 11 and Lab 11).** Adapt your Gemini API code to generate the two required results: a binary reaction (`happy` or `not_happy`) and a JSON list of mentioned people. Save the results in `tweet.reaction` and `tweet.people`. Check the stored results in MongoDB Data Explorer.
3. **Vector embeddings and chatbot (Lecture 12).** Generate Gemini embeddings with 768 dimensions, save them in `tweet.embedding`, create the matching Vector Search index, and use the chatbot to ask several questions about your collected tweets. Keep your questions, retrieved tweets, and chatbot answers in the notebook.
4. **Summary.** At the end of the notebook, write a Markdown summary **in your own words** that includes:
   - Keywords used, number of tweets collected, and when the data was collected.
   - The AI tools you used and how you used them.
   - Your preliminary findings from the LLM analysis and vector-search chatbot.

### Submit in Canvas

Submit only the **root URL of your assigned IA340 GitHub repository**. Save `final.ipynb` on `main` before the deadline.

### Rubric (35 points)

| Criterion | Points | What is assessed |
|---|---:|---|
| **Data collection code** | **10** | Correct API collection code, keyword selection, MongoDB insertion, and execution outputs. |
| **LLM processing code** | **10** | Appropriate prompts, correct LLM API calls, and code that saves reaction and people results to the corresponding documents. |
| **Vector embeddings and chatbot** | **10** | Correct embedding, indexing, and vector-search code; executed chatbot questions and answers. |
| **Summary and AI use** | **5** | A student-written Markdown summary in `final.ipynb` covering keywords, tweet count, collection time, AI tools, and preliminary findings from both analyses. |
| **Total** | **35** | |

**Grading:** Late submissions, inaccessible GitHub repositories, or a missing `final.ipynb` receive **0 points**. The notebook must be committed by the deadline.

**Credentials:** Use Colab Secrets for API keys, tokens, passwords, and the MongoDB connection string. Exposing a real credential in GitHub, notebook outputs, or other public project materials results in a **10-point deduction** from this assignment (once, minimum score 0).

## Assignment 2 — MongoDB Data

**30 points · Due Friday, December 4, 2026, at 11:59 PM EST**

The instructor will check `final.tweet_collection` for:

1. **Tweets:** 200–500 unique new tweets, collected within the project period, with the original records and available metadata.
2. **LLM results:** A valid `tweet.reaction` value (`happy` or `not_happy`) and a `tweet.people` JSON list for each processed tweet.
3. **Vector embeddings:** Valid 768-dimensional Gemini embeddings in `tweet.embedding` and a working MongoDB Atlas Vector Search index with matching dimensions.

### Submit in Canvas

Submit only your **working MongoDB connection string** in the private Canvas submission box. Make sure the instructor can connect to your database and access `final.tweet_collection`. Do not publish the connection string elsewhere.

### Rubric (30 points)

| Criterion | Points | What is assessed |
|---|---:|---|
| **Tweets and metadata** | **10** | 200–500 unique new tweets, original metadata, and valid collection dates. Counts outside the required range receive reduced credit. |
| **LLM results** | **10** | Correctly stored binary reaction values (`happy` or `not_happy`) and JSON lists of mentioned people. |
| **Embeddings and index** | **10** | Correctly stored 768-dimensional Gemini embeddings and a working, matching Vector Search index. |
| **Total** | **30** | |

**Grading:** Late submissions, inaccessible connections or data, or no valid tweets collected within the required period receive **0 points**.

## Assignment 3 — MongoDB Dashboard

**20 points · Due Friday, December 11, 2026, at 11:59 PM EST**

Follow [Lab 13](https://jmu-data.github.io/IA340/assignments/lab-13/) to create a dashboard using `final.tweet_collection`. You may use corrected or newly processed data to build your dashboard. These improvements will not change your grades for Assignments 1 and 2.

Include at least four visualizations:

| Required visualization | What to display |
|---|---|
| **1. Total tweets** | Number of unique tweets collected. |
| **2. Tweets over time** | Tweet counts by posting time (`tweet.created_at`). Convert the field to a Date type in MongoDB Charts and choose a suitable time interval. |
| **3. Reactions** | A bar chart showing the counts of `happy` and `not_happy` tweets. |
| **4. Mentioned people** | The most frequently mentioned people and their mention counts, using `tweet.people`. |

Use clear titles and labels. **Both the dashboard and its Charts data source must be publicly viewable.** Test the dashboard URL while signed out.

### Submit in Canvas

Submit only your **public MongoDB Charts dashboard URL**.

### Rubric (20 points)

| Criterion | Points | What is assessed |
|---|---:|---|
| **Total tweets** | **5** | Accurate tweet count, clearly displayed. |
| **Tweet timeline** | **5** | Accurate counts by posting time using `tweet.created_at` converted to Date, with a readable time axis. |
| **Reaction chart** | **5** | Correct `happy` and `not_happy` counts in a clearly labeled bar chart. |
| **Mentioned-people chart** | **5** | Correct people and mention counts, with a clear presentation. |
| **Total** | **20** | |

**Grading:** Late submissions or a dashboard or Charts data source that is not publicly accessible receive **0 points**.

## Assignment 4 — NotebookLM Interactive Report

**15 points · Due Wednesday, December 16, 2026, at 11:59 PM EST**

Use NotebookLM to create an interactive report that provides complementary information about the **2026 U.S. midterm elections**. Select relevant outside sources, such as news reports, official election information, or research. There is no required number of sources.

Include the following three components in your interactive report:

1. **Text summary:** A clear, well-organized summary of the election topic that provides context for your Twitter/X analysis.
2. **Mind map:** A relevant, readable mind map.
3. **Infographic:** A relevant, readable visual summary of the topic.

**Example:** [Instructor's interactive report](https://notebook.google.com/notebook/9ea453ed-98fc-45d3-8775-c8c7f90d7f62/artifact/8d4158d0-8889-4c4f-b3b3-999260d8f899)

### Submit in Canvas

Submit only the **direct URL to your interactive report**, not the main NotebookLM notebook URL. Make sure the instructor can access the report and all three required components.

### Rubric (15 points)

| Criterion | Points | What is assessed |
|---|---:|---|
| **Text summary** | **5** | Clear, accurate, well-formatted summary of relevant supplementary information. |
| **Mind map** | **5** | Relevant, readable, and accessible mind map. |
| **Infographic** | **5** | Relevant, readable, and accessible infographic. |
| **Total** | **15** | |

**Grading:** Late submissions, inaccessible reports, or submission of the main notebook URL instead of the interactive report URL receive **0 points**.

## Class schedule

| Dates | Meeting format | Attendance |
|---|---|---|
| **November 30 and December 2** | In-person class | **Required** |
| **December 7 and 9** | Zoom Q&A during your regular class time | **Not required** |

There will be no in-person class or separate office hours on December 7 and 9. The Zoom link will be posted in Canvas. If you have Final Project questions, join Zoom during your regular class time.

---

Follow the [IA340 course syllabus and academic-integrity policy](https://jmu-data.github.io/IA340/syllabus/).
