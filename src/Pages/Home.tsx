import EditorArea from "../components/EditorArea";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ShowResult from "../components/showResult";

const Home = () => {
  return (
    <div className="min-h-screen w-full lg:w-9/12 mx-auto flex flex-col p-3">
      <Header />
      <EditorArea />
      <ShowResult />
      <Footer />
    </div>
  );
};

export default Home;
