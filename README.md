<p align="center"><img src="assets/logo.png" width="96" alt="Shortlist logo"></p>

<h1 align="center">Shortlist</h1>

Shortlist builds a tailored CV and cover letter for each job you apply to, from the CV you already have. It is made for graduate and early-career engineers in every field, from civil and electrical to software and chemical. It runs on your own Windows PC and works offline. Your CV never leaves your computer, and no AI service is involved.

## Download

**Website:** [ahmed3819350-bot.github.io/shortlist](https://ahmed3819350-bot.github.io/shortlist/)

**[Download Shortlist for Windows](https://github.com/ahmed3819350-bot/shortlist/releases/latest)** (Windows 10 or 11, 64-bit, 129 MB)

Everything it needs, including the LaTeX engine that typesets the PDFs, is inside the installer.

### "Windows protected your PC"

The installer is not code-signed yet, so Windows SmartScreen may show this warning the first time. Click **More info**, then **Run anyway**.

## How it works

1. **Import your master CV** once: the long version with everything you have done, as a PDF, a Word file (.docx) or LaTeX (.tex). No master CV yet? Shortlist gives you a Word template with every section to fill in. You can correct anything it imported in the app.
2. **Paste a job posting.** Shortlist tells you how well you fit (Strong fit, Good fit, A stretch or Long shot), flags the visa clause, the degree asked for and the locations, and shows which of the posting's skills your CV proves, only lists, or is missing.
3. **Review and save.** Shortlist picks the bullets, modules and skills that best match the job, writes a cover letter, and shows both side by side. Click any part to edit it, approve each document, then save. Each job gets its own folder with the CV and cover letter as PDF and LaTeX, and optionally Word.
4. **Track it.** Every saved application is listed with its fit and status, from saved to applied, interview, offer or rejected, together with the job posting it was built from.

## What it will not do

Shortlist never adds a skill, module or piece of experience you have not written. It chooses and orders what is already in your master CV, and tells you what the posting asks for that your CV does not show.

## Built for applicant-tracking systems

Many employers run every CV through an applicant-tracking system (ATS) before a person reads it. Shortlist's layouts are ATS-compliant by design:

- Real text PDFs, with no images, text boxes or multi-column layouts that scramble the reading order
- Standard section headings (Education, Experience, Projects, Skills) in one clear reading order
- No hyphenation, so a keyword is never split across two lines
- Plain characters: the dashes and curly quotes some systems misread are replaced
- The posting's own terms for the skills your CV proves

**100% parse rate in our tests.** We built 18 CVs, in both layouts, from nine test CVs and job postings across six engineering fields. A standard PDF text extractor read back all 281 printed lines in full and in the right order, and a CV parser recovered every bullet (171 of 171), name, email and education entry from all 18. Each employer's system is different, so results elsewhere can vary.

## Features

**Before you apply**
- A fit verdict for every posting, with how many of its essential skills you can prove
- Compare jobs: paste two to six postings and see them ranked by fit
- Starter phrases for the cover letter, taken from the posting

**Your CV and letter**
- Two CV layouts: Classic (up to two pages) and Jake's resume (one page, the layout US and tech recruiters know). Automatic picks Jake's for software roles and US spelling.
- UK or US spelling, and a LinkedIn, portfolio or GitHub link in the header, chosen per job
- A 10-second recruiter check on every CV: clear target, the job's language, outcomes, scale, progression
- Warnings for bullets with no figure or no stated result, folded into one bar
- Job numbers and reference IDs never appear in a cover letter
- Word copies (.docx) of both documents, if you want them

**After you save**
- Applications: every saved application with its fit, status and job posting
- The job posting is kept with each application. Postings are often taken down once applications close, and the copy you applied to is easy to lose. With Shortlist you can reread exactly what the employer asked for before an interview, copy it, and see which of its requirements your CV proves.
- An interview prep sheet for each application: what you are likely to be asked, and the example on your CV that answers it
- Reopen any saved application to edit and save it again

**Your master CV**
- Import from PDF, Word or LaTeX, or start from the blank Word template
- Edit what was imported: roles, dates, bullets (one per line), skills and certifications
- CV health: a score for how well your master CV feeds Shortlist, with the bullets to strengthen

**Everyday use**
- Separate zoom for the CV and the cover letter, keyboard shortcuts, light and dark mode
- Recognises the tools and methods of mechanical, civil, electrical, electronic, software, chemical, aerospace and biomedical engineering, about 310 skills in all

## Privacy

Shortlist works offline. Your profile and settings stay in `%APPDATA%\Shortlist` on your PC, and your documents go to the folder you choose (`Documents\Shortlist` by default). It goes online only if you turn on update checks in Settings, and then it only asks GitHub for the latest version number.

## Credits

Jake's resume layout is adapted from "Resume in Latex" by Jake Gutierrez, based on [sb2nov/resume](https://github.com/sb2nov/resume), under the MIT License.

© 2026 Shortlist. All rights reserved.
