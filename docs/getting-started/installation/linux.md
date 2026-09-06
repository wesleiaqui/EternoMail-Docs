---
sidebar_position: 1
pagination_next: getting-started/verify
---

# Linux

## Flatpak
---

Flathub:

```bash
flatpak install --user io.github.wesleiaqui.eternomail
```

**Note:** Flathub releases are usually at least a few hours behind Github releases.

If you want to install the latest Flatpak directly built on GitHub, download the latest `.flatpak` file from the [release page](https://github.com/wesleiaqui/EternoMail/releases) and install it from the directory where it was downloaded:

```bash
flatpak install --user EternoMail-<VERSION>-<ARCH>.flatpak
```

If Eterno Mail does not launch or renders incorrectly, try disabling DMABUF, which is known to be buggy on some hardware combinations:

```bash
flatpak run --env=WEBKIT_DISABLE_DMABUF_RENDERER=1 io.github.wesleiaqui.eternomail
```
If that solves the issues, you can make this permanent with:

```bash
flatpak override --user --env=WEBKIT_DISABLE_DMABUF_RENDERER=1 io.github.wesleiaqui.eternomail
```

## Binary + Desktop File + Icon
---

If you prefer to use the binary which is most heavily tested:

1. Eterno Mail requires WebKit2GTK. On many distributions this is already installed; otherwise, install it with your package manager:

Debian/Ubuntu:

```bash
sudo apt install libwebkit2gtk-4.1-0
```
Fedora:

```bash
sudo dnf install webkit2gtk4.1
```
Arch Linux:

```bash
sudo pacman -S webkit2gtk-4.1
```

2. Download the latest tarball for:

- [amd64](https://github.com/wesleiaqui/EternoMail/releases/latest)
- [arm64](https://github.com/wesleiaqui/EternoMail/releases/latest)

3. Untar and install:

```bash
tar -xzvf aerion-linux-*.tar.gz
cd aerion-linux-<arch>
./install.sh
# This install script will give you a choice to install it system-wide or just for the user.
# Follow the prompts and complete the installation.
```

If you run into issues running Eterno Mail, try:

```bash
export WEBKIT_DISABLE_DMABUF_RENDERER=1 && aerion
```

If this solves the issues, make this environment variable permanent for the user.

## AppImage
---

AppImage is not distributed because a `webkit2gtk-4.1`-based build cannot be maintained reliably across all distributions. Use Flatpak or the binary package instead.

## Community Maintained Packages

Some community members have been maintaining unofficial packages of Aerion for different package managers and distros. You can find them here:

[![Packaging status](https://repology.org/badge/vertical-allrepos/aerion.svg)](https://repology.org/project/aerion/versions)

If there are any issues with these packages, please contact the respective maintainer. One known issue is that the various AUR versions of Aerion does not compile with Aerion's Microsoft and Google OAuth creds and therefore will not work with Google and Microsoft out of the box as expected. This is likely a problem for most community maintained packages with the exception of [nixpkgs](https://github.com/NixOS/nixpkgs/pull/521267).

### Fedora COPR

[infiniti151/flatpak-apps](https://copr.fedorainfracloud.org/coprs/infiniti151/flatpak-apps/package/aerion/)

```bash
sudo dnf copr enable infiniti151/flatpak-apps

sudo dnf install aerion
```

maintained by: [@Infiniti151](https://github.com/Infiniti151)
