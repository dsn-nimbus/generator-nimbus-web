"use strict";

const path = require('path');
const assert = require('yeoman-assert');
const test = require('yeoman-test');
const os = require('os');
const {createYoRc} = require('../_helpers/mock');

describe('acceptance -> main', () => {
  before((done) => {
    test.run(path.join(__dirname, '../../app'))
      .withOptions({
        skipInstall: true
      })
      .withPrompts({
        appName: 'xyz.123',
        hostName: 'xyz.com.br',
        baseEndpoints: 'c*',
        proxyTarget: 'http://xyz.com.br:1234'
      })
      .on('end', done);
  });

  it('arquivos criados', () => {
    assert.file([
      '.alivrc',
      '.babelrc',
      '.bowerrc',
      '.jazzignore',
      '.yo-rc.json',
      '.editorconfig',
      'package.json',
      'bower.json',
      'fake-server.js',
      'gulpfile.babel.js',
      'karma.conf.js',
      'protractor.conf.js',


      'client/dev/index.html',
      'client/dev/auth.html',
      'client/dev/favicon.png',

      'client/dev/app.js',
      'client/dev/app.config.js',
      'client/dev/app.route.js',
      'client/dev/app.constant.js',
      'client/dev/app.acessos.js',

      'client/dev/cabecalho/controllers/cabecalho_controller.js',
      'client/dev/cabecalho/templates/cabecalho.tpl.html',

      'client/dev/comum/images/logo_branco.png',
      'client/dev/comum/styles/alt-aba.css',
      'client/dev/comum/styles/alt-alerta-flutuante.css',
      'client/dev/comum/styles/alt-bootstrap-overrides.css',
      'client/dev/comum/styles/alt-angular-bootstrap-datepicker-overrides.css',
      'client/dev/comum/styles/alt-select2-overrides.css',
      'client/dev/comum/styles/alt-badge.css',
      'client/dev/comum/styles/alt-busca.css',
      'client/dev/comum/styles/alt-cabecalho.css',
      'client/dev/comum/styles/alt-card.css',
      'client/dev/comum/styles/alt-data.css',
      'client/dev/comum/styles/alt-fonts.css',
      'client/dev/comum/styles/alt-ie.css',
      'client/dev/comum/styles/alt-imagem.css',
      'client/dev/comum/styles/alt-impressao.css',
      'client/dev/comum/styles/alt-informacoes-usuario-cabecalho.css',
      'client/dev/comum/styles/alt-lista.css',
      'client/dev/comum/styles/alt-modal.css',
      'client/dev/comum/styles/alt-opcoes-usuario-cabecalho.css',
      'client/dev/comum/styles/alt-position.css',
      'client/dev/comum/styles/alt-produtos-usuario-cabecalho.css',
      'client/dev/comum/styles/alt-rodape.css',
      'client/dev/comum/styles/alt-rota.css',
      'client/dev/comum/styles/alt-style.css',
      'client/dev/comum/styles/alt-tabela-responsiva.css',
      'client/dev/comum/styles/cores_sistema.css',
      'client/dev/comum/styles/dashboard.css',

      'client/dev/root/controllers/root_controller.js',

      'client/dev/dashboard/controllers/dashboard_controller.js',
      'client/dev/dashboard/resources/dashboard_resource.js',
      'client/dev/dashboard/services/dashboard_service.js',
      'client/dev/dashboard/styles/dashboard.css',
      'client/dev/dashboard/templates/dashboard.html',

      'client/dev/rodape/templates/rodape.tpl.html',


      'tests/e2e/dashboard.e2e_test.js',

      'tests/client/app_test.js',
      'tests/client/cabecalho/controllers/cabecalho_controller_test.js',
      'tests/client/dashboard/controllers/dashboard_controller_test.js',
      'tests/client/dashboard/services/dashboard_service_test.js',
      'tests/client/root/controllers/root_controller_test.js',


      'tasks/index.js',
      'tasks/client/.ftppass',
      'tasks/client/index.js',
      'tasks/client/const.js',
      'tasks/client/build_js.js',
      'tasks/client/build_css.js',
      'tasks/client/build_html.js',
      'tasks/client/build_image.js',
      'tasks/client/copy.js',
      'tasks/client/del.js',
      'tasks/client/deploy.js',
      'tasks/client/test.js',
      'tasks/client/watch.js',
    ]);
  });
});
