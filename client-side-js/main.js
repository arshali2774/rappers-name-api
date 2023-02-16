document.querySelector("button").addEventListener("click", apiRequest);

async function apiRequest() {
  const rapperName = document.querySelector("input").value;
  try {
    const response = await fetch(
      `https://rappers-name.onrender.com/api/${rapperName}`
    );
    const data = await response.json();
    console.log(data);
    document.querySelector("h2").innerText = data.birthname;
  } catch (err) {
    console.log(err);
  }
}
