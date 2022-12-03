// make a fetch request to the url
let URL = "https://zachcohn.me/letseat/api/charge_success"


fetch(URL, {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
        }

        })
        .then(response => response.json())
        .then(data => {
            let total = data.total;
            // make sure total has two decimal places
            total = total.toFixed(2);
            // set the total to the total element
            document.getElementById("progress-total").innerHTML = `$${total}`;
        })
        .catch(error => {
            console.error(error);
        });


