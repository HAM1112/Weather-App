(()=>{const e=document.getElementById("searchbar"),n=document.getElementById("searchbtn"),t=document.getElementById("result");function d(e){return Math.round(100*(e-273.15))/100}n.addEventListener("click",(()=>{let n=e.value;t.innerHTML="",console.log(n),n?async function(e){let n=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${e}&APPID=7120d90303563c0ae9477bc0bd4e6927`),c=await n.json();t.classList.add("results");const a=document.createElement("div");a.classList.add("display"),t.appendChild(a);const i=document.createElement("div");a.appendChild(i);const l=document.createElement("div");l.innerHTML=`${d(c.main.temp)} °C`,l.classList.add("highlight"),i.appendChild(l);const o=document.createElement("div");o.innerHTML=`${e}`,i.appendChild(o);const m=document.createElement("div");a.appendChild(m);const r=document.createElement("div");r.innerHTML=`${c.weather[0].main}`,r.classList.add("highlight"),m.appendChild(r);const p=document.createElement("div");p.innerHTML=`${c.weather[0].description}`,m.appendChild(p);const s=document.createElement("div");s.classList.add("othercontents"),t.appendChild(s);const h=document.createElement("div");s.appendChild(h);const u=document.createElement("h3");u.innerHTML="Feels Like",h.appendChild(u);const C=document.createElement("p");C.innerHTML=`${d(c.main.feels_like)} °C`,h.appendChild(C);const E=document.createElement("div");s.appendChild(E);const L=document.createElement("h3");L.innerHTML=" Min Temp",E.appendChild(L);const M=document.createElement("p");M.innerHTML=`${d(c.main.temp_min)} °C`,E.appendChild(M);const T=document.createElement("div");s.appendChild(T);const v=document.createElement("h3");v.innerHTML="Max Temp",T.appendChild(v);const H=document.createElement("p");H.innerHTML=`${d(c.main.temp_max)} °C`,T.appendChild(H);const g=document.createElement("div");s.appendChild(g);const $=document.createElement("h3");$.innerHTML="Pressure",g.appendChild($);const y=document.createElement("p");y.innerHTML=`${c.main.pressure} mb`,g.appendChild(y),console.log("hello")}(n).catch((function(){return alert("Oops!!! City noy found.")})):alert("Search bar is empty")}))})();