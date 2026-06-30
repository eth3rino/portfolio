# Custom large-format 3D printer

A large-format FDM 3D printer built from scratch for producing signage — letters, logos, and display pieces too big for anything off the shelf. The design prioritises print volume and reliability over speed, with common components kept affordable enough to justify the build.

## Motion system

The motion system is CoreXY — both X and Y axes are driven by a pair of motors working in tandem through a crossed belt arrangement. Compared to a bed-slinger (where the bed moves in Y), CoreXY keeps the print mass stationary and moves only the lightweight toolhead, which allows for faster, more accurate movement at larger scales without the inertia problems that come from throwing a heavy bed around.

HBot was considered as an alternative — it's a simpler belt path than CoreXY — but CoreXY's better handling of racking forces makes it the stronger choice for a large build volume where belt tension becomes harder to keep perfectly balanced.

## Electronics

The controller is an Arduino Mega paired with a RAMPS 1.4 shield — the classic combination for DIY 3D printers. It's not the most modern option, but it's well-documented, widely supported, and cheap enough to replace without hesitation. Stepper drivers sit on the RAMPS board, one per axis plus the extruder.

## Firmware

The printer runs Marlin, configured for the specific motion system, steps-per-mm, and build volume. Marlin handles all the real-time motion planning, temperature control, and G-code interpretation — it runs entirely on the Mega and communicates with a PC over USB for job sending.

## Future goals

The longer-term idea is to replace the PC + Marlin combination with a split architecture: a small, cheap microcontroller handling real-time motion control, and a host program running on a connected PC managing the job queue, slicing pipeline, and UI. Writing both sides from scratch — the firmware and the host software — would be a meaningful project in its own right. That's a future version of this build.

## Status

In progress — the frame and motion system are designed, components are being sourced.
