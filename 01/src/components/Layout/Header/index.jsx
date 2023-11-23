import Logo from "./components/Logo"
import Links from "./components/Links"
import Contact from "./components/Contact"

export default function Header() {
  return (
    <>
      <div className="flex justify-between p-8 container mx-auto">
        <Logo />
        <Links />
        <Contact />
      </div>
    </>
  );
}
