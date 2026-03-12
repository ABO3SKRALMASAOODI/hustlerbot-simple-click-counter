import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RotateCcw, Plus, Minus } from "lucide-react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="flex flex-col items-center justify-center gap-8 rounded-lg border border-border bg-card p-8 shadow-lg">
      <div className="text-center">
        <h2 className="mb-2 text-sm font-medium text-muted-foreground">Counter</h2>
        <div className="text-6xl font-bold text-foreground">{count}</div>
      </div>

      <div className="flex gap-4">
        <Button
          onClick={decrement}
          variant="outline"
          size="lg"
          className="flex items-center gap-2"
        >
          <Minus className="h-5 w-5" />
          Decrease
        </Button>

        <Button
          onClick={reset}
          variant="ghost"
          size="lg"
          className="flex items-center gap-2"
        >
          <RotateCcw className="h-5 w-5" />
          Reset
        </Button>

        <Button
          onClick={increment}
          variant="default"
          size="lg"
          className="flex items-center gap-2"
        >
          <Plus className="h-5 w-5" />
          Increase
        </Button>
      </div>
    </div>
  );
};

export default Counter;
