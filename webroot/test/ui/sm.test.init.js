/*
 * Copyright (c) 2015 Juniper Networks, Inc. All rights reserved.
 */
var ctwu, ctwc, cowch, ctwgc, ctwgrc, ctwl, ctwm, ctwp, ctwvc,
    smwc, smwgc, smwu, smwl, smwm, smwgc, smwmc, smwru, smwdt;

var allTestFiles = [], smTestKarma = window.__karma__;

for (var file in smTestKarma.files) {
    if (/Test\.js$/.test(file)) {
        allTestFiles.push(file);
    }
}

var depArray = [
    'jquery', 'underscore', 'validation', 'core-constants', 'core-utils',
    'core-formatters', 'knockout', 'core-cache', 'contrail-common',

    'text!/base/contrail-web-core/webroot/templates/core.common.tmpl',
    'co-test-utils', 'layout-handler',

    'web-utils', 'handlebars-utils', 'slickgrid-utils', 'contrail-elements',
    'topology_api', 'chart-utils', 'qe-utils', 'nvd3-plugin', 'd3-utils', 'analyzer-utils',
    'dashboard-utils', 'joint.contrail', 'text', 'contrail-all-8', 'contrail-all-9'
];

require(['jquery', 'knockout'], function ($, Knockout) {
    window.ko = Knockout;

    require(depArray, function ($, _, validation, CoreConstants, CoreUtils, CoreFormatters, Knockout, Cache, contrailCommon, CoreCommonTmpls, CoreTestUtils, LayoutHandler) {
        cowc = new CoreConstants();
        cowu = new CoreUtils();
        cowf = new CoreFormatters();
        cowch = new Cache();
        kbValidation = validation;
        initBackboneValidation(_);
        initCustomKOBindings(Knockout);
        initDomEvents();
        layoutHandler = new LayoutHandler();

        $("body").addClass('navbar-fixed');
        $("body").append(CoreTestUtils.getPageHeaderHTML());
        $("body").append(CoreTestUtils.getSidebarHTML());
        $("body").append(CoreCommonTmpls);

        var cssList = CoreTestUtils.getCSSList();

        for (var i = 0; i < cssList.length; i++) {
            $("body").append(cssList[i]);
        }


        requirejs(['text!menu.xml'], function (menuXML) {
            requirejs(['co-test-mockdata', 'co-test-utils'], function (CoreSlickGridMockData, TestUtils) {
                globalObj['coTestUtils'] = TestUtils;
                var fakeServer = sinon.fakeServer.create();
                fakeServer.autoRespond = true;
                fakeServer.respondWith("GET", TestUtils.getRegExForUrl('/api/admin/webconfig/featurePkg/webController'), [200, {"Content-Type": "application/json"}, JSON.stringify(CoreSlickGridMockData.webControllerMockData)]);
                fakeServer.respondWith("GET", TestUtils.getRegExForUrl('/api/admin/webconfig/features/disabled'), [200, {"Content-Type": "application/json"}, JSON.stringify(CoreSlickGridMockData.disabledFeatureMockData)]);
                fakeServer.respondWith("GET", TestUtils.getRegExForUrl('/api/service/networking/web-server-info'), [200, {"Content-Type": "application/json"}, JSON.stringify(CoreSlickGridMockData.smWebServerInfoMockData)]);
                fakeServer.respondWith("GET", TestUtils.getRegExForUrl('/menu.xml'), [200, {"Content-Type": "application/xml"}, menuXML]);

                //fakeServer.autoRespondAfter = 6000;

                requirejs(['contrail-layout'], function () {
                    //TODO: Timeout is currently required to ensure menu is loaed i.e feature app is initialized
                    setTimeout(function() {
                        require(allTestFiles, function () {
                            requirejs.config({
                                deps: allTestFiles,
                                callback: window.__karma__.start
                            });
                        });
                    }, 1000);
                });
            });
        });
    });
});