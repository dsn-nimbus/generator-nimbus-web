describe('dashboard -> DashboardController', function() {
    var _rootScope, _q, _moment, _scope, _httpBackend, _Evento, _DashboardService, _AltAlertaFlutuanteService, _AltCarregandoInfoService,
        _AltSelectService, _AltPassaporteUsuarioLogadoManager;

    var NOME_CONTROLLER = 'DashboardController as ctrl';

    beforeEach(module('<%= appName %>'));

    beforeEach(inject(function($injector) {
        _rootScope = $injector.get('$rootScope');
        _scope = _rootScope.$new();
        _httpBackend = $injector.get('$httpBackend');
        _q = $injector.get('$q');
        _moment = $injector.get('moment');

        _Evento = $injector.get('Evento');

        _AltAlertaFlutuanteService = $injector.get('AltAlertaFlutuanteService');
        _AltCarregandoInfoService = $injector.get('AltCarregandoInfoService');
        _AltSelectService = $injector.get('AltSelectService');
        _AltPassaporteUsuarioLogadoManager = $injector.get('AltPassaporteUsuarioLogadoManager');

        spyOn(_AltAlertaFlutuanteService, 'exibe').and.callFake(angular.noop);

        spyOn(_AltCarregandoInfoService, 'exibe').and.callFake(angular.noop);
        spyOn(_AltCarregandoInfoService, 'esconde').and.callFake(angular.noop);

        spyOn(_AltSelectService, 'inicializar').and.callFake(angular.noop);
    }))

    describe('criação', function() {
        it('deve criar a controller corretamente', inject(function($controller) {
            $controller(NOME_CONTROLLER, {$scope: _scope});
        }))

        it('deve ter oi setado corretamente', inject(function($controller) {
            $controller(NOME_CONTROLLER, {$scope: _scope});

            expect(_scope.ctrl.oi).toEqual('oi :D');
        }))
    });

    describe('onLoad', function() {
        it('deve ...', function() {

        })
    })
});
