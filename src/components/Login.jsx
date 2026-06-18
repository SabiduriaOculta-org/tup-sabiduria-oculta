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
      navigate("/home");
    }, 2000);
  };

  return (
    <div 
      style={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        height: "100vh" 
      }}
    >
      <Card title="Login" style={{ width: "25rem" }}>
        <div className="p-fluid">
          <div className="p-field" style={{ marginBottom: "1rem" }}>
            <label htmlFor="username">Usuario</label>
            <InputText id="username" />
          </div>
          <div className="p-field" style={{ marginBottom: "1rem" }}>
            <label htmlFor="password">Contraseña</label>
            <InputText id="password" type="password" />
          </div>
          {loading ? (
            <ProgressSpinner style={{ width: "30px", height: "30px" }} />
          ) : (
            <Button 
              label="Iniciar sesión" 
              icon="pi pi-sign-in" 
              onClick={handleLogin} 
              style={{ marginTop: "1rem" }}
            />
          )}
        </div>
      </Card>
    </div>
  );
}