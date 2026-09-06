# EternoMail Docs

Welcome to the Eterno Mail documentation repository.

This project contains the introduction and documentation content for Eterno Mail,
including product overview, setup guidance, and usage references.

## Documentation Site Structure

- `mkdocs.yml` – site configuration
- `docs/index.md` – introduction and overview
- `docs/getting-started.md` – quick start guide
- `requirements-docs.txt` – pinned documentation dependencies

## Local Preview

### Prerequisites

- Python 3.9+
- `pip`

### Setup and Run

1. Create a virtual environment:
   ```bash
   python -m venv .venv
   ```
2. Activate it:
   - macOS/Linux:
     ```bash
     source .venv/bin/activate
     ```
   - Windows (PowerShell):
     ```powershell
     .venv\Scripts\Activate.ps1
     ```
3. Install documentation dependencies:
   ```bash
   pip install -r requirements-docs.txt
   ```
4. Run the docs site locally:
   ```bash
   mkdocs serve
   ```
5. Open `http://127.0.0.1:8000` in your browser.
