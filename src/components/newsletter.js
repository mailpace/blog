import React from "react"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

const SubscribeForm = () => (
  <form
    action="https://buttondown.email/api/emails/embed-subscribe/mailpace"
    method="post"
    target="popupwindow"
    onSubmit={() => window.open('https://buttondown.email/mailpace', 'popupwindow')}
    className="embeddable-buttondown-form"
  >
    <h1>You've read this far, want more?</h1>
    <label htmlFor="bd-email">Sign up our product newsletter <b>Awesome Email</b> to get product updates and all the latest email news, right in your inbox!</label>
    
    <EmailInput>
        <input type="email" name="email" id="bd-email" placeholder="email@example.com"/>
        <SubscribeButton type="submit" value="Subscribe" />
    </EmailInput>
    <hr />
  </form>
)

const EmailInput = styled.div`
  display: flex;
  border: 1px solid #dfe1e5;
  border-radius: 10px;
  margin: 0 auto ${rhythm(1)};
  width: 100%;
  height: 3rem;
  background: #fdfdfd;
  margin-top: 14px;

  #bd-email {
    display: flex;
    flex: 100%;
    height: 100%;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    background-color: transparent;
    border: none;
    margin: 0;
    padding 0;
    padding-left: 10px;
    color: rgb(55, 53, 47);
    word-wrap: break-word;
    outline: none;
  }
`

const SubscribeButton = styled.input`
  display: block;
  text-align: center;
  box-sizing: border-box;
  text-decoration: none;
  padding: 10px 25px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2px;
  height: 100%;
  margin-left: 5px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 0 10px 10px 0;
`;

export default SubscribeForm
