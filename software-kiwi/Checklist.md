# NOTE: February 20, 21, 23, 25, 27, 28 of 2026:

Mentor Kevin will be absent. "Try to get photon vision working."

# February 27 + 28, 2026
Veer will be absent. Please ask Alex for help.
What we got done:
Blah
To do:
Blah

# February 23 and 25, 2026
We have MERGED the flatbot-shooter-only branch with the brian drivetrain to create the updated main branch.

### THREE branches:

`main`: The drivetrain of Brian, and the shooter of FlatBot (only to be used when the shooted is electronically attached)

`feat/flatbot-shooter-only`: The shooter of FlatBot (only to be used when the drivetrain is not electronically attached)

`feat/brian-drive-only`: The drivetrain of Brian. 

### Other commits:
- Fix the NAVX to use usb
- Change the xbox mapping and add hardware safety measures
- Add feeder to the AdvantageScope

### Photon Vision

We have imaged the Orange Pi with the latest version of Photon Vision. We need to also connect it to the robot and calibrate it.

### TODOs

- [ ] Connect Orange Pi to robot (waiting on mechanical team)
- [ ] Calibrate Orange Pi
- [ ] Test Orange Pi
- [ ] Split controller inputs (for drivers)
- [ ] Add intake (waiting on hardware team)
- [ ] Add climber (waiting on hardware team)
- [ ] Work on the scheduler dashboard (Asher)


# February 18, 2026

We have finished coding the **Swerve Drive** on Brian.

We also have a Shooter subsystem on FlatBot (for more info on commands and subsystems, click [here](https://docs.wpilib.org/en/stable/docs/software/commandbased/what-is-command-based.html#subsystems-and-commands)) that allows us to shoot with two motors (a flywheel and a feeder) to load and shoot balls. We can pass a designated **RPM** (thanks to Asher) and use that to launch fuel at a certain distance.

NOTE: the shooter on FlatBot is NOT in the "main" branch. It is in the "feat/flatbot-shooter-only" branch.

## Attachments:
### Shooter (FlatBot)
<br>
<video controls width="250" height="150">
    <source src="../attachments/prog/2-18-26/shooter.MOV" type="video/mp4">
    Your browser does not support the video tag. Go to <a href="../attachments/prog/2-18-26/shooter.MOV">this link</a> to watch the video.
</video>

### Drive (Brian)
<br>
<video controls width="250" height="150">
    <source src="../attachments/prog/2-18-26/swerve.MOV" type="video/mp4">
    Your browser does not support the video tag. Go to <a href="../attachments/prog/2-18-26/swerve.MOV">this link</a> to watch the video.
</video>

### New 3D Printers
<br>
<video controls width="250" height="150">
    <source src="../attachments/prog/2-18-26/3D.MOV" type="video/mp4">
    Your browser does not support the video tag. Go to <a href="../attachments/prog/2-18-26/3D.MOV">this link</a> to watch the video.
</video>
-Veer

Any changes?
**PLEASE** edit this file with the Edit in GitHub button, and add your name!




# February 6, 2026
(transcript)
OK, here's a summary that we did. We worked on the simulator and got it working. We also worked on. Let's see work on getting a simulator working. I basically we basically sat and learned like a ton of concepts and then he also gave us a list of stuff to work on tomorrow we actually might be able to physically test it tomorrow depending on how things work out. I'm gonna be coming in the afternoon. But we will have to see what it's like they've made some pretty significant progress on the actual, but it looks really good. Pretty sleep too. See ya. See you tomorrow.

### Recording

<audio controls>
  <source src="../attachments/prog/2-6-26.mp3" type="audio/mp3">
  Your browser does not support the audio element.
</audio>

-Veer, Asher

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
