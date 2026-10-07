---
layout: default
title: "Syllabus - IA 340"
---

# IA 340: Data Mining, Modeling, and Knowledge Discovery in Databases

**Syllabus updated: October 7, 2026**

<nav style="display: flex; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem; border-bottom: 1px solid #eaecef; padding-bottom: 1rem; font-size: 0.95em;">
  <a href="{{ site.baseurl }}/" style="text-decoration: none; color: #57606a;">Home</a>
  <a href="{{ site.baseurl }}/syllabus/" style="text-decoration: none; font-weight: 600; color: #0969da;">Syllabus</a>
  <a href="{{ site.baseurl }}/modules/module-1/" style="text-decoration: none; color: #57606a;">Module 1</a>
  <a href="{{ site.baseurl }}/assignments/github-account-verification/" style="text-decoration: none; color: #57606a;">Lab 1</a>
  <a href="{{ site.baseurl }}/modules/module-2/" style="text-decoration: none; color: #57606a;">Module 2</a>
  <a href="{{ site.baseurl }}/assignments/lab-2/" style="text-decoration: none; color: #57606a;">Lab 2</a>
  <a href="{{ site.baseurl }}/modules/module-3/" style="text-decoration: none; color: #57606a;">Module 3</a>
  <a href="{{ site.baseurl }}/assignments/lab-3/" style="text-decoration: none; color: #57606a;">Lab 3</a>
</nav>

## Course / Term / Instructor
- **Course**: IA 340: Data Mining, Modeling, and Knowledge Discovery in Databases
- **Term**: Fall 2026  
- **Instructor**: Dr. Xuebin Wei ([weixx@jmu.edu](mailto:weixx@jmu.edu))
- **Office Hours**: Monday and Wednesday, 9:30–11:00 AM

---

## Course Description
This course provides a comprehensive introduction to modern Data Analytics, Cloud Databases, and AI integration. Moving beyond basic spreadsheets, we explore data processing pipelines, relational and NoSQL databases, and apply Large Language Models (LLMs) to practical data mining scenarios.

## Learning Goals
Upon completion of this course, students are expected to:
- Differentiate and design relational and NoSQL databases, and manage cloud-based storage solutions.
- Collect, query, and analyze real-world data using SQL, MQL, Python, and cloud services.
- Apply AI-powered methods (LLMs, vector databases) to support data analytics.
- Address ethical and security considerations in data management and analysis.

## IA340 Learning Journey

<div style="display: flex; flex-direction: column; gap: 1.5rem; margin: 2rem 0; font-family: system-ui, sans-serif;">
  
  <div style="border: 1px solid #d0d7de; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
    <div style="background: #f6f8fa; padding: 1rem 1.5rem; border-bottom: 1px solid #d0d7de; font-weight: 600; color: #0969da; display: flex; align-items: center; justify-content: space-between;">
      <span>PHASE 1 — Cloud Data & Python</span>
      <span style="font-size: 1.2em;">☁️</span>
    </div>
    <div style="padding: 1.5rem;">
      <p style="margin-top: 0; margin-bottom: 0.5rem;"><a href="https://colab.research.google.com/" target="_blank"><strong>Google Colab</strong></a></p>
      <div style="color: #57606a; margin-left: 1rem; margin-bottom: 0.5rem;">↳ Google Drive / cloud object storage / data lake concept (e.g., S3 principles)</div>
      <div style="color: #57606a; margin-left: 1.5rem; margin-bottom: 0.5rem;">↳ Python / Pandas</div>
      <div style="color: #57606a; margin-left: 2rem;">↳ cleaning / quantitative analysis</div>
    </div>
  </div>

  <div style="border: 1px solid #d0d7de; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
    <div style="background: #f6f8fa; padding: 1rem 1.5rem; border-bottom: 1px solid #d0d7de; font-weight: 600; color: #2da44e; display: flex; align-items: center; justify-content: space-between;">
      <span>PHASE 2 — Relational Data</span>
      <span style="font-size: 1.2em;">🗄️</span>
    </div>
    <div style="padding: 1.5rem;">
      <p style="margin-top: 0; margin-bottom: 0.5rem;"><strong>Data modeling / ER</strong></p>
      <div style="color: #57606a; margin-left: 1rem; margin-bottom: 0.5rem;">↳ relational database</div>
      <div style="color: #57606a; margin-left: 1.5rem; margin-bottom: 0.5rem;">↳ SQL</div>
      <div style="color: #57606a; margin-left: 2rem;">↳ Python + AI-assisted SQL/query workflows</div>
    </div>
  </div>

  <div style="border: 1px solid #d0d7de; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
    <div style="background: #f6f8fa; padding: 1rem 1.5rem; border-bottom: 1px solid #d0d7de; font-weight: 600; color: #bf8700; display: flex; align-items: center; justify-content: space-between;">
      <span>PHASE 3 — NoSQL / Social / API Data</span>
      <span style="font-size: 1.2em;">🌐</span>
    </div>
    <div style="padding: 1.5rem;">
      <p style="margin-top: 0; margin-bottom: 0.5rem;"><strong>APIs / social data</strong></p>
      <div style="color: #57606a; margin-left: 1rem; margin-bottom: 0.5rem;">↳ <a href="https://www.mongodb.com/" target="_blank"><strong>MongoDB</strong></a></div>
      <div style="color: #57606a; margin-left: 1.5rem; margin-bottom: 0.5rem;">↳ query / aggregation</div>
      <div style="color: #57606a; margin-left: 2rem; margin-bottom: 0.5rem;">↳ embeddings / vector search</div>
      <div style="color: #57606a; margin-left: 2.5rem;">↳ AI-assisted analysis</div>
    </div>
  </div>

  <div style="border: 1px solid #d0d7de; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
    <div style="background: #f6f8fa; padding: 1rem 1.5rem; border-bottom: 1px solid #d0d7de; font-weight: 600; color: #8250df; display: flex; align-items: center; justify-content: space-between;">
      <span>PHASE 4 — Final Project</span>
      <span style="font-size: 1.2em;">🎓</span>
    </div>
    <div style="padding: 1.5rem;">
      <div style="color: #57606a; display: flex; align-items: center; gap: 0.5rem;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
        <strong>end-to-end data collection / storage / analysis workflow</strong>
      </div>
    </div>
  </div>
</div>

## Required Textbook & Account Setup
- **Textbook**: [Wei, Xuebin, and Xinyue Ye. *Social Data Analytics in the Cloud with AI*. CRC Press / Routledge, 2024.](https://www.routledge.com/Social-Data-Analytics-in-the-Cloud-with-AI/Wei-Ye/p/book/9781032306232) *(Note: Refer to Canvas for any specific JMU free-access instructions for required materials.)*
- **Google Account (Required)**: Use your **personal Gmail account** for Google Colab, Drive, Gemini, and NotebookLM, following the account instructions given in class.
- **GitHub Account (Required)**: Required for accessing course repositories, lab materials, and submitting technical work.
- **Coursera JMU AI Program (Required)**: Required for completing the Google AI Professional Certificate component.
- **AI Tools and Access**: Use the course-provided or instructor-approved Gemini and NotebookLM workflows as assigned. **No paid AI subscription is required.** A personal subscription does not authorize additional AI tools, models, or features for coursework; follow the AI Policy below.

## Email Communication
- **Primary Contact**: Emailing the instructor from your **JMU student account** is the primary method of communication.
- **Response Time**: The instructor typically responds within **1–2 business days**. Emails received after 5:00 PM will be treated as received on the next business day. The instructor does not normally respond to emails on weekends or JMU holidays.
- **Canvas Usage**: Canvas is strictly used for grades, official announcements, and basic course logistics. **Do not use Canvas messaging** to contact the instructor; it is not regularly monitored.

## AI Policy

**AI is part of this course and may be expected or required in specific assignments.** For coursework, use **only AI tools, services, models, and features provided or taught for use in this course, or explicitly authorized by the instructor**. This includes the assigned **Gemini** workflows and **NotebookLM** activities. Follow the tool and model requirements in each assignment.

**Do not use outside AI tools, such as ChatGPT or Claude, or unapproved paid AI models, subscription features, or upgrades for coursework.** Using the same course-approved tools and access conditions supports fair assessment and consistent learning expectations. Owning a paid subscription does not authorize additional AI capabilities for an assignment.

You remain responsible for every AI-assisted result you submit. You must **inspect, test, verify, correct, and explain** the work, including generated queries, code, analysis, and written conclusions. Blindly copying AI output without understanding or checking it violates the course's learning objectives and academic-integrity expectations.

## Grading Breakdown

| Category | Weight |
|----------|--------|
| Attendance | 20% |
| Labs | 40% |
| Projects (Total) | 30% |
| - *Mini Project* | *10%* |
| - *Final Project* | *20%* |
| Google AI Professional Certificate | 10% |

*Google AI Professional Certificate Progress*:
- Completion of 1 module/course = 3%
- Completion of 2 modules/courses = 6%
- Completion of 3 or more modules/courses = 10%

## Letter-Grade Scale
- **A**: 94.00 – 100% | **A-**: 90.00 – 93.99%
- **B+**: 87.00 – 89.99% | **B**: 84.00 – 86.99% | **B-**: 80.00 – 83.99%
- **C+**: 77.00 – 79.99% | **C**: 74.00 – 76.99% | **C-**: 70.00 – 73.99%
- **D+**: 67.00 – 69.99% | **D**: 64.00 – 66.99% | **D-**: 61.00 – 63.99%
- **F**: < 61%

## Technical Assignment Support
Technical assignments may require troubleshooting. Start assignments early and allow sufficient time to resolve technical issues. Requests for assistance made shortly before a deadline may not receive a response before the deadline and do not automatically excuse late submissions.

## Resubmission / Late Work / Project Policy
- **Resubmission**: You are allowed to resubmit assignments multiple times *before* the deadline. Only the final submission made prior to the deadline will be graded.
- **Late Work**: Late submissions will incur a **10% penalty per day**, but no more than 40% of the total amount, unless prior arrangements have been made. 
- **Final Exam Week**: **No late submissions** will be accepted during the final exam week.
- **Class Projects**: Late submissions/resubmissions of the class projects will **not** be accepted.

## Attendance & Registered Section Policy
Attendance is mandatory and constitutes a significant portion (20%) of your grade. Attendance will be taken at every class meeting. Absence, early leaving without permission, being late more than 20 minutes, or disrespectful/disturbing behavior will result in 0 points each time. Being late more than 5 minutes will result in a late penalty.

- **Registered Section Attendance**: Students must attend the course section in which they are officially registered unless the instructor approves an exception in advance.
- **Excused Absences**: In the following situations, absences can be excused:
  - Sickness or health issues.
  - Mandatory activities with written documents.
  - Other situations with the instructor's approval.

## Academic Integrity / Honor Code
All students are expected to adhere to the [JMU Honor Code](https://www.jmu.edu/honorcode/). While AI use is permitted and encouraged as defined in the AI policy, plagiarizing another student's work, fabricating data, or presenting unverified AI output as original thought without proper testing and explanation is strictly prohibited and will be reported to the Honor Council.

## Accessibility / Student Support
JMU is committed to creating a universally accessible learning environment. If you have a documented disability and require accommodations, please register with the Office of Disability Services (ODS, [https://www.jmu.edu/ods/](https://www.jmu.edu/ods/)) and contact the instructor as soon as possible so we can implement your approved accommodations.

JMU offers numerous resources to support your academic and personal success. If you are struggling, please reach out:
- **JMU Counseling Center**: Support for mental health and well-being.
- **Learning Centers**: Tutoring and academic support.

## Inclement Weather
During the semester, there may be days during which the class will not meet due to inclement weather. Please check Canvas for the latest class arrangement and refer to the official JMU policy on inclement weather.

## Final Project

Complete a social-data investigation using the methods practiced in class: collect project-specific Twitter/X data through the course-approved workflow, store it in MongoDB, analyze it with document queries, aggregation, Python, and Gemini, and communicate the findings through a dashboard. Keep the new project data in a clearly identified project collection.

**One final-project submission, with two assessment components:**

1. **Project database:** Submit a working MongoDB connection string privately in Canvas so the instructor can inspect the new data collected and stored for your final project.
2. **Dashboard and findings:** Submit a dashboard link presenting the project question, query/aggregation results, Python and Gemini analysis, and clear explanations of the findings. Include a **shared NotebookLM link** alongside the dashboard as supporting evidence, with your source materials and source-based brief available to the instructor. NotebookLM is reviewed within this component, not as a third separately graded component.

Submit these links and the connection string together in **one Canvas assignment entry**. No separate code notebook, query file, GitHub README, or exported written report is required for the final-project submission. Weekly notebook and query-lab requirements remain as specified in their assignments.

The four project meetings in Weeks 15–16 provide time for collection and storage; queries, Python, and Gemini analysis; dashboard development; and NotebookLM synthesis, verification, and final refinement. **There is no final presentation.** Submit during final exam week by the deadline posted in Canvas.

---

## Course Schedule (Fall 2026)

*Schedule updated: October 7, 2026*

Weeks 9–12 pair Monday instruction and demonstration with Wednesday independent practice on students' own data. Week 13 provides a dashboard workshop on Monday and a NotebookLM workshop on Wednesday. Use only the AI tools and features authorized under the course AI Policy.

| Week | Dates | Topic | Key Concepts & Hands-on Activities | Notes / Milestones |
|:---:|:---|:---|:---|:---|
| **Week 1** | Aug 24–28 | Introduction & Account Setup | • Course introduction<br>• Required account and environment setup | Classes begin Wednesday, Aug 26 |
| **Week 2** | Aug 31–Sep 4 | GitHub, Colab & Google Drive Setup | • Create and configure individual GitHub repository<br>• README and Markdown basics<br>• Demonstrate branch / Pull Request / merge workflow<br>• Set up Google Colab & connect to Google Drive<br>• Load sample diamonds dataset<br>• Save and share notebook via GitHub | |
| **Week 3** | Sep 7–11 | Pandas & Matplotlib Review | • Pandas data analysis<br>• AI-assisted coding and explanation with demo notebook & Colab/Gemini<br>• Matplotlib data visualization using the same dataset | |
| **Week 4** | Sep 14–18 | Relational Database, Google Cloud & ER Diagram | • Set up a relational database on Google Cloud<br>• Relational database concepts<br>• ER diagrams<br>• Create database tables | |
| **Week 5** | Sep 21–25 | Database Connection, SQL & Census API | • Connect from Colab to cloud database<br>• Basic SQL queries and `INSERT`<br>• Census API integration<br>• Load API data into the relational database | |
| **Week 6** | Sep 28–Oct 2 | SQL Analytics & Visualization | • Advanced SQL queries (`JOIN`, `GROUP BY`, aggregation)<br>• Analyze query results with Python/Pandas<br>• Visualization of query results | |
| **Week 7** | Oct 5–9 | [Mini Project]({{ site.baseurl }}/assignments/mini-project/) | • Analyze instructor-assigned U.S. state<br>• Collect county population and median household income data into existing Cloud SQL database<br>• Define three research questions and develop Gemini-assisted SQL queries<br>• Analyze and visualize query results with Python/Pandas in `mini_project.ipynb` | Mini Project due Oct 6<br>**Fall Break** begins Oct 7 |
| **Week 8** | Oct 12–16 | MongoDB Design, Atlas Setup & Twitter/X Collection | **Mon Oct 12:** Relational database wrap-up; stop the course SQL instance when directed; MongoDB concepts and document design; Atlas setup.<br>**Wed Oct 14:** Collect and store Twitter/X data using the course-approved workflow; inspect JSON/document structure; verify the stored records. | Submit **one MongoDB connection string**. The instructor checks setup and successful data collection through the connection. |
| **Week 9** | Oct 19–23 | Document Queries & Aggregation | **Mon Oct 19:** Document queries and introductory aggregation pipelines.<br>**Wed Oct 21:** Independently answer questions using the collected data; use Gemini natural-language assistance to draft queries, then run and verify them. | Submit a **GitHub query-and-answer report** containing the questions, executed queries/pipelines, actual results, and brief explanations. |
| **Week 10** | Oct 26–30 | MongoDB Analysis with Python | **Mon Oct 26:** In-person demonstration of PyMongo, pandas, analysis, and charts.<br>**Wed Oct 28:** Bring the student's queries into Python; analyze results, create appropriate figures, and explain findings. | Submit an **executed Python analysis notebook** in GitHub. |
| **Week 11** | Nov 2–6 | LLM Text Analysis with Gemini | **Mon Nov 2:** Prompt engineering; topic analysis, sentiment, and translation examples; structured output; save model results to MongoDB.<br>**Wed Nov 4:** Design a new analysis of the student's Twitter/X data, check the model results, and save them back to MongoDB. | Submit an **LLM-analysis notebook** in GitHub, with the task, prompt, results, and verification. |
| **Week 12** | Nov 9–13 | Embeddings & Retrieval-Augmented Generation (RAG) | **Mon Nov 9:** Gemini embeddings, semantic similarity, retrieval, and a complete source-grounded answer demonstration.<br>**Wed Nov 11:** Adapt the course starter into a chatbot over the student's data; test retrieved sources, supported answers, and questions the data cannot answer. | Submit a **RAG/chatbot notebook or the assigned working artifact**, with source-based test answers. |
| **Week 13** | Nov 16–20 | Dashboard & NotebookLM | **Mon Nov 16:** Build a dashboard from the checked MongoDB, Python, and Gemini analysis results.<br>**Wed Nov 18:** Use **NotebookLM** to organize sources, synthesize findings, and verify a source-based brief. | Submit **two linked outputs: a dashboard and a shared NotebookLM notebook**. |
| **Week 14** | Nov 23–27 | Thanksgiving Holiday | *No Class* | **Thanksgiving Holiday** (No Class) |
| **Week 15** | Nov 30–Dec 4 | Final Project (Part 1) | **Mon Nov 30 — Session 1:** Define the project question, collect project data, store it in MongoDB, and check data quality.<br>**Wed Dec 2 — Session 2:** Complete queries/aggregation, Python analysis, and a focused Gemini text-analysis task; store and verify the results. | Project work sessions 1–2: a usable project collection and checked analysis results. |
| **Week 16** | Dec 7–11 | Final Project (Part 2) | **Mon Dec 7 — Session 3:** Build and verify the analytical dashboard.<br>**Wed Dec 9 — Session 4:** Use NotebookLM to synthesize the project evidence, check claims and sources, and complete project refinement. | Project work sessions 3–4: complete the database and dashboard; provide the shared NotebookLM link as supporting evidence. |
| **Week 17** | Dec 12–18 | Final Exam Week — Final Project Submission | Submit **one final-project entry**: the MongoDB connection string and dashboard link, with the shared NotebookLM link as supporting evidence. **No final presentation.** | **Final Project Due** — see Canvas.<br>*(No late submissions during exam week)* |

---

<div style="margin-top: 2rem;">
  <a href="{{ site.baseurl }}/">← Return to Course Home</a> | <a href="{{ site.baseurl }}/modules/module-1/">Go to Module 1 →</a>
</div>

