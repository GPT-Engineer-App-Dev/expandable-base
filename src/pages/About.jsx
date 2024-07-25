import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">About Us</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Welcome to our bare-bones application! This is a simple About page that you can expand with more information about your project, team, or company.
          </p>
          <p className="mb-4">
            Feel free to modify this page and add more sections, images, or any other content that you think would be relevant for an About page.
          </p>
          <Link to="/" className="text-primary hover:underline">
            Return to Home
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;
