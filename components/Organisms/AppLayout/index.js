import { Header } from "../../Molecules";
function AppLayout({ children }) {
  return (
    <html>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

export default AppLayout;
