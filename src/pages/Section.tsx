import RelogioMan from '../assets/relogio-man.jpg'
import { useNavigate } from "react-router-dom";

function Section() {
    const navigate = useNavigate();
    return (
        <section className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <img src={RelogioMan} alt="Relógio" className="img-fluid" />
                </div>

                <div className="col-md-5">
                    <h1>Calculo de datas</h1>
                    <p>Ferramenta desenvolvida para ajudar você a calcular datas de eventos importantes com facilidade e precisão.</p>
                    <button className="btn btn-primary" onClick={() => navigate("/calcular")}>Começar</button>
                </div>
            </div>
        </section>
    )
}
export default Section;