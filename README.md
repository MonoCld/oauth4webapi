# OAuth 2 / OpenID Connect for Web Platform API JavaScript runtimes
 
This software is a collection of routines upon which framework-specific client modules may be written. Its objective is to support and, where possible, enforce secure and current best practices using only capabilities common to Browser and Non-Browser JavaScript-based runtime environments.

Target profiles of this software are OAuth 2.1, OAuth 2.0 complemented by the latest Security BCP, and FAPI 2.0. Where applicable Open ID Connect is also supported.

## In Scope & Implemented

- Authorization Server Metadata discovery
- Authorization Code Flow (profiled under OpenID Connect 1.0, OAuth 2.0, OAuth 2.1, and FAPI 2.0), PKCE
- Refresh Token, Device Authorization, and Client Credentials Grants
- Demonstrating Proof-of-Possession at the Application Layer (DPoP)
- Token Introspection and Revocation
- Pushed Authorization Requests (PAR)
- UserInfo and Protected Resource Requests
- Authorization Server Issuer Identification
- JWT Secured Introspection, Response Mode, Authorization Request, and UserInfo

## [Certification](https://openid.net/certification/faq/)

[<img width="96" height="50" align="right" src="https://user-images.githubusercontent.com/241506/166977513-7cd710a9-7f60-4944-aebe-a658e9f36375.png" alt="OpenID Certification">](#certification)

[Filip Skokan](https://github.com/panva) has certified that [this software](https://github.com/panva/oauth4webapi) conforms to the Basic RP Conformance Profile of the OpenID Connect™ protocol.

## [💗 Help the project](https://github.com/sponsors/panva)

## Dependencies: 0

## [Documentation](docs/README.md)

## [Examples](examples/README.md)

**`example`** ESM import
```js
import * as oauth2 from '@panva/oauth4webapi'
```

**`example`** Deno import
```js
import * as oauth2 from 'https://deno.land/x/doauth/src/index.ts'
```

- Authorization Code Flow - OpenID Connect [source](examples/code.ts), or plain OAuth 2 [source](examples/oauth.ts)
- Private Key JWT Client Authentication - [source](examples/private_key_jwt.ts) | [diff from code flow](examples/private_key_jwt.diff)
- DPoP - [source](examples/dpop.ts) | [diff from code flow](examples/dpop.diff)
- Pushed Authorization Request (PAR) - [source](examples/par.ts) | [diff from code flow](examples/par.diff)
- JWT Authorization Response Mode (JARM) - [source](examples/jarm.ts) | [diff from code flow](examples/jarm.diff)
- Client Credentials Grant - [source](examples/client_credentials.ts)
- Device Authorization Grant - [source](examples/device_authorization_grant.ts)

## Runtime requirements

The supported JavaScript runtimes include ones that

- are reasonably up to date ECMAScript (targets ES2020, but may be further transpiled for compatibility)
- support required Web API globals and standard built-in objects
   - [Fetch API][] and its related globals [fetch][], [Response][], [Headers][]
   - [Web Crypto API][] and its related globals [crypto][], [CryptoKey][]
   - [Encoding API][] and its related globals [TextEncoder][], [TextDecoder][]
   - [URL API][] and its related globals [URL][], [URLSearchParams][]
   - [atob][] and [btoa][]
   - [Uint8Array][]

These are (not an exhaustive list):

- Browsers
- Cloudflare Workers
- Deno (^1.21.0)
- Electron
- Next.js Middlewares
- Node.js ([runtime flags may be needed](https://github.com/panva/oauth4webapi/issues/8))
- Vercel Edge Functions

## Out of scope

- CommonJS
- Implicit, Hybrid, and Resource Owner Password Credentials Flows
- Mutual-TLS Client Authentication and Certificate-Bound Access Tokens
- JSON Web Encryption (JWE)
- JSON Web Signature (JWS) rarely used algorithms and HMAC
- Automatic polyfills of any kind 

[Web Crypto API]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API
[Fetch API]: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
[fetch]: https://developer.mozilla.org/en-US/docs/Web/API/fetch
[TextDecoder]: https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder
[TextEncoder]: https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder
[btoa]: https://developer.mozilla.org/en-US/docs/Web/API/btoa
[atob]: https://developer.mozilla.org/en-US/docs/Web/API/atob
[Uint8Array]: https://developer.mozilla.org/en-US/docs/Web/API/Uint8Array
[Response]: https://developer.mozilla.org/en-US/docs/Web/API/Response
[Headers]: https://developer.mozilla.org/en-US/docs/Web/API/Headers
[crypto]: https://developer.mozilla.org/en-US/docs/Web/API/crypto
[CryptoKey]: https://developer.mozilla.org/en-US/docs/Web/API/CryptoKey
[URLSearchParams]: https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
[Encoding API]: https://developer.mozilla.org/en-US/docs/Web/API/Encoding_API
[URL API]: https://developer.mozilla.org/en-US/docs/Web/API/URL_API
[URL]: https://developer.mozilla.org/en-US/docs/Web/API/URL
