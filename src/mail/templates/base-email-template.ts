/* eslint-disable max-len */
export const baseEmailTemplate = (body: string) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
      rel="stylesheet"
    />
    <style>
      body,
      table,
      td,
      a {
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }

      table,
      td {
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
      }

      img {
        -ms-interpolation-mode: bicubic;
      }

      img {
        border: 0;
        height: auto;
        line-height: 100%;
        outline: none;
        text-decoration: none;
      }

      table {
        border-collapse: collapse !important;
      }

      body {
        height: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
        width: 100% !important;
        font-family: Rubik, sans-serif;
      }

      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }

      div[style*='margin: 16px 0;'] {
        margin: 0 !important;
      }

      .button {
        margin-top: 15px;
        color: #fff;
        background-color: rgb(19, 47, 85);
        border-color: rgb(19, 47, 85);
        display: inline-block;
        font-weight: 400;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        border: 1px solid transparent;
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        line-height: 1.5;
        border-radius: 0.25rem;
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
          border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      }
    </style>
  </head>

  <body
    style="
      background-color: #f9fafb;
      margin: 0 !important;
      padding: 0 !important;
    "
  >
  <table border="0" cellpadding="0" cellspacing="0" width="100%">
  <tbody style="background-color: #fff">
    <tr style="height: 62px; text-align: center">
      <td style="background-color: #f9fafb">&nbsp;</td>
    </tr>

    <tr>
      <td
        bgcolor="#F9FAFB"
        align="center"
        style="padding: 0px 10px 0px 10px;"
      >
        <table border="0" cellpadding="0" cellspacing="0" width="480">
          <tr
            bgcolor="#ffffff"
            style="background-color: #fff; padding: 0 24px; height: 80px"
          >
            <td style="padding: 24px">
              <img
                width="135.34px"
                height="32px"
                src="https://res.cloudinary.com/premices/image/upload/v1685539382/image_1_j2nlmn.png"
                alt=""
              />
            </td>
          </tr>
        ${body}
        <tr
          bgcolor="#ffffff"
          style="background-color: #fff; padding: 0 24px; height: 80px;"
        >
            <td style="padding: 24px;">
                <div>
                  <img
                  width="135.34px"
                  height="32px"
                  src="http://cdn.mcauto-images-production.sendgrid.net/cf21a8124f5b36b7/dd053d24-76ed-49df-8bf3-7fb6716f27f1/271x64.png"
                  alt=""
                  style="float: left;"
                  />
                  <img
                      width="20"
                      src="http://cdn.mcauto-images-production.sendgrid.net/cf21a8124f5b36b7/1ad2db8e-c84a-49d9-b74a-86c2c6bba206/40x40.png"
                      style="height: 20px !important; float: right; margin-top: 6px;"
                      alt=""
                      />
                </div>
              </td>
            </tr>

              <tr style="height: 62px; text-align: center">
                <td style="background-color: #f9fafb">&nbsp;</td>
              </tr>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
`;
