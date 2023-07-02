class Person {
  lastname: string;
  firstname: string;
}

// Here we are testing command line
// PS C:\Users\HP\Desktop\code\Project\typescript-tutorial> tsc .\test.ts --out output-script-test.js
// error TS5101: Option 'out' is deprecated and will stop functioning in TypeScript 5.5. Specify compilerOption '"ignoreDeprecations": "5.0"' to silence this error.
//   Use 'outFile' instead.

// Found 1 error.

// PS C:\Users\HP\Desktop\code\Project\typescript-tutorial> tsc .\test.ts --outFile output-script-test.jsx
// PS C:\Users\HP\Desktop\code\Project\typescript-tutorial> tsc .\test.ts --outFile output-script-test.java
// PS C:\Users\HP\Desktop\code\Project\typescript-tutorial>
