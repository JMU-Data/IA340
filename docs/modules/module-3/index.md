---
layout: default
title: "Module 3: Pandas & Matplotlib Review with Real COVID-19 Data - IA 340"
---

# Module 3: Pandas & Matplotlib Review with Real COVID-19 Data

<nav style="display: flex; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem; border-bottom: 1px solid #eaecef; padding-bottom: 1rem; font-size: 0.95em;">
  <a href="{{ site.baseurl }}/" style="text-decoration: none; color: #57606a;">Home</a>
  <a href="{{ site.baseurl }}/syllabus/" style="text-decoration: none; color: #57606a;">Syllabus</a>
  <a href="{{ site.baseurl }}/modules/module-1/" style="text-decoration: none; color: #57606a;">Module 1</a>
  <a href="{{ site.baseurl }}/assignments/github-account-verification/" style="text-decoration: none; color: #57606a;">Lab 1</a>
  <a href="{{ site.baseurl }}/modules/module-2/" style="text-decoration: none; color: #57606a;">Module 2</a>
  <a href="{{ site.baseurl }}/assignments/lab-2/" style="text-decoration: none; color: #57606a;">Lab 2</a>
  <a href="{{ site.baseurl }}/modules/module-3/" style="text-decoration: none; font-weight: 600; color: #0969da;">Module 3</a>
  <a href="{{ site.baseurl }}/assignments/lab-3/" style="text-decoration: none; color: #57606a;">Lab 3</a>
</nav>

<style>
/* Presentation Slide Deck Styles */
.deck-container {
  max-width: 1280px;
  margin: 1rem auto 2.5rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  color: #1f2328;
}

.deck-nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1f2328;
  color: #f0f6fc;
  padding: 0.6rem 1.2rem;
  border-radius: 10px 10px 0 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  user-select: none;
}

.deck-title-tag {
  font-size: 0.92rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.deck-controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.deck-btn {
  background: #32383f;
  color: #f0f6fc;
  border: 1px solid #444c56;
  border-radius: 6px;
  padding: 0.35rem 0.8rem;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}

.deck-btn:hover:not(:disabled) {
  background: #0969da;
  border-color: #0969da;
  color: #ffffff;
}

.deck-btn:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.deck-progress-track {
  width: 100%;
  height: 4px;
  background: #2d333b;
}

.deck-progress-fill {
  height: 100%;
  background: #2da44e;
  width: 2.56%;
  transition: width 0.25s ease;
}

.deck-stage {
  background: #ffffff;
  border: 1px solid #d0d7de;
  border-top: none;
  border-radius: 0 0 10px 10px;
  height: 680px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.06);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.slide {
  display: none;
  height: 100%;
  padding: 1.8rem 2.5rem;
  box-sizing: border-box;
  overflow-y: auto;
  flex-direction: column;
  justify-content: flex-start;
  animation: slideFadeIn 0.2s ease-out;
}

.slide.active {
  display: flex;
}

@keyframes slideFadeIn {
  from { opacity: 0.2; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}

.slide-badge {
  display: inline-block;
  align-self: flex-start;
  background: #ddf4ff;
  color: #0969da;
  border: 1px solid rgba(84, 174, 255, 0.4);
  padding: 0.2rem 0.65rem;
  border-radius: 2em;
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.slide h2 {
  margin-top: 0;
  margin-bottom: 0.75rem;
  color: #1f2328;
  font-size: 1.45rem;
  border-bottom: 2px solid #eaeef2;
  padding-bottom: 0.35rem;
}

.slide-center-box {
  max-width: 900px;
  margin: auto;
  text-align: center;
}

.slide-main-title {
  font-size: 2.4rem;
  margin: 0.4rem 0 0.6rem;
  color: #0969da;
}

.slide-subtitle {
  font-size: 1.2rem;
  color: #57606a;
  margin: 0 auto 1.4rem;
}

.slide-card-lead {
  background: #f6f8fa;
  border: 1px solid #d0d7de;
  padding: 1.5rem 2rem;
  border-radius: 10px;
  text-align: left;
  font-size: 1.05rem;
  line-height: 1.65;
}

.slide-text-large {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  font-size: 0.98rem;
  line-height: 1.6;
  color: #24292f;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.slide-media-box {
  text-align: center;
  background: #f6f8fa;
  border: 1px solid #d0d7de;
  border-radius: 8px;
  padding: 0.5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.03);
  margin: 0.5rem 0;
}

.slide-media-box img {
  max-width: 100%;
  max-height: 380px;
  height: auto;
  border-radius: 4px;
  display: block;
  margin: 0 auto;
}

.iframe-container {
  width: 100%;
  flex: 1;
  min-height: 480px;
  display: flex;
  flex-direction: column;
  margin: 0.4rem 0;
}

.iframe-container iframe {
  width: 100%;
  flex: 1;
  min-height: 460px;
  border: 1px solid #d0d7de;
  border-radius: 8px;
  background: #ffffff;
}

.alert-takeaway {
  background: #dafbe1;
  border-left: 4px solid #1a7f37;
  padding: 0.6rem 1rem;
  border-radius: 0 6px 6px 0;
  font-size: 0.95rem;
  color: #1a7f37;
  font-weight: 500;
  line-height: 1.5;
  margin-top: 0.5rem;
}

.deck-btn-primary {
  background: #0969da;
  color: #ffffff;
  border: 1px solid #0969da;
  border-radius: 8px;
  padding: 0.65rem 1.6rem;
  font-size: 1.05rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s ease;
}

.deck-btn-primary:hover {
  background: #0858b9;
}

.deck-btn-lab {
  background: #1a7f37;
  color: #ffffff;
  border: 1px solid #1a7f37;
  border-radius: 8px;
  padding: 0.65rem 1.6rem;
  font-size: 1.05rem;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  transition: background 0.15s ease;
}

.deck-btn-lab:hover {
  background: #14622b;
  color: #ffffff;
}

/* Fullscreen mode */
:fullscreen .deck-container,
:-webkit-full-screen .deck-container {
  max-width: 100vw;
  width: 100vw;
  height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
}

:fullscreen .deck-stage,
:-webkit-full-screen .deck-stage {
  height: calc(100vh - 48px);
  flex: 1;
  border-radius: 0;
  border: none;
  overflow: hidden;
}

:fullscreen .slide.active,
:-webkit-full-screen .slide.active {
  height: 100%;
  overflow-y: auto;
  padding: 1.8rem 4rem;
  font-size: 1.15rem;
}

:fullscreen .slide h2,
:-webkit-full-screen .slide h2 {
  font-size: 1.9rem;
}

:fullscreen .slide-media-box img,
:-webkit-full-screen .slide-media-box img {
  max-height: 60vh;
}

:fullscreen .iframe-container,
:-webkit-full-screen .iframe-container {
  flex: 1;
  height: calc(100vh - 160px);
  min-height: 520px;
}

:fullscreen .iframe-container iframe,
:-webkit-full-screen .iframe-container iframe {
  height: 100%;
  min-height: 500px;
}

@media (max-width: 860px) {
  .deck-stage { height: auto; min-height: 580px; }
  .slide { height: auto; padding: 1.2rem 1rem; }
  .slide-media-box img { max-height: 250px; }
  .iframe-container { min-height: 400px; }
  .iframe-container iframe { min-height: 380px; }
}
</style>

<div class="deck-container" id="lectureDeck">
  <div class="deck-nav-bar">
    <div class="deck-title-tag">
      <span>📊 IA 340 Week 3 Lecture</span>
      <span style="opacity: 0.4;">|</span>
      <span id="slideCounter">Slide 1 of 39</span>
    </div>
    <div class="deck-controls">
      <button class="deck-btn" id="prevBtn" onclick="changeSlide(-1)" title="Previous (← / PageUp)">◀ Prev</button>
      <button class="deck-btn" id="nextBtn" onclick="changeSlide(1)" title="Next (→ / Space / PageDown)">Next ▶</button>
      <button class="deck-btn" onclick="toggleFullScreen()" title="Fullscreen Mode">⛶ Fullscreen</button>
    </div>
  </div>
  <div class="deck-progress-track">
    <div class="deck-progress-fill" id="progressBar"></div>
  </div>
  <div class="deck-stage">    <!-- SLIDE 1: Title -->
    <div class="slide active" data-slide="1">
      <div class="slide-center-box">
        <h1 class="slide-main-title">Pandas &amp; Matplotlib Review</h1>
        <p class="slide-subtitle">Learn the operations with real COVID-19 data</p>
        <div class="slide-card-lead">
          <p style="margin-top: 0;"><strong>IA 340 — Data Mining, Modeling, and Knowledge Discovery</strong></p>
          <p>Week 2 established the workspace:</p>
          <div style="font-size: 1.2rem; font-weight: 700; color: #0969da; text-align: center; margin: 0.8rem 0;">
            Google Drive → Google Colab + Gemini → GitHub → Canvas
          </div>
          <p style="margin-bottom: 0; color: #57606a;">This week, we use that workspace to review the core operations of data analysis.</p>
        </div>
        <div style="margin-top: 1.5rem;">
          <button class="deck-btn-primary" onclick="changeSlide(1)">Start Presentation ▶</button>
        </div>
      </div>
    </div>

    <!-- SLIDE 2: 01 — The Week 3 Workflow -->
    <div class="slide" data-slide="2">
      <span class="slide-badge">Step 01</span>
      <h2>01 — The Week 3 Workflow</h2>
      <div class="slide-text-large">


We will use one common historical COVID-19 dataset.

```text
load the table
→ inspect it
→ select and filter rows
→ work with dates
→ group and aggregate
→ visualize the result
→ explain what the result means
```

The class works through the operations together. In the lab, each student analyzes the country randomly assigned through the Canvas country group and asks two questions that can be answered with the data.

      </div>
    </div>

    <!-- SLIDE 3: 02 — Learning Goals -->
    <div class="slide" data-slide="3">
      <span class="slide-badge">Step 02</span>
      <h2>02 — Learning Goals</h2>
      <div class="slide-text-large">


By the end of the week, you should be able to:

- load a CSV from Google Drive into a pandas DataFrame;
- explain DataFrame, Series, row, column, and index;
- explain what `head`, `shape`, `dtypes`, `info`, and `describe` show;
- select columns and slice, filter, and sort rows;
- create useful time units from a date column;
- explain `groupby()` and common aggregation functions;
- create simple line, bar, histogram, box, and scatter plots;
- write a research question that can be answered with the available data;
- use Gemini to explain, revise, and troubleshoot code.

      </div>
    </div>

    <!-- SLIDE 4: 03 — The Dataset -->
    <div class="slide" data-slide="4">
      <span class="slide-badge">Step 03</span>
      <h2>03 — The Dataset</h2>
      <div class="slide-text-large">


We use the **official ECDC historical worldwide COVID-19 dataset**, archived through **14 December 2020**. ECDC provides the historical file in CSV and other formats.

Official archive page:

<https://www.ecdc.europa.eu/en/publications-data/download-todays-data-geographic-distribution-covid-19-cases-worldwide>

The official CSV contains fields such as `dateRep`, `cases`, `deaths`, `countriesAndTerritories`, `popData2019`, and the 14-day case rate. During class, we rename and keep six fields so the rest of the analysis is easier to read:

| Classroom field | ECDC source field | Meaning |
|---|---|---|
| `date` | `dateRep` | reporting date |
| `country` | `countriesAndTerritories` | country or territory |
| `cases` | `cases` | daily reported cases |
| `deaths` | `deaths` | daily reported deaths |
| `pop` | `popData2019` | country population |
| `cum` | `Cumulative_number_for_14_days_of_COVID-19_cases_per_100000` | 14-day cumulative cases per 100,000 people |

> One row represents one country on one reporting date.

The data are historical and are used for learning, not for describing current public-health conditions.

      </div>
    </div>

    <!-- SLIDE 5: 04 — Put the Official ECDC CSV in Google Drive -->
    <div class="slide" data-slide="5">
      <span class="slide-badge">Step 04</span>
      <h2>04 — Put the Official ECDC CSV in Google Drive</h2>
      <div class="slide-text-large">


From the ECDC archive page, choose **Download in CSV**. The direct official CSV endpoint is:

<https://opendata.ecdc.europa.eu/covid19/casedistribution/csv>

When you upload the downloaded file to Google Drive, rename it **exactly**:

```text
covid_2020.csv
```

Store it exactly here:

```text
My Drive/
└── IA340/
    └── covid_2020.csv
```

We will use this exact filename and path throughout the lecture and lab.

      </div>
    </div>

    <!-- SLIDE 6: 05 — Create the Lecture Practice Notebook -->
    <div class="slide" data-slide="6">
      <span class="slide-badge">Step 05</span>
      <h2>05 — Create the Lecture Practice Notebook</h2>
      <div class="slide-text-large">


Create a blank Colab notebook named exactly:

```text
week3_pandas_matplotlib_practice.ipynb
```

Begin with these Markdown headings:

```markdown
# IA340 Week 3: Pandas & Matplotlib Practice

## Load and Inspect
```

This notebook is only for the guided classroom practice. **Lab 3 uses a separate notebook** named `lab3_covid_analysis.ipynb`. You will save the lecture notebook to GitHub once at the end of class, then save the Lab notebook separately after completing the independent analysis.

      </div>
    </div>

    <!-- SLIDE 7: 06 — Load and Standardize the Official ECDC CSV -->
    <div class="slide" data-slide="7">
      <span class="slide-badge">Step 06</span>
      <h2>06 — Load and Standardize the Official ECDC CSV</h2>
      <div class="slide-text-large">


```python
from google.colab import drive
drive.mount("/content/drive")

import pandas as pd

DATA_PATH = "/content/drive/MyDrive/IA340/covid_2020.csv"
raw = pd.read_csv(DATA_PATH)

covid = (
    raw
    .rename(columns={
        "dateRep": "date",
        "countriesAndTerritories": "country",
        "popData2019": "pop",
        "Cumulative_number_for_14_days_of_COVID-19_cases_per_100000": "cum",
    })
    [["date", "country", "cases", "deaths", "pop", "cum"]]
    .copy()
)

covid["date"] = pd.to_datetime(covid["date"], dayfirst=True)
covid.head()
```

`raw` keeps the official ECDC fields. `covid` is the simpler six-column DataFrame we use for class.

### Tip: Gemini can help with the Drive path or explain the setup

You may type the code manually, or ask Gemini something like:

> My official ECDC CSV is at `/content/drive/MyDrive/IA340/covid_2020.csv`. Help me load it, rename `dateRep`, `countriesAndTerritories`, `popData2019`, and the long 14-day-rate field to `date`, `country`, `pop`, and `cum`, keep the six classroom columns, and parse `date` as datetime. Explain each step.

Confirm the exact path in Colab's **Files** panel. The filename used in class is always `covid_2020.csv`.

### Example: loading and standardizing the ECDC file

<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-3/screenshots/Screenshot%202026-09-02%20101319.png" alt="Colab example loading the official ECDC CSV into raw and creating the standardized covid DataFrame" /></div>

      </div>
    </div>

    <!-- SLIDE 8: 07 — Interactive: DataFrame, Series, Rows, Columns, and Index -->
    <div class="slide" data-slide="8">
      <span class="slide-badge">Step 07</span>
      <h2>07 — Interactive: DataFrame, Series, Rows, Columns, and Index</h2>
      <div class="slide-text-large">


<div class="iframe-container"><iframe src="{{ site.baseurl }}/assets/week-3/dataframe-concepts.html" title="Interactive explanation of pandas DataFrame, Series, rows, columns, and index" loading="lazy"></iframe></div>

[Open the DataFrame concepts interaction in a separate page]({{ site.baseurl }}/assets/week-3/dataframe-concepts.html)

Use the buttons to highlight one concept at a time:

```text
DataFrame = the complete two-dimensional table
Series    = one labeled one-dimensional column
row       = one observation
column    = one variable
index     = row labels pandas uses to identify and align rows
```

The index is not the same thing as a data column. It stays attached to rows when pandas selects, filters, sorts, or aligns data. The interaction also shows the pandas expression and the type of object returned.

      </div>
    </div>

    <!-- SLIDE 9: 08 — How Colab Shows Output: Last Expression, `display()`, and `print()` -->
    <div class="slide" data-slide="9">
      <span class="slide-badge">Step 08</span>
      <h2>08 — How Colab Shows Output: Last Expression, `display()`, and `print()`</h2>
      <div class="slide-text-large">


In a notebook, the last expression in a code cell is displayed automatically:

```python
covid.head()
```

Use a separate cell for another result:

```python
covid.shape
```

| Method | Best use |
|---|---|
| `covid.head()` as the last line | simplest rich table output |
| `display(covid.head())` | rich output when you need to show several objects in one cell |
| `print("Shape:", covid.shape)` | plain-text labels, messages, and compact values |

For DataFrames, the notebook's rich display is usually easier to read than `print()`.

### `head()`

Shows the first five rows by default. Use `covid.head(10)` to request ten.

### `shape`

Returns `(number_of_rows, number_of_columns)`. It is a property, so it does not use parentheses.

For the standardized `covid` DataFrame, the second number should be `6` because we kept six classroom columns. The first number tells you how many records are present.

<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-3/screenshots/Screenshot%202026-09-02%20101345.png" alt="Colab output showing covid.head() and covid.shape" /></div>

      </div>
    </div>

    <!-- SLIDE 10: 09 — Inspect Types, Non-Null Counts, and Distributions -->
    <div class="slide" data-slide="10">
      <span class="slide-badge">Step 09</span>
      <h2>09 — Inspect Types, Non-Null Counts, and Distributions</h2>
      <div class="slide-text-large">


Run these in separate cells:

```python
covid.dtypes
```

```python
covid.info()
```

```python
covid.describe()
```

- **`dtypes`** — the type pandas assigned to each column, such as datetime, integer, floating point, or object/text;
- **`info()`** — row count, column names, non-null counts, data types, and approximate memory use;
- **`describe()`** — count, mean, standard deviation, minimum, quartiles, and maximum for numeric columns.

Each command answers a different question about the table.

Examples of the actual notebook output:

<div style="display:flex; gap:1rem; justify-content:center; margin:0.5rem 0;"><div class="slide-media-box" style="flex:1;"><img src="{{ site.baseurl }}/assets/week-3/screenshots/Screenshot%202026-09-02%20101509.png" alt="Colab covid.info output" style="max-height:300px;" /></div><div class="slide-media-box" style="flex:1;"><img src="{{ site.baseurl }}/assets/week-3/screenshots/Screenshot%202026-09-02%20101520.png" alt="Colab covid.describe output" style="max-height:300px;" /></div></div>

      </div>
    </div>

    <!-- SLIDE 11: 10 — Select One Column or Several Columns -->
    <div class="slide" data-slide="11">
      <span class="slide-badge">Step 10</span>
      <h2>10 — Select One Column or Several Columns</h2>
      <div class="slide-text-large">


### One column returns a Series

```python
cases = covid["cases"]
cases.head()
```

### Several columns return a DataFrame

```python
guided_columns = covid[
    ["date", "country", "cases", "deaths"]
]
guided_columns.head()
```

Selection changes **which variables** are kept. It does not filter observations.

<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-3/screenshots/Screenshot%202026-09-02%20101559.png" alt="Colab example selecting date country cases and deaths columns" /></div>

      </div>
    </div>

    <!-- SLIDE 12: 11 — Interactive: Selection, Slicing, Filtering, and Sorting -->
    <div class="slide" data-slide="12">
      <span class="slide-badge">Step 11</span>
      <h2>11 — Interactive: Selection, Slicing, Filtering, and Sorting</h2>
      <div class="slide-text-large">


<div class="iframe-container"><iframe src="{{ site.baseurl }}/assets/week-3/dataframe-selection.html" title="Interactive pandas DataFrame selection, slicing, filtering, and sorting demonstration" loading="lazy"></iframe></div>

[Open the DataFrame interaction in a separate page]({{ site.baseurl }}/assets/week-3/dataframe-selection.html)

Use the controls to compare:

- selecting columns;
- slicing rows by position;
- filtering rows by values;
- combining conditions; and
- changing row order with sorting.

      </div>
    </div>

    <!-- SLIDE 13: 12 — Slice Rows by Position -->
    <div class="slide" data-slide="13">
      <span class="slide-badge">Step 12</span>
      <h2>12 — Slice Rows by Position</h2>
      <div class="slide-text-large">


Use `iloc` when you want rows by their integer positions.

```python
first_ten_rows = covid.iloc[0:10]
first_ten_rows
```

Read the slice as:

```text
start at position 0
stop before position 10
```

The result contains ten rows. Slicing does not ask whether the values meet a condition.

<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-3/screenshots/Screenshot%202026-09-02%20101632.png" alt="Colab iloc example displaying the first ten rows" /></div>

      </div>
    </div>

    <!-- SLIDE 14: 13 — Filter Rows with One Condition -->
    <div class="slide" data-slide="14">
      <span class="slide-badge">Step 13</span>
      <h2>13 — Filter Rows with One Condition</h2>
      <div class="slide-text-large">


Suppose we want records with more than 1,000 reported deaths:

```python
high_death_days = covid[
    covid["deaths"] > 1000
]

high_death_days.head()
```

The expression inside the brackets creates a Boolean condition:

```text
True  → keep the row
False → remove the row from this result
```

The original `covid` DataFrame is unchanged.

<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-3/screenshots/Screenshot%202026-09-02%20101654.png" alt="Colab Boolean filter example for days with more than 1000 deaths" /></div>

      </div>
    </div>

    <!-- SLIDE 15: 14 — Select Columns after Filtering -->
    <div class="slide" data-slide="15">
      <span class="slide-badge">Step 14</span>
      <h2>14 — Select Columns after Filtering</h2>
      <div class="slide-text-large">


We usually do not need every column in the filtered result.

```python
high_death_days = high_death_days[
    ["date", "country", "cases", "deaths"]
]

high_death_days.head()
```

This is easier to read as two operations:

```text
1. filter the rows
2. select the useful columns
```

Writing the steps separately is often clearer than putting everything into one long expression.

<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-3/screenshots/Screenshot%202026-09-02%20101726.png" alt="Colab example selecting four columns after filtering rows" /></div>

      </div>
    </div>

    <!-- SLIDE 16: 15 — Combine Two Conditions -->
    <div class="slide" data-slide="16">
      <span class="slide-badge">Step 15</span>
      <h2>15 — Combine Two Conditions</h2>
      <div class="slide-text-large">


Use `&` when **both** conditions must be true:

```python
usa_high_cases = covid[
    (covid["country"] == "United_States_of_America")
    & (covid["cases"] > 100000)
]

usa_high_cases.head()
```

Important syntax:

- place each condition inside parentheses;
- use `&` for AND;
- use `|` for OR;
- use `==` to test equality.

`United_States_of_America` is the exact country label used in this historical file.

<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-3/screenshots/Screenshot%202026-09-02%20101805.png" alt="Colab example combining country and cases conditions for United States rows" /></div>

      </div>
    </div>

    <!-- SLIDE 17: 16 — Sort the Result -->
    <div class="slide" data-slide="17">
      <span class="slide-badge">Step 16</span>
      <h2>16 — Sort the Result</h2>
      <div class="slide-text-large">


```python
high_death_days = high_death_days.sort_values(
    "deaths",
    ascending=False,
)

high_death_days.head(10)
```

`sort_values()` changes the order of the rows in the returned result.

- `ascending=True` places smaller values first;
- `ascending=False` places larger values first.

Sorting is often the easiest way to find the largest or smallest observations.

<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-3/screenshots/Screenshot%202026-09-02%20101839.png" alt="Colab example sorting filtered rows by deaths in descending order" /></div>

      </div>
    </div>

    <!-- SLIDE 18: 17 — Check Missing Values and Unusual Values -->
    <div class="slide" data-slide="18">
      <span class="slide-badge">Step 17</span>
      <h2>17 — Check Missing Values and Unusual Values</h2>
      <div class="slide-text-large">


```python
missing_counts = covid.isna().sum()
missing_counts
```

Then inspect negative reports:

```python
negative_corrections = covid[
    (covid["cases"] < 0)
    | (covid["deaths"] < 0)
]

negative_corrections.head()
```

Negative daily values may represent later reporting corrections. An unusual value should be examined before it is removed or changed.

<div style="display:flex; gap:1rem; justify-content:center; margin:0.5rem 0;"><div class="slide-media-box" style="flex:1;"><img src="{{ site.baseurl }}/assets/week-3/screenshots/Screenshot%202026-09-02%20101901.png" alt="Colab missing-value counts for the standardized COVID DataFrame" style="max-height:300px;" /></div><div class="slide-media-box" style="flex:1;"><img src="{{ site.baseurl }}/assets/week-3/screenshots/Screenshot%202026-09-02%20101930.png" alt="Colab rows containing negative cases or deaths that may represent reporting corrections" style="max-height:300px;" /></div></div>

      </div>
    </div>

    <!-- SLIDE 19: 18 — Why We Need `groupby()` -->
    <div class="slide" data-slide="19">
      <span class="slide-badge">Step 18</span>
      <h2>18 — Why We Need `groupby()`</h2>
      <div class="slide-text-large">


Suppose the question is:

> How many cases were reported worldwide on each date?

The original table has many rows for each date—one row for every reporting country.

We need to:

```text
put rows with the same date together
→ add the cases inside each date group
→ return one result row for each date
```

That is the basic purpose of `groupby()` plus an aggregation function.

      </div>
    </div>

    <!-- SLIDE 20: 19 — Interactive: Split → Apply → Combine -->
    <div class="slide" data-slide="20">
      <span class="slide-badge">Step 19</span>
      <h2>19 — Interactive: Split → Apply → Combine</h2>
      <div class="slide-text-large">


<div class="iframe-container"><iframe src="{{ site.baseurl }}/assets/week-3/groupby-aggregation.html" title="Interactive pandas groupby and aggregation demonstration" loading="lazy"></iframe></div>

[Open the GroupBy interaction in a separate page]({{ site.baseurl }}/assets/week-3/groupby-aggregation.html)

Change the aggregation among `sum`, `mean`, and `count`, and toggle `as_index=True` / `as_index=False`.

The groups stay the same, but the summary answers a different question when the aggregation function changes. The `as_index` setting changes **where the grouping key appears** in the result.

      </div>
    </div>

    <!-- SLIDE 21: 20 — What Does `as_index=False` Mean? -->
    <div class="slide" data-slide="21">
      <span class="slide-badge">Step 20</span>
      <h2>20 — What Does `as_index=False` Mean?</h2>
      <div class="slide-text-large">


A pandas **index** is the set of row labels. With a normal DataFrame, those labels often look like `0, 1, 2, ...`, but an index can also contain names, dates, or other labels.

By default, `groupby()` uses `as_index=True`, so the grouping key becomes the result index:

```python
by_country_index = (
    covid
    .groupby("country")
    .agg(total_cases=("cases", "sum"))
)
```

Conceptually, the result looks like:

```text
index (country)        total_cases
Argentina              ...
Brazil                 ...
Canada                 ...
```

For this course, we often use:

```python
by_country_columns = (
    covid
    .groupby("country", as_index=False)
    .agg(total_cases=("cases", "sum"))
)
```

Now `country` stays a **normal column**, and pandas keeps a simple row index:

```text
index   country        total_cases
0       Argentina      ...
1       Brazil         ...
2       Canada         ...
```

Why use `as_index=False` here? It makes the summary easier to display, export, merge, and plot with code such as `plot(x="country", y="total_cases")`. It is a convenience choice, not a rule that the index is unimportant. If you use the default `as_index=True`, calling `.reset_index()` afterward can move the grouping key back into a normal column; `as_index=False` simply does that directly for this result.

Use the `as_index` control in the interactive example above to switch between the two result shapes.

      </div>
    </div>

    <!-- SLIDE 22: 21 — A Simple GroupBy and Sum -->
    <div class="slide" data-slide="22">
      <span class="slide-badge">Step 21</span>
      <h2>21 — A Simple GroupBy and Sum</h2>
      <div class="slide-text-large">


```python
daily_cases = (
    covid
    .groupby("date", as_index=False)["cases"]
    .sum()
    .sort_values("date")
)

daily_cases.head()
```

Read it in order:

```text
group by date
→ select cases
→ add cases inside each date group
→ sort the result by date
```

The original grain was one country-date row. The new grain is one row per date.

      </div>
    </div>

    <!-- SLIDE 23: 22 — Aggregate More Than One Metric -->
    <div class="slide" data-slide="23">
      <span class="slide-badge">Step 22</span>
      <h2>22 — Aggregate More Than One Metric</h2>
      <div class="slide-text-large">


```python
daily_global = (
    covid
    .groupby("date", as_index=False)
    .agg(
        total_cases=("cases", "sum"),
        total_deaths=("deaths", "sum"),
    )
    .sort_values("date")
)

daily_global.head()
```

`agg()` is short for **aggregate**. It lets one `groupby()` calculate one or more summary metrics and give the output columns clear names.

Each line inside `agg()` defines:

```text
new column name = (source column, aggregation function)
```

For example, `total_cases=("cases", "sum")` means: take the `cases` values inside each group, sum them, and store the result in a new column named `total_cases`. You can use functions such as `sum`, `mean`, `max`, `min`, and `count` depending on the research question.

Do not sum every numeric column automatically. For example, `pop` repeats on many dates, and `cum` is already a 14-day rate.

<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-3/screenshots/Screenshot%202026-09-02%20102446.png" alt="Colab groupby and agg example producing daily total cases and deaths" /></div>

      </div>
    </div>

    <!-- SLIDE 24: 23 — Work with Dates Using `.dt` -->
    <div class="slide" data-slide="24">
      <span class="slide-badge">Step 23</span>
      <h2>23 — Work with Dates Using `.dt`</h2>
      <div class="slide-text-large">


Because `date` was parsed as a datetime column, pandas can extract useful time units:

```python
covid["year"] = covid["date"].dt.year
covid["month"] = covid["date"].dt.to_period("M").astype(str)
covid["quarter"] = covid["date"].dt.to_period("Q").astype(str)

covid[["date", "year", "month", "quarter"]].head()
```

Useful choices:

- `.dt.year` → year number;
- `.dt.month` → month number from 1 to 12;
- `.dt.month_name()` → month name;
- `.dt.to_period("M")` → year-month unit such as `2020-04`;
- `.dt.to_period("Q")` → quarter such as `2020Q2`.

A time unit becomes a new grouping variable.

<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-3/screenshots/Screenshot%202026-09-02%20102517.png" alt="Colab example creating year month and quarter fields from date" /></div>

      </div>
    </div>

    <!-- SLIDE 25: 24 — Group One Country by Month -->
    <div class="slide" data-slide="25">
      <span class="slide-badge">Step 24</span>
      <h2>24 — Group One Country by Month</h2>
      <div class="slide-text-large">


Use the United States for the lecture demonstration:

```python
usa = covid[
    covid["country"] == "United_States_of_America"
]
```

Now group its rows by month:

```python
usa_monthly_cases = (
    usa
    .groupby("month", as_index=False)["cases"]
    .sum()
    .sort_values("month")
)

usa_monthly_cases
```

The daily rows are converted into one monthly total per row. The same pattern works with quarter, week, or another appropriate time unit.

<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-3/screenshots/Screenshot%202026-09-02%20102606.png" alt="Colab example filtering the United States and aggregating cases by month" /></div>

      </div>
    </div>

    <!-- SLIDE 26: 25 — Pandas Plotting Is a Simple Matplotlib Wrapper -->
    <div class="slide" data-slide="26">
      <span class="slide-badge">Step 25</span>
      <h2>25 — Pandas Plotting Is a Simple Matplotlib Wrapper</h2>
      <div class="slide-text-large">


Pandas provides plotting methods on a **DataFrame or Series**. The default backend is Matplotlib.

Start with the simplest line chart:

```python
daily_cases.plot(x="date", y="cases")
```

A line chart is the default, so `kind="line"` is not required. This named form is equivalent:

```python
daily_cases.plot.line(x="date", y="cases")
```

For other chart types, use the readable named methods:

```text
.plot.bar()      .plot.barh()     .plot.scatter()
.plot.hist()     .plot.box()
```

`df.plot(kind="bar")` remains valid, but there is no normal `pd.plot(...)` call. In Colab, a plot call at the end of a cell renders inline, so `plt.show()` is usually unnecessary.

[Official pandas plotting reference](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.plot.html)

      </div>
    </div>

    <!-- SLIDE 27: 26 — Line Plot: Change over Time -->
    <div class="slide" data-slide="27">
      <span class="slide-badge">Step 26</span>
      <h2>26 — Line Plot: Change over Time</h2>
      <div class="slide-text-large">


```python
daily_cases.plot(
    x="date",
    y="cases",
    title="Worldwide Daily Reported COVID-19 Cases",
    xlabel="Date",
    ylabel="Reported cases",
    legend=False,
    figsize=(10, 5),
)
```

Use a line plot when:

- the x-axis has a meaningful order, usually time; and
- the goal is to see change, peaks, declines, or repeated patterns.

      </div>
    </div>

    <!-- SLIDE 28: 27 — Bar Plot: Compare Categories -->
    <div class="slide" data-slide="28">
      <span class="slide-badge">Step 27</span>
      <h2>27 — Bar Plot: Compare Categories</h2>
      <div class="slide-text-large">


```python
country_deaths = (
    covid
    .groupby("country", as_index=False)["deaths"]
    .sum()
    .sort_values("deaths", ascending=False)
)

top10_country_deaths = country_deaths.head(10)
```

```python
top10_country_deaths.sort_values("deaths").plot.barh(
    x="country",
    y="deaths",
    title="Top 10 Countries by Total Reported Deaths",
    xlabel="Total reported deaths",
    ylabel="Country",
    legend=False,
    figsize=(10, 6),
)
```

Use bars to compare values across categories.

<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-3/screenshots/Screenshot%202026-09-02%20102949.png" alt="Pandas horizontal bar chart showing countries with the highest total reported deaths" /></div>

      </div>
    </div>

    <!-- SLIDE 29: 28 — Histogram and Box Plot: Examine a Distribution -->
    <div class="slide" data-slide="29">
      <span class="slide-badge">Step 28</span>
      <h2>28 — Histogram and Box Plot: Examine a Distribution</h2>
      <div class="slide-text-large">


### Histogram

```python
usa["cases"].plot.hist(
    bins=25,
    title="Distribution of Daily Reported Cases in the United States",
    xlabel="Daily reported cases",
    figsize=(9, 5),
)
```


<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-3/screenshots/Screenshot%202026-09-02%20103029.png" alt="Histogram of daily reported cases in the United States" /></div>

### Box plot

```python
usa["cases"].plot.box(
    title="Daily Reported Cases in the United States",
    ylabel="Reported cases",
    figsize=(5, 5),
)
```

A histogram shows the shape of a distribution. A box plot provides a compact view of the median, spread, and possible outliers.

      </div>
    </div>

    <!-- SLIDE 30: 29 — Scatter Plot: Compare Two Numeric Variables -->
    <div class="slide" data-slide="30">
      <span class="slide-badge">Step 29</span>
      <h2>29 — Scatter Plot: Compare Two Numeric Variables</h2>
      <div class="slide-text-large">


```python
usa.plot.scatter(
    x="cases",
    y="deaths",
    title="Daily Reported Cases and Deaths in the United States",
    xlabel="Daily reported cases",
    ylabel="Daily reported deaths",
    alpha=0.4,
    figsize=(7, 5),
)
```

Use a scatter plot when the question concerns the relationship between two numeric variables.

A visible pattern can suggest a relationship, but a chart by itself does not prove causation.

      </div>
    </div>

    <!-- SLIDE 31: 30 — Match the Chart to the Question -->
    <div class="slide" data-slide="31">
      <span class="slide-badge">Step 30</span>
      <h2>30 — Match the Chart to the Question</h2>
      <div class="slide-text-large">


| Analytical question | Typical plot |
|---|---|
| How did a value change over time? | line |
| How do categories compare? | bar |
| How is one numeric value distributed? | histogram or box |
| How are two numeric variables related? | scatter |

Examples:

- cases by month → line or bar;
- total deaths by country → bar;
- distribution of daily cases for one country → histogram or box;
- daily cases versus daily deaths → scatter.

A chart is useful only when its x variable, y variable, and chart type match the question.

      </div>
    </div>

    <!-- SLIDE 32: 31 — A Concrete Research-Question Workflow -->
    <div class="slide" data-slide="32">
      <span class="slide-badge">Step 31</span>
      <h2>31 — A Concrete Research-Question Workflow</h2>
      <div class="slide-text-large">


Example question:

> Which month had the highest total reported cases in the United States?

The analysis already produced `usa_monthly_cases`. Sort it to identify the answer:

```python
usa_monthly_cases.sort_values(
    "cases",
    ascending=False,
).head()
```

Then visualize the same summary:

```python
usa_monthly_cases.plot.bar(
    x="month",
    y="cases",
    title="Monthly Reported Cases in the United States",
    xlabel="Month",
    ylabel="Total reported cases",
    legend=False,
    figsize=(10, 5),
)
```

The first row of the sorted table, the tallest bar, and the written answer should identify the same month and value.

<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-3/screenshots/Screenshot%202026-09-02%20103156.png" alt="Monthly reported cases bar chart for the United States" /></div>

You may also ask Gemini to help interpret the already-computed table and chart, but verify the answer against the visible evidence:

<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-3/screenshots/Screenshot%202026-09-02%20103809.png" alt="Gemini response identifying the highest month while the corresponding monthly bar chart is visible" /></div>

      </div>
    </div>

    <!-- SLIDE 33: 32 — Interactive: Does the Evidence Answer the Question? -->
    <div class="slide" data-slide="33">
      <span class="slide-badge">Step 32</span>
      <h2>32 — Interactive: Does the Evidence Answer the Question?</h2>
      <div class="slide-text-large">


<div class="iframe-container"><iframe src="assets/question-to-evidence.html" title="Interactive demonstration connecting a research question to filtering, aggregation, charting, answering, and validation" loading="lazy"></iframe></div>

[Open the research-question interaction in a separate page](assets/question-to-evidence.html)

Use the correct and incorrect examples to check four simple matches:

```text
Canvas-assigned country matches the filtered rows
question metric matches the aggregated metric
chart displays the same summary table
written answer matches the largest or smallest visible value
```

      </div>
    </div>

    <!-- SLIDE 34: 33 — What Makes a Research Question Usable? -->
    <div class="slide" data-slide="34">
      <span class="slide-badge">Step 33</span>
      <h2>33 — What Makes a Research Question Usable?</h2>
      <div class="slide-text-large">


A usable question:

- can be answered with the available columns;
- names a country, metric, grouping, or time period;
- leads to a result that can be calculated and displayed;
- can be answered with specific values from the output.

Good examples:

- Which month had the highest total reported cases in this country?
- During which quarter was the average 14-day rate highest?
- How did monthly reported deaths change during 2020?
- Which month had the greatest number of days above a stated case threshold?

Too vague:

> What happened with COVID-19?

      </div>
    </div>

    <!-- SLIDE 35: 34 — Gemini Practice 1: Explain What the Code Does -->
    <div class="slide" data-slide="35">
      <span class="slide-badge">Step 34</span>
      <h2>34 — Gemini Practice 1: Explain What the Code Does</h2>
      <div class="slide-text-large">


Run or inspect this code:

```python
usa_high_cases = covid[
    (covid["country"] == "United_States_of_America")
    & (covid["cases"] > 100000)
]
```

Ask Gemini:

> Explain this code line by line. Which rows are kept? What type of pandas object is returned?

Then check Gemini's explanation against:

- the actual column names;
- the two Boolean conditions; and
- the first rows of `usa_high_cases`.

Write one sentence in your notebook explaining the filter in your own words.

<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-3/screenshots/Screenshot%202026-09-02%20103249.png" alt="Gemini explaining the USA high-cases Boolean filter line by line" /></div>

      </div>
    </div>

    <!-- SLIDE 36: 35 — Gemini Practice 2: Repair and Revise Code -->
    <div class="slide" data-slide="36">
      <span class="slide-badge">Step 35</span>
      <h2>35 — Gemini Practice 2: Repair and Revise Code</h2>
      <div class="slide-text-large">


### Exercise A — Repair an error

This code contains mistakes:

```python
usa = covid[covid["countries"] == "United States"]
```

Ask Gemini to help, but require it to inspect:

```python
covid.columns
covid["country"].unique()
```

The corrected code must use a real column name and the exact stored country value.

<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-3/screenshots/Screenshot%202026-09-02%20103451.png" alt="Gemini helping repair a country-column and country-value error while actual columns and unique values are visible" /></div>

### Exercise B — Revise an analysis

Ask Gemini:

> Using `usa` and the existing `month` column, create a monthly total-cases table and a simple pandas bar chart. Explain each operation. Do not invent results.

Compare the generated table and chart. Revise the prompt or code if the month, metric, or labels do not match.

<div class="slide-media-box"><img src="{{ site.baseurl }}/assets/week-3/screenshots/Screenshot%202026-09-02%20103611.png" alt="Gemini proposing a monthly aggregation and bar-chart workflow for the existing USA DataFrame" /></div>

      </div>
    </div>

    <!-- SLIDE 37: 36 — Gemini Practice 3: Compare Two Charts -->
    <div class="slide" data-slide="37">
      <span class="slide-badge">Step 36</span>
      <h2>36 — Gemini Practice 3: Compare Two Charts</h2>
      <div class="slide-text-large">


Use the existing `usa_monthly_cases` table and ask Gemini:

> Create both a simple pandas line chart and a simple pandas bar chart from `usa_monthly_cases`. Use `month` on the x-axis and `cases` on the y-axis. Explain which chart makes the highest month easier to identify.

Run both versions. Then decide which chart better supports this question:

> Which month had the highest total reported cases?

Check that both charts use the same table and metric. Keep one chart and write one sentence explaining your choice.

      </div>
    </div>

    <!-- SLIDE 38: 37 — Save the Lecture Notebook to GitHub — Save #1 of 2 -->
    <div class="slide" data-slide="38">
      <span class="slide-badge">Step 37</span>
      <h2>37 — Save the Lecture Notebook to GitHub — Save #1 of 2</h2>
      <div class="slide-text-large">


When the guided classroom practice is complete, run the lecture notebook from top to bottom and fix unresolved errors. Then choose **File → Save a copy in GitHub** and save:

```text
week3_pandas_matplotlib_practice.ipynb
```

to the `main` branch of your private IA340 repository. Keep the visible outputs.

**This is Save #1.** Do not overwrite it with the Lab. Lab 3 is a separate notebook named `lab3_covid_analysis.ipynb`, which you will save separately after completing the independent country analysis.

      </div>
    </div>

    <!-- SLIDE 39: Takeaway -->
    <div class="slide" data-slide="39">
      <span class="slide-badge">Week 3 Summary</span>
      <h2>Week 3 Takeaway</h2>
      <div class="slide-text-large">
        <p style="margin: 0 0 0.5rem 0;">The basic analysis workflow is:</p>
        <div style="background: #f6f8fa; border: 1px solid #d0d7de; border-radius: 8px; padding: 1.2rem; margin: 0.6rem 0; font-family: ui-monospace, monospace; line-height: 1.7; font-size: 1.05rem;">
          understand the table<br/>
          → select the relevant data<br/>
          → create the needed time unit<br/>
          → group at the correct level<br/>
          → calculate the correct metric<br/>
          → choose a simple matching plot<br/>
          → explain the visible result
        </div>
        <div class="alert-takeaway" style="font-size: 1.1rem; padding: 1rem; margin-top: 1rem;">
          <strong>Core Principle:</strong> Code produces an output. Analysis connects that output to a clear question.
        </div>
        <div style="text-align: center; margin-top: 2rem;">
          <a href="{{ site.baseurl }}/assignments/lab-3/" class="deck-btn-lab">
            Proceed to Lab 3 Instructions ▶
          </a>
        </div>
      </div>
    </div>

  </div>
</div>

<script>
let currentSlide = 1;
const totalSlides = 39;

function updateDeck() {
  const slides = document.querySelectorAll('.slide');
  slides.forEach(slide => {
    const sNum = parseInt(slide.getAttribute('data-slide'));
    if (sNum === currentSlide) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });

  document.getElementById('slideCounter').textContent = Slide  + currentSlide +  of  + totalSlides;
  document.getElementById('progressBar').style.width = ((currentSlide / totalSlides) * 100) + %;
  
  document.getElementById('prevBtn').disabled = (currentSlide === 1);
  document.getElementById('nextBtn').disabled = (currentSlide === totalSlides);

  history.replaceState(null, null, #slide- + currentSlide);
}

function changeSlide(direction) {
  const next = currentSlide + direction;
  if (next >= 1 && next <= totalSlides) {
    currentSlide = next;
    updateDeck();
  }
}

function goToSlide(slideNum) {
  if (slideNum >= 1 && slideNum <= totalSlides) {
    currentSlide = slideNum;
    updateDeck();
  }
}

function toggleFullScreen() {
  const deck = document.getElementById('lectureDeck');
  if (!document.fullscreenElement) {
    if (deck.requestFullscreen) {
      deck.requestFullscreen();
    } else if (deck.webkitRequestFullscreen) {
      deck.webkitRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

document.addEventListener('keydown', function(event) {
  if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') return;

  if (event.key === 'ArrowRight' || event.key === ' ' || event.key === 'PageDown') {
    event.preventDefault();
    changeSlide(1);
  } else if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
    event.preventDefault();
    changeSlide(-1);
  } else if (event.key === 'Home') {
    event.preventDefault();
    goToSlide(1);
  } else if (event.key === 'End') {
    event.preventDefault();
    goToSlide(totalSlides);
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash;
  if (hash && hash.startsWith('#slide-')) {
    const sNum = parseInt(hash.replace('#slide-', ''));
    if (!isNaN(sNum) && sNum >= 1 && sNum <= totalSlides) {
      currentSlide = sNum;
    }
  }
  updateDeck();
});
</script>

---

<div style="margin-top: 2rem;">
  <a href="{{ site.baseurl }}/">← Return to Course Home</a> | <a href="{{ site.baseurl }}/assignments/lab-3/">Go to Lab 3 Instructions →</a>
</div>