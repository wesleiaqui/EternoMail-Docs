---
sidebar_position: 1
slug: /intro
---

# Introduction

Eterno Mail is an open-source, lightweight email client built for people who want a modern email experience without the bloat.

## Why Eterno Mail?

The Linux desktop has long needed a proper email client. The existing options each have their drawbacks:

- **Thunderbird** - Clunky interface with too much legacy baggage
- **Geary** - Crippled by its dependency on Gnome Online Accounts, and search is unreliable
- **Mailspring** - Built on Electron, which means heavy resource consumption
- **Evolution** - Feels like it's still stuck in 1999

Eterno Mail was created as a standalone, lightweight email client with a modern interface that just works. It is a fork of Aerion, extended with a refined navigation experience, Inbox Zero-inspired workflows, sender logos, and Brazilian Portuguese support.

## Design Goals

Eterno Mail is built around five core principles:

1. **Resource Efficiency** - Minimal CPU, RAM, and battery consumption
2. **Modern UX** - Clean, intuitive interface with dark mode support
3. **Keyboard & Mouse Friendly** - Full keyboard navigation with vim-style shortcuts
4. **Independence** - No dependency on Gnome Online Accounts or other system services
5. **Search That Works** - Basic search that actually finds your emails

## Technology

Eterno Mail is built with [Wails](https://wails.io) and [Svelte](https://svelte.dev), not Electron. This provides native performance with a modern web-based UI, without the memory overhead of running a full Chromium instance.

Eterno Mail is CASA Tier 2 Certified by Google's preferred [authorized assessor](https://appdefensealliance.dev/casa/casa-assessors): [TAC Security](https://tacsecurity.com/).

## Platform Support

While Linux is a first-class citizen, Eterno Mail also runs on:

- **Linux** - Flatpak or Binary
- **macOS** - Native .app bundle
- **Windows** - Standard installer

## Features at a Glance

- Multiple email accounts with unified inbox
- Conversation threads
- OAuth support for Gmail and Outlook
- CardDAV, Google, and Microsoft contact sync
- WYSIWYG composer with detachable window
- WYSIWYG signature editor
- Basic tracking element removal
- Full-text search
- Comprehensive keyboard shortcuts
- Light and dark themes
- S/MIME and PGP support
- Inbox categories, bulk actions, undo for read-state changes, and continuous message loading
- Sender logos with a local cache and privacy-preserving fallbacks
- Brazilian Portuguese interface translation
- 1st party extension system:
    - Contacts - ALPHA
    - Calendar - ALPHA

## Open Source

Eterno Mail is licensed under Apache 2.0. You can view the source code, report issues, and contribute at [github.com/wesleiaqui/EternoMail](https://github.com/wesleiaqui/EternoMail).

#### Sponsorship

Eterno Mail is maintained by Weslei. If the project is useful to you, consider starring it on [GitHub](https://github.com/wesleiaqui/EternoMail) or supporting its development through [Pixgg](https://pixgg.com/weslei).

#### Issue Contributors

Eterno Mail is driven by community feedback. Bug reports, feature requests, and pull requests are welcome.

See the project [README](https://github.com/wesleiaqui/EternoMail) for contributor credits.

#### Translation Contributors

Special thanks to translation contributors for making Eterno Mail more accessible.

See the project [README](https://github.com/wesleiaqui/EternoMail) for translation credits.

## Get Started

Ready to try Eterno Mail? Head to the [Installation Guide](/docs/getting-started/installation) to download and install it on your system.
