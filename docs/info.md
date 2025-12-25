# Git Workflow 

## Project Structure

```
donation/
├── index.html          # Homepage
├── about.html          # About page
├── donate.html         # Donation page
├── why-support.html    # Why Support page
├── assets/             # Images and media files
│   ├── home/           # Homepage images
│   └── Uni-logo-500.png
├── js/                 # JavaScript files
│   └── main.js         # Main JavaScript file
├── plan/               # Planning documents & mockups
├── devastation/        # Devastation section assets
├── README.md           # Project readme
├── CODEOWNERS          # Code ownership file
└── .gitignore          # Git ignore rules
```

---

## Git Workflow (Step-by-Step)

When you're assigned an issue/task, follow these steps:

### Step 1: Make Sure You're Up to Date

Before starting any work, always pull the latest changes from the `main` branch:

```bash
# Switch to main branch
git checkout main

# Pull latest changes
git pull origin main
```

### Step 2: Create a New Branch

Create a new branch for your task. Use a descriptive name that relates to your issue/task:

```bash
# Create and switch to a new branch
git checkout -b your-branch-name
```

**Example Branch Names:**
- `feature/hero-section`
- `feature/footer-component`
- `fix/navbar-mobile`
- `issue-12/donation-form`

### Step 3: Do Your Work

- Test your changes in the browser (use `npx serve -l 3000` to run local server)

### Step 4: Stage and Commit Your Changes

After making changes, you need to save them to Git:

```bash
# Check what files you've changed
git status

# Stage all your changes
git add .

# Or stage specific files
git add index.html
git add assets/home/new-image.jpg

# Commit with a meaningful message
git commit -m "Add hero section with carousel"
```

**Commit message tips:**
- Start with a verb (Add, Fix, Update, Remove, Refactor)
- Be specific about what you did

**Good examples:**
- `Add hero section with background image`
- `Fix navbar alignment on mobile`
- `Update footer contact information`

**Bad examples:**
- `changes` ❌
- `fixed stuff` ❌
- `work` ❌

### Step 5: Push Your Branch 🚀

Push your branch to GitHub:

```bash
git push origin your-branch-name
```

If this is your first time pushing this branch, you might see:
```bash
git push --set-upstream origin your-branch-name
```

### Step 6: Open a Pull Request (PR) 📝

1. Go to the GitHub repository in your browser
2. You'll see a banner saying "Your branch was recently pushed" - click **"Compare & pull request"**
3. Or click the **"Pull requests"** tab → **"New pull request"**
4. Select your branch from the dropdown
5. Fill in the PR details:
   - **Title**: Brief description of what you did
   - **Description**: Explain your changes in more detail
   - Mention the issue number if applicable (e.g., "Closes #12")
6. Click **"Create pull request"**

### Step 7: Wait for Review ⏳

After creating the PR:

- **If approved ✅**: Anuka will merge your changes into main
- **If changes requested ❌**: Read the comments, make the requested changes, commit, and push again. The PR will automatically update.

---

## 📋 Quick Reference Commands

| Action | Command |
|--------|---------|
| Check current branch | `git branch` |
| Switch to a branch | `git checkout branch-name` |
| Create new branch | `git checkout -b new-branch-name` |
| Check file status | `git status` |
| Stage all changes | `git add .` |
| Commit changes | `git commit -m "message"` |
| Push to GitHub | `git push origin branch-name` |
| Pull latest changes | `git pull origin main` |
| View commit history | `git log --oneline` |

---

## ⚠️ Common Issues & Solutions

### "I made changes on the wrong branch!"

```bash
# Stash your changes temporarily
git stash

# Switch to the correct branch
git checkout correct-branch

# Apply your stashed changes
git stash pop
```

### "I need to update my branch with latest main"

```bash
# While on your feature branch
git fetch origin
git merge origin/main

# Or use rebase (ask if unsure)
git rebase origin/main
```

### "I made a typo in my commit message"

```bash
# Only if you haven't pushed yet!
git commit --amend -m "Corrected message"
```

### "I forgot to add a file to my commit"

```bash
# Only if you haven't pushed yet!
git add forgotten-file.html
git commit --amend --no-edit
```

---

## 💡 Best Practices

1. **Pull before you push** - Always get the latest changes before pushing
2. **Commit often** - Small, frequent commits are better than one giant commit
3. **Write clear messages** - Your future self will thank you
4. **One task per branch** - Don't mix different tasks in one branch
5. **Test before pushing** - Make sure your changes work locally
6. **Ask for help** - If you're stuck, ask! Don't struggle alone

---

## 🆘 Need Help?

If you run into any issues:
1. Don't panic! Git mistakes are usually fixable
2. Ask Anuka or a team member for help
3. Google your error message - Stack Overflow is your friend!

Happy coding! 🚀
