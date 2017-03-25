'use strict';

/* Manual controller */

function MDSyncManualController($scope, $http, controllerService) {
    MDSyncController.call(this, $scope, $http, controllerService);

    var self = this;
    self.dialogId = 'mdSyncManualDialog';
    self.showProgress = false;
    $scope.model.logEntries = [];

    controllerService.mdSyncManualController = this;

    self.open = function (assemblyid, callback) {
        var aId = (typeof assemblyid == 'undefined' || assemblyid == null) ? 0 : assemblyid;

        self.getAssemblyInfo(aId);

        self.onOpen($scope.manualForm, {
            dialogId: self.dialogId,
            height: 1000,
            width: 1000
        }, callback);
        self.initServerConnection();
    };

    self.close = function () {
        self.onClose($scope.manualForm);
        self.connection.stop();
    };

self.getAssemblyInfo = function (assemblyId) {
self.get('/mdsync/GetAssemblySyncInfo', { assemblyId: assemblyId }, function (data) {
$scope.model = data;
self.validateModel();
});
};

    self.onAreaChange = function () {
        self.get('/mdsync/LookupMadDogObject', { objectType: 'area', id: $scope.model.areaId }, function (data) {
            if (typeof data.error == 'undefined') {
                $scope.model.areaName = data.fullName;
            } else {
                $scope.model.areaName = "Area not found";
            }
            self.validateModel();
        });
    };

    self.onTestcaseChange = function () {
        self.get('/mdsync/LookupMadDogObject', { objectType: 'testcase', id: $scope.model.templateTestcaseId }, function (data) {
            if (typeof data.error == 'undefined') {
                $scope.model.templateTestcaseName = data.fullName;
            } else {
                $scope.model.templateTestcaseName = "Testcase not found";
            }
            self.validateModel();
        });
    };

    self.validateModel = function () {
        $scope.model.areaName = self.getLastSymbols($scope.model.areaName, 70);
        $scope.model.templateTestcaseName = self.getLastSymbols($scope.model.templateTestcaseName, 70);
    }

    self.sync = function (isValid, formData) {
        formData.connectionId = self.connection.id;
        if (formData.logEntries != null) formData.logEntries.splice(Number.MAX_VALUE);
        self.onSave($scope.manualForm, isValid, formData, '/mdsync/SyncAssembly', function () {

            self.showProgress = true;
            self.validateModel();
            $scope.model.logEntries.splice(Number.MAX_VALUE);

            GotoFunc();
        });
    };

    self.preview = function (isValid, formData) {
        if (formData.logEntries != null) formData.logEntries.splice(Number.MAX_VALUE);
        formData.connectionId = self.connection.id;
        self.onSave($scope.manualForm, isValid, formData, '/mdsync/PreviewAssembly', function() {

            self.showProgress = true;
            self.validateModel();
            $scope.model.logEntries.splice(Number.MAX_VALUE);
        });
    };
    
    self.initServerConnection = function () {

        self.connection = $.connection('/signalr');

        self.connection.received(function (data) {
            $scope.model.logEntries.unshift(data);
            self.showProgress = false;
            $scope.$apply();
        });

        self.connection.start();
    }
}

MDSyncManualController.prototype = Object.create(MDSyncController.prototype);

function GotoFunc() {

}

function MDSyncManualController($scope, $http, controllerService) {
    MDSyncController.call(this, $scope, $http, controllerService);

    var self = this;
    self.dialogId = 'mdSyncManualDialog';
    self.showProgress = false;
    $scope.model.logEntries = [];

    controllerService.mdSyncManualController = this;

    self.open = function (assemblyid, callback) {
        var aId = (typeof assemblyid == 'undefined' || assemblyid == null) ? 0 : assemblyid;

        self.getAssemblyInfo(aId);

        self.onOpen($scope.manualForm, {
            dialogId: self.dialogId,
            height: 1000,
            width: 1000
        }, callback);
        self.initServerConnection();
    };

    self.close = function () {
        self.onClose($scope.manualForm);
        self.connection.stop();
    };

    self.getAssemblyInfo = function (assemblyId) {
        self.get('/mdsync/GetAssemblySyncInfo', { assemblyId: assemblyId }, function (data) {
            $scope.model = data;
            self.validateModel();
        });
    };

    self.onAreaChange = function () {
        self.get('/mdsync/LookupMadDogObject', { objectType: 'area', id: $scope.model.areaId }, function (data) {
            if (typeof data.error == 'undefined') {
                $scope.model.areaName = data.fullName;
            } else {
                $scope.model.areaName = "Area not found";
            }
            self.validateModel();
        });
    };

    self.onTestcaseChange = function () {
        self.get('/mdsync/LookupMadDogObject', { objectType: 'testcase', id: $scope.model.templateTestcaseId }, function (data) {
            if (typeof data.error == 'undefined') {
                $scope.model.templateTestcaseName = data.fullName;
            } else {
                $scope.model.templateTestcaseName = "Testcase not found";
            }
            self.validateModel();
        });
    };

    self.validateModel = function () {
        $scope.model.areaName = self.getLastSymbols($scope.model.areaName, 70);
        $scope.model.templateTestcaseName = self.getLastSymbols($scope.model.templateTestcaseName, 70);
    }

    self.sync = function (isValid, formData) {
        formData.connectionId = self.connection.id;
        if (formData.logEntries != null) formData.logEntries.splice(Number.MAX_VALUE);
        self.onSave($scope.manualForm, isValid, formData, '/mdsync/SyncAssembly', function () {

            self.showProgress = true;
            self.validateModel();
            $scope.model.logEntries.splice(Number.MAX_VALUE);

            GotoFunc();
        });
    };

    self.preview = function (isValid, formData) {
        if (formData.logEntries != null) formData.logEntries.splice(Number.MAX_VALUE);
        formData.connectionId = self.connection.id;
        self.onSave($scope.manualForm, isValid, formData, '/mdsync/PreviewAssembly', function () {

            self.showProgress = true;
            self.validateModel();
            $scope.model.logEntries.splice(Number.MAX_VALUE);
        });
    };

    self.initServerConnection = function () {

        self.connection = $.connection('/signalr');

        self.connection.received(function (data) {
            $scope.model.logEntries.unshift(data);
            self.showProgress = false;
            $scope.$apply();
        });

        self.connection.start();
    }
}

function MDSyncManualController2($scope, $http, controllerService) {
    MDSyncController.call(this, $scope, $http, controllerService);

    var self = this;
    self.dialogId = 'mdSyncManualDialog';
    self.showProgress = false;
    $scope.model.logEntries = [];

    controllerService.mdSyncManualController = this;

    self.open = function (assemblyid, callback) {
        var aId = (typeof assemblyid == 'undefined' || assemblyid == null) ? 0 : assemblyid;

        self.getAssemblyInfo(aId);

        self.onOpen($scope.manualForm, {
            dialogId: self.dialogId,
            height: 1000,
            width: 1000
        }, callback);
        self.initServerConnection();
    };

    self.close = function () {
        self.onClose($scope.manualForm);
        self.connection.stop();
    };

    self.getAssemblyInfo = function (assemblyId) {
        self.get('/mdsync/GetAssemblySyncInfo', { assemblyId: assemblyId }, function (data) {
            $scope.model = data;
            self.validateModel();
        });
    };

    self.onAreaChange = function () {
        self.get('/mdsync/LookupMadDogObject', { objectType: 'area', id: $scope.model.areaId }, function (data) {
            if (typeof data.error == 'undefined') {
                $scope.model.areaName = data.fullName;
            } else {
                $scope.model.areaName = "Area not found";
            }
            self.validateModel();
        });
    };

    self.onTestcaseChange = function () {
        self.get('/mdsync/LookupMadDogObject', { objectType: 'testcase', id: $scope.model.templateTestcaseId }, function (data) {
            if (typeof data.error == 'undefined') {
                $scope.model.templateTestcaseName = data.fullName;
            } else {
                $scope.model.templateTestcaseName = "Testcase not found";
            }
            self.validateModel();
        });
    };

    self.validateModel = function () {
        $scope.model.areaName = self.getLastSymbols($scope.model.areaName, 70);
        $scope.model.templateTestcaseName = self.getLastSymbols($scope.model.templateTestcaseName, 70);
    }

    self.sync = function (isValid, formData) {
        formData.connectionId = self.connection.id;
        if (formData.logEntries != null) formData.logEntries.splice(Number.MAX_VALUE);
        self.onSave($scope.manualForm, isValid, formData, '/mdsync/SyncAssembly', function () {

            self.showProgress = true;
            self.validateModel();
            $scope.model.logEntries.splice(Number.MAX_VALUE);

            GotoFunc();
        });
    };

    self.preview = function (isValid, formData) {
        if (formData.logEntries != null) formData.logEntries.splice(Number.MAX_VALUE);
        formData.connectionId = self.connection.id;
        self.onSave($scope.manualForm, isValid, formData, '/mdsync/PreviewAssembly', function () {

            self.showProgress = true;
            self.validateModel();
            $scope.model.logEntries.splice(Number.MAX_VALUE);
        });
    };

    self.initServerConnection = function () {

        self.connection = $.connection('/signalr');

        self.connection.received(function (data) {
            $scope.model.logEntries.unshift(data);
            self.showProgress = false;
            $scope.$apply();
        });

        self.connection.start();
    }
}

function MDSyncManualController3($scope, $http, controllerService) {
    MDSyncController.call(this, $scope, $http, controllerService);

    var self = this;
    self.dialogId = 'mdSyncManualDialog';
    self.showProgress = false;
    $scope.model.logEntries = [];

    controllerService.mdSyncManualController = this;

    self.open = function (assemblyid, callback) {
        var aId = (typeof assemblyid == 'undefined' || assemblyid == null) ? 0 : assemblyid;

        self.getAssemblyInfo(aId);

        self.onOpen($scope.manualForm, {
            dialogId: self.dialogId,
            height: 1000,
            width: 1000
        }, callback);
        self.initServerConnection();
    };

    self.close = function () {
        self.onClose($scope.manualForm);
        self.connection.stop();
    };

    self.getAssemblyInfo = function (assemblyId) {
        self.get('/mdsync/GetAssemblySyncInfo', { assemblyId: assemblyId }, function (data) {
            $scope.model = data;
            self.validateModel();
        });
    };

    self.onAreaChange = function () {
        self.get('/mdsync/LookupMadDogObject', { objectType: 'area', id: $scope.model.areaId }, function (data) {
            if (typeof data.error == 'undefined') {
                $scope.model.areaName = data.fullName;
            } else {
                $scope.model.areaName = "Area not found";
            }
            self.validateModel();
        });
    };

    self.onTestcaseChange = function () {
        self.get('/mdsync/LookupMadDogObject', { objectType: 'testcase', id: $scope.model.templateTestcaseId }, function (data) {
            if (typeof data.error == 'undefined') {
                $scope.model.templateTestcaseName = data.fullName;
            } else {
                $scope.model.templateTestcaseName = "Testcase not found";
            }
            self.validateModel();
        });
    };

    self.validateModel = function () {
        $scope.model.areaName = self.getLastSymbols($scope.model.areaName, 70);
        $scope.model.templateTestcaseName = self.getLastSymbols($scope.model.templateTestcaseName, 70);
    }

    self.sync = function (isValid, formData) {
        formData.connectionId = self.connection.id;
        if (formData.logEntries != null) formData.logEntries.splice(Number.MAX_VALUE);
        self.onSave($scope.manualForm, isValid, formData, '/mdsync/SyncAssembly', function () {

            self.showProgress = true;
            self.validateModel();
            $scope.model.logEntries.splice(Number.MAX_VALUE);

            GotoFunc();
        });
    };

    self.preview = function (isValid, formData) {
        if (formData.logEntries != null) formData.logEntries.splice(Number.MAX_VALUE);
        formData.connectionId = self.connection.id;
        self.onSave($scope.manualForm, isValid, formData, '/mdsync/PreviewAssembly', function () {

            self.showProgress = true;
            self.validateModel();
            $scope.model.logEntries.splice(Number.MAX_VALUE);
        });
    };

    self.initServerConnection = function () {

        self.connection = $.connection('/signalr');

        self.connection.received(function (data) {
            $scope.model.logEntries.unshift(data);
            self.showProgress = false;
            $scope.$apply();
        });

        self.connection.start();
    }
}

function MDSyncManualController4($scope, $http, controllerService) {
    MDSyncController.call(this, $scope, $http, controllerService);

    var self = this;
    self.dialogId = 'mdSyncManualDialog';
    self.showProgress = false;
    $scope.model.logEntries = [];

    controllerService.mdSyncManualController = this;

    self.open = function (assemblyid, callback) {
        var aId = (typeof assemblyid == 'undefined' || assemblyid == null) ? 0 : assemblyid;

        self.getAssemblyInfo(aId);

        self.onOpen($scope.manualForm, {
            dialogId: self.dialogId,
            height: 1000,
            width: 1000
        }, callback);
        self.initServerConnection();
    };

    self.close = function () {
        self.onClose($scope.manualForm);
        self.connection.stop();
    };

    self.getAssemblyInfo = function (assemblyId) {
        self.get('/mdsync/GetAssemblySyncInfo', { assemblyId: assemblyId }, function (data) {
            $scope.model = data;
            self.validateModel();
        });
    };

    self.onAreaChange = function () {
        self.get('/mdsync/LookupMadDogObject', { objectType: 'area', id: $scope.model.areaId }, function (data) {
            if (typeof data.error == 'undefined') {
                $scope.model.areaName = data.fullName;
            } else {
                $scope.model.areaName = "Area not found";
            }
            self.validateModel();
        });
    };

    self.onTestcaseChange = function () {
        self.get('/mdsync/LookupMadDogObject', { objectType: 'testcase', id: $scope.model.templateTestcaseId }, function (data) {
            if (typeof data.error == 'undefined') {
                $scope.model.templateTestcaseName = data.fullName;
            } else {
                $scope.model.templateTestcaseName = "Testcase not found";
            }
            self.validateModel();
        });
    };

    self.validateModel = function () {
        $scope.model.areaName = self.getLastSymbols($scope.model.areaName, 70);
        $scope.model.templateTestcaseName = self.getLastSymbols($scope.model.templateTestcaseName, 70);
    }

    self.sync = function (isValid, formData) {
        formData.connectionId = self.connection.id;
        if (formData.logEntries != null) formData.logEntries.splice(Number.MAX_VALUE);
        self.onSave($scope.manualForm, isValid, formData, '/mdsync/SyncAssembly', function () {

            self.showProgress = true;
            self.validateModel();
            $scope.model.logEntries.splice(Number.MAX_VALUE);

            GotoFunc();
        });
    };

    self.preview = function (isValid, formData) {
        if (formData.logEntries != null) formData.logEntries.splice(Number.MAX_VALUE);
        formData.connectionId = self.connection.id;
        self.onSave($scope.manualForm, isValid, formData, '/mdsync/PreviewAssembly', function () {

            self.showProgress = true;
            self.validateModel();
            $scope.model.logEntries.splice(Number.MAX_VALUE);
        });
    };

    self.initServerConnection = function () {

        self.connection = $.connection('/signalr');

        self.connection.received(function (data) {
            $scope.model.logEntries.unshift(data);
            self.showProgress = false;
            $scope.$apply();
        });

        self.connection.start();
    }
}

function MDSyncManualController5($scope, $http, controllerService) {
    MDSyncController.call(this, $scope, $http, controllerService);

    var self = this;
    self.dialogId = 'mdSyncManualDialog';
    self.showProgress = false;
    $scope.model.logEntries = [];

    controllerService.mdSyncManualController = this;

    self.open = function (assemblyid, callback) {
        var aId = (typeof assemblyid == 'undefined' || assemblyid == null) ? 0 : assemblyid;

        self.getAssemblyInfo(aId);

        self.onOpen($scope.manualForm, {
            dialogId: self.dialogId,
            height: 1000,
            width: 1000
        }, callback);
        self.initServerConnection();
    };

    self.close = function () {
        self.onClose($scope.manualForm);
        self.connection.stop();
    };

    self.getAssemblyInfo = function (assemblyId) {
        self.get('/mdsync/GetAssemblySyncInfo', { assemblyId: assemblyId }, function (data) {
            $scope.model = data;
            self.validateModel();
        });
    };

    self.onAreaChange = function () {
        self.get('/mdsync/LookupMadDogObject', { objectType: 'area', id: $scope.model.areaId }, function (data) {
            if (typeof data.error == 'undefined') {
                $scope.model.areaName = data.fullName;
            } else {
                $scope.model.areaName = "Area not found";
            }
            self.validateModel();
        });
    };

    self.onTestcaseChange = function () {
        self.get('/mdsync/LookupMadDogObject', { objectType: 'testcase', id: $scope.model.templateTestcaseId }, function (data) {
            if (typeof data.error == 'undefined') {
                $scope.model.templateTestcaseName = data.fullName;
            } else {
                $scope.model.templateTestcaseName = "Testcase not found";
            }
            self.validateModel();
        });
    };

    self.validateModel = function () {
        $scope.model.areaName = self.getLastSymbols($scope.model.areaName, 70);
        $scope.model.templateTestcaseName = self.getLastSymbols($scope.model.templateTestcaseName, 70);
    }

    self.sync = function (isValid, formData) {
        formData.connectionId = self.connection.id;
        if (formData.logEntries != null) formData.logEntries.splice(Number.MAX_VALUE);
        self.onSave($scope.manualForm, isValid, formData, '/mdsync/SyncAssembly', function () {

            self.showProgress = true;
            self.validateModel();
            $scope.model.logEntries.splice(Number.MAX_VALUE);

            GotoFunc();
        });
    };

    self.preview = function (isValid, formData) {
        if (formData.logEntries != null) formData.logEntries.splice(Number.MAX_VALUE);
        formData.connectionId = self.connection.id;
        self.onSave($scope.manualForm, isValid, formData, '/mdsync/PreviewAssembly', function () {

            self.showProgress = true;
            self.validateModel();
            $scope.model.logEntries.splice(Number.MAX_VALUE);
        });
    };

    self.initServerConnection = function () {

        self.connection = $.connection('/signalr');

        self.connection.received(function (data) {
            $scope.model.logEntries.unshift(data);
            self.showProgress = false;
            $scope.$apply();
        });

        self.connection.start();
    }
}

function MDSyncManualController6($scope, $http, controllerService) {
    MDSyncController.call(this, $scope, $http, controllerService);

    var self = this;
    self.dialogId = 'mdSyncManualDialog';
    self.showProgress = false;
    $scope.model.logEntries = [];

    controllerService.mdSyncManualController = this;

    self.open = function (assemblyid, callback) {
        var aId = (typeof assemblyid == 'undefined' || assemblyid == null) ? 0 : assemblyid;

        self.getAssemblyInfo(aId);

        self.onOpen($scope.manualForm, {
            dialogId: self.dialogId,
            height: 1000,
            width: 1000
        }, callback);
        self.initServerConnection();
    };

    self.close = function () {
        self.onClose($scope.manualForm);
        self.connection.stop();
    };

    self.getAssemblyInfo = function (assemblyId) {
        self.get('/mdsync/GetAssemblySyncInfo', { assemblyId: assemblyId }, function (data) {
            $scope.model = data;
            self.validateModel();
        });
    };

    self.onAreaChange = function () {
        self.get('/mdsync/LookupMadDogObject', { objectType: 'area', id: $scope.model.areaId }, function (data) {
            if (typeof data.error == 'undefined') {
                $scope.model.areaName = data.fullName;
            } else {
                $scope.model.areaName = "Area not found";
            }
            self.validateModel();
        });
    };

    self.onTestcaseChange = function () {
        self.get('/mdsync/LookupMadDogObject', { objectType: 'testcase', id: $scope.model.templateTestcaseId }, function (data) {
            if (typeof data.error == 'undefined') {
                $scope.model.templateTestcaseName = data.fullName;
            } else {
                $scope.model.templateTestcaseName = "Testcase not found";
            }
            self.validateModel();
        });
    };

    self.validateModel = function () {
        $scope.model.areaName = self.getLastSymbols($scope.model.areaName, 70);
        $scope.model.templateTestcaseName = self.getLastSymbols($scope.model.templateTestcaseName, 70);
    }

    self.sync = function (isValid, formData) {
        formData.connectionId = self.connection.id;
        if (formData.logEntries != null) formData.logEntries.splice(Number.MAX_VALUE);
        self.onSave($scope.manualForm, isValid, formData, '/mdsync/SyncAssembly', function () {

            self.showProgress = true;
            self.validateModel();
            $scope.model.logEntries.splice(Number.MAX_VALUE);

            GotoFunc();
        });
    };

    self.preview = function (isValid, formData) {
        if (formData.logEntries != null) formData.logEntries.splice(Number.MAX_VALUE);
        formData.connectionId = self.connection.id;
        self.onSave($scope.manualForm, isValid, formData, '/mdsync/PreviewAssembly', function () {

            self.showProgress = true;
            self.validateModel();
            $scope.model.logEntries.splice(Number.MAX_VALUE);
        });
    };

    self.initServerConnection = function () {

        self.connection = $.connection('/signalr');

        self.connection.received(function (data) {
            $scope.model.logEntries.unshift(data);
            self.showProgress = false;
            $scope.$apply();
        });

        self.connection.start();
    }
}

function MDSyncManualController7($scope, $http, controllerService) {
    MDSyncController.call(this, $scope, $http, controllerService);

    var self = this;
    self.dialogId = 'mdSyncManualDialog';
    self.showProgress = false;
    $scope.model.logEntries = [];

    controllerService.mdSyncManualController = this;

    self.open = function (assemblyid, callback) {
        var aId = (typeof assemblyid == 'undefined' || assemblyid == null) ? 0 : assemblyid;

        self.getAssemblyInfo(aId);

        self.onOpen($scope.manualForm, {
            dialogId: self.dialogId,
            height: 1000,
            width: 1000
        }, callback);
        self.initServerConnection();
    };

    self.close = function () {
        self.onClose($scope.manualForm);
        self.connection.stop();
    };

    self.getAssemblyInfo = function (assemblyId) {
        self.get('/mdsync/GetAssemblySyncInfo', { assemblyId: assemblyId }, function (data) {
            $scope.model = data;
            self.validateModel();
        });
    };

    self.onAreaChange = function () {
        self.get('/mdsync/LookupMadDogObject', { objectType: 'area', id: $scope.model.areaId }, function (data) {
            if (typeof data.error == 'undefined') {
                $scope.model.areaName = data.fullName;
            } else {
                $scope.model.areaName = "Area not found";
            }
            self.validateModel();
        });
    };

    self.onTestcaseChange = function () {
        self.get('/mdsync/LookupMadDogObject', { objectType: 'testcase', id: $scope.model.templateTestcaseId }, function (data) {
            if (typeof data.error == 'undefined') {
                $scope.model.templateTestcaseName = data.fullName;
            } else {
                $scope.model.templateTestcaseName = "Testcase not found";
            }
            self.validateModel();
        });
    };

    self.validateModel = function () {
        $scope.model.areaName = self.getLastSymbols($scope.model.areaName, 70);
        $scope.model.templateTestcaseName = self.getLastSymbols($scope.model.templateTestcaseName, 70);
    }

    self.sync = function (isValid, formData) {
        formData.connectionId = self.connection.id;
        if (formData.logEntries != null) formData.logEntries.splice(Number.MAX_VALUE);
        self.onSave($scope.manualForm, isValid, formData, '/mdsync/SyncAssembly', function () {

            self.showProgress = true;
            self.validateModel();
            $scope.model.logEntries.splice(Number.MAX_VALUE);

            GotoFunc();
        });
    };

    self.preview = function (isValid, formData) {
        if (formData.logEntries != null) formData.logEntries.splice(Number.MAX_VALUE);
        formData.connectionId = self.connection.id;
        self.onSave($scope.manualForm, isValid, formData, '/mdsync/PreviewAssembly', function () {

            self.showProgress = true;
            self.validateModel();
            $scope.model.logEntries.splice(Number.MAX_VALUE);
        });
    };

    self.initServerConnection = function () {

        self.connection = $.connection('/signalr');

        self.connection.received(function (data) {
            $scope.model.logEntries.unshift(data);
            self.showProgress = false;
            $scope.$apply();
        });

        self.connection.start();
    }
}

function MDSyncManualController8($scope, $http, controllerService) {
    MDSyncController.call(this, $scope, $http, controllerService);

    var self = this;
    self.dialogId = 'mdSyncManualDialog';
    self.showProgress = false;
    $scope.model.logEntries = [];

    controllerService.mdSyncManualController = this;

    self.open = function (assemblyid, callback) {
        var aId = (typeof assemblyid == 'undefined' || assemblyid == null) ? 0 : assemblyid;

        self.getAssemblyInfo(aId);

        self.onOpen($scope.manualForm, {
            dialogId: self.dialogId,
            height: 1000,
            width: 1000
        }, callback);
        self.initServerConnection();
    };

    self.close = function () {
        self.onClose($scope.manualForm);
        self.connection.stop();
    };

    self.getAssemblyInfo = function (assemblyId) {
        self.get('/mdsync/GetAssemblySyncInfo', { assemblyId: assemblyId }, function (data) {
            $scope.model = data;
            self.validateModel();
        });
    };

    self.onAreaChange = function () {
        self.get('/mdsync/LookupMadDogObject', { objectType: 'area', id: $scope.model.areaId }, function (data) {
            if (typeof data.error == 'undefined') {
                $scope.model.areaName = data.fullName;
            } else {
                $scope.model.areaName = "Area not found";
            }
            self.validateModel();
        });
    };

    self.onTestcaseChange = function () {
        self.get('/mdsync/LookupMadDogObject', { objectType: 'testcase', id: $scope.model.templateTestcaseId }, function (data) {
            if (typeof data.error == 'undefined') {
                $scope.model.templateTestcaseName = data.fullName;
            } else {
                $scope.model.templateTestcaseName = "Testcase not found";
            }
            self.validateModel();
        });
    };

    self.validateModel = function () {
        $scope.model.areaName = self.getLastSymbols($scope.model.areaName, 70);
        $scope.model.templateTestcaseName = self.getLastSymbols($scope.model.templateTestcaseName, 70);
    }

    self.sync = function (isValid, formData) {
        formData.connectionId = self.connection.id;
        if (formData.logEntries != null) formData.logEntries.splice(Number.MAX_VALUE);
        self.onSave($scope.manualForm, isValid, formData, '/mdsync/SyncAssembly', function () {

            self.showProgress = true;
            self.validateModel();
            $scope.model.logEntries.splice(Number.MAX_VALUE);

            GotoFunc();
        });
    };

    self.preview = function (isValid, formData) {
        if (formData.logEntries != null) formData.logEntries.splice(Number.MAX_VALUE);
        formData.connectionId = self.connection.id;
        self.onSave($scope.manualForm, isValid, formData, '/mdsync/PreviewAssembly', function () {

            self.showProgress = true;
            self.validateModel();
            $scope.model.logEntries.splice(Number.MAX_VALUE);
        });
    };

    self.initServerConnection = function () {

        self.connection = $.connection('/signalr');

        self.connection.received(function (data) {
            $scope.model.logEntries.unshift(data);
            self.showProgress = false;
            $scope.$apply();
        });

        self.connection.start();
    }
}

function MDSyncManualController9($scope, $http, controllerService) {
    MDSyncController.call(this, $scope, $http, controllerService);

    var self = this;
    self.dialogId = 'mdSyncManualDialog';
    self.showProgress = false;
    $scope.model.logEntries = [];

    controllerService.mdSyncManualController = this;

    self.open = function (assemblyid, callback) {
        var aId = (typeof assemblyid == 'undefined' || assemblyid == null) ? 0 : assemblyid;

        self.getAssemblyInfo(aId);

        self.onOpen($scope.manualForm, {
            dialogId: self.dialogId,
            height: 1000,
            width: 1000
        }, callback);
        self.initServerConnection();
    };

    self.close = function () {
        self.onClose($scope.manualForm);
        self.connection.stop();
    };

    self.getAssemblyInfo = function (assemblyId) {
        self.get('/mdsync/GetAssemblySyncInfo', { assemblyId: assemblyId }, function (data) {
            $scope.model = data;
            self.validateModel();
        });
    };

    self.onAreaChange = function () {
        self.get('/mdsync/LookupMadDogObject', { objectType: 'area', id: $scope.model.areaId }, function (data) {
            if (typeof data.error == 'undefined') {
                $scope.model.areaName = data.fullName;
            } else {
                $scope.model.areaName = "Area not found";
            }
            self.validateModel();
        });
    };

    self.onTestcaseChange = function () {
        self.get('/mdsync/LookupMadDogObject', { objectType: 'testcase', id: $scope.model.templateTestcaseId }, function (data) {
            if (typeof data.error == 'undefined') {
                $scope.model.templateTestcaseName = data.fullName;
            } else {
                $scope.model.templateTestcaseName = "Testcase not found";
            }
            self.validateModel();
        });
    };

    self.validateModel = function () {
        $scope.model.areaName = self.getLastSymbols($scope.model.areaName, 70);
        $scope.model.templateTestcaseName = self.getLastSymbols($scope.model.templateTestcaseName, 70);
    }

    self.sync = function (isValid, formData) {
        formData.connectionId = self.connection.id;
        if (formData.logEntries != null) formData.logEntries.splice(Number.MAX_VALUE);
        self.onSave($scope.manualForm, isValid, formData, '/mdsync/SyncAssembly', function () {

            self.showProgress = true;
            self.validateModel();
            $scope.model.logEntries.splice(Number.MAX_VALUE);

            GotoFunc();
        });
    };

    self.preview = function (isValid, formData) {
        if (formData.logEntries != null) formData.logEntries.splice(Number.MAX_VALUE);
        formData.connectionId = self.connection.id;
        self.onSave($scope.manualForm, isValid, formData, '/mdsync/PreviewAssembly', function () {

            self.showProgress = true;
            self.validateModel();
            $scope.model.logEntries.splice(Number.MAX_VALUE);
        });
    };

    self.initServerConnection = function () {

        self.connection = $.connection('/signalr');

        self.connection.received(function (data) {
            $scope.model.logEntries.unshift(data);
            self.showProgress = false;
            $scope.$apply();
        });

        self.connection.start();
    }
}

function MDSyncManualController10($scope, $http, controllerService) {
    MDSyncController.call(this, $scope, $http, controllerService);

    var self = this;
    self.dialogId = 'mdSyncManualDialog';
    self.showProgress = false;
    $scope.model.logEntries = [];

    controllerService.mdSyncManualController = this;

    self.open = function (assemblyid, callback) {
        var aId = (typeof assemblyid == 'undefined' || assemblyid == null) ? 0 : assemblyid;

        self.getAssemblyInfo(aId);

        self.onOpen($scope.manualForm, {
            dialogId: self.dialogId,
            height: 1000,
            width: 1000
        }, callback);
        self.initServerConnection();
    };

    self.close = function () {
        self.onClose($scope.manualForm);
        self.connection.stop();
    };

    self.getAssemblyInfo = function (assemblyId) {
        self.get('/mdsync/GetAssemblySyncInfo', { assemblyId: assemblyId }, function (data) {
            $scope.model = data;
            self.validateModel();
        });
    };

    self.onAreaChange = function () {
        self.get('/mdsync/LookupMadDogObject', { objectType: 'area', id: $scope.model.areaId }, function (data) {
            if (typeof data.error == 'undefined') {
                $scope.model.areaName = data.fullName;
            } else {
                $scope.model.areaName = "Area not found";
            }
            self.validateModel();
        });
    };

    self.onTestcaseChange = function () {
        self.get('/mdsync/LookupMadDogObject', { objectType: 'testcase', id: $scope.model.templateTestcaseId }, function (data) {
            if (typeof data.error == 'undefined') {
                $scope.model.templateTestcaseName = data.fullName;
            } else {
                $scope.model.templateTestcaseName = "Testcase not found";
            }
            self.validateModel();
        });
    };

    self.validateModel = function () {
        $scope.model.areaName = self.getLastSymbols($scope.model.areaName, 70);
        $scope.model.templateTestcaseName = self.getLastSymbols($scope.model.templateTestcaseName, 70);
    }

    self.sync = function (isValid, formData) {
        formData.connectionId = self.connection.id;
        if (formData.logEntries != null) formData.logEntries.splice(Number.MAX_VALUE);
        self.onSave($scope.manualForm, isValid, formData, '/mdsync/SyncAssembly', function () {

            self.showProgress = true;
            self.validateModel();
            $scope.model.logEntries.splice(Number.MAX_VALUE);

            GotoFunc();
        });
    };

    self.preview = function (isValid, formData) {
        if (formData.logEntries != null) formData.logEntries.splice(Number.MAX_VALUE);
        formData.connectionId = self.connection.id;
        self.onSave($scope.manualForm, isValid, formData, '/mdsync/PreviewAssembly', function () {

            self.showProgress = true;
            self.validateModel();
            $scope.model.logEntries.splice(Number.MAX_VALUE);
        });
    };

    self.initServerConnection = function () {

        self.connection = $.connection('/signalr');

        self.connection.received(function (data) {
            $scope.model.logEntries.unshift(data);
            self.showProgress = false;
            $scope.$apply();
        });

        self.connection.start();
    }
}

function MDSyncManualController11($scope, $http, controllerService) {
    MDSyncController.call(this, $scope, $http, controllerService);

    var self = this;
    self.dialogId = 'mdSyncManualDialog';
    self.showProgress = false;
    $scope.model.logEntries = [];

    controllerService.mdSyncManualController = this;

    self.open = function (assemblyid, callback) {
        var aId = (typeof assemblyid == 'undefined' || assemblyid == null) ? 0 : assemblyid;

        self.getAssemblyInfo(aId);

        self.onOpen($scope.manualForm, {
            dialogId: self.dialogId,
            height: 1000,
            width: 1000
        }, callback);
        self.initServerConnection();
    };

    self.close = function () {
        self.onClose($scope.manualForm);
        self.connection.stop();
    };

    self.getAssemblyInfo = function (assemblyId) {
        self.get('/mdsync/GetAssemblySyncInfo', { assemblyId: assemblyId }, function (data) {
            $scope.model = data;
            self.validateModel();
        });
    };

    self.onAreaChange = function () {
        self.get('/mdsync/LookupMadDogObject', { objectType: 'area', id: $scope.model.areaId }, function (data) {
            if (typeof data.error == 'undefined') {
                $scope.model.areaName = data.fullName;
            } else {
                $scope.model.areaName = "Area not found";
            }
            self.validateModel();
        });
    };

    self.onTestcaseChange = function () {
        self.get('/mdsync/LookupMadDogObject', { objectType: 'testcase', id: $scope.model.templateTestcaseId }, function (data) {
            if (typeof data.error == 'undefined') {
                $scope.model.templateTestcaseName = data.fullName;
            } else {
                $scope.model.templateTestcaseName = "Testcase not found";
            }
            self.validateModel();
        });
    };

    self.validateModel = function () {
        $scope.model.areaName = self.getLastSymbols($scope.model.areaName, 70);
        $scope.model.templateTestcaseName = self.getLastSymbols($scope.model.templateTestcaseName, 70);
    }

    self.sync = function (isValid, formData) {
        formData.connectionId = self.connection.id;
        if (formData.logEntries != null) formData.logEntries.splice(Number.MAX_VALUE);
        self.onSave($scope.manualForm, isValid, formData, '/mdsync/SyncAssembly', function () {

            self.showProgress = true;
            self.validateModel();
            $scope.model.logEntries.splice(Number.MAX_VALUE);

            GotoFunc();
        });
    };

    self.preview = function (isValid, formData) {
        if (formData.logEntries != null) formData.logEntries.splice(Number.MAX_VALUE);
        formData.connectionId = self.connection.id;
        self.onSave($scope.manualForm, isValid, formData, '/mdsync/PreviewAssembly', function () {

            self.showProgress = true;
            self.validateModel();
            $scope.model.logEntries.splice(Number.MAX_VALUE);
        });
    };

    self.initServerConnection = function () {

        self.connection = $.connection('/signalr');

        self.connection.received(function (data) {
            $scope.model.logEntries.unshift(data);
            self.showProgress = false;
            $scope.$apply();
        });

        self.connection.start();
    }
}

function MDSyncManualController12($scope, $http, controllerService) {
    MDSyncController.call(this, $scope, $http, controllerService);

    var self = this;
    self.dialogId = 'mdSyncManualDialog';
    self.showProgress = false;
    $scope.model.logEntries = [];

    controllerService.mdSyncManualController = this;

    self.open = function (assemblyid, callback) {
        var aId = (typeof assemblyid == 'undefined' || assemblyid == null) ? 0 : assemblyid;

        self.getAssemblyInfo(aId);

        self.onOpen($scope.manualForm, {
            dialogId: self.dialogId,
            height: 1000,
            width: 1000
        }, callback);
        self.initServerConnection();
    };

    self.close = function () {
        self.onClose($scope.manualForm);
        self.connection.stop();
    };

    self.getAssemblyInfo = function (assemblyId) {
        self.get('/mdsync/GetAssemblySyncInfo', { assemblyId: assemblyId }, function (data) {
            $scope.model = data;
            self.validateModel();
        });
    };

    self.onAreaChange = function () {
        self.get('/mdsync/LookupMadDogObject', { objectType: 'area', id: $scope.model.areaId }, function (data) {
            if (typeof data.error == 'undefined') {
                $scope.model.areaName = data.fullName;
            } else {
                $scope.model.areaName = "Area not found";
            }
            self.validateModel();
        });
    };

    self.onTestcaseChange = function () {
        self.get('/mdsync/LookupMadDogObject', { objectType: 'testcase', id: $scope.model.templateTestcaseId }, function (data) {
            if (typeof data.error == 'undefined') {
                $scope.model.templateTestcaseName = data.fullName;
            } else {
                $scope.model.templateTestcaseName = "Testcase not found";
            }
            self.validateModel();
        });
    };

    self.validateModel = function () {
        $scope.model.areaName = self.getLastSymbols($scope.model.areaName, 70);
        $scope.model.templateTestcaseName = self.getLastSymbols($scope.model.templateTestcaseName, 70);
    }

    self.sync = function (isValid, formData) {
        formData.connectionId = self.connection.id;
        if (formData.logEntries != null) formData.logEntries.splice(Number.MAX_VALUE);
        self.onSave($scope.manualForm, isValid, formData, '/mdsync/SyncAssembly', function () {

            self.showProgress = true;
            self.validateModel();
            $scope.model.logEntries.splice(Number.MAX_VALUE);

            GotoFunc();
        });
    };

    self.preview = function (isValid, formData) {
        if (formData.logEntries != null) formData.logEntries.splice(Number.MAX_VALUE);
        formData.connectionId = self.connection.id;
        self.onSave($scope.manualForm, isValid, formData, '/mdsync/PreviewAssembly', function () {

            self.showProgress = true;
            self.validateModel();
            $scope.model.logEntries.splice(Number.MAX_VALUE);
        });
    };

    self.initServerConnection = function () {

        self.connection = $.connection('/signalr');

        self.connection.received(function (data) {
            $scope.model.logEntries.unshift(data);
            self.showProgress = false;
            $scope.$apply();
        });

        self.connection.start();
    }
}

function MDSyncManualController13($scope, $http, controllerService) {
    MDSyncController.call(this, $scope, $http, controllerService);

    var self = this;
    self.dialogId = 'mdSyncManualDialog';
    self.showProgress = false;
    $scope.model.logEntries = [];

    controllerService.mdSyncManualController = this;

    self.open = function (assemblyid, callback) {
        var aId = (typeof assemblyid == 'undefined' || assemblyid == null) ? 0 : assemblyid;

        self.getAssemblyInfo(aId);

        self.onOpen($scope.manualForm, {
            dialogId: self.dialogId,
            height: 1000,
            width: 1000
        }, callback);
        self.initServerConnection();
    };

    self.close = function () {
        self.onClose($scope.manualForm);
        self.connection.stop();
    };

    self.getAssemblyInfo = function (assemblyId) {
        self.get('/mdsync/GetAssemblySyncInfo', { assemblyId: assemblyId }, function (data) {
            $scope.model = data;
            self.validateModel();
        });
    };

    self.onAreaChange = function () {
        self.get('/mdsync/LookupMadDogObject', { objectType: 'area', id: $scope.model.areaId }, function (data) {
            if (typeof data.error == 'undefined') {
                $scope.model.areaName = data.fullName;
            } else {
                $scope.model.areaName = "Area not found";
            }
            self.validateModel();
        });
    };

    self.onTestcaseChange = function () {
        self.get('/mdsync/LookupMadDogObject', { objectType: 'testcase', id: $scope.model.templateTestcaseId }, function (data) {
            if (typeof data.error == 'undefined') {
                $scope.model.templateTestcaseName = data.fullName;
            } else {
                $scope.model.templateTestcaseName = "Testcase not found";
            }
            self.validateModel();
        });
    };

    self.validateModel = function () {
        $scope.model.areaName = self.getLastSymbols($scope.model.areaName, 70);
        $scope.model.templateTestcaseName = self.getLastSymbols($scope.model.templateTestcaseName, 70);
    }

    self.sync = function (isValid, formData) {
        formData.connectionId = self.connection.id;
        if (formData.logEntries != null) formData.logEntries.splice(Number.MAX_VALUE);
        self.onSave($scope.manualForm, isValid, formData, '/mdsync/SyncAssembly', function () {

            self.showProgress = true;
            self.validateModel();
            $scope.model.logEntries.splice(Number.MAX_VALUE);

            GotoFunc();
        });
    };

    self.preview = function (isValid, formData) {
        if (formData.logEntries != null) formData.logEntries.splice(Number.MAX_VALUE);
        formData.connectionId = self.connection.id;
        self.onSave($scope.manualForm, isValid, formData, '/mdsync/PreviewAssembly', function () {

            self.showProgress = true;
            self.validateModel();
            $scope.model.logEntries.splice(Number.MAX_VALUE);
        });
    };

    self.initServerConnection = function () {

        self.connection = $.connection('/signalr');

        self.connection.received(function (data) {
            $scope.model.logEntries.unshift(data);
            self.showProgress = false;
            $scope.$apply();
        });

        self.connection.start();
    }
}

function MDSyncManualController14($scope, $http, controllerService) {
    MDSyncController.call(this, $scope, $http, controllerService);

    var self = this;
    self.dialogId = 'mdSyncManualDialog';
    self.showProgress = false;
    $scope.model.logEntries = [];

    controllerService.mdSyncManualController = this;

    self.open = function (assemblyid, callback) {
        var aId = (typeof assemblyid == 'undefined' || assemblyid == null) ? 0 : assemblyid;

        self.getAssemblyInfo(aId);

        self.onOpen($scope.manualForm, {
            dialogId: self.dialogId,
            height: 1000,
            width: 1000
        }, callback);
        self.initServerConnection();
    };

    self.close = function () {
        self.onClose($scope.manualForm);
        self.connection.stop();
    };

    self.getAssemblyInfo = function (assemblyId) {
        self.get('/mdsync/GetAssemblySyncInfo', { assemblyId: assemblyId }, function (data) {
            $scope.model = data;
            self.validateModel();
        });
    };

    self.onAreaChange = function () {
        self.get('/mdsync/LookupMadDogObject', { objectType: 'area', id: $scope.model.areaId }, function (data) {
            if (typeof data.error == 'undefined') {
                $scope.model.areaName = data.fullName;
            } else {
                $scope.model.areaName = "Area not found";
            }
            self.validateModel();
        });
    };

    self.onTestcaseChange = function () {
        self.get('/mdsync/LookupMadDogObject', { objectType: 'testcase', id: $scope.model.templateTestcaseId }, function (data) {
            if (typeof data.error == 'undefined') {
                $scope.model.templateTestcaseName = data.fullName;
            } else {
                $scope.model.templateTestcaseName = "Testcase not found";
            }
            self.validateModel();
        });
    };

    self.validateModel = function () {
        $scope.model.areaName = self.getLastSymbols($scope.model.areaName, 70);
        $scope.model.templateTestcaseName = self.getLastSymbols($scope.model.templateTestcaseName, 70);
    }

    self.sync = function (isValid, formData) {
        formData.connectionId = self.connection.id;
        if (formData.logEntries != null) formData.logEntries.splice(Number.MAX_VALUE);
        self.onSave($scope.manualForm, isValid, formData, '/mdsync/SyncAssembly', function () {

            self.showProgress = true;
            self.validateModel();
            $scope.model.logEntries.splice(Number.MAX_VALUE);

            GotoFunc();
        });
    };

    self.preview = function (isValid, formData) {
        if (formData.logEntries != null) formData.logEntries.splice(Number.MAX_VALUE);
        formData.connectionId = self.connection.id;
        self.onSave($scope.manualForm, isValid, formData, '/mdsync/PreviewAssembly', function () {

            self.showProgress = true;
            self.validateModel();
            $scope.model.logEntries.splice(Number.MAX_VALUE);
        });
    };

    self.initServerConnection = function () {

        self.connection = $.connection('/signalr');

        self.connection.received(function (data) {
            $scope.model.logEntries.unshift(data);
            self.showProgress = false;
            $scope.$apply();
        });

        self.connection.start();
    }
}

function MDSyncManualController15($scope, $http, controllerService) {
    MDSyncController.call(this, $scope, $http, controllerService);

    var self = this;
    self.dialogId = 'mdSyncManualDialog';
    self.showProgress = false;
    $scope.model.logEntries = [];

    controllerService.mdSyncManualController = this;

    self.open = function (assemblyid, callback) {
        var aId = (typeof assemblyid == 'undefined' || assemblyid == null) ? 0 : assemblyid;

        self.getAssemblyInfo(aId);

        self.onOpen($scope.manualForm, {
            dialogId: self.dialogId,
            height: 1000,
            width: 1000
        }, callback);
        self.initServerConnection();
    };

    self.close = function () {
        self.onClose($scope.manualForm);
        self.connection.stop();
    };

    self.getAssemblyInfo = function (assemblyId) {
        self.get('/mdsync/GetAssemblySyncInfo', { assemblyId: assemblyId }, function (data) {
            $scope.model = data;
            self.validateModel();
        });
    };

    self.onAreaChange = function () {
        self.get('/mdsync/LookupMadDogObject', { objectType: 'area', id: $scope.model.areaId }, function (data) {
            if (typeof data.error == 'undefined') {
                $scope.model.areaName = data.fullName;
            } else {
                $scope.model.areaName = "Area not found";
            }
            self.validateModel();
        });
    };

    self.onTestcaseChange = function () {
        self.get('/mdsync/LookupMadDogObject', { objectType: 'testcase', id: $scope.model.templateTestcaseId }, function (data) {
            if (typeof data.error == 'undefined') {
                $scope.model.templateTestcaseName = data.fullName;
            } else {
                $scope.model.templateTestcaseName = "Testcase not found";
            }
            self.validateModel();
        });
    };

    self.validateModel = function () {
        $scope.model.areaName = self.getLastSymbols($scope.model.areaName, 70);
        $scope.model.templateTestcaseName = self.getLastSymbols($scope.model.templateTestcaseName, 70);
    }

    self.sync = function (isValid, formData) {
        formData.connectionId = self.connection.id;
        if (formData.logEntries != null) formData.logEntries.splice(Number.MAX_VALUE);
        self.onSave($scope.manualForm, isValid, formData, '/mdsync/SyncAssembly', function () {

            self.showProgress = true;
            self.validateModel();
            $scope.model.logEntries.splice(Number.MAX_VALUE);

            GotoFunc();
        });
    };

    self.preview = function (isValid, formData) {
        if (formData.logEntries != null) formData.logEntries.splice(Number.MAX_VALUE);
        formData.connectionId = self.connection.id;
        self.onSave($scope.manualForm, isValid, formData, '/mdsync/PreviewAssembly', function () {

            self.showProgress = true;
            self.validateModel();
            $scope.model.logEntries.splice(Number.MAX_VALUE);
        });
    };

    self.initServerConnection = function () {

        self.connection = $.connection('/signalr');

        self.connection.received(function (data) {
            $scope.model.logEntries.unshift(data);
            self.showProgress = false;
            $scope.$apply();
        });

        self.connection.start();
    }
}

function MDSyncManualController16($scope, $http, controllerService) {
    MDSyncController.call(this, $scope, $http, controllerService);

    var self = this;
    self.dialogId = 'mdSyncManualDialog';
    self.showProgress = false;
    $scope.model.logEntries = [];

    controllerService.mdSyncManualController = this;

    self.open = function (assemblyid, callback) {
        var aId = (typeof assemblyid == 'undefined' || assemblyid == null) ? 0 : assemblyid;

        self.getAssemblyInfo(aId);

        self.onOpen($scope.manualForm, {
            dialogId: self.dialogId,
            height: 1000,
            width: 1000
        }, callback);
        self.initServerConnection();
    };

    self.close = function () {
        self.onClose($scope.manualForm);
        self.connection.stop();
    };

    self.getAssemblyInfo = function (assemblyId) {
        self.get('/mdsync/GetAssemblySyncInfo', { assemblyId: assemblyId }, function (data) {
            $scope.model = data;
            self.validateModel();
        });
    };

    self.onAreaChange = function () {
        self.get('/mdsync/LookupMadDogObject', { objectType: 'area', id: $scope.model.areaId }, function (data) {
            if (typeof data.error == 'undefined') {
                $scope.model.areaName = data.fullName;
            } else {
                $scope.model.areaName = "Area not found";
            }
            self.validateModel();
        });
    };

    self.onTestcaseChange = function () {
        self.get('/mdsync/LookupMadDogObject', { objectType: 'testcase', id: $scope.model.templateTestcaseId }, function (data) {
            if (typeof data.error == 'undefined') {
                $scope.model.templateTestcaseName = data.fullName;
            } else {
                $scope.model.templateTestcaseName = "Testcase not found";
            }
            self.validateModel();
        });
    };

    self.validateModel = function () {
        $scope.model.areaName = self.getLastSymbols($scope.model.areaName, 70);
        $scope.model.templateTestcaseName = self.getLastSymbols($scope.model.templateTestcaseName, 70);
    }

    self.sync = function (isValid, formData) {
        formData.connectionId = self.connection.id;
        if (formData.logEntries != null) formData.logEntries.splice(Number.MAX_VALUE);
        self.onSave($scope.manualForm, isValid, formData, '/mdsync/SyncAssembly', function () {

            self.showProgress = true;
            self.validateModel();
            $scope.model.logEntries.splice(Number.MAX_VALUE);

            GotoFunc();
        });
    };

    self.preview = function (isValid, formData) {
        if (formData.logEntries != null) formData.logEntries.splice(Number.MAX_VALUE);
        formData.connectionId = self.connection.id;
        self.onSave($scope.manualForm, isValid, formData, '/mdsync/PreviewAssembly', function () {

            self.showProgress = true;
            self.validateModel();
            $scope.model.logEntries.splice(Number.MAX_VALUE);
        });
    };

    self.initServerConnection = function () {

        self.connection = $.connection('/signalr');

        self.connection.received(function (data) {
            $scope.model.logEntries.unshift(data);
            self.showProgress = false;
            $scope.$apply();
        });

        self.connection.start();
    }
}

function MDSyncManualController17($scope, $http, controllerService) {
    MDSyncController.call(this, $scope, $http, controllerService);

    var self = this;
    self.dialogId = 'mdSyncManualDialog';
    self.showProgress = false;
    $scope.model.logEntries = [];

    controllerService.mdSyncManualController = this;

    self.open = function (assemblyid, callback) {
        var aId = (typeof assemblyid == 'undefined' || assemblyid == null) ? 0 : assemblyid;

        self.getAssemblyInfo(aId);

        self.onOpen($scope.manualForm, {
            dialogId: self.dialogId,
            height: 1000,
            width: 1000
        }, callback);
        self.initServerConnection();
    };

    self.close = function () {
        self.onClose($scope.manualForm);
        self.connection.stop();
    };

    self.getAssemblyInfo = function (assemblyId) {
        self.get('/mdsync/GetAssemblySyncInfo', { assemblyId: assemblyId }, function (data) {
            $scope.model = data;
            self.validateModel();
        });
    };

    self.onAreaChange = function () {
        self.get('/mdsync/LookupMadDogObject', { objectType: 'area', id: $scope.model.areaId }, function (data) {
            if (typeof data.error == 'undefined') {
                $scope.model.areaName = data.fullName;
            } else {
                $scope.model.areaName = "Area not found";
            }
            self.validateModel();
        });
    };

    self.onTestcaseChange = function () {
        self.get('/mdsync/LookupMadDogObject', { objectType: 'testcase', id: $scope.model.templateTestcaseId }, function (data) {
            if (typeof data.error == 'undefined') {
                $scope.model.templateTestcaseName = data.fullName;
            } else {
                $scope.model.templateTestcaseName = "Testcase not found";
            }
            self.validateModel();
        });
    };

    self.validateModel = function () {
        $scope.model.areaName = self.getLastSymbols($scope.model.areaName, 70);
        $scope.model.templateTestcaseName = self.getLastSymbols($scope.model.templateTestcaseName, 70);
    }

    self.sync = function (isValid, formData) {
        formData.connectionId = self.connection.id;
        if (formData.logEntries != null) formData.logEntries.splice(Number.MAX_VALUE);
        self.onSave($scope.manualForm, isValid, formData, '/mdsync/SyncAssembly', function () {

            self.showProgress = true;
            self.validateModel();
            $scope.model.logEntries.splice(Number.MAX_VALUE);

            GotoFunc();
        });
    };

    self.preview = function (isValid, formData) {
        if (formData.logEntries != null) formData.logEntries.splice(Number.MAX_VALUE);
        formData.connectionId = self.connection.id;
        self.onSave($scope.manualForm, isValid, formData, '/mdsync/PreviewAssembly', function () {

            self.showProgress = true;
            self.validateModel();
            $scope.model.logEntries.splice(Number.MAX_VALUE);
        });
    };

    self.initServerConnection = function () {

        self.connection = $.connection('/signalr');

        self.connection.received(function (data) {
            $scope.model.logEntries.unshift(data);
            self.showProgress = false;
            $scope.$apply();
        });

        self.connection.start();
    }
}

function MDSyncManualController18($scope, $http, controllerService) {
    MDSyncController.call(this, $scope, $http, controllerService);

    var self = this;
    self.dialogId = 'mdSyncManualDialog';
    self.showProgress = false;
    $scope.model.logEntries = [];

    controllerService.mdSyncManualController = this;

    self.open = function (assemblyid, callback) {
        var aId = (typeof assemblyid == 'undefined' || assemblyid == null) ? 0 : assemblyid;

        self.getAssemblyInfo(aId);

        self.onOpen($scope.manualForm, {
            dialogId: self.dialogId,
            height: 1000,
            width: 1000
        }, callback);
        self.initServerConnection();
    };

    self.close = function () {
        self.onClose($scope.manualForm);
        self.connection.stop();
    };

    self.getAssemblyInfo = function (assemblyId) {
        self.get('/mdsync/GetAssemblySyncInfo', { assemblyId: assemblyId }, function (data) {
            $scope.model = data;
            self.validateModel();
        });
    };

    self.onAreaChange = function () {
        self.get('/mdsync/LookupMadDogObject', { objectType: 'area', id: $scope.model.areaId }, function (data) {
            if (typeof data.error == 'undefined') {
                $scope.model.areaName = data.fullName;
            } else {
                $scope.model.areaName = "Area not found";
            }
            self.validateModel();
        });
    };

    self.onTestcaseChange = function () {
        self.get('/mdsync/LookupMadDogObject', { objectType: 'testcase', id: $scope.model.templateTestcaseId }, function (data) {
            if (typeof data.error == 'undefined') {
                $scope.model.templateTestcaseName = data.fullName;
            } else {
                $scope.model.templateTestcaseName = "Testcase not found";
            }
            self.validateModel();
        });
    };

    self.validateModel = function () {
        $scope.model.areaName = self.getLastSymbols($scope.model.areaName, 70);
        $scope.model.templateTestcaseName = self.getLastSymbols($scope.model.templateTestcaseName, 70);
    }

    self.sync = function (isValid, formData) {
        formData.connectionId = self.connection.id;
        if (formData.logEntries != null) formData.logEntries.splice(Number.MAX_VALUE);
        self.onSave($scope.manualForm, isValid, formData, '/mdsync/SyncAssembly', function () {

            self.showProgress = true;
            self.validateModel();
            $scope.model.logEntries.splice(Number.MAX_VALUE);

            GotoFunc();
        });
    };

    self.preview = function (isValid, formData) {
        if (formData.logEntries != null) formData.logEntries.splice(Number.MAX_VALUE);
        formData.connectionId = self.connection.id;
        self.onSave($scope.manualForm, isValid, formData, '/mdsync/PreviewAssembly', function () {

            self.showProgress = true;
            self.validateModel();
            $scope.model.logEntries.splice(Number.MAX_VALUE);
        });
    };

    self.initServerConnection = function () {

        self.connection = $.connection('/signalr');

        self.connection.received(function (data) {
            $scope.model.logEntries.unshift(data);
            self.showProgress = false;
            $scope.$apply();
        });

        self.connection.start();
    }
}

function MDSyncManualController20($scope, $http, controllerService) {
    MDSyncController.call(this, $scope, $http, controllerService);

    var self = this;
    self.dialogId = 'mdSyncManualDialog';
    self.showProgress = false;
    $scope.model.logEntries = [];

    controllerService.mdSyncManualController = this;

    self.open = function (assemblyid, callback) {
        var aId = (typeof assemblyid == 'undefined' || assemblyid == null) ? 0 : assemblyid;

        self.getAssemblyInfo(aId);

        self.onOpen($scope.manualForm, {
            dialogId: self.dialogId,
            height: 1000,
            width: 1000
        }, callback);
        self.initServerConnection();
    };

    self.close = function () {
        self.onClose($scope.manualForm);
        self.connection.stop();
    };

    self.getAssemblyInfo = function (assemblyId) {
        self.get('/mdsync/GetAssemblySyncInfo', { assemblyId: assemblyId }, function (data) {
            $scope.model = data;
            self.validateModel();
        });
    };

    self.onAreaChange = function () {
        self.get('/mdsync/LookupMadDogObject', { objectType: 'area', id: $scope.model.areaId }, function (data) {
            if (typeof data.error == 'undefined') {
                $scope.model.areaName = data.fullName;
            } else {
                $scope.model.areaName = "Area not found";
            }
            self.validateModel();
        });
    };

    self.onTestcaseChange = function () {
        self.get('/mdsync/LookupMadDogObject', { objectType: 'testcase', id: $scope.model.templateTestcaseId }, function (data) {
            if (typeof data.error == 'undefined') {
                $scope.model.templateTestcaseName = data.fullName;
            } else {
                $scope.model.templateTestcaseName = "Testcase not found";
            }
            self.validateModel();
        });
    };

    self.validateModel = function () {
        $scope.model.areaName = self.getLastSymbols($scope.model.areaName, 70);
        $scope.model.templateTestcaseName = self.getLastSymbols($scope.model.templateTestcaseName, 70);
    }

    self.sync = function (isValid, formData) {
        formData.connectionId = self.connection.id;
        if (formData.logEntries != null) formData.logEntries.splice(Number.MAX_VALUE);
        self.onSave($scope.manualForm, isValid, formData, '/mdsync/SyncAssembly', function () {

            self.showProgress = true;
            self.validateModel();
            $scope.model.logEntries.splice(Number.MAX_VALUE);

            GotoFunc();
        });
    };

    self.preview = function (isValid, formData) {
        if (formData.logEntries != null) formData.logEntries.splice(Number.MAX_VALUE);
        formData.connectionId = self.connection.id;
        self.onSave($scope.manualForm, isValid, formData, '/mdsync/PreviewAssembly', function () {

            self.showProgress = true;
            self.validateModel();
            $scope.model.logEntries.splice(Number.MAX_VALUE);
        });
    };

    self.initServerConnection = function () {

        self.connection = $.connection('/signalr');

        self.connection.received(function (data) {
            $scope.model.logEntries.unshift(data);
            self.showProgress = false;
            $scope.$apply();
        });

        self.connection.start();
    }
}

function MDSyncManualController21($scope, $http, controllerService) {
    MDSyncController.call(this, $scope, $http, controllerService);

    var self = this;
    self.dialogId = 'mdSyncManualDialog';
    self.showProgress = false;
    $scope.model.logEntries = [];

    controllerService.mdSyncManualController = this;

    self.open = function (assemblyid, callback) {
        var aId = (typeof assemblyid == 'undefined' || assemblyid == null) ? 0 : assemblyid;

        self.getAssemblyInfo(aId);

        self.onOpen($scope.manualForm, {
            dialogId: self.dialogId,
            height: 1000,
            width: 1000
        }, callback);
        self.initServerConnection();
    };

    self.close = function () {
        self.onClose($scope.manualForm);
        self.connection.stop();
    };

    self.getAssemblyInfo = function (assemblyId) {
        self.get('/mdsync/GetAssemblySyncInfo', { assemblyId: assemblyId }, function (data) {
            $scope.model = data;
            self.validateModel();
        });
    };

    self.onAreaChange = function () {
        self.get('/mdsync/LookupMadDogObject', { objectType: 'area', id: $scope.model.areaId }, function (data) {
            if (typeof data.error == 'undefined') {
                $scope.model.areaName = data.fullName;
            } else {
                $scope.model.areaName = "Area not found";
            }
            self.validateModel();
        });
    };

    self.onTestcaseChange = function () {
        self.get('/mdsync/LookupMadDogObject', { objectType: 'testcase', id: $scope.model.templateTestcaseId }, function (data) {
            if (typeof data.error == 'undefined') {
                $scope.model.templateTestcaseName = data.fullName;
            } else {
                $scope.model.templateTestcaseName = "Testcase not found";
            }
            self.validateModel();
        });
    };

    self.validateModel = function () {
        $scope.model.areaName = self.getLastSymbols($scope.model.areaName, 70);
        $scope.model.templateTestcaseName = self.getLastSymbols($scope.model.templateTestcaseName, 70);
    }

    self.sync = function (isValid, formData) {
        formData.connectionId = self.connection.id;
        if (formData.logEntries != null) formData.logEntries.splice(Number.MAX_VALUE);
        self.onSave($scope.manualForm, isValid, formData, '/mdsync/SyncAssembly', function () {

            self.showProgress = true;
            self.validateModel();
            $scope.model.logEntries.splice(Number.MAX_VALUE);

            GotoFunc();
        });
    };

    self.preview = function (isValid, formData) {
        if (formData.logEntries != null) formData.logEntries.splice(Number.MAX_VALUE);
        formData.connectionId = self.connection.id;
        self.onSave($scope.manualForm, isValid, formData, '/mdsync/PreviewAssembly', function () {

            self.showProgress = true;
            self.validateModel();
            $scope.model.logEntries.splice(Number.MAX_VALUE);
        });
    };

    self.initServerConnection = function () {

        self.connection = $.connection('/signalr');

        self.connection.received(function (data) {
            $scope.model.logEntries.unshift(data);
            self.showProgress = false;
            $scope.$apply();
        });

        self.connection.start();
    }
}

function MDSyncManualController22($scope, $http, controllerService) {
    MDSyncController.call(this, $scope, $http, controllerService);

    var self = this;
    self.dialogId = 'mdSyncManualDialog';
    self.showProgress = false;
    $scope.model.logEntries = [];

    controllerService.mdSyncManualController = this;

    self.open = function (assemblyid, callback) {
        var aId = (typeof assemblyid == 'undefined' || assemblyid == null) ? 0 : assemblyid;

        self.getAssemblyInfo(aId);

        self.onOpen($scope.manualForm, {
            dialogId: self.dialogId,
            height: 1000,
            width: 1000
        }, callback);
        self.initServerConnection();
    };

    self.close = function () {
        self.onClose($scope.manualForm);
        self.connection.stop();
    };

    self.getAssemblyInfo = function (assemblyId) {
        self.get('/mdsync/GetAssemblySyncInfo', { assemblyId: assemblyId }, function (data) {
            $scope.model = data;
            self.validateModel();
        });
    };

    self.onAreaChange = function () {
        self.get('/mdsync/LookupMadDogObject', { objectType: 'area', id: $scope.model.areaId }, function (data) {
            if (typeof data.error == 'undefined') {
                $scope.model.areaName = data.fullName;
            } else {
                $scope.model.areaName = "Area not found";
            }
            self.validateModel();
        });
    };

    self.onTestcaseChange = function () {
        self.get('/mdsync/LookupMadDogObject', { objectType: 'testcase', id: $scope.model.templateTestcaseId }, function (data) {
            if (typeof data.error == 'undefined') {
                $scope.model.templateTestcaseName = data.fullName;
            } else {
                $scope.model.templateTestcaseName = "Testcase not found";
            }
            self.validateModel();
        });
    };

    self.validateModel = function () {
        $scope.model.areaName = self.getLastSymbols($scope.model.areaName, 70);
        $scope.model.templateTestcaseName = self.getLastSymbols($scope.model.templateTestcaseName, 70);
    }

    self.sync = function (isValid, formData) {
        formData.connectionId = self.connection.id;
        if (formData.logEntries != null) formData.logEntries.splice(Number.MAX_VALUE);
        self.onSave($scope.manualForm, isValid, formData, '/mdsync/SyncAssembly', function () {

            self.showProgress = true;
            self.validateModel();
            $scope.model.logEntries.splice(Number.MAX_VALUE);

            GotoFunc();
        });
    };

    self.preview = function (isValid, formData) {
        if (formData.logEntries != null) formData.logEntries.splice(Number.MAX_VALUE);
        formData.connectionId = self.connection.id;
        self.onSave($scope.manualForm, isValid, formData, '/mdsync/PreviewAssembly', function () {

            self.showProgress = true;
            self.validateModel();
            $scope.model.logEntries.splice(Number.MAX_VALUE);
        });
    };

    self.initServerConnection = function () {

        self.connection = $.connection('/signalr');

        self.connection.received(function (data) {
            $scope.model.logEntries.unshift(data);
            self.showProgress = false;
            $scope.$apply();
        });

        self.connection.start();
    }
}

function MDSyncManualController23($scope, $http, controllerService) {
    MDSyncController.call(this, $scope, $http, controllerService);

    var self = this;
    self.dialogId = 'mdSyncManualDialog';
    self.showProgress = false;
    $scope.model.logEntries = [];

    controllerService.mdSyncManualController = this;

    self.open = function (assemblyid, callback) {
        var aId = (typeof assemblyid == 'undefined' || assemblyid == null) ? 0 : assemblyid;

        self.getAssemblyInfo(aId);

        self.onOpen($scope.manualForm, {
            dialogId: self.dialogId,
            height: 1000,
            width: 1000
        }, callback);
        self.initServerConnection();
    };

    self.close = function () {
        self.onClose($scope.manualForm);
        self.connection.stop();
    };

    self.getAssemblyInfo = function (assemblyId) {
        self.get('/mdsync/GetAssemblySyncInfo', { assemblyId: assemblyId }, function (data) {
            $scope.model = data;
            self.validateModel();
        });
    };

    self.onAreaChange = function () {
        self.get('/mdsync/LookupMadDogObject', { objectType: 'area', id: $scope.model.areaId }, function (data) {
            if (typeof data.error == 'undefined') {
                $scope.model.areaName = data.fullName;
            } else {
                $scope.model.areaName = "Area not found";
            }
            self.validateModel();
        });
    };

    self.onTestcaseChange = function () {
        self.get('/mdsync/LookupMadDogObject', { objectType: 'testcase', id: $scope.model.templateTestcaseId }, function (data) {
            if (typeof data.error == 'undefined') {
                $scope.model.templateTestcaseName = data.fullName;
            } else {
                $scope.model.templateTestcaseName = "Testcase not found";
            }
            self.validateModel();
        });
    };

    self.validateModel = function () {
        $scope.model.areaName = self.getLastSymbols($scope.model.areaName, 70);
        $scope.model.templateTestcaseName = self.getLastSymbols($scope.model.templateTestcaseName, 70);
    }

    self.sync = function (isValid, formData) {
        formData.connectionId = self.connection.id;
        if (formData.logEntries != null) formData.logEntries.splice(Number.MAX_VALUE);
        self.onSave($scope.manualForm, isValid, formData, '/mdsync/SyncAssembly', function () {

            self.showProgress = true;
            self.validateModel();
            $scope.model.logEntries.splice(Number.MAX_VALUE);

            GotoFunc();
        });
    };

    self.preview = function (isValid, formData) {
        if (formData.logEntries != null) formData.logEntries.splice(Number.MAX_VALUE);
        formData.connectionId = self.connection.id;
        self.onSave($scope.manualForm, isValid, formData, '/mdsync/PreviewAssembly', function () {

            self.showProgress = true;
            self.validateModel();
            $scope.model.logEntries.splice(Number.MAX_VALUE);
        });
    };

    self.initServerConnection = function () {

        self.connection = $.connection('/signalr');

        self.connection.received(function (data) {
            $scope.model.logEntries.unshift(data);
            self.showProgress = false;
            $scope.$apply();
        });

        self.connection.start();
    }
}

function MDSyncManualController24($scope, $http, controllerService) {
    MDSyncController.call(this, $scope, $http, controllerService);

    var self = this;
    self.dialogId = 'mdSyncManualDialog';
    self.showProgress = false;
    $scope.model.logEntries = [];

    controllerService.mdSyncManualController = this;

    self.open = function (assemblyid, callback) {
        var aId = (typeof assemblyid == 'undefined' || assemblyid == null) ? 0 : assemblyid;

        self.getAssemblyInfo(aId);

        self.onOpen($scope.manualForm, {
            dialogId: self.dialogId,
            height: 1000,
            width: 1000
        }, callback);
        self.initServerConnection();
    };

    self.close = function () {
        self.onClose($scope.manualForm);
        self.connection.stop();
    };

    self.getAssemblyInfo = function (assemblyId) {
        self.get('/mdsync/GetAssemblySyncInfo', { assemblyId: assemblyId }, function (data) {
            $scope.model = data;
            self.validateModel();
        });
    };

    self.onAreaChange = function () {
        self.get('/mdsync/LookupMadDogObject', { objectType: 'area', id: $scope.model.areaId }, function (data) {
            if (typeof data.error == 'undefined') {
                $scope.model.areaName = data.fullName;
            } else {
                $scope.model.areaName = "Area not found";
            }
            self.validateModel();
        });
    };

    self.onTestcaseChange = function () {
        self.get('/mdsync/LookupMadDogObject', { objectType: 'testcase', id: $scope.model.templateTestcaseId }, function (data) {
            if (typeof data.error == 'undefined') {
                $scope.model.templateTestcaseName = data.fullName;
            } else {
                $scope.model.templateTestcaseName = "Testcase not found";
            }
            self.validateModel();
        });
    };

    self.validateModel = function () {
        $scope.model.areaName = self.getLastSymbols($scope.model.areaName, 70);
        $scope.model.templateTestcaseName = self.getLastSymbols($scope.model.templateTestcaseName, 70);
    }

    self.sync = function (isValid, formData) {
        formData.connectionId = self.connection.id;
        if (formData.logEntries != null) formData.logEntries.splice(Number.MAX_VALUE);
        self.onSave($scope.manualForm, isValid, formData, '/mdsync/SyncAssembly', function () {

            self.showProgress = true;
            self.validateModel();
            $scope.model.logEntries.splice(Number.MAX_VALUE);

            GotoFunc();
        });
    };

    self.preview = function (isValid, formData) {
        if (formData.logEntries != null) formData.logEntries.splice(Number.MAX_VALUE);
        formData.connectionId = self.connection.id;
        self.onSave($scope.manualForm, isValid, formData, '/mdsync/PreviewAssembly', function () {

            self.showProgress = true;
            self.validateModel();
            $scope.model.logEntries.splice(Number.MAX_VALUE);
        });
    };

    self.initServerConnection = function () {

        self.connection = $.connection('/signalr');

        self.connection.received(function (data) {
            $scope.model.logEntries.unshift(data);
            self.showProgress = false;
            $scope.$apply();
        });

        self.connection.start();
    }
}

function MDSyncManualController25($scope, $http, controllerService) {
    MDSyncController.call(this, $scope, $http, controllerService);

    var self = this;
    self.dialogId = 'mdSyncManualDialog';
    self.showProgress = false;
    $scope.model.logEntries = [];

    controllerService.mdSyncManualController = this;

    self.open = function (assemblyid, callback) {
        var aId = (typeof assemblyid == 'undefined' || assemblyid == null) ? 0 : assemblyid;

        self.getAssemblyInfo(aId);

        self.onOpen($scope.manualForm, {
            dialogId: self.dialogId,
            height: 1000,
            width: 1000
        }, callback);
        self.initServerConnection();
    };

    self.close = function () {
        self.onClose($scope.manualForm);
        self.connection.stop();
    };

    self.getAssemblyInfo = function (assemblyId) {
        self.get('/mdsync/GetAssemblySyncInfo', { assemblyId: assemblyId }, function (data) {
            $scope.model = data;
            self.validateModel();
        });
    };

    self.onAreaChange = function () {
        self.get('/mdsync/LookupMadDogObject', { objectType: 'area', id: $scope.model.areaId }, function (data) {
            if (typeof data.error == 'undefined') {
                $scope.model.areaName = data.fullName;
            } else {
                $scope.model.areaName = "Area not found";
            }
            self.validateModel();
        });
    };

    self.onTestcaseChange = function () {
        self.get('/mdsync/LookupMadDogObject', { objectType: 'testcase', id: $scope.model.templateTestcaseId }, function (data) {
            if (typeof data.error == 'undefined') {
                $scope.model.templateTestcaseName = data.fullName;
            } else {
                $scope.model.templateTestcaseName = "Testcase not found";
            }
            self.validateModel();
        });
    };

    self.validateModel = function () {
        $scope.model.areaName = self.getLastSymbols($scope.model.areaName, 70);
        $scope.model.templateTestcaseName = self.getLastSymbols($scope.model.templateTestcaseName, 70);
    }

    self.sync = function (isValid, formData) {
        formData.connectionId = self.connection.id;
        if (formData.logEntries != null) formData.logEntries.splice(Number.MAX_VALUE);
        self.onSave($scope.manualForm, isValid, formData, '/mdsync/SyncAssembly', function () {

            self.showProgress = true;
            self.validateModel();
            $scope.model.logEntries.splice(Number.MAX_VALUE);

            GotoFunc();
        });
    };

    self.preview = function (isValid, formData) {
        if (formData.logEntries != null) formData.logEntries.splice(Number.MAX_VALUE);
        formData.connectionId = self.connection.id;
        self.onSave($scope.manualForm, isValid, formData, '/mdsync/PreviewAssembly', function () {

            self.showProgress = true;
            self.validateModel();
            $scope.model.logEntries.splice(Number.MAX_VALUE);
        });
    };

    self.initServerConnection = function () {

        self.connection = $.connection('/signalr');

        self.connection.received(function (data) {
            $scope.model.logEntries.unshift(data);
            self.showProgress = false;
            $scope.$apply();
        });

        self.connection.start();
    }
}

