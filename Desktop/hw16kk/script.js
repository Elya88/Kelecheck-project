function products() {
    fetch("products.json")
        .then((res) => {
            return res.json();
        })
        .then((product) => {
            product.forEach(element => {
                const productsTitle = document.querySelector(".products__inner");

                let container = document.createElement("div");
                container.classList = `container ${element.category}`;
                container.style.width = "350px";
                container.style.display = "flex";
                container.style.flexDirection = "column";
                container.style.backgroundColor = "fff";
                container.style.border = "5px solid #dce0e1";
                container.style.margin = "50px auto";
                container.style.backgroundColor = "white";
                container.style.textAlign = "center";
                container.style.borderRadius = "5px";
                container.style.padding = "1em";
                productsTitle.appendChild(container);

                let divImg = document.createElement("div");
                container.appendChild(divImg);

                let photo = document.createElement("img");
                photo.style.width = "200px";
                photo.style.height = "250px";
                photo.style.objectFit = "contain";
                divImg.appendChild(photo);

                let div1 = document.createElement("div");
                div1.className = ("div-1");
                div1.style.width = "330px";
                div1.style.height = "60px";
                div1.style.display = "flex";
                div1.style.borderBottom = "3px solid rgb(0, 0, 0)";
                div1.style.justifyContent = "space-between";
                div1.style.alignItems = "center";
                div1.style.padding = "10px";
                divImg.appendChild(div1);

                let h2 = document.createElement("h2");
                h2.style.fontSize = "15px";
                h2.style.width = "200px";
                div1.appendChild(h2);

                let h3 = document.createElement("h3");
                h3.style.fontSize = "15px";
                div1.appendChild(h3);

                let text = document.createElement("div");
                container.appendChild(text);

                let p = document.createElement("p");
                text.appendChild(p);

                photo.getAttribute("src");
                photo.src = element.img;
                h2.textContent = element.title;
                h3.textContent = element.price;
                p.textContent = element.desc;


                const btnAll = document.querySelector(".btn-all");
                const btnLaptop = document.querySelector(".btn-laptops");
                const btnPhone = document.querySelector(".btn-phones");
                const btnTv = document.querySelector(".btn-tv");
                btnAll.addEventListener("click", () => {
                    if (element.category === "") {
                        container.style.display = "none";
                    } else {
                        container.style.display = "block";
                    }
                });

                btnLaptop.addEventListener("click", () => {
                    if (element.category === "laptops") {
                        container.style.display = "block";
                    } else {
                        container.style.display = "none";
                    }
                });

                btnPhone.addEventListener("click", () => {
                    if (element.category === "phones") {
                        container.style.display = "block";
                    } else {
                        container.style.display = "none";
                    }
                });

                btnTv.addEventListener("click", () => {
                    if (element.category === "tv") {
                        container.style.display = "block";
                    } else {
                        container.style.display = "none";
                    }
                });

            });
        })

        .catch((error) => {
            console.log(error);
        });
}
products()