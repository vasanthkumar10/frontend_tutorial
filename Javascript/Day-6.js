// Strings -> immutable
// let fname = "aarthika";
// console.log(fname[0], fname[1], fname[2], fname[7], );
// console.log(fname[8]);
// console.log(typeof fname);

// fname[0] = "k";
// fname = "vasanth";
// console.log(fname);

// length
// console.log(fname.length);

// methods
// charAt -> index values
// let news = "India won the T20 world cup";
// console.log(news[0], news.charAt(0));

// charCodeAt -> ASCII values
// console.log(news.charCodeAt(0));

// endswith
// let email = "test@gmail.com";
// let email = "test@yahoo.com";
// console.log(email.endsWith("gmail.com"));

// startswidth
// let url = "http://redis.io";
// console.log(url.startsWith("http"));

// let news = "India won the T20 world cup. India";
// case sensitive
// console.log(news.includes("India", 2)); // search string, starting index = 0
// console.log(news.indexOf("India", 2)); // search string, starting index = 0
// console.log(news.indexOf("aisudasd")); // if not present -> -1
// console.log(news.lastIndexOf("India"));
// console.log(news.match(/india/i)); // not recommended
// console.log(news.repeat(3));
// console.log(news.replace("India", "Australia"));
// console.log(news.replace(/india/i, "Australia"));
// console.log(news.replace(/india/gi, "Australia"));
// console.log(news.replaceAll("India", "Australia"));
// console.log(news.search(/india/i));

// let fname = "vasanth";
// console.log(fname.slice(2));
// console.log(fname.slice(2, 5));
// console.log(fname.slice(0, 5));
// console.log(fname.slice(10));
// console.log(fname.slice(-3));
// console.log(fname.slice(-5, -2));
// console.log(fname.slice(-2, -5));
// console.log(fname.slice(3, 0));

// substring
// let fname = "vasanth";
// console.log(fname.substring(0, 2));

// substr
// let fname = "vasanth";
// console.log(fname.substring(2, 5));
// console.log(fname.substr(2, 5));

// let fname = "Vasanth Kumar";
// console.log(fname.toLowerCase());
// console.log(fname.toUpperCase());

// trim
// let fname = "                     god   ";
// console.log(fname);
// console.log(fname.trim());
// console.log(fname.trimStart());
// console.log(fname.trimEnd());

// let fname = "10";
// console.log(fname.padStart(5));
// console.log(fname.padEnd(5));

// split -> str to array
// let news = "India won the T20 world cup.";
// console.log(news.split(" "));
// console.log(news.split("o"));
// console.log(news.split(""));
