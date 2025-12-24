import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import ServicesSection from '../components/Services/ServicesSection';
import ExpeditionDetail from '../components/Services/ExpeditionDetail';

function ServicesPage() {
    // Force scroll to top when this page loads
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="ServicesPage w-full min-h-screen bg-zinc-950">
            <Navbar 
                baseColor="#050505"
                buttonBgColor="#FFC107"
                buttonTextColor="#000"
            />
            {/* Added pt-24 to ensure ServicesSection starts below the Navbar */}
            <main className="pt-24 bg-white"> 
                <ServicesSection />
                <ExpeditionDetail />
            </main>
        </div>
    );
}

export default ServicesPage;