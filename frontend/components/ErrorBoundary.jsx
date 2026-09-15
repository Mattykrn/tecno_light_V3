import React from 'react';
import { AlertTriangle } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary atrapó un error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center p-8 m-4 bg-red-50/50 border border-red-100 rounded-xl">
          <AlertTriangle className="text-red-500 w-12 h-12 mb-4" />
          <h3 className="text-lg font-bold text-slate-800 mb-2">Se produjo un error al cargar este módulo</h3>
          <p className="text-sm text-slate-500 text-center max-w-md mb-4">
            Lo sentimos, no pudimos cargar esta sección correctamente. Refresca la página o intenta de nuevo más tarde.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-semibold hover:bg-slate-800 transition-colors"
          >
            Refrescar página
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
