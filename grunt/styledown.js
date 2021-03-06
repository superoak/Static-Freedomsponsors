// Compile documentation of css
module.exports = function(grunt, options){
    return {
        build: {
            files: {
                'dist/styleguide/index.html': ['app/scss/**/*.scss']
            },
            options: {
                css: '/css/freedomsponsors.css',
                // js: '/js/app.js',
                title: 'Styleguide Freedomsponsors'
            }
        }
    };
};