import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { ProgressSpinner } from "primereact/progressspinner";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setLoading(true);

    setTimeout(() => {
      sessionStorage.setItem("loggedIn", "true");
      window.location.href = "/";
    }, 2000);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f4f6f8"
      }}
    >
      <Card style={{ width: "25rem" }}>
        <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <img
            src="/logo.png"
            alt="Sabiduría Oculta"
            style={{
              width: "100px",
              height: "100px",
              objectFit: "contain",
              marginBottom: "10px"
            }}
          />

          <h2 style={{ color: "#3b82f6", margin: 0 }}>
            Sabiduría Oculta
          </h2>
        </div>

        <div className="p-fluid">
          <div
            className="p-field"
            style={{ marginBottom: "1rem" }}
          >
            <label htmlFor="username">
              Usuario
            </label>

            <InputText id="username" />
          </div>

          <div
            className="p-field"
            style={{ marginBottom: "1rem" }}
          >
            <label htmlFor="password">
              Contraseña
            </label>

            <InputText
              id="password"
              type="password"
            />
          </div>

          {loading ? (
            <ProgressSpinner
              style={{
                width: "30px",
                height: "30px"
              }}
            />
          ) : (
            <Button
              label="Iniciar sesión"
              icon="pi pi-sign-in"
              onClick={handleLogin}
              style={{
                marginTop: "1rem",
                backgroundColor: "#3b82f6",
                borderColor: "#3b82f6"
              }}
            />
          )}
        </div>
      </Card>
    </div>
  );
}