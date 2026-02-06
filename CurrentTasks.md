# February 4, 2026

We have finished coding the **Differential Drive on FlatBot**. We also have a Shooter subsystem (for more info on commands and subsystems, click [here](https://docs.wpilib.org/en/stable/docs/software/commandbased/what-is-command-based.html#subsystems-and-commands)) that allows us to shoot with two motors (a flywheel and a feeder) to load and shoot balls. We can pass a designated **RPM** (thanks to Asher) and use that to launch fuel at a certain distance.

As far as our *FRC robot*, we will be using **Sverve Drive**, similar to Mantis.
The differences (to my understanding, ask **Mentor Kevin**):
||Swerve  | Differential |Tank |
|--|--|--|--|
|Controls  | Left Joystick: Glide fwd, bkwd, and left and right. Right joystick: **Turn** orientation left/right. |Control FWD backward with left y, and Left Right orentation with x | Use left/right for left right motors (as in both joysticks fwd -> fwd)|
|Motors  | One for orentation of wheel, one for driving. | Driving| Driving|
|Motors Type | SparkFlex | SparkMax| SparkMax|
---
So we will be working on a new `swervedrive/SwerveModule.java` file.
**PLEASE** edit this file with the Edit in GitHub button, and add your name!

-Veer


Worked on adding support for the Spark Flex Simulator: [Commit](https://github.com/team5171/FRC-2026/commit/4d41f088a4a777ad2532d058392418ff0ac841a7)

-Asher


# January 26, 2026

Download WPILib and make sure you read these:

## Core Concepts

* [Command-Based (CB) Programming](https://docs.wpilib.org/en/stable/docs/software/commandbased/index.html)

---

# January 17, 2026

Message from Mentor Kevin:

> The software team can start by reading through the WPILib docs. Now that everyone has GitHub access, they can also look at last year’s robot code. The driver station laptop and robot are all set up if they want to drive it around.
>
> It could be a good exercise to review the robot code to understand which buttons do what. Just be careful not to run any autonomous routines.
