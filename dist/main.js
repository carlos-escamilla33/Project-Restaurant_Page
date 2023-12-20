(()=>{"use strict";const e=[{name:"Macaroons",description:"Colorful almond cookies, crisp outside, chewy inside, various fillings"},{name:"Croissants",description:"Flaky, buttery French pastry, crescent-shaped, perfect for breakfast"},{name:"Cinnamon Rolls",description:"Sweet rolled pastry, cinnamon-sugar filling, topped with glaze or frosting"},{name:"Cheesecake",description:"Creamy dessert with sweetened cream cheese filling, often baked"},{name:"Scones",description:"British pastry, tender and sweet, often with fruit or nuts"},{name:"Cupcakes",description:"Individual cake in a cup, various flavors, topped with frosting"}],t=()=>{const e=document.createElement("div"),t=document.createElement("h1"),n=document.createElement("p"),a=document.createElement("img");return a.src="../media/cheesecake.jpg",a.alt="cheesecake",e.classList.add("default-styling"),e.classList.add("card"),t.textContent="About",n.textContent="Welcome to Pug & Puff, where passion meets pastry. Our shop is a haven of indulgence, showcasing exquisite treats crafted by skilled pastry chefs. From buttery croissants to velvety truffles, each creation is a celebration of flavor and finesse. Immerse yourself in the cozy ambiance, surrounded by the aroma of freshly brewed coffee. Life is too short to skip dessert – join us for a moment of sweet bliss.",e.appendChild(t),e.appendChild(a),e.appendChild(n),e},n=document.getElementById("content"),a=document.createElement("div");a.setAttribute("id","main-container"),n.appendChild((()=>{const e=document.createElement("div"),t=document.createElement("button"),n=document.createElement("button"),a=document.createElement("button"),s=[t,n,a];for(let e=0;e<s.length;e++)s[e].setAttribute("class","tab-btn");return e.setAttribute("id","navbar"),t.textContent="Home",n.textContent="Menu",a.textContent="About",e.appendChild(t),e.appendChild(n),e.appendChild(a),e})()),a.appendChild(t()),n.appendChild(a),document.querySelectorAll("#navbar .tab-btn").forEach((n=>{n.addEventListener("click",(n=>{n.preventDefault();const s=n.target.textContent;a.innerText="","Home"===s?a.appendChild((()=>{const e=document.createElement("h1"),t=document.createElement("p"),n=document.createElement("div"),a=document.createElement("img"),s=document.createElement("div");return a.src="../media/pugroll.jpeg",a.alt="Clip Art of Pug Buns",s.setAttribute("class","welcome-container"),s.classList.add("default-styling"),n.setAttribute("class","pugRollDiv"),n.appendChild(a),t.textContent="Welcome to",e.textContent="Pug & Puff",s.appendChild(t),s.appendChild(e),s.append(n),s})()):"Menu"===s?a.appendChild((()=>{const t=document.createElement("div"),n=document.createElement("h1");t.classList.add("default-styling"),t.classList.add("menu-styling"),t.classList.add("transitioned"),n.textContent="Menu",t.appendChild(n);for(let n=0;n<e.length;n++){const a=document.createElement("div"),s=document.createElement("h3"),d=document.createElement("p"),i=e[n].name,o=e[n].description;s.textContent=i,d.textContent=o,a.appendChild(s),a.appendChild(d),a.classList.add("card"),t.appendChild(a)}return t})()):a.appendChild(t())}))}))})();