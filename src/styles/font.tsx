import localFont from "next/font/local";

export const myFont = localFont({
  src: [
    {
      path: "./AppleSDGothicNeoR.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./AppleSDGothicNeoM.ttf",
      weight: "500",
    },
    {
      path: "./AppleSDGothicNeoB.ttf",
      weight: "600",
      style: "bold",
    },
  ],
});
