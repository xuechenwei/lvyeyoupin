require.config({
    baseUrl: "js",
    paths: {
        angular: 'libs/angular/angular',
        jquery: 'libs/jquery/jquery',
        domReady: 'libs/domReady',
        twitter: 'libs/bootstrap/bootstrap',
        ngResource: 'libs/angular-resource/angular-resource',
        ngRoute: 'libs/angular-route/angular-route',
        raty: 'libs/jquery.raty.min'
    },
    shim: {
        'jquery': {
            exports: 'jquery'
        },
        'raty': {
            deps: ['jquery'],
            exports: 'raty'
        },
        'twitter': {
            deps: ['jquery']
        },
        'angular': {
            deps: ['jquery', 'twitter'],
            exports: 'angular'
        },
        'ngResource': {
            deps: ['angular']
        },
        'ngRoute': {
            deps: ['angular']
        }

    },
    deps: [
        './bootstrap'
    ]
})