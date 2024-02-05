import { Inter, Poppins, Rubik_Mono_One } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const rubikMonoOne = Rubik_Mono_One({
  subsets: ["latin"],
  weight: ["400"],
});
