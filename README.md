# Hello! This is a software guide!

Please download software [from here](https://docs.wpilib.org/en/latest/docs/zero-to-robot/step-2/wpilib-setup.html) to get ready.


# Notes from meetings

- **[Lexseal](https://github.com/lexseal)**
  - Commit to design
  - Reduced “tasks”
  - NO PARABOLA CALCULATION - failed last time. 
  - Brute forcing the values - not making with physics. Start with this
  - Shoot in the neutral zone
  - High enough
  - Functions for reuse - independent modules
  - Locate yourself
# _[2025](https://github.com/team5171/FRC-2025/tree/main)_ Recap (made simple by AI)

### Is there any Python?

No, there is **no Python** code in this project.

* **Java** is the primary programming language used to write the robot's logic (found in the `src/main/java` folders).
* **Groovy** (a scripting language similar to Java) is used for the configuration files like `build.gradle` and `settings.gradle`.
* **JSON** is used for configuration data, such as motor settings and paths for the robot to follow (found in the `src/main/deploy` folder).

### Project Layout Explanation (For Non-Java Speakers)

Think of this project like a **construction kit** for a robot. The layout follows a standard format used in professional software development (specifically the Gradle build system) and the FIRST Robotics Competition (WPILib).

#### 1. The "Instructions" (Root Folder)

The files at the very top level are the "instruction manuals" for your computer so it knows how to put the project together:

* **`build.gradle`**: This is the master list of requirements. It tells the computer what version of Java to use, what external "tools" (libraries) to download (like motor controller software), and how to package the code to send it to the robot.
* **`settings.gradle`**: This handles basic setup, like telling the computer where to find those tools on your hard drive.
* **`gradlew`**: This is a small helper script that ensures everyone working on the project uses the exact same version of the construction tools.

#### 2. The "Brains" (`src/main/java`)

This is where the actual logic lives. It is organized into "packages" (folders) to keep things tidy:

* **`frc/robot`**: Contains the core logic. `Robot.java` is the main entry point that runs when the robot turns on.
* **`subsystems`**: Think of these as the "body parts" of the robot (e.g., `Drivetrain.java`, `Elevator.java`, `Climber.java`). Each file controls one specific physical mechanism.
* **`commands`**: These are the "actions" the robot can take (e.g., `DriveToDistance.java` or `Rumble.java`).
* **`swervelib`**: This is a specialized library included in your project to handle "Swerve Drive," a complex type of drivetrain where every wheel can move and steer independently.

#### 3. The "Gear Bag" (`src/main/deploy`)

These are files that aren't code, but the code needs them to work.

* **`swerve/`**: Contains JSON files that describe the physical robot, such as which motor is plugged into which port.
* **`pathplanner/`**: Contains the pre-planned "routes" the robot will drive automatically during the start of a match.

#### 4. The "Store" (`vendordeps`)

In robotics, we use parts from different companies (like REV or CTR Electronics). These files tell the project how to automatically "shop" for and download the specific software needed to talk to those companies' hardware.
