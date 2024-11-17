import DashboardNavbar from "@/Components/Shared/Navbar/DashboardNavbar";

export default function DashboardLayout({ children }) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <div>
        <div className="flex">
          <div className="w-1/6">
            <DashboardNavbar></DashboardNavbar>
          </div>
          <div className="w-5/6">
            {children}
            <footer className="bg-black absolute  bottom-0 w-5/6 right-0 text-white">
              Footer
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
}
