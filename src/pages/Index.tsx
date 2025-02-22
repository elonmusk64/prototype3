
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GraduationCap, Users, Book, BarChart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* About Section */}
      <section id="about" className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-secondary mb-6">About Us</h2>
            <p className="text-lg text-secondary/80">
              We are dedicated to revolutionizing the way educational institutions manage their examination processes.
              Our platform provides comprehensive tools for students, faculty, and administrators.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <GraduationCap className="w-8 h-8 text-primary" />,
                title: "For Students",
                description: "Access exam schedules, results, and performance analytics with ease."
              },
              {
                icon: <Users className="w-8 h-8 text-primary" />,
                title: "For Faculty",
                description: "Manage examinations, compute results, and track student performance."
              },
              {
                icon: <BarChart className="w-8 h-8 text-primary" />,
                title: "For Administrators",
                description: "Monitor departmental performance and streamline examination processes."
              }
            ].map((item, index) => (
              <Card key={index} className="glass-card p-6 fade-in">
                <div className="flex flex-col items-center text-center">
                  {item.icon}
                  <h3 className="text-xl font-semibold mt-4 mb-2">{item.title}</h3>
                  <p className="text-secondary/80">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-padding bg-accent">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-secondary mb-16 fade-in">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Exam Timetable Management",
              "Automated Results Processing",
              "Performance Analytics",
              "Seating Arrangements",
              "Faculty Supervision Planning",
              "Departmental Reports"
            ].map((feature, index) => (
              <Card key={index} className="glass-card p-6 fade-in">
                <Book className="w-6 h-6 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature}</h3>
                <p className="text-secondary/80">
                  Streamlined and efficient management of examination processes.
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Notices Section */}
      <section id="notices" className="section-padding bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-secondary mb-16 fade-in">Latest Notices</h2>
          <div className="max-w-3xl mx-auto">
            {[
              {
                date: "March 15, 2024",
                title: "End Semester Examination Schedule",
                description: "The end semester examination schedule has been released. Students can check their timetables."
              },
              {
                date: "March 10, 2024",
                title: "Faculty Training Session",
                description: "Training session for new result computation system scheduled for next week."
              }
            ].map((notice, index) => (
              <Card key={index} className="glass-card p-6 mb-6 fade-in">
                <p className="text-sm text-primary mb-2">{notice.date}</p>
                <h3 className="text-xl font-semibold mb-2">{notice.title}</h3>
                <p className="text-secondary/80">{notice.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-accent">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center fade-in">
            <h2 className="text-4xl font-bold text-secondary mb-6">Contact Us</h2>
            <p className="text-lg text-secondary/80 mb-8">
              Have questions? Get in touch with our support team.
            </p>
            <Card className="glass-card p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-left">
                  <h3 className="text-xl font-semibold mb-4">Support Hours</h3>
                  <p className="text-secondary/80 mb-2">Monday - Friday</p>
                  <p className="text-secondary/80">9:00 AM - 5:00 PM</p>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
                  <p className="text-secondary/80 mb-2">support@eduexam.com</p>
                  <p className="text-secondary/80">+1 (555) 123-4567</p>
                </div>
              </div>
              <Button className="mt-8 w-full md:w-auto">Send Message</Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
