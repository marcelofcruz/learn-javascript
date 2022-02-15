const removeFirstApp = apps => {
    apps.splice(1, 1);
    return apps;
};

const apps = ["Calculator", "Whatsapp", "Chrome", "Firefox"];
console.log(removeFirstApp(apps)); // ["Whatsapp", "Chrome", "Firefox"]