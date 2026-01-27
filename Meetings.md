# Meeting Notes - Team 5171

This document contains the ongoing notes and design decisions from our technical meetings for the 2026 season.

# Recent Meeting Notes (Lexseal)
- **[Lexseal](https://github.com/lexseal)**
  - Commit to design
  - Reduced “tasks”
  - NO PARABOLA CALCULATION - failed last time. 
  - Brute forcing the values - not making with physics. Start with this
  - Shoot in the neutral zone
  - High enough
  - Functions for reuse - independent modules
  - Locate yourself
## Lexseal AI Strategies

### Summary Checklist for 5171 Software
1.  [ ] **Vision:** Calibrate camera to detect AprilTags 1-32.
2.  [ ] **Data:** Build the "Shot Map" (Distance vs. RPM) by brute force testing.
3.  [ ] **Logic:** Parse FMS data to detect `HubActive` state (don't shoot if false).
4.  [ ] **Safety:** Implement `SetHeight(Low)` for passing under the Trench.
