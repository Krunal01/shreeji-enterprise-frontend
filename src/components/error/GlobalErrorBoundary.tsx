import { Component } from 'react';
import type { ReactNode } from 'react';

interface GlobalErrorBoundaryProps {
    children?: ReactNode;
    hasError?: boolean;
}

interface GlobalErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
    errorInfo: React.ErrorInfo | null;
}

class GlobalErrorBoundary extends Component<
    GlobalErrorBoundaryProps,
    GlobalErrorBoundaryState
> {
    hasAttemptedReload: boolean;

    constructor(props: GlobalErrorBoundaryProps) {
        super(props);

        this.state = {
            hasError: props.hasError || false,
            error: null,
            errorInfo: null,
        };

        this.hasAttemptedReload =
            localStorage.getItem('errorBoundaryReloadAttempt') === 'true';
    }

    static getDerivedStateFromError(error: Error): Partial<GlobalErrorBoundaryState> {
        console.warn('ErrorBoundary:', error);

        const hasAttemptedReload =
            localStorage.getItem('errorBoundaryReloadAttempt') === 'true';

        if (!hasAttemptedReload) {
            localStorage.setItem('errorBoundaryReloadAttempt', 'true');
            // window.location.reload();
            return { hasError: true, error: error };
        }

        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('Error Info:', { error, errorInfo });
        this.setState({ errorInfo });
    }

    componentDidMount() {
        if (
            window.location.pathname !== '/' &&
            window.location.pathname.endsWith('/')
        ) {
            const queryParams = window.location.search;
            window.history.replaceState(
                null,
                '',
                window.location.pathname.slice(0, -1) + queryParams
            );
        }

        if (!this.state.hasError) {
            sessionStorage.removeItem('errorBoundaryReloadAttempt');
        }
    }

    handleHardRefresh = () => {
        window.location.reload();
        sessionStorage.removeItem('errorBoundaryReloadAttempt');
    };

    render() {
        if (this.state.hasError) {
            return (
                <div
                    style={{
                        minHeight: 'calc(100svh - 55px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <div
                        style={{
                            textAlign: 'center',
                            padding: '16px',
                        }}
                    >
                        <img
                            src={`placeholder/new_placeholder/technical_error.svg`}
                            alt="page_break_error"
                            style={{
                                height: '72px',
                                width: '72px',
                            }}
                        />

                        <p
                            style={{
                                fontSize: "14px",
                                fontWeight: 600,
                                color: '#18181B',
                                marginTop: '16px',
                                marginBottom: '8px',
                            }}
                        >
                            Technical Issues
                        </p>

                        <p
                            style={{
                                fontSize: "12px",
                                color: '#657488',
                                marginTop: '8px',
                                lineHeight: 1.5,
                            }}
                        >
                            Oops! Something went wrong. Please try a{' '}
                            <span
                                style={{
                                    cursor: 'pointer',
                                    color: '#1976d2',
                                    textDecoration: 'underline',
                                    fontSize: "12px",
                                }}
                                onClick={this.handleHardRefresh}
                            >
                                hard refresh
                            </span>{' '}
                            to continue.
                        </p>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }

}

export default GlobalErrorBoundary;
