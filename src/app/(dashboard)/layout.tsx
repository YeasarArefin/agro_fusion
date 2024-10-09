import Shell from "@/components/shell/Shell";
import AuthProvider from "@/providers/AuthProvider";
import { ProtectionProvider } from "@/providers/ProtectionProvider";
import React from "react";

export default function layout({ children }: { children: React.ReactNode; }) {
    return (
        <AuthProvider>
            <ProtectionProvider>
                <Shell>
                    {children}
                </Shell>
            </ProtectionProvider>
        </AuthProvider >
    );
}