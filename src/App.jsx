import "./App.css";
import ResizableFunnelChart from "./ResizableFunnelChart.jsx";
import VennDiagram from "./VennDiagram.jsx";

export default function App() {
  return (
    <main>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          height: "100vh",
          padding: "20px",
        }}
      >
        <div style={{ flex: 1, marginRight: "20px", height: "100%" }}>
          <ResizableFunnelChart />
        </div>
        <div style={{ flex: 1, height: "100%" }}>
          <VennDiagram />
        </div>
      </div>
    </main>
  );
}
