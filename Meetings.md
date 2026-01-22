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

Based on your mentor's specific feedback and the **REBUILT** game manual, here is a targeted software strategy. The mentor's advice focuses on reliability ("reduced tasks") and empirical tuning ("brute force") over theoretical perfection, which is highly effective for FRC.

### 1. Strategy: "NO PARABOLA CALCULATION" & "Brute forcing the values"
Your mentor is correct; physics calculations often fail with foam game pieces like **FUEL** because of air resistance, compression, and backspin variability.

*   **Software Implementation:** Implementing a **Lookup Table (Interpolation)**.
    *   **The Concept:** Instead of calculating the arc, you will manually place the robot at known distances (e.g., 5ft, 10ft, 15ft) from the **HUB**, find the exact Shooter RPM and Angle that works, and hard-code those values.
    *   **The Code:** Create a class that takes `DistanceToTarget` (via Limelight/PhotonVision) and returns `TargetRPM`.
    *   **Why it fits REBUILT:** The **FUEL** is a high-density foam ball. These balls vary slightly in density and surface wear, making physics formulas unreliable.
*   **"High Enough":** The **HUB** opening is **72 inches (~1.83m)** off the ground. However, your robot is restricted to a maximum height of **30 inches**. You must shoot upwards significantly. Your lookup table must account for this steep vertical angle.

### 2. Strategy: "Locate yourself" (Localization)
With **32 AprilTags** on the field, you should rely heavily on vision-based localization rather than just wheel encoders.

*   **Software Implementation:** **Pose Estimator with Kalman Filter.**
    *   **The Concept:** Combine wheel odometry (where the wheels *think* they went) with AprilTag vision (where the camera *sees* you are).
    *   **Why it fits REBUILT:**
        *   **BUMPS:** The field has **BUMPS** which will cause drive wheels to slip or lift, ruining standard encoder tracking.
        *   **FUEL on Floor:** Driving over loose FUEL will cause wheel slip.
    *   **AprilTag Usage:**
        *   **HUB Tags:** There are tags on all four sides of the HUB (IDs 2-5, 8-11, etc.),. This ensures you can locate yourself regardless of which side of the HUB you are facing in the **NEUTRAL ZONE**.
        *   **TRENCH Tags:** Use tags ID 1, 6, 7, 12 to realign your robot before attempting to pass under the **TRENCH** structure (which has a low clearance of ~22 inches).

### 3. Strategy: "Shoot in the neutral zone"
The **NEUTRAL ZONE** is the large central area where **FUEL** is dispersed,.

*   **Software Implementation:** **"Feed and Fire" Auto-Aim.**
    *   **The Task:** The driver drives over FUEL to intake it. The software automatically rotates the chassis (if swerve) or turret to face the active HUB.
    *   **Reduced Task:** Do not automate the *driving* to the ball (which is hard). Automate the *aiming* while the driver drives (which is consistent).
    *   **Hub Status Logic:** You must check if your HUB is **Active**. Shooting into an inactive HUB scores zero points. The FMS provides this data (Active vs. Inactive) to the Operator Console.
    *   **Safety:** Software should disable the "Shoot" button if the FMS reports the HUB is inactive, saving FUEL.

### 4. Strategy: "Functions for reuse - independent modules"
This aligns with the "Reduced tasks" philosophy. Build small, reliable blocks that can be used in both Auto and Teleop.

*   **Module A: `AimAtTarget()`**
    *   Used in Auto to score the pre-load.
    *   Used in Teleop to shoot from the Neutral Zone.
    *   Relies on the **HUB AprilTags** (centered at 44.25" height).
*   **Module B: `ClimbSequence()`**
    *   **Context:** Robots can earn points by climbing to **LEVEL 1** in Auto,.
    *   **Reuse:** The same climb logic used in End Game can be triggered in Auto if you choose to park for points instead of scoring more fuel.
*   **Module C: `TrenchSafeMode()`**
    *   **Context:** The **TRENCH** clearance is only ~22.25 inches, but the Robot max height is 30 inches.
    *   **Logic:** A reusable command that forces all mechanisms (shooter/elevator) to their lowest position. This prevents the driver from accidentally shearing off the top of the robot while driving under the Trench.

### Summary Checklist for 5171 Software
1.  [ ] **Vision:** Calibrate camera to detect AprilTags 1-32.
2.  [ ] **Data:** Build the "Shot Map" (Distance vs. RPM) by brute force testing.
3.  [ ] **Logic:** Parse FMS data to detect `HubActive` state (don't shoot if false).
4.  [ ] **Safety:** Implement `SetHeight(Low)` for passing under the Trench.