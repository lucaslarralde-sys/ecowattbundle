import Header from "./components/Header";
import Hero from "./components/Hero";
import Areas from "./components/Areas";
import Partners from "./components/Partners";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function App() {
  return (<>
    <Header /><Hero /><Areas />
    <Partners theme="image" />
    <Contact /><Footer />
  </>);
}