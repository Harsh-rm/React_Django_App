import React from "react";
import { useNavigate } from "react-router-dom";
import ThreeScene from "./ThreeScene"; 

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
      <button
        onClick={() => navigate("/animation")}
        style={{
          padding: "15px 30px",
          fontSize: "18px",
          fontWeight: "bold",
          background: "linear-gradient(45deg, #ff6b6b, #f94d00)",
          color: "white",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          transition: "transform 0.3s ease, background 0.3s ease",
        }}
        onMouseEnter={(e) => e.target.style.transform = "scale(1.1)"}
        onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
      >
        🚀 Trigger Event
      </button>

      <ThreeScene />  {/* Keep the existing animation here */}
    </div>
  );
}

export default Home;
