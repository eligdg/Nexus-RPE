import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './lib/auth';
import { UIProvider } from './lib/ui-context';
import { AppLayout } from './components/AppLayout';
import { LoginPage } from './pages/Login';
import { DashboardPage } from './pages/Dashboard';
import { CRMPage } from './pages/CRM';
import { InventoryPage } from './pages/Inventory';
import { ProjectsPage } from './pages/Projects';
import { BillingPage } from './pages/Billing';

function AuthenticatedRoutes() {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/crm" element={<CRMPage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/billing" element={<BillingPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/calendar" element={<div className="p-8 text-center"><h2 className="text-2xl font-bold">Módulo de Calendario</h2><p className="text-muted-foreground mt-2">Próximamente...</p></div>} />
        <Route path="/settings" element={<div className="p-8 text-center"><h2 className="text-2xl font-bold">Configuración</h2><p className="text-muted-foreground mt-2">Próximamente...</p></div>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AppLayout>
  );
}

function App() {
  return (
    <AuthProvider>
      <UIProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
            <Route path="/*" element={<AuthenticatedRoutes />} />
          </Routes>
        </Router>
      </UIProvider>
    </AuthProvider>
  );
}

function PublicRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  if (user) return <Navigate to="/" replace />;
  return <>{children}</>;
}

export default App;
