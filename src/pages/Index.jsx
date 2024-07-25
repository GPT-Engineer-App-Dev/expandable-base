import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`You entered: ${inputValue}`);
    setInputValue("");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-center">My Bare-Bones App</h1>
      </header>

      <main>
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Welcome</CardTitle>
            <CardDescription>Enter some text and see it in a toast!</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Enter something..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                Show Toast
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <p className="text-sm text-muted-foreground">Try submitting some text!</p>
            <Link to="/about" className="text-primary hover:underline">
              About Us
            </Link>
          </CardFooter>
        </Card>
      </main>

      <footer className="mt-8 text-center text-sm text-muted-foreground">
        <p>&copy; 2024 My Bare-Bones App. Some rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
