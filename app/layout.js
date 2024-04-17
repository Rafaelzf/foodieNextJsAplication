import "./globals.css";
import { AppLayout } from "../components/Organisms";

export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return <AppLayout>{children}</AppLayout>;
}
