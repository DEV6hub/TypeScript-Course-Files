declare module 'rimraf' {
  function rimraf(path: string, callback: (error: Error) => void): void;
  // Merge a function with a module, to define our sync module
  module rimraf {
    export function sync(path: string): void;
  }
  export = rimraf;
}
