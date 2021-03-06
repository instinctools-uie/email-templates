export default function createEmailBody(title, content, logo) {
    return `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <title>
                ${title}
            </title>
            <style>
                body {
                    font-family: Helvetica, Arial, sans-serif;
                    font-size:16px;
                    background: #f0f4f7;
                    color: #051a2d;
                }                            
            </style>
        </head>
        <body>
          <table border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable">
              <tr>
                  <td align="center" valign="top">
                      <table border="0" cellpadding="20" cellspacing="0" width="600" id="emailContainer">
                          <tr style="background-color: #051a2d">
                              <td align="center" valign="top">
                                  <table border="0" cellpadding="20" cellspacing="0" width="100%" id="emailHeader">
                                      <tr>
                                          <td align="center" valign="top" style="color: white">
                                              <img src="${logo}" alt="Company logo description" />
                                          </td>
                                      </tr>
                                  </table>
                              </td>
                          </tr>
                          <tr>
                              <td align="center" valign="top" style="background: white;">
                                  <table border="0" cellpadding="20" cellspacing="0" width="100%" id="emailBody">
                                      <tr>
                                          <td align="center" valign="top">
                                            ${content}
                                          </td>
                                      </tr>
                                  </table>
                              </td>
                          </tr>
                          <tr>
                              <td align="center" valign="top" style="background-color: #051a2d; font-size: 11px;">
                                  <table border="0" cellpadding="20" cellspacing="0" width="100%" id="emailFooter">
                                      <tr>
                                          <td align="center" valign="top" style="color: white">
                                              &copy; ${new Date().getFullYear()} Company. All rights reserved.
                                          </td>
                                      </tr>
                                  </table>
                              </td>
                          </tr>
                      </table>
                  </td>
              </tr>
          </table>
        </body>
    </html>
    `;
}
