export const environment = {
    production: false,
    apiBaseUrl: "https://contosoqbot.azurewebsites.net/api/Request/",
    selfUrl: "https://contosoqbot-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "cc88ed14-c42e-4fa9-bdd2-329627ebe066",
        clientId: "62a0eea7-3c79-450e-8083-ab31364d45a3",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
    gid: "",
    cname: ""
};
