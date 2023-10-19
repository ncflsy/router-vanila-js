const route= (event) =>{
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({},"",event.target.href);
    handleLocation();
}

const routes = {
 404: '404.html',
 '/' : 'home.html',
 '/kamar' : 'kamar.html',
 '/penghuni' : 'penghuni.html',

}

const handleLocation= async() => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById('main-page').innerHTML = html;
}
window.route = route;