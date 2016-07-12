let wait1000: Promise<void> = new Promise<void>((resolve: any, reject: any) => {
  setTimeout(resolve, 1000);
});

wait1000.then(() => console.log('Yay!'));


function someAsyncThing(): Promise<string> {
  return new Promise<string>((resolve: any, reject: any) => {
    resolve('Hello!');
  });
};

function someOtherAsyncThing(): Promise<void> {
  return new Promise<void>((resolve: any, reject: any) => {
    reject('something went wrong');
  });
};

someAsyncThing()
  .then((hello) => someOtherAsyncThing())
  .catch((error: string) => console.log('oh no', error));
