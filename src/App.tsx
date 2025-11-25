import React from "react";
import { AuditProvider, useAudit } from "./context/AuditContext";
import { LandingPage } from "./pages/LandingPage";
import { RiskAssessmentPage } from "./pages/RiskAssessmentPage";
import { AuditPage } from "./pages/AuditPage";
import { ActionPlanPage } from "./pages/ActionPlanPage";

const AppContent: React.FC = () => {
  const { state } = useAudit();

  // Einfaches Routing basierend auf currentStep
  switch (state.currentStep) {
    case 0:
      return <LandingPage />;
    case 1:
      return <RiskAssessmentPage />;
    case 2:
      return <AuditPage />;
    case 3:
      return <ActionPlanPage />;
    default:
      return <LandingPage />;
  }
};

function App() {
  return (
    <AuditProvider>
      <AppContent />
    </AuditProvider>
  );
}

export default App;
