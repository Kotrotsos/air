({
    appDir: '',
    baseUrl: 'lib',
    dir: 'build',
    paths: {

    },
    optimize: 'uglify',
    uglify: {
        toplevel: true,
        ascii_only: true,
        beautify: false,
        max_line_length: 10000
    },


    modules: [
        {
            name: 'main'
        },
        {
            name: 'util'
        }

    ]
})