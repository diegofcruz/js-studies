const p = new Promise<string>((resolve, reject) => {
resolve("First result");
reject(new Error("This will be ignored"));
});

p.then((value) => {
console.log("Resolved with:", value);
}).catch((err) => {
console.log("Rejected with:", err.message);
});
