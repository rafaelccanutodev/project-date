import { useState } from "react";
import { calculateEventMessage } from "../services/dateCalculator";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

function DateCalculatorForm() {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [eventName, setEventName] = useState("");
  const [result, setResult] = useState<string>("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!startDate || !endDate || !eventName) {
      alert("Preencha todos os campos.");
      return;
    }

    const message = calculateEventMessage(
      new Date(startDate),
      new Date(endDate),
      eventName
    );

    setResult(message);
  }

  return (
    <>
      <Header />

      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6 col-lg-5">
            <div className="card shadow-lg border-0 rounded-4">
              <div className="card-body p-4">

                <h3 className="text-center mb-4">
                  CALCULE AQUI:
                </h3>

                <form onSubmit={handleSubmit}>

                  <div className="mb-3">
                    <label className="form-label">Data inicial</label>
                    <input
                      type="date"
                      className="form-control"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Data do evento</label>
                    <input
                      type="date"
                      className="form-control"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label">Evento</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ex: Natal, Aniversário, Viagem..."
                      value={eventName}
                      onChange={(e) => setEventName(e.target.value)}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary w-100">
                    Calcular
                  </button>

                </form>

                {result && (
                  <div className="alert alert-success text-center mt-4">
                    <strong>{result}</strong>
                    
                  </div>
                )}
                <button className="btn btn-secondary w-100 mt-2" onClick={() => navigate("/")}>
                  Voltar ao home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DateCalculatorForm;
