/*
 * File: app/store/UsersKgmStore.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('iagKgmMob.store.UsersKgmStore', {
    extend: 'Ext.data.Store',
    alias: 'store.userskgmstore',

    requires: [
        'iagKgmMob.model.UsersKgmModel',
        'Ext.data.proxy.JsonP',
        'Ext.data.reader.Json'
    ],

    config: {
        model: 'iagKgmMob.model.UsersKgmModel',
        storeId: 'UsersKgmStore',
        proxy: {
            type: 'jsonp',
            url: 'https://system.iag.bg/iagSys/resources/php/kgmusers.php',
            reader: {
                type: 'json'
            }
        }
    }
});