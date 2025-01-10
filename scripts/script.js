
const domArticle = document.getElementsByTagName("article")[0]

document.getElementsByTagName("ul")[0].innerHTML = resources.map(e => {
    return  `<li class="tab ${e.category === "HTML" ? "tab_active" : ""}">${e.category}</li>`
}).join('')

const domTabs = document.querySelectorAll(".tab")
//let selectedTab = domTabs[0].classList.add("tab_active")

/*domTabs.forEach((tab, index) => {
    tab.addEventListener("click", event => {
        domArticle.innerHTML = resources.filter(resource => {
            return resource.category === tab.textContent
        }).map(resource => { return articleTemplate(resource)})
        
        //toggleTab(index, event.target);
    })
})*/

domArticle.innerHTML = getResource(resources, domTabs[0]);

domTabs.forEach((tab, index) => {
    tab.addEventListener("click", event => {
        domArticle.innerHTML = getResource(resources, tab);
        
        //toggleTab(index, event.target);
    })
})

function getResource(resources, filter) {
    return resources.filter(resource => {
        return resource.category === filter.textContent
    }).map(resource => {return articleTemplate(resource)})
}

function articleTemplate(object) {
    return `<h2>${object.category}</h2>
            <p>${object.text}</p>
            <ul>
                ${object.sources.map(link => `<li><a href="${link.url}">${link.title}</a></li>`).join('')}
            </ul>`
}

/*function toggleTab(index, object) {
    console.log(object)
    if(selectedTab) {
        selectedTab.classList.remove("tab_active");
    }
    selectedTab = domTabs[index].classList.add("tab_active")
} */

