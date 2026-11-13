# Lab 13: MongoDB Dashboards and Gemini Notebook

**Week 13 · November 16 and 18, 2026 · One Lab (100 points) · Due Friday, November 20, 2026 at 11:59 PM EST**

Week 13 has **one Lab with two sections and no Lecture**, presented together on this page. First, communicate findings from the Twitter/X data you collected in **Week 8** with a MongoDB Charts dashboard. Second, use **Gemini Notebook (formerly NotebookLM)** to research a topic, ask source-grounded questions, and experiment with AI-generated research products in Studio.

**One Canvas Lab 13 submission:** In the **same Canvas text-entry box**, submit your public MongoDB Dashboard URL, your **ENTIRE Gemini Notebook URL**, and a **2–3-sentence intelligence-analysis reflection**. Do not submit individual Studio artifact links.

**What you will create**

| Section | Main work | What to submit |
| --- | --- | --- |
| **1 · MongoDB Charts** | Six visualizations from your Week 8 tweets, including a geographic view | **Public dashboard URL** |
| **2 · Gemini Notebook** | Research a topic, import relevant sources, explore source-grounded Chat and Studio; **try an Interactive Report** | **Public full-notebook URL** |
| **Reflection** | Explain how this workflow might help an intelligence analyst and a limitation you noticed | **2–3 sentences in the same Lab 13 Canvas submission box** |

Use your existing MongoDB Atlas account and the **personal Google account designated for this course**. A paid Google AI plan is **not required**.

**On this page:** [MongoDB Charts](#section-1-visualize-your-twitter-data-with-mongodb-charts) · [Gemini Notebook](#section-2-research-with-gemini-notebook) · [Submission](#submission) · [Rubric](#rubric)

## Section 1: Visualize Your Twitter Data with MongoDB Charts

In this section, build one dashboard using the Twitter/X data from **Lab 8**. Each chart introduces a useful Charts feature: drag-and-drop aggregation, date conversion, filtering and colors, Top 10 ranking, array unwinding, and geographic mapping.

### Step 1 — Check your data

Use your existing **`lab8.tweet_collection`**. You do not need to collect more tweets or rerun the LLM analysis. Open a few documents and identify the fields below. Expand `tweet` and `user` as needed.

| What you want to show | Field |
| --- | --- |
| Tweet ID and total count | `tweet.id` |
| When tweets were posted | `tweet.created_at` |
| Sentiment and anger from the LLM analysis | `tweet.sentiment`, `tweet.anger` |
| Most active accounts | `user.username` |
| People and organizations extracted by the LLM | `tweet.people`, `tweet.organizations` |
| Self-reported user location | `user.location` (if available) |

The LLM-generated fields may have missing values or inconsistent labels. You will learn to use **Filter** to display meaningful categories without pretending missing results are valid labels.

**Screenshots:** The figures in Section 1 come from the Week 13 screenshots supplied for this lab. They show an instructor example with fields such as `A.id`, `A.created_at`, and a sample tweet count. Use the matching fields in **your own Lab 8 collection**; your values, labels, and interface may differ.

### Step 2 — Open Charts and create a dashboard

1. Sign in to [MongoDB Atlas](https://cloud.mongodb.com/). In the **Visualization Services** area, click **Visualization**.
2. Click **Add Dashboard**, give it a title related to your research topic, and add a short description.
3. Inside the dashboard, click **Add Chart**. The **Select Data Source** window will open.
4. Your data source might not appear immediately. **Wait a few seconds for the list to load** before assuming it is missing. Then expand your existing cluster, select the `lab8` database and `tweet_collection`, and continue to the chart builder. Recheck the selected project and cluster only if it remains missing.

![In MongoDB Atlas, locate Visualization in the left navigation.](screenshots/Screenshot%202026-11-12%20153817.png)

*Screenshot: In MongoDB Atlas, locate Visualization in the left navigation.*

![Open the Charts dashboard list and choose Add Dashboard.](screenshots/Screenshot%202026-11-12%20153840.png)

*Screenshot: Open the Charts dashboard list and choose Add Dashboard.*

![Give your dashboard a clear title and save it.](screenshots/Screenshot%202026-11-12%20153911.png)

*Screenshot: Give your dashboard a clear title and save it.*

![Select the existing lab8 > tweet_collection data source in your Atlas cluster.](screenshots/Screenshot%202026-11-12%20154002.png)

*Screenshot: Select the existing lab8 > tweet_collection data source in your Atlas cluster.*

You will use the same collection for all six charts. As you build them, use **Save and Close** to return to the dashboard.

### Step 3 — Build six charts

| Chart | Main feature to practice | Chart type |
| --- | --- | --- |
| 1. Total Tweets Collected | Drag and drop a field; aggregate | Number |
| 2. Tweets Over Time | Convert a field to Date; customize the chart | Discrete Line |
| 3. Sentiment and Anger | Apply Filter; customize colors | Stacked Bar |
| 4. Top 10 Most Active Users | Sort and limit to Top 10 | Horizontal Bar |
| 5. People and Organizations | Unwind arrays; filter messy values | Heatmap |
| 6. Tweet Locations | Select a geographic Shape Scheme | Geo Choropleth |

#### Chart 1 — Total Tweets Collected: Drag and Drop

1. Click **Add Chart**, choose **Number** as the chart type, and use your tweet collection.
2. Find `tweet.id` in the **Fields** panel and **drag and drop** it into the chart's aggregation area.
3. Choose the aggregation method that counts tweets. **Count** works when each document represents one tweet; **Distinct** on `tweet.id` counts unique tweet IDs if duplicates exist. Do **not** use Sum on an ID.
4. Review the resulting number, name the chart **Total Tweets Collected**, and click **Save and Close**.

The key idea is that you can change the **Chart Type** and drag a field into an encoding channel; MongoDB Charts performs the aggregation and displays the result.

![Number chart: count tweet IDs to show the total tweets collected. This example shows 200; your total will vary.](screenshots/Screenshot%202026-11-12%20154109.png)

*Screenshot: Number chart: count tweet IDs to show the total tweets collected. This example shows 200; your total will vary.*



#### Chart 2 — Tweets Over Time: Date Conversion and Customize

1. Add a new chart and choose **Discrete Line**.
2. Drag `tweet.created_at` to the **X Axis**. If the dates are stored as text, open the field's menu and use **Convert Type / Create or Edit** to convert the values to **Date**. Check that they appear as dates rather than strings.
3. Drag `tweet.id` to the **Y Axis** and choose **Count** (or **Distinct** when counting unique IDs). Choose a time interval that suits your data: minutes, hours, or days.
4. Open **Customize**. Try changing the axis labels, date display, label size, or other available appearance options. Use the real posting dates in chronological order.
5. Name the chart **Tweets Over Time**, then **Save and Close**.

Use `tweet.created_at` (when the tweet was posted), not `collection_meta.retrieved_at` (when it was collected). If the time range is short, a smaller date interval may be clearer.

![Convert the tweet timestamp field to Date when necessary (shown with sample field A.created_at).](screenshots/Screenshot%202026-11-12%20154131.png)

*Screenshot: Convert the tweet timestamp field to Date when necessary (shown with sample field A.created_at).*

![Discrete Line chart: display the number of tweets over time using the posting timestamp.](screenshots/Screenshot%202026-11-12%20154341.png)

*Screenshot: Discrete Line chart: display the number of tweets over time using the posting timestamp.*

![Use the Customize tab to refine the time-series chart and its labels.](screenshots/Screenshot%202026-11-12%20154506.png)

*Screenshot: Use the Customize tab to refine the time-series chart and its labels.*

#### Chart 3 — Sentiment and Anger: Filter and Colors

1. Add a **Stacked Bar** chart. Drag `tweet.id` to **X Axis** (Count or Distinct), `tweet.sentiment` to **Y Axis**, and `tweet.anger` to **Series**.
2. Open **Filter**. Because these fields were generated by a large language model, you may see inconsistent capitalization (such as `True` and `true`), blanks, or unsuccessful results. **Select only the valid labels in your own collection**, such as Positive/Neutral/Negative and True/False. Do not silently treat a failed request as False or Neutral.
3. Open **Customize**, enable **Custom Color Palette** if available, and set a consistent color for each anger category: **True = orange; False = blue**. If your data mixes uppercase and lowercase versions, normalize them before interpreting the chart, or explain any deliberately excluded categories. Assign colors **by series/category**, rather than by changing display order.
4. Keep the legend visible so viewers can see what each color means. Name the chart **Sentiment and Anger** and **Save and Close**.

This chart combines two LLM classifications. **Negative sentiment is not automatically the same as anger.** Use filters and colors to make the differences easy to see.

![Stacked Bar chart setup: tweet ID count on X Axis, sentiment on Y Axis, and anger as Series. The sample shows inconsistent capitalization that needs review.](screenshots/Screenshot%202026-11-12%20154722.png)

*Screenshot: Stacked Bar chart setup: tweet ID count on X Axis, sentiment on Y Axis, and anger as Series. The sample shows inconsistent capitalization that needs review.*

![Use Filter to choose meaningful LLM-generated sentiment and anger categories and exclude invalid results.](screenshots/Screenshot%202026-11-12%20154740.png)

*Screenshot: Use Filter to choose meaningful LLM-generated sentiment and anger categories and exclude invalid results.*

![Use Customize > Custom Color Palette > By Series: anger True in orange and False in blue. The sample has capitalized and lowercase variants; check yours.](screenshots/Screenshot%202026-11-12%20154838.png)

*Screenshot: Use Customize > Custom Color Palette > By Series: anger True in orange and False in blue. The sample has capitalized and lowercase variants; check yours.*

#### Chart 4 — Top 10 Most Active Users: Sort and Limit

1. Add a horizontal **Bar** chart with `user.username` as the category and `tweet.id` as the count.
2. Sort the bars from **highest count to lowest count**.
3. In the field options or chart filter/limit settings, show the **Top 10** users. Exclude empty usernames if needed; turn off an extra **All Others** category if it appears.
4. Name the chart **Top 10 Most Active Users** and **Save and Close**.

This means the most active accounts **within your collected sample**, not the most influential users on all of X/Twitter.

![Sort and limit the horizontal bar chart to the ten most active users in your sample.](screenshots/Screenshot%202026-11-12%20155023.png)

*Screenshot: Sort and limit the horizontal bar chart to the ten most active users in your sample.*

#### Chart 5 — People and Organizations: Unwind and Filter

1. Add a **Heatmap**. Drag `tweet.organizations` to **X Axis**, `tweet.people` to **Y Axis**, and the count of `tweet.id` to **Intensity**.
2. Both people and organizations are **lists (arrays)**. Select **Unwind Array** for each so Charts can display individual names rather than whole lists.
3. Open **Filter** and uncheck **null**, blanks, and placeholder values. For example, do not display a blank organization as though it were an organization name.
4. If the chart is crowded, use a **Top 10 organizations** limit or filter on the X Axis, and inspect which people appear alongside those organizations. You can also narrow the displayed people to make the heatmap readable.
5. Name the chart **People and Organizations Mentioned Together** and **Save and Close**.

A cell shows **co-occurrence in collected tweets**, not proof that a person works for or supports an organization. For a tweet containing several names, one tweet may contribute to several cells; use Distinct tweet IDs where available to avoid duplicates within a cell.

![Heatmap setup: put the organization and person arrays on the two axes, set both to Unwind Array, and count tweets for Intensity.](screenshots/Screenshot%202026-11-12%20155135.png)

*Screenshot: Heatmap setup: put the organization and person arrays on the two axes, set both to Unwind Array, and count tweets for Intensity.*

![Filter invalid or empty names to improve the people–organization heatmap.](screenshots/Screenshot%202026-11-12%20155232.png)

*Screenshot: Filter invalid or empty names to improve the people–organization heatmap.*



![A cleaned person–organization heatmap. Co-occurrence does not prove an affiliation.](screenshots/Screenshot%202026-11-12%20155307.png)

*Screenshot: A cleaned person–organization heatmap. Co-occurrence does not prove an affiliation.*

If there are genuinely **no tweets containing both types of extracted entities**, explain that limitation and use a simple **Grouped Bar** chart showing total person entries versus organization entries instead of an empty heatmap. This alternative replaces Chart 5 only.

#### Chart 6 — Tweet Locations: Explore Map Schemes

1. Add a **Geo Choropleth** chart. Use an available location field, such as `user.location`, in **Location**, and a tweet count (for example, Count or Distinct `tweet.id`) in **Color**.
2. Start by exploring a **Countries and Regions** Shape Scheme to see how many of your sample's users can be mapped to different countries. This works only when the field contains recognizable country names or codes.
3. If much of your data is from the United States **and** the location values contain recognizable U.S. states, try the **US States** Shape Scheme instead. Explore the available **Customize** settings for the map's colors and display. Choose a scheme that actually matches your data.
4. Name the chart **Tweet Locations** (or **User Profile Locations**), add a short explanation, and **Save and Close**.

`user.location` is self-reported profile text, **not verified tweet geolocation**. Free-text cities, jokes, or unknown locations may not map. If your sample has no suitable countries or states, **save the map even if it is empty** and briefly explain why. Do not invent geographic values to fill it.

![Geo Choropleth example: map the available profile-location categories using tweet counts.](screenshots/Screenshot%202026-11-12%20155438.png)

*Screenshot: Geo Choropleth example: map the available profile-location categories using tweet counts.*



![In Customize, explore the US States Shape Scheme when your location field supports recognizable state names.](screenshots/Screenshot%202026-11-12%20155523.png)

*Screenshot: In Customize, explore the US States Shape Scheme when your location field supports recognizable state names.*

### Step 4 — Organize and share the dashboard

1. Return to your dashboard. **Drag, rearrange, and resize** the six charts so the count and time charts are easy to find, the stacked colors are consistent, and the heatmap and map have enough room.
2. **Make the Charts data source public first.** Open **Data Sources**, find the source behind your charts, and under **Data Access > External Users**, enable external viewing and select **Allow unauthenticated external data access**. This makes the chart data available to external dashboard viewers; it does not mean publishing your database password.

![Review public dashboard-sharing settings and confirm data access permits external viewers.](screenshots/Screenshot%202026-11-12%20155625.png)

*Screenshot: Review public dashboard-sharing settings and confirm data access permits external viewers.*

3. Then make the **dashboard public**: open **Share > Public** and enable **Can view this dashboard**. Copy its public dashboard URL.

![On the Public tab, enable Can view this dashboard and copy the public link.](screenshots/Screenshot%202026-11-12%20155643.png)

*Screenshot: On the Public tab, enable Can view this dashboard and copy the public link.*

4. Open the copied URL in a **private/incognito browser window while signed out of MongoDB Atlas**. Confirm that the charts and data load, including your filters. Only submit the **URL that passes this test** in Canvas. If a dashboard opens but the charts are blank, recheck the **data-source** access setting.

**Both settings must allow public viewing: the data source AND the dashboard.** Do not share a MongoDB connection string, password, API key, or private material. No database network-access change is needed for this task.

![Check the finished dashboard in a signed-out private/incognito browser window; charts must actually load.](screenshots/Screenshot%202026-11-12%20155703.png)

*Screenshot: Check the finished dashboard in a signed-out private/incognito browser window; charts must actually load.*

### Troubleshooting

| Problem | What to try |
| --- | --- |
| No data source appears in Select Data Source | Wait several seconds, then check the chosen project and cluster. Do not create a new database just because the source is still loading. |
| Dates look like text or the line chart is wrong | Use Create/Edit or Convert Type to Date and select a sensible time interval. |
| Sentiment or anger has many strange categories | Use Filter to show reviewed labels; investigate missing or inconsistent LLM results rather than guessing values. |
| The Top 10 chart shows too many bars | Check descending sort, **Limit Results = 10**, and **All Others**. |
| The heatmap is crowded or includes null | Unwind arrays, uncheck null/blank categories, and try Top 10 organizations. |
| The map is blank | Verify that the chosen Shape Scheme matches actual country/state names or codes; an explained empty map is acceptable. |
| The public dashboard opens but charts are blank | Check **both** dashboard public sharing and the backing data source's unauthenticated external access. |

## Section 2: Research with Gemini Notebook

**Gemini Notebook** (formerly NotebookLM) lets you create a notebook around a set of sources, ask questions grounded in those sources, and turn your research into different formats. It is a practical example of a **retrieval-augmented generation (RAG) workflow**: the service uses selected source material to inform answers, while you remain responsible for assessing evidence, gaps, and accuracy. You do **not** need to build an embedding model or vector index for this exercise.

Your task is to **explore**, not maximize the number of clicks or generated artifacts. Free and paid accounts can complete the same core assignment. Google changes features and quotas frequently; the screenshots show the interface at the time this lab was prepared.

### Step 1 — Create a notebook and choose an intelligence question

1. Open **[Gemini Notebook](https://notebook.google.com/)** in a desktop browser and sign in with your **personal Google account**. Select **Create new notebook**.
2. Name it **`IA340 Lab 13 – Your Name – Your Topic`** so your instructor can identify your work. Choose one focused issue relevant to intelligence analysis.
3. Example research question: **What concerns and viewpoints are represented in online reports and public discussion of the 2026 U.S. midterm elections?** You can narrow this to election misinformation, economic concerns, confidence in institutions, or another issue. You may also choose a different intelligence-relevant topic.
4. Specify the **time period, geography, and question** you intend to investigate. The sources in this notebook do **not** have to be the same tweets as your MongoDB dashboard.

![Gemini Notebook home page. Create your own notebook rather than using a featured notebook.](screenshots/Screenshot%202026-11-12%20163656.png)

*Gemini Notebook home page. Create your own notebook rather than using a featured notebook.*

### Step 2 — Find sources with Fast Research or Deep Research

Both free and paid accounts can use the basic research workflow, subject to their account's current limits.

1. In the **Sources** panel, enter your research question in the search box. Select **Web**.
2. For a quick set of results, use **Fast Research** (the ordinary Web search). For a more extensive investigation, turn on **Deep Research** and start the search. The example in this lab uses **Deep Research**, but either option is acceptable.
3. Review the results when they appear. Deep Research may produce a written research report and a list of source links. **Read the titles and open relevant links**; not every suggested source is good evidence.
4. Select the sources you want and click **Import**. You may import a useful subset rather than everything. If your plan reaches a source limit, keep a smaller, relevant collection and continue. **There is no required number of sources.** The example screenshots show about 20 search results, not an assignment minimum.
5. In the left-hand list, **remove irrelevant, duplicate, inaccessible, or low-quality sources** if needed. Check that the remaining sources actually contain information that addresses your question.

![Start a Web search from the source panel; use Fast Research or turn on Deep Research.](screenshots/Screenshot%202026-11-12%20163837.png)

*Start a Web search from the source panel; use Fast Research or turn on Deep Research.*

![Example: Deep Research has completed and offers a research report and a group of sources to import.](screenshots/Screenshot%202026-11-12%20164342.png)

*Example: Deep Research has completed and offers a research report and a group of sources to import.*

![The imported sources appear in the left panel. Keep relevant evidence and remove items you do not want.](screenshots/Screenshot%202026-11-12%20164420.png)

*The imported sources appear in the left panel. Keep relevant evidence and remove items you do not want.*

**Intelligence-analysis reminder:** A suggested source is not automatically reliable. Pay attention to author, date, perspective, and original evidence. An AI-generated Deep Research report is a useful synthesis, **not an independent eyewitness account**. Do not infer what *all voters* believe from a small, nonrepresentative collection of articles or comments. Do not add private, restricted, or personal information to a notebook you plan to share publicly.

### Step 3 — Ask questions in Chat: a source-grounded RAG demonstration

After your sources are ready, use the **middle Chat panel**:

1. Review the **suggested questions** Gemini Notebook offers. Try one if it relates to your topic.
2. **Write your own questions** about something you want to understand. You control the question; you do not have to follow the suggested prompts.
3. Select or deselect sources in the left panel to narrow the evidence when useful. Open the citations in at least one response and **compare a claim against its original source**.
4. Ask a follow-up if an answer is too general, leaves out a viewpoint, or lacks supporting evidence.

You can adapt these example questions:

> - What are the most common concerns discussed in my sources? Cite the relevant passages and distinguish reporting from direct public comments.
> - How do two sources interpret the same issue differently? Which evidence supports each interpretation?
> - What can I conclude from these sources, and what **cannot** be inferred because of missing data or sampling limitations?

![Example of a source-grounded response in the Notebook Chat panel with cited material.](screenshots/Screenshot%202026-11-12%20164732.png)

*Example of a source-grounded response in the Notebook Chat panel with cited material.*

**Important for grading:** Regular Notebook Chat history is **private to you** and is **not visible to someone opening your shared notebook**. Your instructor will primarily see the **Sources** and **Studio** content. If a particular answer is worth showing, use **Save to note** (where available), but you do not need to save every chat or submit a separate chat URL.

### Step 4 — Explore Studio and generate research products

The **right-hand Studio panel** turns your sources into research products. Explore what interests you: **Audio Overview, Video Overview, Slide Deck, Mind Map, Infographic, Data Table, Flashcards, Quiz, and Reports**. The interface, availability, and usage limits may change.

For most formats, Gemini Notebook offers a suggested topic or prompt. **Use it as-is, edit it, or write your own.** Generate a product, open the finished result, and consider whether it represents your sources accurately. You do **not** have to generate every format or buy a paid plan; extra products do not earn extra points.

**A research prompt you can adapt:**

> Using only my selected sources, explain three important findings related to my research question, identify competing interpretations, include source support, and end with important limitations. Do not invent quotations, statistics, or public opinion estimates.

#### Audio Overview — generate, then listen

Open **Studio → Audio Overview**, choose an available style, and adjust the suggested prompt to suit your research question. Generate the audio, then open the result and **press Play**. Listen for useful insights as well as claims that need verification against the original sources.

![Audio Overview creation: choose a format and customize its suggested prompt.](screenshots/Screenshot%202026-11-12%20164808.png)

*Audio Overview creation: choose a format and customize its suggested prompt.*

![Audio Overview playback: open the finished audio and use the Play control to listen.](screenshots/Screenshot%202026-11-12%20183013.png)

*Audio Overview playback: open the finished audio and use the Play control to listen.*

#### Video Overview — generate, watch, and see how a single video can be shared

Open **Studio → Video Overview**. Choose the available format, edit the suggested topic or prompt, and generate. When it finishes, open the video and **watch the result**; the example here is a short-form video. Check claims and visualizations against the source documents.

![Video Overview creation: select the available video format and prompt.](screenshots/Screenshot%202026-11-12%20164920.png)

*Video Overview creation: select the available video format and prompt.*

![Video Overview result: an example completed short-form video ready to watch.](screenshots/Screenshot%202026-11-12%20181749.png)

*Video Overview result: an example completed short-form video ready to watch.*

**Share a single video (demonstration):** A completed Video Overview can have its **own link**, separate from the notebook. Open the video, click **Share**, then choose **Copy link to Video Overview**. If its parent notebook is public, the individual video can be viewed from a standalone link, including without Google sign-in. Here is what the share dialog looks like:

![Video Overview sharing: Copy link to Video Overview creates a link to this one video.](screenshots/Screenshot%202026-11-12%20181906.png)

*Video Overview sharing: Copy link to Video Overview creates a link to this one video.*

**See the shared result:** [Open Dr. Wei’s sample short Video Overview](https://notebook.google.com/notebook/9ea453ed-98fc-45d3-8775-c8c7f90d7f62/artifact/547bb79a-26e6-49c2-be12-ac1796bb0756?utm_source=nlm_web_share&utm_medium=google_oo&utm_campaign=art_share_1&utm_content=&utm_smc=nlm_web_share_google_oo_art_share_1_). You can see how an individual video link opens. **You do not need to share or submit a separate video URL. For the assignment, submit your entire Notebook URL.**

#### Slide Deck — generate, then inspect the slides

Select **Studio → Slide Deck**, choose a format, and tailor the prompt to your audience. Open the generated slides to see how the source material is presented. Verify important facts rather than assuming attractive slides are correct.

![Slide Deck creation: choose presentation settings and customize the prompt.](screenshots/Screenshot%202026-11-12%20164907.png)

*Slide Deck creation: choose presentation settings and customize the prompt.*

![Slide Deck result: open the finished slides and review the generated content.](screenshots/Screenshot%202026-11-12%20170237.png)

*Slide Deck result: open the finished slides and review the generated content.*

#### Mind Map — generate, then examine relationships

Select **Mind Map** to organize themes, actors, claims, and competing explanations. Open the finished map and look for useful connections or important viewpoints that are missing.

![Mind Map creation: request a visual map of your notebook topics.](screenshots/Screenshot%202026-11-12%20164946.png)

*Mind Map creation: request a visual map of your notebook topics.*

![Mind Map result: explore the relationships and identify any gaps.](screenshots/Screenshot%202026-11-12%20165309.png)

*Mind Map result: explore the relationships and identify any gaps.*

#### Infographic — generate, then review the graphic

Select **Infographic**, choose the available format and style, and adjust the prompt. Open the finished graphic and check its labels, statistics, and underlying evidence.

![Infographic creation: configure the visual format and prompt.](screenshots/Screenshot%202026-11-12%20165016.png)

*Infographic creation: configure the visual format and prompt.*

![Infographic result: review the generated visual and verify its claims.](screenshots/Screenshot%202026-11-12%20165417.png)

*Infographic result: review the generated visual and verify its claims.*

#### Data Table — generate, then inspect the entries

Select **Data Table** and request a comparison of topics, actors, events, organizations, or locations **actually documented in your sources**. Open the completed table and spot-check the **Source** column. Data extracted by AI may be incomplete or inaccurate.

![Data Table creation: describe the rows and columns you want from your sources.](screenshots/Screenshot%202026-11-12%20165054.png)

*Data Table creation: describe the rows and columns you want from your sources.*

![Data Table result: inspect the generated table and its source references.](screenshots/Screenshot%202026-11-12%20171415.png)

*Data Table result: inspect the generated table and its source references.*

#### Interactive Report — generate, explore, and see how a single report can be shared

**Main Studio exercise:** Try **Reports → Interactive** and choose **Learning Overview** or another relevant interactive template when available. Customize the topic, generate the report, and **open the finished result**. Explore its navigation, sections, and embedded materials. This is especially useful for reviewing a research topic, but **AI-generated analysis and figures must be fact-checked**.

![Interactive Report creation: select the Interactive report option and a relevant template.](screenshots/Screenshot%202026-11-12%20165002.png)

*Interactive Report creation: select the Interactive report option and a relevant template.*

![Interactive Report reading view: explore the section navigation, text, and embedded graphic. Treat claims as AI-generated until verified.](screenshots/Screenshot%202026-11-12%20182133.png)

*Interactive Report reading view: explore the section navigation, text, and embedded graphic. Treat claims as AI-generated until verified.*

**Share a single report (demonstration):** You can also share a finished Report **on its own**. Open it, click **Share**, then choose **Copy link to Report**. If the parent notebook is public, the individual report link can open without a Google sign-in. This is separate from sharing the full notebook.

![Interactive Report sharing: Copy link to Report creates a standalone link to this report.](screenshots/Screenshot%202026-11-12%20181844.png)

*Interactive Report sharing: Copy link to Report creates a standalone link to this report.*

**See the shared result:** [Explore Dr. Wei’s sample Interactive Report](https://notebook.google.com/notebook/9ea453ed-98fc-45d3-8775-c8c7f90d7f62/artifact/8d4158d0-8889-4c4f-b3b3-999260d8f899?utm_source=nlm_web_share&utm_medium=google_oo&utm_campaign=art_share_1&utm_content=&utm_smc=nlm_web_share_google_oo_art_share_1_). Open its sections to understand how an individual shared report looks and behaves. **You do not need to share or submit a separate report URL. For the assignment, submit your entire Notebook URL.**

**If Interactive Reports are unavailable or you reach a usage limit**, try a Document Report or another available Studio format and explain the limitation in your reflection. Do not pay for an upgrade. Keep your sources and at least one completed Studio product when the account allows generation.

**What your instructor can see:** Your shared notebook shows the selected **Sources** and completed **Studio products**. Ordinary Notebook Chat history is private to you, so do not rely on unshared chat answers as the only evidence of your work.

### Step 5 — If you hit a limit or a feature fails

This technology is evolving. The free tier can reach generation or AI-usage limits sooner than a paid tier; even paid accounts have limits. **Do not repeatedly retry a blocked feature or purchase a subscription for this lab.** Try an available alternative, use **Generate later** if offered, or return after your allowance resets. You can continue the investigation another day.

![Example of a usage-limit message. Stop or come back after the reset; this is not an assignment failure.](screenshots/Screenshot%202026-11-12%20165538.png)

*Example of a usage-limit message. Stop or come back after the reset; this is not an assignment failure.*

For grading, **the amount of research and the number of artifacts are not a contest**. Meaningful sources, a working shared notebook, reasonable exploration, and your own reflection matter more than how many formats you were able to generate.

### Step 6 — Share the FULL Notebook for grading

**Important: Only your complete Notebook URL is required for this part of the Canvas submission.** A URL ending in `/artifact/...` points to one Studio product (such as a Video Overview or Interactive Report); **do not submit that URL instead of your Notebook URL**. The single-item sharing examples in Step 4 are for learning how the feature works.

**How to share the whole notebook:**

1. Return to your notebook at **notebook.google.com** and select **Share** at the top right.
2. Change **Notebook Access** to **Anyone with a link / Public** and copy the **full Notebook link**, not an individual Studio item link.
3. Check that the notebook contains your relevant **Sources** and completed **Studio** products. Never publish sensitive or restricted information.
4. Open the **full Notebook URL** using another Google account (or an incognito window where you sign in to a different Google account). **The whole notebook requires Google sign-in**; confirm that it opens without asking for access.
5. Keep the notebook shared through grading. If sharing is blocked, contact Dr. Wei before the assignment deadline.

![Full Notebook sharing: select Anyone with a link, then copy the Notebook link. This—not an artifact link—is what you submit.](screenshots/Screenshot%202026-11-12%20170022.png)

*Full Notebook sharing: select Anyone with a link, then copy the Notebook link. This—not an artifact link—is what you submit.*

![Example of an entire shared Notebook: sources on the left, Chat in the middle, Studio outputs on the right.](screenshots/Screenshot%202026-11-12%20170103.png)

*Example of an entire shared Notebook: sources on the left, Chat in the middle, Studio outputs on the right.*

**Remember the distinction:** The **full Notebook link** requires Google sign-in and is the **required Canvas submission**. The individual Video Overview and Interactive Report links demonstrated earlier can open without sign-in when their source notebook is public; **those individual links are not required for submission**. Ordinary Notebook Chat history is private, but notebook sources, notes, and Studio products may be visible to viewers.

### Step 7 — Write your reflection and submit in Canvas LMS

In the **single Canvas LMS Lab 13 text-entry box**, write a **2–3-sentence reflection in your own words** alongside your MongoDB Dashboard URL and FULL Notebook URL:

- **Usefulness:** How might Gemini Notebook's source-grounded chat or generated Studio products help with an **intelligence analysis** task?
- **Evidence and judgment:** Which output or finding was useful to you, and what limitation did you notice (for example, source bias, hallucinations, or usage limits)?

You may describe an Interactive Report or another Studio product you tried. You do **not** need to write a long technical report or create a separate reflection file.

## Submission — One Canvas Lab 13 Assignment

Complete **Lab 13** by **Friday, November 20, 2026 at 11:59 PM EST**. There is **one Canvas assignment worth 100 points** and **one Online Text Entry submission** containing all three items:

1. **MongoDB Charts Dashboard URL (50 points):** Paste the public URL of the dashboard built using your Week 8 tweets. Verify that the dashboard and charts load in an incognito window signed out of MongoDB Atlas.
2. **ENTIRE Gemini Notebook URL (40 points):** Paste the publicly shared URL of your **whole Notebook**, not an individual Studio artifact. Verify that it opens for another signed-in Google account.
3. **Intelligence-analysis Reflection (10 points):** Write 2–3 sentences in your own words about a potential intelligence-analysis use case and one limitation you observed.

Submit **both URLs and your reflection together in the single Lab 13 Canvas text-entry box**. There is no separate submission for each section.

**Do not submit** an individual Video Overview or Interactive Report `/artifact/` URL instead of the full Notebook URL. Sharing individual products is demonstrated for exploration, **not required for submission**. Do not submit MongoDB connection strings, API keys, GitHub notebooks, or separate Gemini chat links.

**Access rule:** An inaccessible Dashboard URL receives **0/50** for the Dashboard criterion. An inaccessible entire-Notebook URL receives **0/40** for the Notebook criterion. The Canvas-written Reflection remains separately worth **10 points**. Existing course late-work policies apply.

### Before you submit

- My **MongoDB Charts dashboard** uses my Week 8 Twitter/X data and contains six charts, including a location map (or an explained empty map).
- My **Gemini Notebook** has relevant imported sources, I explored Chat with citations, and I attempted an Interactive Report or documented an account limit.
- My **ENTIRE Notebook URL**, not an individual artifact URL, opens for a permitted viewer.
- I submitted **the Dashboard URL, entire Notebook URL, and 2–3-sentence reflection together in one Canvas Lab 13 submission**.

## Rubric — Lab 13 (100 Points)

| Canvas Lab 13 criterion | Points | What is assessed |
| --- | ---: | --- |
| **MongoDB Dashboard** | **50** | Six charts using Week 8 data, readable layout, public data-source/dashboard access, and a working URL. An explained empty map is acceptable. |
| **Gemini Notebook** | **40** | Public **entire-notebook URL**, relevant sources, source-based Chat, and an Interactive Report attempt/visible Studio products when possible; free-tier limits are acceptable when explained. |
| **Intelligence Reflection** | **10** | 2–3 original sentences in Canvas about an intelligence-analysis use and a limitation. |
| **Total — One Lab 13** | **100** | **50 + 40 + 10 = 100 points**, due Friday, November 20, 2026 at 11:59 PM EST. |

Canvas defaults to **PASS (full criterion points)** and **MISSING (0)**. The instructor may enter an intermediate score manually. Paid accounts and extra artifacts receive no additional points.

**Current product documentation:** [Find sources and use Fast/Deep Research](https://support.google.com/gemininotebook/answer/16215270) · [Create and share a notebook](https://support.google.com/gemininotebook/answer/16206563) · [Notebooks in Gemini Apps and the sharing restriction](https://support.google.com/gemininotebook/answer/17003757) · [Interactive Reports](https://support.google.com/gemininotebook/answer/18323649)

### Step 8 — FYI: Gemini app integration (not part of this lab)

**For your information only — do not follow these steps for this assignment.** A Gemini Notebook can also be accessed through the separate **Gemini app**, and **Gemini Canvas** can use notebook content to make editable slides and other materials. This differs from the Studio products you created inside Gemini Notebook.

**Important sharing warning:** Do **not** open your assignment notebook in the separate Gemini app or start a Gemini-app chat with it. Doing so can make the notebook **private and unshareable**, which would prevent Dr. Wei from opening the **full Notebook URL** required in Step 7. **Gemini Canvas** is also different from the JMU **Canvas LMS**, where you submit this lab.

![FYI only: Gemini can display notebooks, but initiating a Gemini-app chat can prevent notebook sharing.](screenshots/Screenshot%202026-11-12%20164616.png)

*FYI only: Gemini can display notebooks, but initiating a Gemini-app chat can prevent notebook sharing.*

![FYI only: an editable slide-style example in Gemini Canvas, not the Studio Slide Deck. Do not use this integration in this lab.](screenshots/Screenshot%202026-11-12%20165110.png)

*FYI only: an editable slide-style example in Gemini Canvas, not the Studio Slide Deck. Do not use this integration in this lab.*

**No action is required for Step 8.** Your actual assignment ends after the **Canvas LMS submission and Rubric** in Step 7. Do not create or submit anything in Gemini Canvas for this lab.
