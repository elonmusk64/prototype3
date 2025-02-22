
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">EduExam</Link>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="nav-link text-secondary hover:text-primary transition-colors">About</a>
            <a href="#features" className="nav-link text-secondary hover:text-primary transition-colors">Features</a>
            <a href="#notices" className="nav-link text-secondary hover:text-primary transition-colors">Notices</a>
            <a href="#contact" className="nav-link text-secondary hover:text-primary transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link to="/register">
              <Button>Register</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
