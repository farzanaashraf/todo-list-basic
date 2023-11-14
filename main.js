let counter = (function () {
    let count = 0;

    const increment = () => {
        return new Promise((resolve, reject) => {
            count++;
            resolve(count);
        })
    };

    const decrement = () => {
        return new Promise((resolve, reject) => {
            count--;
            resolve(count);
        })
    };

    return {
        increment,
        decrement
    };

})();


fetch("https://jsonplaceholder.typicode.com/todos")
    .then(resp => resp.json())
    .then(data => {
        // const completedData = data.filter(item => item.completed);
        var list = document.getElementById("todo-list");

        data.forEach(item => {
            const input = document.createElement("input");
            input.type = "checkbox";
            if(item.completed){
                input.checked = true;
            }
            input.onchange = function () {
                if (input.checked) {
                    counter.increment().then(count => {
                        if (count === 5) {
                            alert("Congrats. 5 Tasks have been Successfully Completed");
                        }
                    });

                } else {
                    counter.decrement().then(count => {
                        if (count === 5) {
                            alert("Congrats. 5 Tasks have been Successfully Completed");
                        }
                    });
                }
            };

            const label = document.createElement("label");
            label.appendChild(input);
            label.appendChild(document.createTextNode("  " + item.title));

            const li = document.createElement("li");
            li.appendChild(label);

            list.appendChild(li);
        });
    })

// let count = 0;
// const httpRequest = new XMLHttpRequest;

// function requestHandler() {
//     if (httpRequest.readyState === XMLHttpRequest.DONE) {
//         if (httpRequest.status === 200) {
//             const data = JSON.parse(httpRequest.responseText);
//             const completeData = data.filter(item => item.userId === 1 && item.completed);
//             var list = document.getElementById("todo-list");

//             completeData.forEach(item => {
//                 const input = document.createElement("input");
//                 input.type = "checkbox";
//                 input.onchange = function () {
//                     if (input.checked) {
//                         count++;

//                     } else {
//                         count--;
//                     }

//                     if (count === 5) {
//                         alert("Congrats. 5 Tasks have been Successfully Completed");
//                     }

//                 }

//                 const label = document.createElement("label");
//                 label.appendChild(input);
//                 label.appendChild(document.createTextNode("  " + item.title));

//                 const li = document.createElement("li");
//                 li.appendChild(label);

//                 list.appendChild(li);
//             });

//         }
//     }
// }
// httpRequest.onreadystatechange = requestHandler;
// httpRequest.open("GET", "http://jsonplaceholder.typicode.com/todos", true);
// httpRequest.send();