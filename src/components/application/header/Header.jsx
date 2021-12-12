import "../header/header.css"
import littleLogo from "../../assets/logo-mini.png"

export default function Header(){
    return(
        <header>
            <img src={littleLogo} alt="Logo ZapRecall pequeno" />
        </header>
    )
}