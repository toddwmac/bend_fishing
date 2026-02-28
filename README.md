# Bend Fishing Guide 🐟

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=GitHub%20Pages&logoColor=white)

*A comprehensive fishing guide application for Bend, Oregon and the surrounding Central Oregon area*

[Live Demo](https://toddwmac.github.io/bend_fishing/) • [Report Bug](../../issues) • [Request Feature](../../issues)

</div>

---

## Table of Contents

- [About The Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Deployment to GitHub Pages](#deployment-to-github-pages)
- [Data Coverage](#data-coverage)
- [Contributing](#contributing)
- [License](#license)
- [Disclaimer](#disclaimer)

---

## About The Project

The Bend Fishing Guide is a **static-site web application** designed to help anglers discover fishing opportunities in Bend, Oregon and the Central Oregon region. Whether you're targeting wild redband rainbow trout in the Deschutes River, kokanee in Wickiup Reservoir, or exploring the Cascade Lakes, this app provides the information you need.

### Why This App?

- **🎯 Location-Specific**: Tailored specifically for Bend, Oregon fishing waters
- **📱 Responsive Design**: Works on desktop, tablet, and mobile devices
- **💾 Offline-Ready**: All data stored locally - no backend required
- **⚡ Fast**: Built with Vite for instant page loads
- **🆓 Free Hosting**: Deploys to GitHub Pages at no cost

---

## Features

### 🗺️ Water Body Browser
Explore fishing locations with detailed information including:
- **8 Major Water Bodies**: Deschutes River, Cascade Lakes, Crane Prairie, Wickiup, Metolius, Crooked River, Fall River, Tumalo Creek
- **Access Points**: Bank fishing, boat ramps, and trailhead locations
- **Fishing Regulations**: Location-specific rules and restrictions
- **Species Present**: Which fish can be found where
- **Best Seasons**: Optimal fishing times for each location

### 🐟 Species Guide
Comprehensive information on **11 Fish Species**:
- **Trout**: Rainbow (Redband), Brown, Cutthroat, Brook, Bull (protected)
- **Salmon**: Chinook (Spring/Fall runs), Kokanee, Steelhead
- **Other**: Mountain Whitefish, Smallmouth Bass, Largemouth Bass

Each species includes:
- Size and weight ranges
- Difficulty rating (easy/moderate/difficult)
- Best months to target
- Recommended fishing techniques
- Protected species warnings

### 📅 Seasonal Calendar
Month-by-month fishing guide featuring:
- Target species for each month
- Active insect hatches (mayflies, caddis, stoneflies)
- Water condition descriptions
- Season overviews (Spring, Summer, Fall, Winter)

### 🎣 Trip Planner
Plan and organize your fishing trips:
- Select water body and target species
- Add notes for your trip
- Save trips to browser storage
- Track favorite locations and species

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | UI Framework |
| **TypeScript** | Type Safety |
| **Vite** | Build Tool & Dev Server |
| **React Router DOM** | Client-Side Routing |
| **CSS** | Styling (no framework) |
| **localStorage** | User Data Persistence |
| **GitHub Pages** | Static Hosting |

---

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/toddwmac/bend_fishing.git
   cd bend_fishing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000/
   ```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |

---

## Deployment to GitHub Pages

This project uses the `docs/` directory for GitHub Pages deployment.

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com/) and create a new repository named `bend_fishing`
2. **Do NOT** initialize with README (you already have one)
3. Create the repository

### Step 2: Push Your Source Code

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Bend Fishing Guide"

# Rename branch to main (if needed)
git branch -M main

# Add remote repository
git remote add origin https://github.com/toddwmac/bend_fishing.git

# Push to GitHub
git push -u origin main
```

### Step 3: Build Your Project Locally

```bash
# Build the production bundle
npm run build
```

This creates a `docs/` folder with your built application.

### Step 4: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Build and deployment** → **Source**, select **Deploy from a branch**
4. Under **Branch**, select **main** and **/docs**
5. Click **Save**

### Step 5: Deploy

After building your project:

1. **Commit and push the `docs/` directory:**
   ```bash
   git add docs/
   git commit -m "Deploy to GitHub Pages"
   git push
   ```

2. Wait 1-2 minutes for GitHub to deploy
3. Your site will be live at: `https://toddwmac.github.io/bend_fishing/`

### Updating Your Site

After making changes:

```bash
# 1. Commit and push source code changes
git add .
git commit -m "Your commit message"
git push

# 2. Build the project
npm run build

# 3. Commit and push the updated docs/ directory
git add docs/
git commit -m "Update deployment"
git push
```

### Troubleshooting Deployment

| Issue | Solution |
|-------|----------|
| 404 Error | Wait 1-2 minutes for GitHub to deploy, or check Pages settings |
| Blank Page | Ensure GitHub Pages is configured to serve from `/docs` folder |
| Styles Missing | Verify all files in `docs/` folder are committed and pushed |
| Old version showing | Clear browser cache or try incognito mode |

### Important Notes

- The `docs/` folder is created/overwritten each time you run `npm run build`
- Do NOT edit files in the `docs/` folder - edit source files and rebuild
- GitHub Pages serves from the `docs/` folder in your repository
- Always commit and push the `docs/` folder after building
- The `docs/` folder is tracked in git and will be included in your repository

---

## Data Coverage

### Water Bodies (8 locations)

| Name | Type | Notable Species |
|------|------|-----------------|
| Deschutes River | River | Rainbow Trout, Brown Trout, Steelhead |
| Crane Prairie Reservoir | Reservoir | Rainbow Trout, Largemouth Bass, Kokanee |
| Wickiup Reservoir | Reservoir | Kokanee, Brown Trout |
| Metolius River | River | Rainbow Trout, Bull Trout (protected) |
| Crooked River | River | Rainbow Trout, Whitefish |
| Cascade Lakes | Lake | Rainbow, Brown, Brook, Cutthroat Trout |
| Fall River | River | Rainbow Trout, Brown Trout |
| Tumalo Creek | Creek | Rainbow Trout, Brook Trout |

### Species (11 types)

| Species | Avg. Size | Difficulty | Protected |
|---------|-----------|------------|-----------|
| Rainbow Trout (Redband) | 10-20" | Moderate | No |
| Brown Trout | 14-24" | Moderate | No |
| Cutthroat Trout | 8-16" | Easy | No |
| Brook Trout | 8-14" | Easy | No |
| Bull Trout | 16-24" | Difficult | **Yes** |
| Kokanee | 12-16" | Easy | No |
| Chinook Salmon | 6-30+" | Difficult | No |
| Steelhead | 24-30" | Difficult | No |
| Mountain Whitefish | 6-8" | Easy | No |
| Smallmouth Bass | 12-18" | Moderate | No |
| Largemouth Bass | 10-16" | Easy | No |

---

## Project Structure

```
bend_fishing/
├── 📁 public/
│   └── 📁 data/                    # Static JSON data files
│       ├── water-bodies.json       # 8 water bodies with details
│       ├── species.json            # 11 fish species
│       ├── seasons.json            # 12-month fishing calendar
│       └── techniques.json         # Fishing techniques & gear
├── 📁 src/
│   ├── 📁 hooks/                   # Custom React hooks
│   │   ├── useData.ts              # Load JSON data
│   │   └── useLocalStorage.ts      # localStorage utilities
│   ├── 📁 pages/                   # Page components
│   │   ├── Home.tsx                # Landing page
│   │   ├── WaterBodies.tsx         # Water body browser
│   │   ├── Species.tsx             # Species guide
│   │   ├── Seasons.tsx             # Seasonal calendar
│   │   └── Planner.tsx             # Trip planner
│   ├── 📁 types/                   # TypeScript types
│   │   └── index.ts                # Type definitions
│   ├── App.tsx                     # Root component with routing
│   ├── main.tsx                    # App entry point
│   └── styles.css                  # Global styles
├── index.html                      # HTML template
├── vite.config.ts                  # Vite configuration
├── tsconfig.json                   # TypeScript configuration
├── package.json                    # Dependencies & scripts
└── README.md                       # This file
```

---

## Contributing

Contributions are welcome! Here's how you can help:

1. **Add More Water Bodies** - Edit `public/data/water-bodies.json`
2. **Add More Species** - Edit `public/data/species.json`
3. **Improve Styling** - Edit `src/styles.css` or component styles
4. **Fix Bugs** - Open an issue or submit a PR
5. **Suggest Features** - Open an issue with your ideas

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## Roadmap

Future enhancements planned:

- [ ] Add interactive map (Mapbox/Google Maps)
- [ ] Weather API integration
- [ ] User account system with backend
- [ ] Photo gallery of catches
- [ ] Fishing logbook with statistics
- [ ] Social sharing features
- [ ] Mobile app version (React Native)
- [ ] Additional regions beyond Bend

---

## License

This project is licensed under the ISC License.

---

## Acknowledgments

- **Oregon Department of Fish & Wildlife (ODFW)** - Regulations and species data
- **Local Bend fishing guides** - Expert knowledge and insights
- **Central Oregon fishing community** - Continued support

---

## Disclaimer

⚠️ **Important**: This application is for **educational purposes only**.

- Always verify current fishing regulations with the [ODFW](https://www.dfw.state.or.us/)
- Fishing regulations change frequently - check before you go
- Some species are protected and must be released immediately
- Respect private property and access restrictions
- Practice catch-and-release when appropriate
- Follow Leave No Trace principles

---

<div align="center">

**Built with ❤️ for the Bend, Oregon fishing community**

[⬆ Back to Top](#bend-fishing-guide-)

</div>
