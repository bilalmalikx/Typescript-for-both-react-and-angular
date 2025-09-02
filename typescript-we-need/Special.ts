let anything: any = "can be anything";   // any (avoid in strict mode)
anything = 42;  // ✅ allowed

let unknownValue: unknown = "test";      // unknown (safer than any)
if (typeof unknownValue === "string") {
  console.log(unknownValue.toUpperCase()); // ✅ type check required
}

let noReturn: void = undefined;          // void (usually for functions with no return)

function logMessage(msg: string): void {
  console.log(msg);  // doesn't return anything
}

function throwError(): never {
  throw new Error("Something went wrong"); // never (function never completes)
}
