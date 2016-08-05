/*
 * File: app/view/MyFormPanel.js
 *
 * This file was generated by Sencha Architect
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

Ext.define('iagKgm.view.MyFormPanel', {
    extend: 'Ext.form.Panel',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Text',
        'Ext.Button',
        'Ext.TitleBar'
    ],

    config: {
        items: [
            {
                xtype: 'fieldset',
                margin: '',
                padding: '',
                title: 'Вход в http://system.iag.bg',
                items: [
                    {
                        xtype: 'textfield',
                        label: 'Пошребител:',
                        labelWidth: '40%'
                    },
                    {
                        xtype: 'textfield',
                        label: 'Парола:',
                        labelWidth: '40%'
                    }
                ]
            },
            {
                xtype: 'button',
                margin: '30px',
                text: 'Вход'
            },
            {
                xtype: 'titlebar',
                docked: 'top',
                ui: 'light',
                title: 'ИАГ'
            }
        ]
    }

});