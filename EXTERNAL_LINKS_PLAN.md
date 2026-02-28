# External Links Integration Plan

## Overview
Add external website links to the Water Bodies page without using APIs. Links will connect users to authoritative sources like Oregon Department of Fish & Wildlife (ODFW), fishing guides, maps, and weather services.

## Current State Analysis

### Data Structure (water-bodies.json)
Each water body currently has:
- `id`: Unique identifier
- `name`: Display name
- `type`: river, lake, reservoir, creek
- `description`: Text description
- `species`: Array of fish species
- `accessPoints`: Array of access locations
- `regulations`: Text description
- `bestSeasons`: Array of months
- `techniques`: Array of fishing techniques

### UI Structure (WaterBodies.tsx)
- **List View**: Cards showing water bodies with basic info
- **Detail View**: Expanded view with sections for:
  - About
  - Species Found
  - Access Points
  - Best Seasons
  - Techniques
  - Regulations

## Proposed Changes

### 1. Data Structure Updates

Add new `externalLinks` array to each water body in `public/data/water-bodies.json`:

```json
{
  "id": "deschutes-river",
  "name": "Deschutes River",
  "type": "river",
  "description": "...",
  "species": ["rainbow-trout", "brown-trout", "whitefish"],
  "accessPoints": [...],
  "regulations": "...",
  "bestSeasons": ["May", "June", "July", "August"],
  "techniques": ["fly-fishing", "lure", "bait"],
  "externalLinks": [
    {
      "name": "ODFW Regulations",
      "url": "https://myodfw.com/fishing/regulations",
      "type": "regulations"
    },
    {
      "name": "Fishing Report",
      "url": "https://myodfw.com/fishing/report",
      "type": "report"
    },
    {
      "name": "Map Location",
      "url": "https://www.google.com/maps/search?q=Deschutes+River+Bend+Oregon",
      "type": "map"
    },
    {
      "name": "Weather Forecast",
      "url": "https://www.weather.gov/weather.php?lat=44.05&lon=-121.31",
      "type": "weather"
    }
  ]
}
```

### 2. UI Updates (WaterBodies.tsx)

#### A. Detail View - External Links Section
Add a new section in the detail view after "Regulations":

```tsx
<section className="detail-section">
  <h3>🔗 External Resources</h3>
  <div className="external-links">
    {selectedBody.externalLinks?.map(link => (
      <a
        key={link.name}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`external-link external-link-${link.type}`}
      >
        <span className="link-icon">{getLinkIcon(link.type)}</span>
        <span className="link-name">{link.name}</span>
        <span className="link-arrow">→</span>
      </a>
    ))}
  </div>
</section>
```

#### B. List View - Quick Links
Add quick action buttons to each card:

```tsx
<div className="card" onClick={() => setSelectedBody(body)}>
  <h3>{body.name}</h3>
  <span className="tag">{body.type}</span>
  <p>{body.description}</p>
  <div className="card-footer">
    <span className="small-text">Species: {body.species.length}</span>
    <span className="small-text">Access Points: {body.accessPoints.length}</span>
  </div>
  <div className="card-actions">
    <a
      href={getMapUrl(body.name)}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-small btn-outline"
      onClick={(e) => e.stopPropagation()}
    >
      🗺️ Map
    </a>
  </div>
</div>
```

#### C. Access Points - Map Links
Add map links to each access point:

```tsx
<ul className="access-list">
  {selectedBody.accessPoints.map((ap, i) => (
    <li key={i}>
      <div className="access-point-content">
        <div>
          <strong>{ap.name}</strong> ({ap.type.replace('_', ' ')}) - {ap.description}
        </div>
        <a
          href={`https://www.google.com/maps/search?q=${encodeURIComponent(ap.name + ' ' + selectedBody.name)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="access-point-map"
          onClick={(e) => e.stopPropagation()}
        >
          🗺️ View on Map
        </a>
      </div>
    </li>
  ))}
</ul>
```

### 3. Styling Updates

Add new styles for external links:

```css
.external-links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.external-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  text-decoration: none;
  color: var(--color-text);
  transition: all 0.2s;
}

.external-link:hover {
  background: var(--color-primary);
  color: white;
  transform: translateX(4px);
}

.external-link-regulations {
  border-left: 3px solid #dc2626;
}

.external-link-report {
  border-left: 3px solid #2563eb;
}

.external-link-map {
  border-left: 3px solid #16a34a;
}

.external-link-weather {
  border-left: 3px solid #0891b2;
}

.link-icon {
  font-size: 1.25rem;
}

.link-name {
  flex: 1;
  font-weight: 500;
}

.link-arrow {
  opacity: 0;
  transition: opacity 0.2s;
}

.external-link:hover .link-arrow {
  opacity: 1;
}

.card-actions {
  display: flex;
  gap: 0.5rem;
  padding: 0.75rem;
  border-top: 1px solid var(--color-border);
}

.access-point-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.access-point-map {
  padding: 0.25rem 0.75rem;
  background: #f3f4f6;
  border-radius: var(--radius);
  text-decoration: none;
  color: var(--color-primary);
  font-size: 0.875rem;
  white-space: nowrap;
}

.access-point-map:hover {
  background: #e5e7eb;
}
```

## Implementation Steps

### Phase 1: Data Updates
1. Update `public/data/water-bodies.json` to add `externalLinks` array to each water body
2. Add relevant links for each location:
   - ODFW regulations (type: regulations)
   - ODFW fishing report (type: report)
   - Google Maps search (type: map)
   - NOAA Weather (type: weather)
   - Local fishing guides/blogs (type: guide)

### Phase 2: Component Updates
1. Update `src/pages/WaterBodies.tsx`:
   - Add External Resources section to detail view
   - Add quick action buttons to list view cards
   - Add map links to access points
   - Add helper functions for icons and URLs

### Phase 3: Testing
1. Test all external links open correctly in new tabs
2. Verify link icons display correctly
3. Test on mobile devices
4. Verify accessibility (keyboard navigation, screen readers)

## Recommended External Sources

### Oregon Department of Fish & Wildlife (ODFW)
- Regulations: https://myodfw.com/fishing/regulations
- Fishing Report: https://myodfw.com/fishing/report
- Stocking Schedule: https://myodfw.com/fishing/stocking
- Trout Stocking: https://myodfw.com/fishing/trout-stocking

### Weather Services
- NOAA: https://www.weather.gov
- Weather Underground: https://www.wunderground.com
- AccuWeather: https://www.accuweather.com

### Map Services
- Google Maps: https://www.google.com/maps
- OnX Hunt: https://onxmaps.com (fishing maps)
- Gaia GPS: https://www.gaiagps.com

### Fishing Guides & Resources
- Flyfish: https://www.theflyfish.com
- Oregon Fishing: https://www.oregonfishing.net
- Bend Fishing Report: https://bendfishingreport.com

## Benefits

1. **No API Required**: All links are static URLs
2. **Authoritative Sources**: Direct links to ODFW and official resources
3. **User Convenience**: Quick access to regulations, maps, and weather
4. **Maintainability**: Easy to update links in JSON data
5. **Flexibility**: Can add/remove links without code changes

## Example Data Entry

For Deschutes River:
```json
"externalLinks": [
  {
    "name": "ODFW Regulations",
    "url": "https://myodfw.com/fishing/regulations",
    "type": "regulations"
  },
  {
    "name": "Current Fishing Report",
    "url": "https://myodfw.com/fishing/report",
    "type": "report"
  },
  {
    "name": "Google Maps - Deschutes River Bend",
    "url": "https://www.google.com/maps/search?q=Deschutes+River+Bend+Oregon",
    "type": "map"
  },
  {
    "name": "NOAA Weather - Bend, OR",
    "url": "https://www.weather.gov/weather.php?lat=44.05&lon=-121.31",
    "type": "weather"
  }
]
```

## Notes

- All external links will open in new tabs (`target="_blank"`)
- Links include `rel="noopener noreferrer"` for security
- Icons use emoji for simplicity and performance
- Links are color-coded by type for visual distinction
- Map links use search queries for flexibility
- Weather URLs use approximate coordinates for the region
