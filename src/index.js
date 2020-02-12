import * as completo from './mio.js'
import $ from 'jquery'
import moment from 'moment'

$(document).ready(function() {
    console.log(completo.myGet('Saludos'))
    console.log(completo.myGet('Saludos2345'))
    console.log(completo.myGet2())
    console.log(completo.myGet5())
    // setInterval(() => {
        $('#date').text(moment().format(''))
    // }, 1000);
});

{

}
