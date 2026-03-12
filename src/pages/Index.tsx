import Counter from "@/components/Counter";

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-foreground">Simple Counter</h1>
          <p className="mt-2 text-muted-foreground">Click the buttons to change the count</p>
        </div>
        <Counter />
      </div>
    </div>
  );
};

export default Index;
