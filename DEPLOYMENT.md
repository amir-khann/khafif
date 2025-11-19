# GitHub Pages Deployment Guide

This Next.js application is configured to deploy to GitHub Pages.

## ✅ Yes, This Will Work!

The project is fully configured for GitHub Pages deployment with:
- Static export enabled
- Automatic base path configuration
- GitHub Actions workflow for automatic deployment

## Setup Instructions

### 1. Enable GitHub Pages

1. Go to your repository: https://github.com/amir-khann/khafif
2. Click on **Settings**
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. Save the changes

### 2. Automatic Deployment

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that will automatically:
- Build the Next.js application
- Export it as static files
- Deploy to GitHub Pages

**The workflow will trigger automatically when you push to the `main` branch.**

### 3. First Deployment

After enabling GitHub Pages:
1. Push the latest changes (the workflow file is already included)
2. Go to the **Actions** tab in your repository
3. You should see the deployment workflow running
4. Wait for it to complete (usually 2-3 minutes)

### 4. Access Your Site

After deployment, your site will be available at:
- **https://amir-khann.github.io/khafif/**

## Important Notes

- ✅ The site uses static export (`output: 'export'`), so all pages are pre-rendered
- ✅ Images are unoptimized for GitHub Pages compatibility
- ✅ The base path (`/khafif`) is automatically configured during build
- ✅ All Next.js Link components will work correctly with the base path
- ✅ Dark theme and language preferences are stored in localStorage (client-side)
- ✅ All features (dark mode, translations, animations) will work on GitHub Pages

## Manual Build (Optional)

If you want to test the build locally:

```bash
npm install
GITHUB_ACTIONS=true GITHUB_REPOSITORY=amir-khann/khafif npm run build
```

The static files will be in the `out/` directory.

## Troubleshooting

If the deployment fails:
1. Check the **Actions** tab in your GitHub repository for error messages
2. Ensure GitHub Pages is enabled with **GitHub Actions** as the source (not "Deploy from a branch")
3. Verify the workflow file exists at `.github/workflows/deploy.yml`
4. Make sure you have pushed all files including the workflow file

