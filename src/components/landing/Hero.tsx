
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 min-h-screen flex items-center bg-gradient-to-b from-accent to-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6">
            Welcome to EduExam Portal
          </h1>
          <p className="text-xl text-secondary/80 mb-8">
            Your comprehensive solution for managing examinations, results, and academic analytics
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register/student">
              <Button size="lg" className="w-full sm:w-auto">
                Student Registration
              </Button>
            </Link>
            <Link to="/register/faculty">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Faculty Registration
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
