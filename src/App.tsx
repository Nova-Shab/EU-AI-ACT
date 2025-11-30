import React, { useState, useEffect } from "react";
import { AuditProvider, useAudit } from "./context/AuditContext";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { DashboardPage } from "./pages/DashboardPage";
import { LandingPage } from "./pages/LandingPage";
import { RiskAssessmentPage } from "./pages/RiskAssessmentPage";
import { AuditPage } from "./pages/AuditPage";
import { ActionPlanPage } from "./pages/ActionPlanPage";
import authService from "./services/authService";

type AppView =
  | 'login'
  | 'register'
  | 'dashboard'
  | 'audit-flow';

const AppContent: React.FC = () => {
  const { state, setCurrentStep, resetAudit } = useAudit();
  const [view, setView] = useState<AppView>('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentAuditId, setCurrentAuditId] = useState<number | null>(null);

  useEffect(() => {
    // Check if user is authenticated on mount
    const authenticated = authService.isAuthenticated();
    setIsAuthenticated(authenticated);
    setView(authenticated ? 'dashboard' : 'login');
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setView('dashboard');
  };

  const handleRegister = () => {
    setIsAuthenticated(true);
    setView('dashboard');
  };

  const handleLogout = () => {
    authService.logout();
    setIsAuthenticated(false);
    setView('login');
    resetAudit();
    setCurrentAuditId(null);
  };

  const handleCreateNewAudit = () => {
    resetAudit();
    setCurrentAuditId(null);
    setCurrentStep(0);
    setView('audit-flow');
  };

  const handleOpenExistingAudit = (auditId: number) => {
    setCurrentAuditId(auditId);
    // Load audit data will be handled in the audit flow pages
    setCurrentStep(2); // Go directly to audit page
    setView('audit-flow');
  };

  const handleBackToDashboard = () => {
    setView('dashboard');
    setCurrentAuditId(null);
  };

  // Render based on view
  if (!isAuthenticated) {
    if (view === 'register') {
      return (
        <RegisterPage
          onRegister={handleRegister}
          onNavigateToLogin={() => setView('login')}
        />
      );
    }
    return (
      <LoginPage
        onLogin={handleLogin}
        onNavigateToRegister={() => setView('register')}
      />
    );
  }

  if (view === 'dashboard') {
    return (
      <DashboardPage
        onCreateAudit={handleCreateNewAudit}
        onOpenAudit={handleOpenExistingAudit}
        onLogout={handleLogout}
      />
    );
  }

  // Audit Flow (existing pages)
  if (view === 'audit-flow') {
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
  }

  return <DashboardPage onCreateAudit={handleCreateNewAudit} onOpenAudit={handleOpenExistingAudit} onLogout={handleLogout} />;
};

function App() {
  return (
    <AuditProvider>
      <AppContent />
    </AuditProvider>
  );
}

export default App;
