
function LoginLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full min-h-screen flex flex-col gap-4 justify-center items-center bg-black text-white p-4">
            {children}
            
        </div>
    );
}

export default LoginLayout;