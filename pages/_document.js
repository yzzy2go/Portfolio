import { Main, NextScript } from "next/document";

export default function Document() {
  return (
    <body>
      <Main />
      <NextScript />
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WXKNG85R" height="0" width="0" style="display: none; visibility: hidden;" />`,
        }}
      />
    </body>
  );
}
