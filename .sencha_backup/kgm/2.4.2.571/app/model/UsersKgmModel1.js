/*
 * File: app/model/UsersKgmModel1.js
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

Ext.define('iagKgmMob.model.UsersKgmModel1', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        fields: [
            {
                name: 'Ime'
            },
            {
                name: 'Prezime'
            },
            {
                name: 'Familia'
            },
            {
                name: 'UdoNoID'
            },
            {
                name: 'NumberZaiavlenie'
            },
            {
                name: 'DateZaiavlenie'
            },
            {
                name: 'SeriaKGM'
            },
            {
                name: 'strNumberKGM'
            },
            {
                name: 'ModelKGM'
            },
            {
                name: 'EGN_EIK'
            },
            {
                name: 'PolpulatedPlace'
            },
            {
                name: 'Municipality'
            },
            {
                name: 'Region'
            },
            {
                name: 'PhoneMob'
            },
            {
                name: 'AddressP'
            },
            {
                name: 'NamesID'
            }
        ]
    },

    fullName: function() {
        		var d = this.data,
        		names = [
        			d.Ime, d.Prezime, d.Familia
        		];
        		return names.join(' ');
    }

});