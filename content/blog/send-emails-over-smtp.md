---
title: Send emails over SMTP with OhMySMTP.com
date: "2021-02-06T22:12:03.284Z"
description: Our SMTP Server is now available 🚀🚀🚀
---

We've launched a new way to send emails with OhMySMTP.com that opens up hundreds of integrations. Our Simple Mail Transfer Protocol (SMTP) server is now live at `smtp.ohmysmtp.com`

## Why use SMTP?

SMTP is the backbone of email, and many applications and frameworks already use SMTP to send emails directly to other SMTP servers that in turn send the emails onto end user inboxes. In fact, SMTP is used under the hood for almost all emails and was first defined in 1982! So it's safe to say it's a stable and powerful way to send emails.

You may be able to send emails from an existing application by simply changing some configuration settings. However, remember that SMTP is a chatty protocol (literally, our SMTP server responds with "Nice to meet you"!) - and as a result it's a slower way to send an email. So if you can, use our HTTPS API to ensure your emails get there even faster.

## How to send an email over SMTP

To use our SMTP server, simply open up a connection to the server, and use your API Token as the username and password.

More details & documentation here: https://docs.ohmysmtp.com/integrations/smtp
