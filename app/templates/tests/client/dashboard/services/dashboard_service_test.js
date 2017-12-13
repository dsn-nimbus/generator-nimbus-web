describe('dashboard -> DashboardService', function() {
  var _rootScope, _scope, _httpBackend, _DashboardService;
  var URL_OBTER_INFO = '/sistema-rest-api/endpoint-qualquer';

  beforeEach(module('<%= appName %>'));

  beforeEach(inject(function($injector) {
    _rootScope = $injector.get('$rootScope');
    _scope = _rootScope.$new();
    _httpBackend = $injector.get('$httpBackend');

    _DashboardService = $injector.get('DashboardService');
  }))

  describe('criação', function() {
    it('deve retornar um objeto', function() {
      expect(typeof _DashboardService).toBe('object');
    })
  })

  describe('obterInfo', function() {
    it('deve tentar buscar as informações, mas endpoint retorna erro', function() {
      _httpBackend.expectGET(URL_OBTER_INFO).respond(400, {});

      _DashboardService.obterInfo()
        .then(function() {
          expect(true).toBe(false);
        })
        .catch(function(erro) {
          expect(erro).toBeDefined();
        });

      _httpBackend.flush();
    });

    it('deve buscar a info corretamente', function() {
      var _resposta = [
        {
          "yo": "!"
        }
      ]

      _httpBackend.expectGET(URL_OBTER_INFO).respond(200, _resposta);

      _DashboardService.obterInfo()
        .then(function(info) {
          expect(info[0].yo).toEqual(_resposta[0].yo);
        })
        .catch(function(erro) {
          expect(true).toBe(false);
        });

      _httpBackend.flush();
    });
  });

});
