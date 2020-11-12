odoo.define('fl_auth_signup.user_custom_code', function (require) {
'use strict';
$(document).on('change', '#province', function () {
        let province = "."+$('#province').val()
        $("#district").children("option").css('display','none')
         $(province).css('display','block');
//        alert(province);
    });

//var Dialog = require('web.Dialog');
//var publicWidget = require('web.public.widget');
//
//publicWidget.registry.HelloWorldPopup = publicWidget.Widget.extend({
//    selector: '#wrapwrap',
//    console.log($('#ward').val),
//    start: function () {
//        Dialog.alert(this, "Hello, world!");
//        return this._super.apply(this, arguments);
//    },
//})
});