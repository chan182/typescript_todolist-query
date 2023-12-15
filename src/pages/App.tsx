import Footer from "../redux/components/Footer";
import Header from "../redux/components/Header";
import Input from "../redux/components/Input";
import Todolist from "../redux/components/Todolist";

function App() {
    return (
        <>
            <Header />
            <Input />
            <Todolist isActive={true} />
            <Todolist isActive={false} />
            <Footer />
        </>
    );
}

export default App;
