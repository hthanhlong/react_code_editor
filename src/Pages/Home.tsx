import EditorArea from "../components/EditorArea";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ShowResult from "../components/showResult";

const Home = () => {
  return (
    <div className="bg-slate-900 min-h-screen overflow-hidden flex flex-col">
      <Header />
      <EditorArea />
      <ShowResult />
      <Footer />
    </div>
  );
};

export default Home;
