---
sidebar_position: 2
pagination_next: getting-started/verify
---

# macOS

1. Download the appropriate archive from the [latest Eterno Mail release](https://github.com/wesleiaqui/EternoMail/releases/latest):
    - Intel: `Eterno-Mail-darwin-amd64.zip`
    - Apple Silicon: `Eterno-Mail-darwin-arm64.zip`
2. Extract the archive.
3. Move `eterno-mail.app` to your Applications folder.
4. On first launch, you may see a security warning since the app is not signed with an Apple Developer certificate

## Bypassing Gatekeeper

If macOS blocks the app:

1. Right-click (or Control-click) on `eterno-mail.app`
2. Select "Open" from the context menu
3. Click "Open" in the dialog that appears

Alternatively, run this command:
```bash
xattr -cr /Applications/eterno-mail.app
```
