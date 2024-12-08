
export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <section className="auth__layout">
                {children}
            </section>
        </>
    );
}