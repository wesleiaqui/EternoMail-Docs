---
sidebar_position: 7
---

# Frequently Asked Questions

Common questions about Eterno Mail.

## General

### Is Eterno Mail free?

Yes. Eterno Mail is open-source software released under the Apache License 2.0. You can use it for free, modify it, and distribute it.

### Where is my data stored?

All your data is stored locally on your computer. Eterno Mail does not operate cloud servers. Your emails, credentials, and settings stay on your device.

### Does Eterno Mail sync to the cloud?

No. Eterno Mail connects directly to your email provider's servers via IMAP/SMTP. There is no Eterno Mail cloud service. Your emails are stored both on your email provider's servers and cached locally on your computer.

### What makes Eterno Mail lightweight?

Eterno Mail is built with [Wails](https://wails.io) and [Svelte](https://svelte.dev). Wails uses native system components rather than bundling Chromium, which reduces memory use and improves startup time.

### Is Eterno Mail safe to use?

Eterno Mail is open source, so you can review the [source code](https://github.com/wesleiaqui/EternoMail). It does not collect telemetry, does not phone home, and stores data locally.

It has also recently been CASA Tier 2 certified and verified by Google.

## Accounts

### Can I use multiple email accounts?

Yes. You can reasonably add as many email accounts as you want from different providers. All accounts appear in the sidebar, and the Unified Inbox shows messages from all accounts combined. Aerion is mostly tested with around 10 accounts added to it.

### Why do I need to re-authorize my Gmail/Outlook account?

OAuth tokens expire periodically for security reasons. When they expire, you'll need to re-authorize to get a new token. This is normal behavior for OAuth-based authentication.

### What's the difference between OAuth and App Password?

- **OAuth** - You sign in through your provider's website (Google or Microsoft) and grant Eterno Mail permission. It is more secure and easier to set up, but tokens expire.
- **App Password** - You generate a special password in your provider's settings and enter it in Eterno Mail. This works when OAuth is unavailable or restricted.

### Can I use work/corporate email accounts?

Yes, if your organization allows third-party email clients:

- **Microsoft 365/Office 365** - Works with OAuth if your admin has approved third-party apps
- **Google Workspace** - Works when your organization permits third-party email clients.
- **Generic IMAP/SMTP** - Works with any corporate email server that supports IMAP

## Gmail & Outlook

### Why does Google show a security warning?

Eterno Mail is CASA Tier 2 certified. If a warning still appears, confirm that you are on a trusted connection and try again.

### How do I create a Google App Password?

1. Go to your [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-Step Verification if not already enabled
3. Under 2-Step Verification, click "App passwords"
4. Select "Mail" and give it a name like "Eterno Mail"
5. Copy the 16-character password and use it in Eterno Mail

### Does Eterno Mail read my emails on a server?

No. Eterno Mail runs entirely on your computer. When it accesses email, it connects directly to your provider. The developers do not see your emails.

### Can I use Aerion with Gmail labels?

Gmail labels appear as folders in Aerion. You can view mail by label and move messages to labels. However, Gmail's label-specific features (like applying multiple labels to one email) are not fully supported in the standard IMAP interface.

## Features

### Can I use Eterno Mail offline?

Partially. You can read emails that have been cached locally, but you cannot send emails or sync new messages without an internet connection. However, you can save drafts locally which will sync to the provider draft folder after once it's back online.

### How do I set Eterno Mail as my default email app?

This depends on your operating system:

**Linux (GNOME):**
```bash
xdg-settings set default-url-scheme-handler mailto aerion.desktop
```

**Linux (KDE):**
Set in System Settings → Applications → Default Applications

**macOS:**
Open Mail.app → Preferences → Default email reader → Select Eterno Mail

**Windows:**
Settings → Apps → Default apps → Email → Select Eterno Mail

### Can I import emails from Thunderbird?

Not currently. Aerion syncs emails from your email servers via IMAP. If your emails are on the server, they'll appear in Aerion once you add your account.

### Can I set up email filters/rules?

No. Aerion doesn't currently support client-side email filtering. Set up rules through your email provider's web interface instead.

### Does Aerion support calendar integration?

As of v0.3.0, Aerion is shipped with a calendar extension disabled by default. Users can enable it to integrate Calendar workflow.

### Where can I see my synced contacts?

Aerion by default only syncs and read contacts for auto-completion. However, it's shipped with a disabled by default contacts management extension which can be enabled by users to fully manage their contacts.

## Technical

### What platforms does Eterno Mail support?

- Linux (Flatpak or binary, amd64, arm64)
- macOS (Intel and Apple Silicon)
- Windows (amd64, arm64)

### What are the system requirements?

Aerion is lightweight and runs on most modern systems:

- 2 GB RAM (4 GB recommended)
- 100 MB disk space (plus space for cached emails)
- Internet connection for email sync

**Linux:** Requires WebKit2GTK 4.1

### How do I completely uninstall Eterno Mail?

1. Remove the application
2. Delete the configuration directory:
   - Linux: `~/.config/aerion/`
   - macOS: `~/Library/Application Support/aerion/`
   - Windows: `%APPDATA%\aerion\`
3. Remove the data directory:
   - Linux: `~/.local/share/aerion/`
   - macOS: `~/Libary/Application Support/aerion`
   - Windows: `%APPDATA%\Aerion`
4. Remove the cache directory:
   - Linux: `~/.cache/aerion/`
   - macOS: `~/Library/caches/Aerion/`
   - Windows: `%LOCALAPPDATA%\Aerion\Cache`

## Support

### Where do I report bugs?

Report bugs on [GitHub Issues](https://github.com/wesleiaqui/EternoMail/issues).

### How can I contribute?

Eterno Mail welcomes contributions! Check the [GitHub repository](https://github.com/wesleiaqui/EternoMail) for:

- Bug reports and feature requests
- Bug reports and feature requests
- Pull requests and translation contributions

### Is there commercial support?

There is no official commercial support program. For community support, use GitHub Issues.

For community help, use GitHub Issues.
