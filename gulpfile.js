import {src, dest, watch} from 'gulp'  

import * as dartSass from 'sass' 

import gulpSass from 'gulp-sass'


const sass = gulpSass(dartSass)

export function css(done){
    
    src('assets/scss/app.scss', {sourcemaps: true})
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('build/css', {sourcemaps:true}))

    done()
}

export function dev(){
    watch('assets/scss/**/*.scss',css)
}
