# Security

## Reporting a problem

Please report security issues privately through **[Report a vulnerability](https://github.com/ahmed3819350-bot/shortlist/security/advisories/new)** on this repository, not in a public issue. Include the Shortlist version, what you did, and what happened. You will get a reply within 7 days.

## Verifying a download

Only download Shortlist from this repository's [Releases](https://github.com/ahmed3819350-bot/shortlist/releases) page. Each release lists the SHA-256 checksum of its installer. To check yours, open PowerShell in the folder where you saved it and run:

```powershell
Get-FileHash .\Shortlist-Setup-<version>.exe -Algorithm SHA256
```

The result must match the checksum in the release notes. Release tags are protected and cannot be changed once published.

## How Shortlist handles your data

- It makes no network requests. Your CV, profile and job postings never leave your computer.
- Your profile and settings are stored in `%APPDATA%\Shortlist`. Your documents are saved to the folder you choose.
- The app window runs sandboxed, cannot navigate to websites or open other windows, and only accepts requests from its own pages.
- The PDF engine runs in untrusted mode, with shell commands and other risky features turned off.
