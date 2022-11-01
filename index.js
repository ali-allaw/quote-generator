// get elements DOM
let quote_id = document.querySelector(".quote-id");
let quote_content = document.querySelector(".quote-content")
let generate_icon = document.querySelector(".generate-icon")

let x = async function fetchQuotes() {
    fetch(`https://api.adviceslip.com/advice`)
        .then(response => {

            if (response.ok) {
                return response.json()
            } else {
                switch (response.status) {
                    case 404:
                        throw new Error("Object not found")
                }
            }
        })
        .then(data => {
            const id = data.slip.id
            quote_id.innerHTML = `#${id}`
            console.log(id)
            const content = data.slip.advice
            quote_content.innerHTML = content
            console.log(content)
        })
};

generate_icon.addEventListener("click", x)
