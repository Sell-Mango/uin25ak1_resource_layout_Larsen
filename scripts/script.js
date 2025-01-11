
// Setter opp tabs
document.getElementsByTagName("ul")[0].innerHTML = resources.map(e => {
    return  `<li class="tab">${e.category}</li>`
}).join('')

const domArticle = document.getElementsByTagName("article")[0]
const domTabs = document.querySelectorAll(".tab")
let currentTab;

// Instansierer tab ved innlastning
toggleTabs(domTabs[0])
domArticle.innerHTML = getResource(resources, currentTab.textContent);

console.log(typeof currentTab)

// Setter opp eventlistner for hver tab
domTabs.forEach((tab) => {
    tab.addEventListener("click", event => {
        toggleTabs(tab);
        domArticle.innerHTML = getResource(resources, currentTab.textContent)
    })
})

console.log(typeof resources)

// Sjekker først om currentTab holder et objekt og fjerner det
// Setter nytt aktivt objekt
function toggleTabs(newTab) {
    if(currentTab) {
        currentTab.classList.remove("tab_active")
    }
    currentTab = newTab
    currentTab.classList.add("tab_active")
}

// filtrert objekt basert på en string
function getResource(objects, value) {
    return objects.filter(resource => {
        return resource.category === value
    }).map(resource => {return articleTemplate(resource)})
}

// mal for html kode i et objekt
function articleTemplate(object) {
    return `<h2>${object.category}</h2>
            <p>${object.text}</p>
            <ul>
                ${object.sources.map(link => `<li><a href="${link.url}">${link.title}</a></li>`).join('')}
            </ul>`
}
