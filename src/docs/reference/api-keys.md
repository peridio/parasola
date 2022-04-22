---
title: API Keys
---

<head>
  <title>Ref | API Keys</title>
</head>

API keys are used to authenticate requests with the [CLI](/cli/authentication) and [API](/api/0#tag/Authentication). They are strings matching this regex `/[A-Za-z0-9+/]{92}/g`.

When an API key is created it is associated with a new authentication identity. The created authentication identity is given the same authorization role as the authenticated identity.