document.querySelector("button").addEventListener("click", apiRequest);

async function apiRequest() {
  const rapperName = document.querySelector("input").value;
  try {
    const response = await fetch(
      `https://helpful-tuna-poncho.cyclic.app/api/${rapperName}`
    );
    const data = await response.json();
    console.log(data);
    document.querySelector("h2").innerText = data.birthname;
  } catch (err) {
    console.log(err);
  }
}
