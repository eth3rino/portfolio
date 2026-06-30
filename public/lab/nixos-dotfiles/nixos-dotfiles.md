# NixOS dotfiles

A fully declarative, reproducible system configuration for NixOS — everything from the kernel to the shell environment defined in code and version controlled. If the machine dies, a fresh install plus `nixos-rebuild switch` brings everything back exactly as it was.

## Structure

The config is organised around flakes, NixOS's modern dependency management system. The entry point is `flake.nix`, which pins all external inputs to specific versions and wires everything together:

- `nixpkgs` — the stable NixOS 25.05 package set
- `nixpkgs-unstable` — a parallel unstable channel for packages that need to be more current
- `home-manager` — manages user-level dotfiles and programs declaratively
- `niri` — a scrollable tiling Wayland compositor, pulled directly from its flake
- `nvf` — a Neovim configuration framework
- `zen-browser` — a minimalistic Firefox fork

Host-specific configuration lives under `hosts/`, with `thinkpad` as the current machine. Shared home configuration is in `home.nix`, consumed by home-manager across hosts.

## Why NixOS

The appeal is reproducibility. Traditional Linux setups accumulate state over time — packages installed and forgotten, config files edited and lost, system state that exists nowhere but on the running machine. NixOS inverts this: the system is a pure function of its configuration. Nothing is installed imperatively. Everything is declared, everything is tracked, everything can be rolled back.

The tradeoff is a steep learning curve. Nix the language is unlike anything else, and debugging the module system takes patience. But once it clicks, the confidence of knowing your system is fully recoverable is worth it.

## Status

Ongoing — the config evolves with the machine. Currently running on a ThinkPad with Niri as the window manager.
