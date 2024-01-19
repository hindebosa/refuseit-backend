/* eslint-disable max-len */

import { baseEmailTemplate } from './base-email-template';

export const signupEmailTemplate = (names: string, email: string, link: string) =>
  baseEmailTemplate(`
    <tr
      bgcolor="#ffffff"
      style="
        background-color: #fff;
        padding: 0 24px;
        text-align: center;
        color: #027053;
      "
    >
      <td
        style="font-weight: 500; font-size: 30px; line-height: 38px"
      >
        <span>Welcome to RefuseIt</span>
      </td>
    </tr>

    <tr style="height: 16px; background-color: #fff">
      <td style="background-color: #fff">&nbsp;</td>
    </tr>

    <tr
      bgcolor="#ffffff"
      style="
        background-color: #fff;
        text-align: center;
        font-weight: 400;
        font-size: 18px;
        line-height: 28px;
      color: #344054;
      "
    >
    <td style="">
    <div style="padding: 0 24px">
      Hi ${names}, <br />
      <br />
        Welcome to Refuse! Your partner in recycling and
        reuse
      <br />
      <br />
      Click the button bellow to get started.
    </div>
  </td>
    </tr>

    <tr style="height: 48px; background-color: #fff">
      <td style="background-color: #fff">&nbsp;</td>
    </tr>

    <tr
      bgcolor="#ffffff"
      style="background-color: #fff; text-align: center"
    >
      <td style="height: 44px">
        <a
          style="
            width: 157px;
            height: 44px;
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            text-decoration: none;
            border-radius: 8px;

            background-color: #059c56;
            color: white;
            padding: 10px 18px;
          "
          href="${link}"
          >Verify Account</a
        >
      </td>
    </tr>

    <tr
      style="height: 48px; background-color: #fff; text-align: center"
    >
      <td style="background-color: #fff">&nbsp;</td>
    </tr>

    <tr bgcolor="#ffffff" style="background-color: #fff; color: #344054;">
      <td style="">
        <div style="padding: 0 24px">
          Thank you, <br />
          <span
            style="
              font-weight: 600;
              font-size: 16px;
              line-height: 24px;
            "
          >
            The RefuseIt team
          </span>
        </div>
      </td>
    </tr>

    <tr
      style="height: 64px; background-color: #fff; text-align: center"
    >
      <td style="background-color: #fff">&nbsp;</td>
    </tr>

    <tr bgcolor="#ffffff" style="background-color: #fff">
      <td style="">
        <div
          style="
            padding: 0 24px;
            color: #667085;
            font-size: 14px;
            line-height: 21px;
          "
        >
          This email was sent to
          <span style="color: #027053">${email}</span>. If you'd
          rather not receive this kind of email, you can
          <span style="color: #027053">unsubscribe</span>
          <span style="color: #027053"
            >or manage your email preferences.</span
          >
          <br />
          <br />
          © 2023 Datametry
        </div>
      </td>
    </tr>
`);
