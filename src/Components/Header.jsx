import logo from "../assets/quiz-logo.png"
export default function Header() {
    return(
         <header>
        <img src={logo} alt="quiz-logo" />
        <h1>React Quiz by KMMR</h1>
        </header>);
}