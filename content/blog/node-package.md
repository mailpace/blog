---
title: Send transactional emails with Node.js over OhMySMTP
date: "2021-02-04T22:12:03.284Z"
description: Node.js package launch 🚀
---

We're pleased to announce the availability of our open source Node.js package for sending emails over OhMySMTP.

This is probably the **easiest way to send transactional emails from Node.js!** 

The npm package allows you to send emails in a couple of lines of code, it's a simple as creating a client with your API token, and calling `sendEmail` with your email contents (see here for a full list of email properties: https://docs.ohmysmtp.com/reference/send):

```javascript
const OhMySMTP = require('@ohmysmtp/ohmysmtp.js');
const client = new OhMySMTP.DomainClient('API_TOKEN_HERE');

client.sendEmail({
    from: 'test@test.com',
    to: 'test@test.com',
    subject: 'test',
    htmlbody: '<H1>HTML Email</h1>',
  });
```

The package is available on npm here: https://www.npmjs.com/package/@ohmysmtp/ohmysmtp.js

Source code here: https://github.com/ohmysmtp/ohmysmtp.js

And finally the docs: https://docs.ohmysmtp.com/integrations/node

If you don't have an OMS account, get one set up today: https://app.ohmysmtp.com/users/sign_up

Happy sending!
Paul.