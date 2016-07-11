let featureDiv: HTMLElement = document.getElementById('featureDiv');

class Greeter {
  message: string;
  greet(): string {
    return this.message;
  }
}

class TakesBreaks {
  onBreak: boolean;
  startBreak(): void {
    this.onBreak = true;
  }
  endBreak(): void {
    this.onBreak = false;
  }
}

class BreakTakingGreeter implements Greeter, TakesBreaks {
  // Greeter
  message: string = 'Hello';
  greet: () => string;
  // TakesBreaks
  onBreak: boolean = false;
  startBreak: () => void;
  endBreak: () => void;

  constructor() {
    setInterval(() => featureDiv.innerHTML = this.interact(), 500);
  }

  interact(): string {
    if (!this.onBreak) {
      return this.greet();
    }
    return "I'm on Break";
  }
}

function applyMixins(derivedCtor: any, baseCtors: any[]): any {
  baseCtors.forEach((baseCtor: any) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name: any) => {
      derivedCtor.prototype[name] = baseCtor.prototype[name];
    });
  });
}

applyMixins(BreakTakingGreeter, [Greeter, TakesBreaks]);

let halfTimeWorker: BreakTakingGreeter = new BreakTakingGreeter();

setInterval(() => halfTimeWorker.onBreak ? halfTimeWorker.endBreak() : halfTimeWorker.startBreak(), 1000);
