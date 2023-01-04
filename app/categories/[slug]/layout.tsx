import Footer from "../../Footer";

interface IProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: IProps) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
}
