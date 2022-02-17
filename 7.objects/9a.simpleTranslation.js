const translations = {
    welcome: {
        dutch: "Welkom",
        french: "Bienvenue",
        english: "Welcome"
    }
};

const getTranslation = language => {
    return translations.welcome[language];
};

console.log(getTranslation('dutch'));