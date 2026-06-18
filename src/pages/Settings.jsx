import { useNavigate } from "react-router-dom";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import { Avatar } from "primereact/avatar";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";

export default function Settings() {
  const navigate = useNavigate();
  const userAgent = navigator.userAgent;

  const handleLogout = () => {
    confirmDialog({
  message: "¿Seguro que deseas cerrar sesión?",
  header: "Confirmación",
  icon: "pi pi-exclamation-triangle",

  acceptLabel: "Sí",
  rejectLabel: "No",

  accept: () => {
    sessionStorage.clear();
    navigate("/login");
  },

  reject: () => {}
  });
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
      <Card title="Configuración" style={{ width: "30rem", margin: "auto" }}>
        <div className="p-fluid">
          {/* Perfil del usuario */}
          <div style={{ marginBottom: "1rem", textAlign: "center" }}>
            <Avatar 
              image="https://i.pravatar.cc/150?img=3" 
              size="xlarge" 
              shape="circle" 
              className="p-mb-3" 
            />
            <h3>Jugador</h3>
            <p>Bienvenido a Sabiduría Oculta</p>
          </div>

          <Divider />

          {/* Información de la aplicación */}
          <div style={{ marginBottom: "1rem" }}>
            <h3>Información de la App</h3>
            <p><strong>Aplicación:</strong> Sabiduría Oculta</p>
            <p><strong>Versión:</strong> TP 4</p>
            <p><strong>User Agent:</strong> {userAgent}</p>
          </div>

          <Divider />

          {/* Botón de logout */}
          <Button 
            label="Cerrar sesión" 
            icon="pi pi-sign-out" 
            severity="danger" 
            onClick={handleLogout} 
            style={{ marginTop: "1rem" }}
          />

          {/* ConfirmDialog */}
          <ConfirmDialog />
        </div>
      </Card>
    </div>
  );
}