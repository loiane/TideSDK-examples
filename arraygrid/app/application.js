Ext.define('Sencha.Application', {
    name: 'Sencha',

    extend: 'Ext.app.Application',

    requires: [
        'Ext.grid.column.Date',
        'Ext.grid.column.Action'
    ],

    views: [
        'CompanyGrid',
        'Viewport'
    ],

    controllers: [
        'Company'
    ],

    stores: [
        'Companies'
    ]
});
