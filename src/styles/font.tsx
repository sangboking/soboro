import localFont from "next/font/local";

export const myFont = localFont({
  src: [
    {
      path: "./AppleSDGothicNeoR.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./AppleSDGothicNeoB.ttf",
      weight: "500",
      style: "bold",
    },
  ],
});
