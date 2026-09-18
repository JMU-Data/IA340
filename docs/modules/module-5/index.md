---
layout: default
title: "Module 5: Collect Census Data and Query Your Database - IA 340"
---

# Module 5: Collect Census Data and Query Your Database

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
  <a href="{{ site.baseurl }}/modules/module-5/" style="text-decoration: none; font-weight: 600; color: #0969da;">Module 5</a>
  <a href="{{ site.baseurl }}/assignments/lab-5/" style="text-decoration: none; color: #57606a;">Lab 5</a>
</nav>


**IA 340 · Dr. Xuebin Wei · September 21–25, 2026**  
**Teaching draft · Monday: collect multiple years · Tuesday: Lab 5 due · Wednesday: SQL in Studio**

**No Gemini this week.** Read, run, and explain the examples. Collect **ACS 1-year population and income estimates for Virginia, 2015–2024**. Keep a complete county-name catalogue separately from the annual observations. Use SQL to discover which years and places have no observations. The small HTML demonstrations run only in your browser; they never connect to your database.

## From Census data to your database

![Census datasets are exposed through an API. Colab requests data and can read or write your PostgreSQL database. Cloud SQL Studio can also read or write that same database.]({{ site.baseurl }}/assets/week-5/data-journey.svg)

**Census hosts the source data. The Census API provides access to it.** Colab requests the data and sends SQL to your existing PostgreSQL database. **Both Colab and Cloud SQL Studio can run SELECT and INSERT** when the database login has permission. Neither is limited to one operation. Studio is the browser interface for the same Cloud SQL database, not another database.

The diagram groups Census's data services conceptually; it does not claim that Census runs in your Google Cloud project. Only your own Cloud SQL instance and its Studio interface are inside **your Google Cloud project**.

**This week's emphasis:** collect and insert in Colab on Monday; query and summarize in Studio on Wednesday.

Monday's notebook has **8 runnable code cells**, numbered 1–8 below. The separate INSERT/execute/commit demonstration is for reading and offline interaction, not an extra notebook cell.

---

# Monday, September 21 — Collect several years and save them

## 01 — Get a Census API key before making a request

An **API (application programming interface)** lets software request data or a service. You need **your own free Census API key** for Census data queries. It is not your database password. [Census instructions][key-guide]

**Step 1 — Open the official registration page:**

[https://api.census.gov/data/key_signup.html](https://api.census.gov/data/key_signup.html)

**Step 2 — Complete the request form.** Provide the requested name/organization and your email, as shown on the current form.

![Instructor screenshot of the Census API key request form.]({{ site.baseurl }}/assets/week-5/screenshots/Screenshot%202026-09-16%20101916.png)

*Enter your own organization and email; the instructor details are examples, not values to copy.*

**Step 3 — Open the Census email and follow the activation link.** Keep the key private. Request and activate it before Monday when possible; do not spend the entire class waiting for an email.

**Step 4 — Save it in Colab Secrets as `CENSUS_API_KEY`.** Enable **Notebook access** for this notebook. Never paste the actual key into a notebook cell or screenshot.

<!-- Instructor screenshot: activation email with address, key, and activation token masked. -->

**Checkpoint:** A key has been requested, activated, and saved. We have not requested Census records yet.

## 02 — Connect Colab to the database you already built

![Six connection settings: Public IP, port, database, username, password, and SSL.]({{ site.baseurl }}/assets/week-5/connection-details.svg)

Use the existing Week 4 Cloud SQL instance. The **database** is `postgres`, the **schema** is `public`, and the database username is not your Google email. Do not create another instance or state table.

Create a Colab notebook named `lab5.ipynb` and keep it in your own Drive. Open the **key icon / Secrets** panel, add the following names, and enable **Notebook access**. [Colab Secrets][secrets]

| Secret name | Value entered privately |
|---|---|
| `DB_HOST` | Your instance's current Public IPv4, normally the same IP submitted for Lab 4 |
| `DB_NAME` | `postgres` |
| `DB_USER` | `postgres` |
| `DB_PASSWORD` | Your existing classroom database password |
| `CENSUS_API_KEY` | Your own activated Census key |

Port `5432` and `sslmode="require"` are fixed connection options. Do not print the actual IP, password, or key. Only grant Secrets access to code you trust.

![Colab Secrets names and Notebook access switches. The instructor screenshot already masks the IP and Census API key; the shared classroom database password is intentionally visible.]({{ site.baseurl }}/assets/week-5/screenshots/Screenshot%202026-09-16%20102608.png)

*Use these exact secret names and enable Notebook access. The instructor has masked the IP and API key; the classroom password is intentionally shown as the shared teaching value.*

### Cell 1 — Install the three packages we need

```python
%pip -q install census us psycopg2-binary
```

![Colab installation of census, us, and psycopg2-binary.]({{ site.baseurl }}/assets/week-5/screenshots/Screenshot%202026-09-18%20141648.png)

| Package | Its job |
|---|---|
| `census` | A Python wrapper that makes Census API requests |
| `us` | State metadata: state names, abbreviations, and two-digit state FIPS codes |
| `psycopg2` | The driver that connects Python to PostgreSQL |

The package installed as `psycopg2-binary` is imported as `psycopg2`. It is precompiled for convenient Colab setup. The source installation `psycopg2` provides the same Python API. Install one variant, not both. [Driver installation][driver-install]

### Cell 2 — Create a connection and a cursor

```python
import psycopg2
from google.colab import userdata

conn = psycopg2.connect(
    host=userdata.get("DB_HOST"),
    port=5432,
    dbname=userdata.get("DB_NAME"),
    user=userdata.get("DB_USER"),
    password=userdata.get("DB_PASSWORD"),
    sslmode="require",
    connect_timeout=10
)
cur = conn.cursor()
```

![Colab connection and cursor created using Colab Secrets.]({{ site.baseurl }}/assets/week-5/screenshots/Screenshot%202026-09-18%20141730.png)

## 03 — Connection, cursor, execute, and commit

![The connection owns the database session and transaction. Its cursor sends SQL through execute. The connection commits the changes.]({{ site.baseurl }}/assets/week-5/sql-and-storage.svg)

| Name | What it is | What we use it for |
|---|---|---|
| `conn` | A **connection object**: one open database session | Create cursors, commit a transaction, close this connection |
| `cur` | A **cursor object**, created by `conn.cursor()` | Send SQL with `cur.execute(sql)`; later, retrieve query results |
| `sql` | A Python string containing a SQL statement | The instruction PostgreSQL will execute |
| `cur.execute(sql)` | A method call on the cursor | Execute the statement through this connection |
| `conn.commit()` | A method call on the connection | Finish the transaction and keep its changes |

A cursor is **not the mouse pointer**, a second database, or another network login. PostgreSQL executes the SQL; the cursor is the Python object that sends it. The connection controls the transaction. [Connection][connection] · [Cursor][cursor]

### Read an INSERT — demonstration only

**Do not run this illustrative INSERT in Studio or copy it into a Colab code cell.** Use the offline HTML below. Actual data loading starts at Cell 5 and uses only records returned by Census.

```sql
INSERT INTO public.name (fips, name)
VALUES ('51660', 'Harrisonburg city');
```

`INSERT INTO` names the destination table. `(fips, name)` names two columns. The two `VALUES` follow the same order. Text literals use single quotes. [INSERT][insert]

### Execute and commit — demonstration only

**Read this example or use the offline HTML buttons; do not run this sample against your lab database.** It shows the same INSERT as above. Actual Census data loading begins in Cell 5.

```python
sql = """INSERT INTO public.name (fips, name)
         VALUES ('51660', 'Harrisonburg city');"""
cur.execute(sql)
conn.commit()
```

**First, `cur.execute(sql)` executes the statement. Then, `conn.commit()` commits the changes.** These are normal Python statements, shown here for explanation rather than as an extra notebook task.

**Think: execute = perform the change; commit = finalize the transaction.** In this Colab connection, autocommit is off. After execute, the writer can see its own change, but a new query from a separate Studio connection cannot see it until commit. Commit is **not** the step that sends an unexecuted SQL string out of Colab. [Transactions][transactions]

![Execute performs the INSERT in the current transaction; commit finalizes it for other connections.]({{ site.baseurl }}/assets/week-5/insert-commit.svg)

<iframe src="{{ site.baseurl }}/assets/week-5/insert-row.html" title="Connection and cursor: execute then commit" loading="lazy" style="width:100%;height:820px;border:1px solid #d0d7de;border-radius:8px;"></iframe>

[Open the execute / commit demonstration separately]({{ site.baseurl }}/assets/week-5/insert-row.html)

**Offline simulation only: these buttons change this page’s example tables, not Colab or PostgreSQL.** The demonstration has two main buttons: **1. `cur.execute(sql)`** and **2. `conn.commit()`**. Its tables show two views of one database, not two stored copies. Later we close the cursor and connection only after saving. Closing is not deleting a table or stopping the Cloud SQL instance.

The real loading cells below use `ON CONFLICT ... DO NOTHING` to skip an already existing primary key. That clause does not update wrong data or prove a complete load.

## 04 — Read a Census API request

**Connect → request Census records → insert names → insert population → insert income → commit and close.** Before using Python, read the HTTP request that asks Census for data. [API request guide][api-guide]

<div class="api-request-breakdown" style="padding:18px;border:1px solid #d0d7de;border-radius:9px;background:#fafbfc;">
<p style="margin:0 0 12px;"><strong>One URL, six parts</strong> — line breaks below are for teaching; the actual request is one continuous URL.</p>
<div style="font:18px/1.7 ui-monospace,Consolas,monospace;overflow-wrap:anywhere;">
<span style="color:#243b53;">https://api.census.gov/data/</span><span style="color:#8250df;font-weight:700;">2024</span><span style="color:#0969da;font-weight:700;">/acs/acs1</span><br>
<span style="color:#116329;font-weight:700;">?get=NAME,B01003_001E,B19013_001E</span><br>
<span style="color:#9a4d00;font-weight:700;">&amp;for=county:*</span><br>
<span style="color:#953800;font-weight:700;">&amp;in=state:51</span><br>
<span style="color:#57606a;">&amp;key=YOUR_CENSUS_API_KEY</span>
</div>
<div style="display:flex;gap:8px 18px;flex-wrap:wrap;margin-top:14px;font-size:16px;">
<span style="color:#8250df;"><strong>1 · 2024:</strong> survey year</span>
<span style="color:#0969da;"><strong>2 · acs/acs1:</strong> data product</span>
<span style="color:#116329;"><strong>3 · get:</strong> requested fields</span>
<span style="color:#9a4d00;"><strong>4 · for:</strong> county-level units</span>
<span style="color:#953800;"><strong>5 · in:</strong> Virginia only</span>
<span style="color:#57606a;"><strong>6 · key:</strong> your API credential</span>
</div>
</div>

`?` starts the query parameters, `&` separates them, and commas separate requested fields. `county:*` asks for the county-level records **available in the selected annual product within `in=state:51`**. The wildcard does not override ACS 1-year publication coverage. `NAME` returns labels; `B01003_001E` returns population estimates; `B19013_001E` returns median household income estimates. [Example requests][api-examples]

**This is a displayed request template, not a new step to run.** The key above is a placeholder. Keep the real key in Colab Secrets. An API request reads Census records into Colab; it does not insert rows into PostgreSQL.

**Next:** the `census` package builds this kind of request from Python arguments. It is the same API, not a second data source.

## 05 — Request Virginia county data with census

### County identities and annual observations are different

**Population and income both use ACS 1-year (`c.acs1`).** Each observation describes one survey year. We work through **2015–2024** and store the annual records that the source actually provides. A county can exist even when the annual product has no observation for it. [Annual product][acs]

One row in either observation table represents **one county/county-equivalent in one survey year**, not an individual survey response.

| Field | Meaning | Unit |
|---|---|---|
| `B01003_001E` → `population` | Estimated total population of that area in the selected ACS 1-year survey | People |
| `B19013_001E` → `income` | Estimated median household income in the past 12 months | Dollars, expressed in the selected survey year's dollars |

The `E` values are estimates, not the number of people or households interviewed. These are annual survey estimates, not five-year estimates, future forecasts, or July 1 population estimates. [Population variable][population-variable] · [Income definition][income] · [ACS periods][acs-period]

**Why not every county?** Standard ACS 1-year Detailed Tables generally cover areas with a population of **65,000 or more**, subject to Census publication and data-quality rules. This is a publication rule, not a limit of 30 API records. The `county:*` request returns the published counties for the chosen state and year. [Published areas][acs-areas]

Keep a complete county-name catalogue in `name`; keep only published observations in `population` and `income`. **Do not invent missing measurements, insert zero placeholders, or manufacture a row for every county/year.** We will inspect the gaps after collection.

### Cell 3 — Set the state filter and the years

```python
from census import Census, UnsupportedYearException
from us import states

c = Census(userdata.get("CENSUS_API_KEY"))
STATE = states.VA  # Virginia
YEARS = range(2015, 2025)  # 2015 through 2024
GEO = {"for": "county:*", "in": f"state:{STATE.fips}"}

print(STATE.name, STATE.fips)
print(list(YEARS))
print(GEO)
```

![Cell 3 selects Virginia and prints its name, state FIPS, requested years, and GEO dictionary.]({{ site.baseurl }}/assets/week-5/screenshots/Screenshot%202026-09-18%20141818.png)

`states.VA` supplies the state name and its two-digit FIPS. `GEO` becomes `{'for': 'county:*', 'in': 'state:51'}`. To choose another state, change the state object, for example to `states.MD`. This cell only prepares the client and settings; it does not read or write PostgreSQL. [us documentation][us-library]

| Request part | Meaning |
|---|---|
| `c.acs1` | Annual population and income estimates |
| `"B01003_001E"`, `"B19013_001E"` | Population and median household income |
| `"for": "county:*"` | County-level records available in the selected product |
| `"in": f"state:{STATE.fips}"` | The selected state, Virginia in this lab |
| `year=year` | The current year of the loop |

![The API selects a product, year, variables, and geography before returning records to Colab.]({{ site.baseurl }}/assets/week-5/api-request.svg)

An f-string begins with `f`; `{STATE.fips}` inserts the state's code into the request. The Python variable name itself is not sent to Census.

<iframe src="{{ site.baseurl }}/assets/week-5/api-request.html" title="Census county directory and annual observations" loading="lazy" style="width:100%;height:1180px;border:1px solid #d0d7de;border-radius:8px;"></iframe>

[Open the API request demonstration separately]({{ site.baseurl }}/assets/week-5/api-request.html)

**Try the controls:** compare the county directory with the annual population and income responses. Change the state or year and inspect the result. A name may remain in the directory when an annual observation is unavailable. All displayed numbers are simulated; the page never connects to Census or PostgreSQL.

### Cell 4 — Read the complete county-name catalogue

```python
names = c.pl.get("NAME", GEO, year=2020)
print("County names returned:", len(names))
names[:3]
```

Here `c.pl` reads **only names and geographic codes from the 2020 Decennial Census**, independently of ACS annual publication coverage. It supplies Virginia counties and county equivalents, including small places. It does not supply our population or income values, and it is not an ACS 2020 observation. [County directory API][county-directory]

The `us` package selects the state; it does not include a directly callable county-name directory. We therefore use the existing `census` package to read this reference list once. `names` is a list of dictionaries containing `NAME`, `state`, and `county`; no database changes occur in Cell 4.

![Cell 4 reads the complete county directory; the output reports 133 county names and previews three records.]({{ site.baseurl }}/assets/week-5/screenshots/Screenshot%202026-09-18%20141843.png)

## 06 — Insert the county names once

![County identity uses the full five-character FIPS; a name is descriptive text, not a unique identifier.]({{ site.baseurl }}/assets/week-5/fips-and-keys.svg)

Keep the existing model:

| Table | Row meaning and keys |
|---|---|
| `name(fips, name)` | One county/county-equivalent from the complete directory, whether or not ACS 1-year publishes an observation; PK `fips`; descriptive `name` is not Unique |
| `population(fips, population, year)` | One published county/year observation; PK `(fips, year)`; FK → `name.fips` |
| `income(fips, income, year)` | One published county/year observation; PK `(fips, year)`; FK → `name.fips` |

The full FIPS is **two state digits + three county digits**, kept as text. The code below converts each component to digits and pads it to the correct width. For example, `51` and `059` become `51059`; `01` and `001` become `01001`. [GEOIDs][geoid]

### Cell 5 — First real database write: save the Census county names

**This is the start of the actual lab loading, not a demonstration/test.** Loop over the county-directory records already fetched in Cell 4; construct FIPS, remove the trailing state label, and save those county names once. No manually invented county is added. The directory is loaded once, including counties without any annual observations.

```python
for data in names:
    fips = f"{int(data['state']):02d}{int(data['county']):03d}"
    county_name = data["NAME"].rsplit(", ", 1)[0]

    cur.execute(
        """INSERT INTO public.name (fips, name)
           VALUES (%s, %s)
           ON CONFLICT (fips) DO NOTHING;""",
        (fips, county_name)
    )

conn.commit()
```

![Instructor Colab screenshot of the county-name loading loop and commit.]({{ site.baseurl }}/assets/week-5/screenshots/Screenshot%202026-09-18%20141953.png)

**Why this one text INSERT still passes values separately:** county labels are text and can contain apostrophes. Let the driver quote them correctly. This is not Python `%` formatting. The numeric population/income loops below use f-strings, after converting the values to integers and constructing a digits-only FIPS. Do not copy that numeric shortcut for arbitrary text or user input; driver parameters remain the general-purpose method. [Psycopg parameters][psycopg]

For example, `"Fairfax County, Virginia".rsplit(", ", 1)[0]` produces `"Fairfax County"`. The split removes only the final state suffix; `County` and `city` remain part of the county label.

**Do not store the trailing state name.** `name` gets one row per FIPS, not a fresh copy for every year. No state table is added.

![Studio preview of the county-name table.]({{ site.baseurl }}/assets/week-5/screenshots/Screenshot%202026-09-18%20142006.png)

*After the real name-loading cell, Studio shows county labels without the trailing state. This is a read-only view of the instructor’s saved records.*

### Why two observation tables?

We keep the two tables already built in Week 4; they will provide a useful JOIN example next week. A single `(fips, year, population, income)` table can also be valid when both measurements share the same grain. Normalization does not require every number to have its own table. We are not redesigning the database in this lab.

## 07 — Collect and insert population, one survey year at a time

![One county name links to population and income observations across multiple release years.]({{ site.baseurl }}/assets/week-5/response-to-tables.svg)

### Cell 6 — Annual population loop

```python
for year in YEARS:
    print(f"Collecting population: {year}")
    try:
        records = c.acs1.state_county(
            "B01003_001E", STATE.fips, Census.ALL, year=year
        )
    except UnsupportedYearException:
        print(f"{year}: this dataset/year is not supported; no rows inserted.")
        continue

    for data in records:
        fips = f"{int(data['state']):02d}{int(data['county']):03d}"
        population = int(data["B01003_001E"])
        sql = f"""INSERT INTO public.population (fips, population, year)
                  VALUES ('{fips}', {population}, {year})
                  ON CONFLICT (fips, year) DO NOTHING;"""
        cur.execute(sql)

    conn.commit()
    print(f"Finished population year {year}: {len(records)} source records")
```

`state_county(variable, STATE.fips, Census.ALL, year=year)` is the library's named county-request helper. For a supported year it builds the same geography request as `get(variable, GEO, year=year)`. The helper also reports an unsupported dataset/year through `UnsupportedYearException`. [Library methods][census-python]

**Every year in `YEARS` is passed to the helper.** The small `try/except` handles only that specific unsupported-year result, prints a message, and continues. It does not hide network, key, database, or other API errors. There is no year-specific exclusion in the loop. Review any gap with SQL and the source documentation.

The outer loop selects a year. The inner loop inserts that year's counties. `conn.commit()` is outside the inner loop but inside the outer loop: it saves one year's population batch. The column is `population`, matching your Week 4 table.

`len(records)` is the number of source rows returned, **not proof that this many new rows were inserted**; repeat runs may skip existing keys.

![Instructor population loop with per-release source-record progress.]({{ site.baseurl }}/assets/week-5/screenshots/Screenshot%202026-09-18%20142231.png)

![Studio displays saved population observations with fips, population, and year.]({{ site.baseurl }}/assets/week-5/screenshots/Screenshot%202026-09-18%20142240.png)

*The displayed rows are a preview, not a completeness test. Without ORDER BY, the returned row order is not guaranteed.*

## 08 — Collect and insert income using the same pattern

### Cell 7 — Annual income loop

```python
for year in YEARS:
    print(f"Collecting income: {year}")
    try:
        records = c.acs1.state_county(
            "B19013_001E", STATE.fips, Census.ALL, year=year
        )
    except UnsupportedYearException:
        print(f"{year}: this dataset/year is not supported; no rows inserted.")
        continue

    for data in records:
        fips = f"{int(data['state']):02d}{int(data['county']):03d}"
        income = int(data["B19013_001E"])
        sql = f"""INSERT INTO public.income (fips, income, year)
                  VALUES ('{fips}', {income}, {year})
                  ON CONFLICT (fips, year) DO NOTHING;"""
        cur.execute(sql)

    conn.commit()
    print(f"Finished income year {year}: {len(records)} source records")
```

`B19013_001E` is **median household income**, not salary, total income, or per-capita income. Both measurement tables use the same county-level geography, ACS 1-year product, and study-year range. [Income definition][income]

![Colab income collection and progress output.]({{ site.baseurl }}/assets/week-5/screenshots/Screenshot%202026-09-18%20142330.png)

*Use the progress output to see which requests completed.*

![Studio displays saved income observations with fips, income, and year.]({{ site.baseurl }}/assets/week-5/screenshots/Screenshot%202026-09-18%20142345.png)

*Inspect the income column and the corresponding FIPS and release year. Do not read a preview of rows as proof of full coverage.*

Keep the collection output for inspection. If a request or database statement fails for another reason, stop and ask for help; do not treat a failed request as proof that data does not exist. A missing or special measurement must not be changed to zero. Earlier committed batches remain saved.

## 09 — Close the cursor and connection after saving

### Cell 8 — Close this notebook's database connection

```python
cur.close()
conn.close()
```

![Instructor Colab screenshot of closing the cursor and connection after committing.]({{ site.baseurl }}/assets/week-5/screenshots/Screenshot%202026-09-18%20142400.png)

`cur.close()` closes the Python cursor. `conn.close()` ends this notebook's database session. **Neither deletes the database nor stops Cloud SQL.** Committed rows remain available in Studio. Re-run the connection cell before using database code again.

Closing is **not** a substitute for `conn.commit()`. In this autocommit-off connection, pending uncommitted changes are discarded when the connection closes. The main demo focuses on execute and commit; this final cell is simply cleanup. [Connection][connection]

## 10 — Monday's finish line

`name` contains the county catalogue. `population` and `income` contain only the annual observations actually published for the requested years. **No fixed county-count × year-count target is imposed.** Compare the saved observations with the corresponding source responses, not with an assumed rectangular dataset.

Allow the loops to finish and read their messages. Then use Studio to inspect the results. **Lab 5 is due Tuesday, September 22.** In Canvas, submit **exactly two bare values**: your current Public IPv4 (the same dotted-number format used in Lab 4) and the **root URL of your assigned private IA340 repository under `JMU-Data`**. The two lines may appear in either order. Wednesday's SQL practice is not part of Tuesday's submission. [Lab 5]({{ site.baseurl }}/assignments/lab-5/)

### Save Monday’s completed notebook to GitHub

After the collection and commits finish, save the notebook in your own course GitHub repository using **File → Save a copy to GitHub**. Choose **your assigned private IA340 repository under `JMU-Data`**, branch **`main`**, and file path **`lab5.ipynb`**; add a short commit message and confirm. Open the saved file in GitHub to check it is the latest version. This saves your code, not another copy of the database. [Colab and GitHub][colab-github]

For Canvas, copy the **repository root URL of your assigned private JMU-Data repository**. Use the exact section pattern you received in Week 2:

```text
IA340-1: https://github.com/JMU-Data/ia340-fa26-1-<your-github-username>
IA340-2: https://github.com/JMU-Data/ia340-fa26-2-<your-github-username>
```

The URL must stop at the repository name. **Do not submit** `/tree/main`, `/blob/main/lab5.ipynb`, the public `https://github.com/JMU-Data/IA340` course repository, a personal repository, or a Colab URL.

Before saving, inspect code and outputs: remove any displayed IP, password, API key, activation link, or connection/API error that reveals those values. Keep only Secrets lookups and non-sensitive output. Never print `userdata.get(...)` values. Saving a notebook to GitHub does not publish the Secrets values unless your code or output has exposed them.

![Instructor example of Copy to GitHub, with the notebook file path lab5.ipynb. Choose your own course repository, not the demonstration repository.]({{ site.baseurl }}/assets/week-5/screenshots/Screenshot%202026-09-16%20104823.png)

**Canvas requires exactly two bare values, one per line:** the Public IPv4 address and the root URL of your assigned private `JMU-Data` IA340 repository. Their order does not matter. Both are required and are checked separately. No PR exercise is added.

---

# Wednesday, September 23 — Query and summarize in Cloud SQL Studio

**From this point onward, all query examples are SQL to run directly in Studio. No Colab, Python, cursor, or `fetchall()` is needed. Do not use Gemini.**

## 11 — Open the saved database and ask a first question

Open your Cloud SQL instance → **Cloud SQL Studio**. Sign in to database `postgres` with the existing database login. Use the Explorer to find `public.name`, `public.population`, and `public.income`. Type a query in the editor and click **Run**. [Studio instructions][studio]

```sql
SELECT *
FROM public.population
LIMIT 5;
```

This is a small preview, **not** the five largest populations. You are reading Monday's saved records; you are not requesting them again from Census.

![Instructor rehearsal of SELECT star, FROM public.population, and LIMIT 5 in Cloud SQL Studio.]({{ site.baseurl }}/assets/week-5/screenshots/Screenshot%202026-09-18%20142607.png)

### A few SQL writing rules before we continue

Use comments and line breaks to make SQL easy to read. A **semicolon ends a statement**; it is not required after every line. Studio supports multiple statements in an editor; select the statement(s) you intend to run and use Run. Do not assume a single click means that only the line under the cursor runs. [SQL structure][sql-lexical] · [Studio][studio]

```sql
-- Statement 1: preview the county labels.
SELECT *
FROM public.name
LIMIT 5;

/* Statement 2:
   count population records for one release. */
SELECT COUNT(*) AS county_count
FROM public.population
WHERE year = 2024;
```

![Two semicolon-separated SQL statements with comments; the displayed COUNT result for 2024 is 30.]({{ site.baseurl }}/assets/week-5/screenshots/Screenshot%202026-09-18%20142642.png)

**Whitespace between SQL tokens**—spaces, tabs, and line breaks—can normally be varied for formatting. Do not remove required separators, change spaces inside a quoted name/value, or join SQL onto a `--` comment line: that comment lasts to the end of its line. SQL does not use Python-style indentation to define blocks.

| What you are writing | PostgreSQL rule | Class convention |
|---|---|---|
| Keywords: `SELECT`, `FROM`, `WHERE` | Not case-sensitive: `select`, `SELECT`, and `Select` all work | Write keywords in UPPERCASE for readability |
| Table/column names without quotes: `population`, `year` | PostgreSQL folds unquoted identifiers to lowercase, so `POPULATION`, `Population`, and `population` resolve to the same unquoted name | **Always use lowercase table and column names, without double quotes** |
| Table/column names with double quotes: `"Population Total"` | Double quotes preserve the identifier exactly, including capitalization and spaces | Avoid creating mixed-case or space-containing names. If an identifier was intentionally created that way, you must use the exact double-quoted form |
| Text values: `'Fairfax County'` | Text/string literals use **single quotes** | Use single quotes for text values and preserve the spelling, case, and spaces in the data |
| Numeric values: `2024`, `100000` | Numbers do not need quotes | Write numeric values without quotes |

**SQL quotation marks are not interchangeable the way Python string quotes are.**

```sql
SELECT population
FROM population
WHERE year = 2024;

SELECT *
FROM name
WHERE name = 'Fairfax County';
```

- `population`, `name`, and `year` are table/column identifiers. In this course, keep them lowercase and unquoted.
- `"Population Total"` would be a quoted identifier whose capitalization and space must match exactly.
- `'Fairfax County'` is a text value, so it uses **single quotes**.
- `2024` is numeric, so it uses no quotes.

In PostgreSQL, **double quotes (`"..."`) are for identifiers; single quotes (`'...'`) are for text values.** [Identifiers and quotes][sql-lexical]

![A SQL query annotated by SELECT, FROM, WHERE, ORDER BY and LIMIT.]({{ site.baseurl }}/assets/week-5/query-anatomy.svg)

## 12 — SELECT and FROM: columns and a table

```sql
SELECT fips, population
FROM public.population;
```

`SELECT` chooses the output columns. `FROM` names the table. **`SELECT *` means all columns from the table(s) named in `FROM`—NOT all tables in the database.** With no `WHERE`, all source rows are eligible; `LIMIT 5` still limits the returned rows.

```sql
SELECT *
FROM public.name;
```

This returns both `fips` and `name` from `public.name`. It does not read `population` or `income`. [SELECT lists][select]

### Interactive — Choose columns

<iframe src="{{ site.baseurl }}/assets/week-5/select-columns.html" title="SELECT: choose output columns" loading="lazy" style="width:100%;height:730px;border:1px solid #d0d7de;border-radius:8px;"></iframe>

[Open the SELECT demonstration separately]({{ site.baseurl }}/assets/week-5/select-columns.html)

**Predict:** If you stop selecting `year`, does the database lose that column?

## 13 — WHERE: choose rows

![SELECT reduces output columns while WHERE filters matching rows; the source remains unchanged.]({{ site.baseurl }}/assets/week-5/select-and-where.svg)

```sql
SELECT fips, population, year
FROM public.population
WHERE fips = '51059';
```

Text FIPS needs quotes. Numeric values do not:

```sql
SELECT fips, population
FROM public.population
WHERE year = 2024
  AND population > 100000;
```

### Interactive — Watch matching rows survive the filter

<iframe src="{{ site.baseurl }}/assets/week-5/where-rows.html" title="WHERE comparisons and combined conditions" loading="lazy" style="width:100%;height:770px;border:1px solid #d0d7de;border-radius:8px;"></iframe>

[Open the WHERE demonstration separately]({{ site.baseurl }}/assets/week-5/where-rows.html)

## 14 — Combine conditions; use an interval or a list

`AND` requires both conditions. `OR` accepts either. Parentheses make the intended grouping clear.

```sql
SELECT fips, population
FROM public.population
WHERE year = 2024
  AND (population < 50000 OR population > 500000);
```

`BETWEEN` includes both endpoints:

```sql
SELECT fips, income
FROM public.income
WHERE year = 2024
  AND income BETWEEN 60000 AND 90000;
```

`IN` matches any member of a list:

```sql
SELECT fips, population
FROM public.population
WHERE fips IN ('51059', '51107')
ORDER BY fips, year;
```

**Try:** Use the WHERE demonstration to compare `BETWEEN` with two conditions joined by `AND`.

## 15 — ORDER BY and LIMIT: largest versus first

```sql
SELECT fips, population
FROM public.population
WHERE year = 2024
ORDER BY population DESC, fips
LIMIT 5;
```

`DESC` means largest first; `ASC` means smallest first. The second sort column, `fips`, breaks ties. Without `ORDER BY`, SQL does not promise a row order. Sorting the result does not rearrange the stored table. [Sorting rows][order]

### Interactive — Sort, then limit

<iframe src="{{ site.baseurl }}/assets/week-5/sort-limit.html" title="ORDER BY and LIMIT" loading="lazy" style="width:100%;height:760px;border:1px solid #d0d7de;border-radius:8px;"></iframe>

[Open the sorting demonstration separately]({{ site.baseurl }}/assets/week-5/sort-limit.html)

**Try:** Change the query to return the five smallest income values for 2024.

## 16 — LIKE: find a name by a pattern

```sql
SELECT fips, name
FROM public.name
WHERE name LIKE 'Fairfax%';
```

`%` matches zero or more characters; `_` matches one character. For our ordinary English text examples, `LIKE` is case-sensitive. [Pattern matching][like]

### Select one state by its FIPS prefix

The stored county FIPS has **five characters**: the first two identify the state. Virginia is `51`, so all its county/county-equivalent codes start with `51`. [Geographic identifiers][geoid]

```sql
SELECT fips, name
FROM public.name
WHERE fips LIKE '51%'
ORDER BY fips;
```

`'51%'` means **starts with 51**. This selects Virginia’s county records; it does not change or delete any data. Unlike matching a county-name fragment, this uses the known structure of the FIPS code. Keep FIPS as five-character text, including leading zeros.

**Try:** Compare the earlier `name LIKE 'Fairfax%'` query with `fips LIKE '51%'`. Which selects a name pattern, and which selects every stored Virginia county record? The same FIPS filter works in `population` and `income`; add `AND year = 2024` when you want only that release. A state prefix such as `'24%'` would select Maryland records, but returns no rows until those records have been collected.

### Interactive — Change the text pattern

<iframe src="{{ site.baseurl }}/assets/week-5/like-text.html" title="LIKE text patterns" loading="lazy" style="width:100%;height:770px;border:1px solid #d0d7de;border-radius:8px;"></iframe>

[Open the LIKE demonstration separately]({{ site.baseurl }}/assets/week-5/like-text.html)

**Try:** Find names containing `city`. How is that different from a name beginning with `city`?

**Check the actual labels first.** County labels keep their type suffix, for example `Fairfax County`. A small county-equivalent such as Fairfax city may not be present in an ACS 1-year response; check the actual returned names. The offline LIKE demo may show a broader invented example table, not the publication list. Census `NAME` supplies the county label, and Monday's code removes only the trailing state segment.

**Pattern matching is exact about a pattern, but it does not identify a place for you.** `LIKE 'Fairfax%'` matches both labels when both are present, but the annual data may include only one. Misspellings, capitalization, and different naming conventions can change matches. Use `WHERE fips = '51059'` for a precise county identifier; do not join datasets by a loose text pattern.

**Performance depends on the pattern and index.** A prefix such as `'Fairfax%'` can use an appropriate B-tree index in suitable conditions; a leading wildcard such as `'%fair%'` generally cannot use an ordinary B-tree prefix search. There is no reason to tune this small teaching database now. Indexes are a later topic. [Pattern indexes][indexes]


## 17 — Calculate a result column and give it a label

```sql
SELECT fips, population / 1000.0 AS population_thousands
FROM public.population
WHERE year = 2024
ORDER BY population DESC, fips
LIMIT 5;
```

`AS` labels the result column. `1000.0` keeps decimal division. This query does **not** add a column to the stored table. [SELECT expressions][select]

![Studio calculates population_thousands for the five largest returned 2024 county-level estimates.]({{ site.baseurl }}/assets/week-5/screenshots/Screenshot%202026-09-18%20142840.png)

## 18 — Aggregate functions: turn rows into a summary

`COUNT`, `SUM`, `AVG`, `MIN`, and `MAX` calculate a summary from a set of rows. They do not need `GROUP BY` to summarize the entire filtered set. [Aggregate functions][aggregates]

![Rows pass through WHERE, then COUNT, SUM, AVG, MIN, or MAX produces a summary.]({{ site.baseurl }}/assets/week-5/aggregation.svg)

Start with a count of the stored 2024 county-level observations:

```sql
SELECT COUNT(*) AS county_count
FROM public.population
WHERE year = 2024;
```

Then summarize their populations:

```sql
SELECT
    SUM(population) AS covered_population,
    AVG(population) AS mean_county_population,
    MIN(population) AS smallest_population,
    MAX(population) AS largest_population
FROM public.population
WHERE year = 2024;
```

`WHERE` chooses the input rows **before** the aggregate is calculated. On this Lab 5 database those rows are the Virginia county-level units **covered by the selected annual product**. `covered_population` is the sum of those covered counties, NOT total Virginia population. Do not compare changing-coverage sums as state growth; use a consistent set of counties or a separately requested state-level estimate. The result has one summary row, not one row per county. `COUNT(*)` counts rows; `COUNT(column)` counts non-NULL values. With no matching rows, `COUNT` returns 0 while these other aggregates return NULL.

### Interactive — Filter first, then aggregate

<iframe src="{{ site.baseurl }}/assets/week-5/aggregation.html" title="COUNT SUM AVG MIN MAX on filtered rows" loading="lazy" style="width:100%;height:860px;border:1px solid #d0d7de;border-radius:8px;"></iframe>

[Open the aggregation demonstration separately]({{ site.baseurl }}/assets/week-5/aggregation.html)

For income, be precise about what the values mean:

```sql
SELECT
    MIN(income) AS lowest_county_median,
    MAX(income) AS highest_county_median,
    AVG(income) AS mean_of_county_medians
FROM public.income
WHERE year = 2024;
```

**The average of county median household incomes is not Virginia's median household income.** Each stored income is already a median; averaging or summing medians does not recover the underlying household distribution. Do not label this output as the state median, and do not sum the income column as a state income total.

## 19 — GROUP BY: summarize by year or by county

We now have **multiple survey years in the same table**. `GROUP BY` defines the groups; the aggregate calculates one result per group. [Grouping][grouping]

**Question A: how many observations and how much population for each survey year?**

```sql
SELECT
    year,
    COUNT(*) AS county_count,
    SUM(population) AS covered_population
FROM public.population
WHERE fips LIKE '51%'
GROUP BY year
ORDER BY year;
```

Compare the year groups with the requested range. Are any years missing? The count may differ by year because the published county set can change. `GROUP BY` does not create a zero row for an absent year. These sums cover only returned counties, not the whole state.

![Studio example of grouping observations by year.]({{ site.baseurl }}/assets/week-5/screenshots/Screenshot%202026-09-18%20142952.png)

**Read the actual run above:** the instructor's population and income runs each returned **30 county-level records in each of 2015–2019 and 2021–2024**. Each observation table therefore contains **270 rows across nine available years**. The separate `name` table contains **133 county identities**. The screenshot is one observed run, not a fixed row-count rule for every state or product.

`COUNT(*)` here counts county/year rows. It does not count survey respondents. Studio's page size (for example, 20 visible rows) and the earlier `LIMIT 5` preview do not limit the collection loop. Equal yearly counts do not by themselves prove that the county sets and values are identical.

**Question B: what is each county's average stored population estimate across the selected years?**

```sql
SELECT
    fips,
    COUNT(*) AS available_years,
    AVG(population) AS mean_annual_population
FROM public.population
WHERE year BETWEEN 2015 AND 2024
GROUP BY fips
ORDER BY mean_annual_population DESC, fips;
```

![Studio example of grouping observations by county.]({{ site.baseurl }}/assets/week-5/screenshots/Screenshot%202026-09-18%20143023.png)

One output row now represents one FIPS. This is the arithmetic mean of that county's stored **annual estimates**, not a new official population estimate. Check `available_years`: two counties can have different observed-year coverage. Do not assume every county has the same number of records.

<iframe src="{{ site.baseurl }}/assets/week-5/group-by.html" title="GROUP BY year versus GROUP BY county FIPS" loading="lazy" style="width:100%;height:860px;border:1px solid #d0d7de;border-radius:8px;"></iframe>

[Open the GROUP BY demonstration separately]({{ site.baseurl }}/assets/week-5/group-by.html)

### Find missing years after collecting the data

Compare both query results with the **2015–2024** range you printed in Colab. **Which year is absent? Is the same year absent from both tables?** Do not assume that a missing group means a programming error—or that it means the population was zero.

```sql
SELECT year, COUNT(*) AS published_county_rows
FROM public.population
WHERE fips LIKE '51%'
GROUP BY year
ORDER BY year;

SELECT year, COUNT(*) AS published_county_rows
FROM public.income
WHERE fips LIKE '51%'
GROUP BY year
ORDER BY year;
```

**Check a county by its FIPS.** Run both statements for Harrisonburg city and compare the results:

```sql
SELECT fips, name
FROM public.name
WHERE fips = '51660';

SELECT year, population
FROM public.population
WHERE fips = '51660'
ORDER BY year;
```

A county can be present in `name` but have no annual population records. Our name catalogue is independent of annual coverage. Next week's `LEFT JOIN` will let us inspect all such counties together; a missing matching observation appears as `NULL` in the query result. It does **not** require inserting NULL placeholders or changing the existing table constraints. [Outer joins][grouping]

<details>
<summary>Instructor reveal — investigate the missing year and county coverage</summary>

The standard **2020 ACS 1-year** product was not published because pandemic-related data-collection problems prevented it from meeting statistical quality standards. The loop encounters the library's unsupported-year result; it does not encode a special 2020 skip. This differs from a successful response with zero records. [Census explanation][acs-2020-quality]

Standard ACS 1-year Detailed Tables generally cover areas with populations of 65,000 or more; Census also applies publication-continuity and data-quality rules. Use the published coverage, not a threshold applied to our stored population estimate, to decide which records should exist. [Published areas][acs-areas]

**Harrisonburg city is a useful example.** It is present in the county directory but is below the standard 65,000 threshold. Census reports a 2020 Census count of **51,814** for the city. Its absence from this annual Detailed Tables collection does not mean it has zero population or that Census has no population data about it. Also, Harrisonburg city and Rockingham County are separate geographic units; a county or metropolitan-area value is not a substitute for the city value. [Harrisonburg QuickFacts][harrisonburg] · [County equivalents][acs-areas]

For an unexpected absence, compare the source with the saved data before concluding it is a publication gap rather than an incomplete load.

For the missing year, confirm directly in each observation table:

```sql
SELECT COUNT(*) AS rows_in_2020
FROM public.population
WHERE fips LIKE '51%' AND year = 2020;

SELECT COUNT(*) AS rows_in_2020
FROM public.income
WHERE fips LIKE '51%' AND year = 2020;
```

Both should return zero for this source. That is not an estimate of zero population or zero income.

</details>

### Where can we find data for smaller counties or cities?

| Need | A source to consult | Important difference |
|---|---|---|
| Annual population for Harrisonburg or another small county/city | [Population Estimates Program (PEP) downloads][pep-downloads] | Annual population estimates, generally for July 1; use a consistent vintage and check whether you selected county or city geography. |
| Annual median household income for a small county or county-equivalent | [Small Area Income and Poverty Estimates (SAIPE)][saipe] | Model-based annual estimates for counties/county equivalents, not the same product as ACS 1-year Detailed Tables. Not every ordinary incorporated city is a county equivalent. |
| Detailed survey statistics for small areas | [ACS 5-year][acs-product] | Broader geographic coverage, but the estimate describes a five-year period, not one year. |

**No extra collection is required for this lab.** Keep our observation tables ACS 1-year only; do not fill a missing annual record with a different product. QuickFacts is also useful for looking up a place, but check each row's source and date because one page can display multiple products and periods.

## 20 — HAVING versus WHERE: filter rows, then filter groups

![WHERE filters input rows; GROUP BY and AVG summarize each county; HAVING filters the resulting county groups.]({{ site.baseurl }}/assets/week-5/where-having.svg)

**WHERE chooses input rows before grouping. HAVING chooses groups after aggregation.** [WHERE and HAVING][grouping]

```sql
SELECT
    fips,
    COUNT(*) AS available_years,
    AVG(population) AS mean_annual_population
FROM public.population
WHERE year BETWEEN 2015 AND 2024
GROUP BY fips
HAVING AVG(population) > 100000
ORDER BY mean_annual_population DESC, fips;
```

![Studio example of filtering county groups with HAVING.]({{ site.baseurl }}/assets/week-5/screenshots/Screenshot%202026-09-18%20143131.png)

Read it as: keep the selected years → group by county → compute each mean → keep counties whose mean exceeds 100,000 → sort the result. This describes the logical meaning, not PostgreSQL's physical execution plan.

`WHERE population > 100000` would mean something different: discard individual observations below the threshold **before** calculating the average. Do not write `WHERE AVG(population) > 100000` at this query level.

<iframe src="{{ site.baseurl }}/assets/week-5/where-having.html" title="WHERE rows and HAVING groups: step-by-step" loading="lazy" style="width:100%;height:960px;border:1px solid #d0d7de;border-radius:8px;"></iframe>

[Open the WHERE / HAVING demonstration separately]({{ site.baseurl }}/assets/week-5/where-having.html)

**Predict:** Which changes if you remove an early year with WHERE? Which changes if you increase the HAVING threshold? Does either operation delete data?

## 21 — Practice in Studio

Use Monday's **ACS 1-year** data in Studio. Do not run the illustrated INSERT. No Gemini is needed.

1. Find the stored name for Fairfax County, FIPS `51059`.
2. Show 2024 population records below 100,000, largest first. Does this list include every small county in Virginia? Explain using publication coverage.
3. Show the five highest 2024 median household income estimates in the available county data.
4. Find names containing `County`. Then select Virginia records with `fips LIKE '51%'`.
5. Show 2024 income observations for Fairfax County (`51059`) and Loudoun County (`51107`).
6. Count the covered 2024 counties and sum their population estimates. Explain why the sum is not total Virginia population.
7. List the years and row counts in population and income. Which year in 2015–2024 is absent from both? Why?
8. Calculate each county's mean annual population and number of available years. Do all counties have the same number of observations?
9. Keep counties whose mean annual population exceeds 100,000. Explain the difference between WHERE and HAVING.
10. Compare Harrisonburg city (`51660`) in `name` and `population`. Can a county exist in the name catalogue but have no annual observations? Explain what a grouped query over population alone cannot show.
11. Retrieve Fairfax County's population in 2023 and 2024. Compute `(new - old) / old * 100` from the two returned values. Why must you not label 2019→2021 as a one-year change?

For each query, predict columns and rows, run it, and explain the result. These are **Wednesday classroom exercises**, not extra work due Tuesday. Missing source coverage is not a failed import; compare with the source before drawing that conclusion.

<details>
<summary>Instructor reveal — possible SQL answers</summary>

```sql
-- 1
SELECT fips, name
FROM public.name
WHERE fips = '51059';

-- 2: only the published annual subset.
SELECT fips, population
FROM public.population
WHERE fips LIKE '51%' AND year = 2024 AND population < 100000
ORDER BY population DESC, fips;

-- 3
SELECT fips, income
FROM public.income
WHERE fips LIKE '51%' AND year = 2024
ORDER BY income DESC, fips
LIMIT 5;

-- 4
SELECT fips, name FROM public.name WHERE name LIKE '%County%';
SELECT fips, name FROM public.name WHERE fips LIKE '51%' ORDER BY fips;

-- 5
SELECT fips, income, year
FROM public.income
WHERE year = 2024 AND fips IN ('51059', '51107')
ORDER BY fips;

-- 6: not a statewide total.
SELECT COUNT(*) AS covered_counties, SUM(population) AS covered_population
FROM public.population
WHERE fips LIKE '51%' AND year = 2024;

-- 7: compare both results against the requested study-year list.
SELECT year, COUNT(*) AS county_count
FROM public.population
WHERE fips LIKE '51%'
GROUP BY year ORDER BY year;

SELECT year, COUNT(*) AS county_count
FROM public.income
WHERE fips LIKE '51%'
GROUP BY year ORDER BY year;

-- 8
SELECT fips, COUNT(DISTINCT year) AS available_years,
       AVG(population) AS mean_annual_population
FROM public.population
WHERE fips LIKE '51%' AND year BETWEEN 2015 AND 2024
GROUP BY fips ORDER BY fips;

-- 9
SELECT fips, AVG(population) AS mean_annual_population
FROM public.population
WHERE fips LIKE '51%' AND year BETWEEN 2015 AND 2024
GROUP BY fips
HAVING AVG(population) > 100000
ORDER BY mean_annual_population DESC, fips;

-- 10: a county identity and its available observations are separate.
SELECT fips, name
FROM public.name
WHERE fips = '51660';

SELECT year, population
FROM public.population
WHERE fips = '51660'
ORDER BY year;

-- 11: two available annual estimates for the SAME county.
SELECT year, population
FROM public.population
WHERE fips = '51059' AND year IN (2023, 2024)
ORDER BY year;
```

2020 is not a zero-population year; its standard annual product was not published. Other source/loaded-data gaps require checking source availability. In question 11, describe a percentage change in annual ACS estimates, not proof of a statistically significant change. For income, raw year-specific dollars give nominal change; real-income comparisons need a common price year. [Comparison guidance][acs-2024-comparison]

</details>

---

## Sources

[Census ACS 1-year data][acs] · [Census API examples][api-examples] · [Census API key][key] · [Census geographic identifiers][geoid] · [Psycopg basics][psycopg] · [PostgreSQL INSERT][insert] · [PostgreSQL constraints][constraints] · [Cloud SQL Studio][studio] · [SELECT][select] · [ORDER BY][order] · [LIKE][like]

[acs]: https://www.census.gov/data/developers/data-sets/acs-1year.html
[income]: https://api.census.gov/data/2024/acs/acs1/variables/B19013_001E.html
[api-examples]: https://api.census.gov/data/2024/acs/acs1/examples.html
[key]: https://www.census.gov/library/video/2026/adrm/requesting-a-census-data-api-key.html
[geoid]: https://www.census.gov/programs-surveys/geography/guidance/geo-identifiers.html
[psycopg]: https://www.psycopg.org/docs/usage.html
[insert]: https://www.postgresql.org/docs/18/sql-insert.html
[constraints]: https://www.postgresql.org/docs/18/ddl-constraints.html
[studio]: https://docs.cloud.google.com/sql/docs/postgres/manage-data-using-studio
[select]: https://www.postgresql.org/docs/18/queries-select-lists.html
[order]: https://www.postgresql.org/docs/18/queries-order.html
[like]: https://www.postgresql.org/docs/18/functions-matching.html

[driver-install]: https://www.psycopg.org/docs/install.html
[secrets]: https://colab.research.google.com/github/google-gemini/cookbook/blob/main/quickstarts/Authentication_with_OAuth.ipynb
[transactions]: https://www.postgresql.org/docs/18/tutorial-transactions.html
[aggregates]: https://www.postgresql.org/docs/18/tutorial-agg.html

[census-python]: https://github.com/datamade/census
[us-library]: https://github.com/unitedstates/python-us
[key-signup]: https://api.census.gov/data/key_signup.html
[key-guide]: https://www.census.gov/data/developers/guidance/api-user-guide.API_Key.html
[grouping]: https://www.postgresql.org/docs/18/queries-table-expressions.html
[indexes]: https://www.postgresql.org/docs/18/indexes-types.html
[acs-comparison]: https://www.census.gov/programs-surveys/acs/guidance/comparing-acs-data.html
[connection]: https://www.psycopg.org/docs/connection.html
[cursor]: https://www.psycopg.org/docs/cursor.html

[sql-lexical]: https://www.postgresql.org/docs/18/sql-syntax-lexical.html
[colab-github]: https://colab.research.google.com/github/googlecolab/colabtools/blob/main/notebooks/colab-github-demo.ipynb

[api-guide]: https://www.census.gov/data/developers/guidance/api-user-guide.Example_API_Queries.html
[acs-period]: https://www.census.gov/newsroom/blogs/random-samplings/2022/03/period-estimates-american-community-survey.html
[acs-product]: https://www.census.gov/programs-surveys/acs/guidance/estimates.html
[acs-2024-comparison]: https://www.census.gov/programs-surveys/acs/guidance/comparing-acs-data/2024.html
[acs-2020]: https://www.census.gov/data/developers/data-sets/acs-1year.2020.html

[acs-2020-quality]: https://www.census.gov/programs-surveys/acs/technical-documentation/user-notes/2021-02.html
[acs-areas]: https://www.census.gov/programs-surveys/acs/geography-acs/areas-published.html

[county-directory]: https://api.census.gov/data/2020/dec/pl/examples.html

[population-variable]: https://api.census.gov/data/2024/acs/acs1/groups/B01003.html
[harrisonburg]: https://www.census.gov/quickfacts/fact/table/harrisonburgcityvirginia/POP815224
[pep-downloads]: https://www.census.gov/programs-surveys/popest/data/data-sets.html
[saipe]: https://www.census.gov/programs-surveys/saipe/about.html

---

<div style="margin-top: 2rem; display: flex; flex-wrap: wrap; gap: 1rem; align-items: center;">
  <a href="{{ site.baseurl }}/">← Return to Course Home</a>
  <span style="color: #d0d7de;">|</span>
  <a href="{{ site.baseurl }}/assignments/lab-5/">Go to Lab 5 Checkpoint Instructions →</a>
</div>
