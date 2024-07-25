import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You entered: ${inputValue}`);
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
            <CardDescription>This is a simple card component you can build upon.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Enter something..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Button type="submit">Submit</Button>
            </form>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">Footer content goes here</p>
          </CardFooter>
        </Card>
      </main>

      <footer className="mt-8 text-center text-sm text-muted-foreground">
        <p>&copy; 2024 My Bare-Bones App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
