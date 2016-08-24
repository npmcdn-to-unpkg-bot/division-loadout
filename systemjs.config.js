(function(global) {

    // '@angular':                   'https://npmcdn.com/@angular', // sufficient if we didn't pin the version
    // 'angular2-in-memory-web-api': 'https://npmcdn.com/angular2-in-memory-web-api', // get latest
    // 'rxjs':                       'https://npmcdn.com/rxjs@5.0.0-beta.6',
    // 'ts':                         'https://npmcdn.com/plugin-typescript@4.0.10/lib/plugin.js',
    // 'typescript':                 'https://npmcdn.com/typescript@1.8.10/lib/typescript.js',

    // map tells the System loader where to look for things
    var map = {
        'app':                        'app', // 'dist',
        'rxjs':                       'node_modules/rxjs',
        'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
        '@angular':                   'node_modules/@angular',
        '@angular2-material':         'node_modules/@angular2-material',
        '@ngrx':                      'node_modules/@ngrx'
        //,        'firebase':                   'node_modules/firebase/lib/firebase-web.js'
        //,        'angularfire2':               'node_modules/angularfire2'
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app':                        { main: 'main.js',  defaultExtension: 'js' },
        'rxjs':                       { defaultExtension: 'js' },
        'angular2-in-memory-web-api': { defaultExtension: 'js' },
        '@ngrx/devtools':             { main: 'dist/index.js', defaultExtension: 'js' },
        '@angular/router':            { main: 'index.js', defaultExtension: 'js' }
        //,        'angularfire2':               { main: 'angularfire2.js', defaultExtension: 'js' }
    };

    // Angular Material 2 Packages to load.
    var _materialPackages = [
        //  'card', 'checkbox',  'input', 
        'core', 'toolbar', 'sidenav', 'list', 'icon', 'button', 'progress-bar', 'grid-list', 'progress-bar'
    ];

    _materialPackages.forEach(function(item) {
        // All Material 2 components are prefixed with  @angular2-material and use
        // the components name as entry point.
        packages['@angular2-material/' + item] = { main: item };
    });

    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'http',
        'platform-browser',
        'platform-browser-dynamic'
        
    ];

    var packageNames = [
        '@ngrx/store',
        '@ngrx/core'
    ];

    // Add package entries for angular packages
    ngPackageNames.forEach(function(pkgName) {
        // http://plnkr.co/edit/i3xC0n7nFIFegT3h9Dkv?p=preview
        // Bundled (~40 requests):
        packages['@angular/'+pkgName] = { 
            main: '/bundles/' + pkgName + '.umd.js', 
            defaultExtension: 'js' 
        };

        // Individual files (~300 requests):
        //packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
    });

    // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
    packageNames.forEach(function(pkgName) {
        packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
    });

    /*packageNames.forEach(function(pkgName) {
        packages[pkgName] = { main: pkgName + '/' + pkgName + '.umd.js', defaultExtension: 'js' };
    });*/

    var config = {
        map: map,
        packages: packages
    }

    // filterSystemConfig - index.html's chance to modify config before we register it.
    if (global.filterSystemConfig) { global.filterSystemConfig(config); }

    System.config(config);

})(this);