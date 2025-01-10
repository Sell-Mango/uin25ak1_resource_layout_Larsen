
const nav = resources.map(e => {
    return  `<li class="tab">${e.category}</li>`
})

const domArticle = document.getElementsByTagName("article")[0]

document.getElementsByTagName("ul")[0].innerHTML = nav.join('');
const domTabs = document.querySelectorAll(".tab")
currentTab = domTabs[0];
domArticle.innerHTML = getResource(resources, currentTab);

domTabs.forEach((tab, index) => {
    tab.addEventListener("click", event => {
        console.log(tab.classList)
        toggleTab(event.target, index);
       currentTab = domTabs[index]
       domArticle.innerHTML = getResource(resources, currentTab);
    
    })
})

function getResource(objects, selected) {
    return objects.filter(resource => {
        return resource.category === selected.textContent
    }).map(resource => {return articleTemplate(resource)})
}

function articleTemplate(object) {
    return `<h2>${object.category}</h2>
            <p>${object.text}</p>
            <ul>
                ${object.sources.map(link => `<li><a href="${link.url}">${link.title}</a></li>`).join('')}
            </ul>`
}

function toggleTab(object, index) {
    currentTab.classList.remove("tab_active")
    currentTab = domTabs[index]
    currentTab.classList.add("tab_active")

    //object.classList.add("tab_active")
}
