/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "chat-app",
  titleTemplate: "%s | chat-app",
  defaultTitle: "chat-app",
  description: "Next.js + chakra-ui + TypeScript template",
  canonical: "https://chat-app-ce087.web.app",
  openGraph: {
    url: "https://chat-app-ce087.web.app",
    title: "chat-app",
    description: "Next.js + chakra-ui + TypeScript template",
    images: [
      {
        url: "https://og-image.sznm.dev/**chat-app**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250",
        alt: "chat-app.sznm.dev og-image",
      },
    ],
    site_name: "chat-app",
  },
  twitter: {
    handle: "@sozonome",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
