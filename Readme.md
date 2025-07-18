

---

### 1. **Query Parameters**

**Definition**: A query parameter is a key-value pair added to the end of a URL using `?` and `&`.

#### 🔹 Example 1: Simple URL with query

```js
// URL: https://example.com/search?query=batman
const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get("query");
console.log("Search Query:", query); // Output: batman
```

#### 🔹 Example 2: Creating dynamic URLs

```js
const search = "avengers";
const url = `https://www.omdbapi.com/?t=${search}&apikey=710362b0`;
console.log(url);
// Output: https://www.omdbapi.com/?t=avengers&apikey=710362b0
```

---

### 🌐 2. **URL Structure**

#### Parts of a URL:

```
https://example.com:443/path/page?query=value#section
|      |          |     |     |            |
|    Protocol     |   Port    | Query Param| Hash
|               Domain     Path
```

#### Real API URL Example:

```plaintext
https://www.omdbapi.com/?t=batman&apikey=710362b0
```

* `?t=batman` is query param (movie title)
* `&apikey=...` is another query param

---

### ⚙️ 3. **Async Functions**

**Definition**: `async` makes a function return a promise. Inside it, we can use `await` to pause and wait for a promise.

#### 🔹 Example 1: Basic async function

```js
async function getData() {
  return "Hello World";
}

getData().then(console.log); // Hello World
```

#### 🔹 Example 2: Fetching data using async/await

```js
async function fetchUser() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const data = await res.json();
  console.log(data.name);
}
fetchUser();
```

---

### 🔁 4. **Higher-Order Functions**

**Definition**: A function that takes another function as a parameter or returns another function.

#### 🔹 Example 1: Array `map`

```js
const numbers = [1, 2, 3];
const squared = numbers.map(n => n * n);
console.log(squared); // [1, 4, 9]
```

#### 🔹 Example 2: Custom HOF

```js
function operateOnNumber(fn, num) {
  return fn(num);
}

function double(x) {
  return x * 2;
}

console.log(operateOnNumber(double, 5)); // 10
```

---

### 🛠️ 5. **Try...Catch**

**Definition**: Used to handle errors without crashing the program.

#### 🔹 Example 1: Basic Try-Catch

```js
try {
  const a = JSON.parse('{"name":"John"}');
  console.log(a.name);
} catch (error) {
  console.log("Error:", error.message);
}
```

#### 🔹 Example 2: With async/await

```js
async function getData() {
  try {
    const res = await fetch('https://invalid-api-url.com');
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("Something went wrong:", error.message);
  }
}
getData();
```

---

