# QR Code API

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development](#development)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [API Endpoints](#api-endpoints)
  - [Get QR Code (plaintext)](#get-qr-code-plaintext)
  - [Get QR Code (base64)](#get-qr-code-base64)
  
## Prerequisites

- [Mise](https://mise.jdx.dev/) - Version manager and task runner

## Installation

1. Clone the repository:
```bash
git clone https://github.com/jaredph/qr.git
cd qr
```

1. Install dependencies:
```bash
mise trust
mise install
mise install-deps
```

## Development

Start the development server with hot reload:
```bash
mise run dev
```

## Environment variables

Default env variables are available in the [mise.toml](./mise.toml) file.

## Available Scripts

- `mise run install-deps` - Install project dependencies
- `mise run build` - Build the TypeScript project
- `mise run dev` - Start development server with hot reload
- `mise run start` - Start the production server
- `mise run check` - Run Biome checks and apply fixes
- `mise run format` - Format code using Biome
- `mise run lint` - Lint code using Biome

## API Endpoints

### Get qr code `plaintext`
```http
GET /qr?url=https://example.com
```

*Response:*

```shell
HTTP/1.1 302 Found
location: /qr/aHR0cHM6Ly9leGFtcGxlLmNvbQ
content-type: text/plain; charset=UTF-8
```

### Get qr code `base64`
```http
GET /qr/aHR0cHM6Ly9leGFtcGxlLmNvbQ
```

*Response:*
```shell
HTTP/1.1 200 OK
content-type: image/png
```
