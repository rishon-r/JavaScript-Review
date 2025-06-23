// EXTERNAL LIBRARIES
// External libraries in JavaScript are collections of pre-written code—typically JavaScript functions and objects
// They simplify or extend the capabilities of your code without you needing to write everything from scratch.
// You can load these using the script tag in HTML and add a URL to the src attribute instead of a filepath
// When you want to do something complicated, it's always better to check if there exists an External library that can help you before you implement it yourself
// You can search up an external library's documentation to find out what it does

// However, there exists one small concern
// loading an external library directly from a script tag causes its entire code to be run
// This may cause naming conflicts or other issues as previously discussed
// So, we need a way to load external libraries lalongside modules
// For this, we use the ESM version of a module
// ESM stands for EcmaScript Module
// This is essentially a version of the library that works with modules
// In this case you can simply use the import with a URL instead of filepath
// IN ESM version of library, all functions essentially just have export in front of them
