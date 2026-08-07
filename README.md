# 🎬 Movie Watchlist — Lab Activity

**Course:** Front-End Development 2
**Stack:** React + Vite + Tailwind CSS + DaisyUI

A hands-on lab where you'll practice three core React concepts by completing a themed mini-app:

1. **Props** — passing data from parent to child components
2. **Conditional Rendering** — showing UI based on data
3. **Lists & Keys** — rendering arrays with `.map()`

The static data, layout, and component structure are already provided. You just fill in the blanks marked with `// TODO`.

---

## 📋 Learning Objectives

By the end of this lab, you will be able to:

- Destructure and pass **props** to child components
- Use **conditional rendering** (ternary and `&&` operators) to display badges based on data
- Render a **list** of items with `.map()` and assign proper **`key`** props

---

## ✅ Prerequisites

Before you start, make sure you have:

- **Node.js** (v18 or higher) — check with `node -v`
- **npm** (comes with Node) — check with `npm -v`
- **Git** — check with `git --version`
- A **GitHub account**

---

## 🚀 Setup Instructions

Follow every step in order.

### Step 1 — Clone the instructor's repository

Open your terminal and clone this project:

```bash
git clone <instructor-repo-url> movie-watchlist
cd movie-watchlist
```

> Replace `<instructor-repo-url>` with the URL your instructor provided.

### Step 2 — Remove the instructor's remote

You don't want to accidentally push to the instructor's repo, so disconnect it:

```bash
git remote remove origin
```

Verify no remote is set:

```bash
git remote -v
```

The output should be **empty**.

### Step 3 — Create your own empty repository on GitHub

1. Log in to [https://github.com](https://github.com).
2. Click the **+** icon (top right) → **New repository**.
3. **Repository name:** `movie-watchlist` (or any name you prefer).
4. **Visibility:** Public or Private — your choice.
5. ⚠️ **IMPORTANT:** Leave everything else UNCHECKED:
   - Do **NOT** check *Add a README file*
   - Do **NOT** check *Add .gitignore*
   - Do **NOT** check *Choose a license*
   The repo **must be empty**.
6. Click **Create repository**.
7. On the next page, **copy the repository URL** (HTTPS or SSH).

### Step 4 — Point your local project to your new repo

Back in your terminal:

```bash
git remote add origin <your-new-repo-url>
git branch -M main
```

Verify it's set correctly:

```bash
git remote -v
```

You should see your new GitHub URL listed.

### Step 5 — Push the code to your repository

```bash
git push -u origin main
```

Refresh your GitHub repo page — you should now see all the project files.

### Step 6 — Invite your instructor as a collaborator

Do this **only after** your push succeeds.

1. Go to your repository on GitHub.
2. Click **Settings** (top-right tab).
3. In the left sidebar, click **Collaborators**.
4. Click **Add people**.
5. Search for and select **`jeffdteach`**.
6. Click **Add jeffdteach to this repository**.

The invite is sent. ✅

---

## 💻 Install & Run

Install the project dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the URL shown in the terminal (usually [http://localhost:5173](http://localhost:5173)).

At this point the page will load, but the movie cards will look broken — that's expected. Your job is to complete the TODOs.

---

## 📝 Your Tasks

Complete the three `// TODO` sections across two files.

### Task 1 — Props

**File:** `src/components/MovieList.jsx`

- Destructure `movies` from props.

**File:** `src/components/MovieCard.jsx`

- Destructure `title`, `poster`, `year`, `genre`, `rating`, and `watched` from props.
- Use them to fill in the `src`, `alt`, title, subtitle (`genre • year`), and rating fields.

### Task 2 — Conditional Rendering

**File:** `src/components/MovieCard.jsx`

- Inside the `<h2>`, show a **"Top Rated"** badge (`badge badge-warning`) **only if** `rating >= 8`.
- In `card-actions`, show:
  - **"Watched ✓"** badge (`badge badge-success`) when `watched === true`
  - **"Unwatched"** badge (`badge badge-ghost`) when `watched === false`

### Task 3 — Lists & Keys

**File:** `src/components/MovieList.jsx`

- Use `.map()` on the `movies` array to render one `<MovieCard />` per movie.
- Pass each movie's fields as props.
- Add a unique **`key`** prop (use `movie.id`).

---

## ✔️ Acceptance Criteria

Your lab is complete when:

- [ ] All 9 movie cards render with their poster, title, genre, year, and rating.
- [ ] Movies with `rating >= 8` show a **"Top Rated"** badge.
- [ ] Each card shows either **"Watched ✓"** or **"Unwatched"** based on the `watched` field.
- [ ] The browser console shows **no key warnings** ("Each child in a list should have a unique 'key' prop").
- [ ] The layout works on mobile, tablet, and desktop widths (1, 2, and 3 columns).

---

## 📤 Submission

1. Save your changes.
2. Commit and push to your repository:

   ```bash
   git add .
   git commit -m "Complete movie watchlist lab"
   git push
   ```

3. Confirm the invite to **`jeffdteach`** is still pending or accepted on your repo's **Settings → Collaborators** page.
4. Submit your repository URL through the class submission channel.

---

## 🆘 Troubleshooting

- **`npm run dev` fails** → make sure you ran `npm install` first.
- **Blank page / broken styles** → confirm `src/index.css` is imported in `src/main.jsx`.
- **"Each child in a list should have a unique key" warning** → you forgot the `key` prop on `<MovieCard />` inside `.map()`.
- **Push rejected** → make sure the GitHub repo you created is **empty** (no README, no .gitignore).

Good luck! 🚀
