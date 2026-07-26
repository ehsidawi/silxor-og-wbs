# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in this template, please email
**contact@silxor.com** with a description and reproduction steps.

Please do **not** open a public GitHub issue for security problems.

We aim to acknowledge reports within 72 hours and to publish a fix or
mitigation within 30 days of confirming a valid report.

## Secrets & Credentials

This repository must never contain:

- Private API keys, secret tokens, or passwords
- `.env` files with real credentials (only `.env.example` is tracked)
- Customer data, contracts, or internal documentation

Only **publishable / anon** keys (safe for client-side use) may appear in
committed configuration.

## Supported Versions

Only the `main` branch receives security updates.
