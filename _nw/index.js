"use strict";

const chalk = require('chalk');
const yosay = require('yosay');
const {pathsWithOptions} = require('./yo_utils');

exports.MainGenerator = class MainGenerator {
  constructor(generator) {
    this.generator = generator;
  }

  saysHello() {
    this.generator.log(yosay('Bem vindo ao ' + chalk.green('Nimbus Web') + ' Generator!'));
  }

  prompts() {
    const done = this.generator.async();

    let prompts = [
      {
        type: 'input',
        name: 'appName',
        message: 'Qual o nome do sistema?',
        default: 'alt.sistema.adminApp'
      },
      {
        type: 'input',
        name: 'hostName',
        message: 'Qual o nome do host?',
        default: 'sistema-dev.alterdata.com.br'
      },
      {
        type: 'input',
        name: 'baseEndpoint',
        message: 'Qual a base do endpoint?',
        default: '/sistema-rest-api/*'
      },
      {
        type: 'input',
        name: 'proxyTarget',
        message: 'Qual o servidor que responderá pela API? Lembre-se de informar a porta também.',
        default: 'http://sistema-dev.alterdata.com.br:1234'
      },
    ];

    this.generator.prompt(prompts)
      .then((prop) => {
        this.generator.appName = prop.appName;
        this.generator.hostName = prop.hostName;
        this.generator.baseEndpoint = prop.baseEndpoint;
        this.generator.proxyTarget = prop.proxyTarget;
        done();
      });
  }

  copies() {
    this.generator.template('_.babelrc', '.babelrc');
    this.generator.template('_.bowerrc', '.bowerrc');
    this.generator.template('_.jazzignore', '.jazzignore');
    this.generator.template('_.editorconfig', '.editorconfig');

    this.generator.template('_.yo-rc.json', '.yo-rc.json', {
      appName: this.generator.appName
    });

    this.generator.template('_package.json', 'package.json', {
      appName: this.generator.appName
    });

    this.generator.template('_bower.json', 'bower.json', {
      appName: this.generator.appName
    });

    this.generator.template('_fake-server.js', 'fake-server.js');
    this.generator.template('_gulpfile.babel.js', 'gulpfile.babel.js');
    this.generator.template('_karma.conf.js', 'karma.conf.js');
    this.generator.template('_protractor.conf.js', 'protractor.conf.js');

    pathsWithOptions(this.generator, [
      {
        in: '_.alivrc',
        out: '.alivrc',
      },
      {
        in: 'client/dev/index.html',
        out: 'client/dev/index.html',
      },
      {
        in: 'client/dev/auth.html',
        out: 'client/dev/auth.html',
      },
      {
        in: 'client/dev/favicon.png',
        out: 'client/dev/favicon.png',
      },
      {
        in: 'client/dev/app.js',
        out: 'client/dev/app.js',
      },
      {
        in: 'client/dev/app.config.js',
        out: 'client/dev/app.config.js',
      },
      {
        in: 'client/dev/app.route.js',
        out: 'client/dev/app.route.js',
      },
      {
        in: 'client/dev/app.constant.js',
        out: 'client/dev/app.constant.js',
      },
      {
        in: 'client/dev/app.acessos.js',
        out: 'client/dev/app.acessos.js',
      },
      {
        in: 'client/dev/cabecalho/controllers/cabecalho_controller.js',
        out: 'client/dev/cabecalho/controllers/cabecalho_controller.js',
      },
      {
        in: 'client/dev/cabecalho/templates/cabecalho.tpl.html',
        out: 'client/dev/cabecalho/templates/cabecalho.tpl.html',
      },
      {
        in: 'client/dev/comum/images/logo_branco.png',
        out: 'client/dev/comum/images/logo_branco.png',
      },
      {
        in: 'client/dev/comum/styles/alt-aba.css',
        out: 'client/dev/comum/styles/alt-aba.css',
      },
      {
        in: 'client/dev/comum/styles/alt-alerta-flutuante.css',
        out: 'client/dev/comum/styles/alt-alerta-flutuante.css',
      },
      {
        in: 'client/dev/comum/styles/alt-bootstrap-overrides.css',
        out: 'client/dev/comum/styles/alt-bootstrap-overrides.css',
      },
      {
        in: 'client/dev/comum/styles/alt-bootstrap-overrides.css',
        out: 'client/dev/comum/styles/alt-bootstrap-overrides.css',
      },
      {
        in: 'client/dev/comum/styles/alt-bootstrap-overrides.css',
        out: 'client/dev/comum/styles/alt-bootstrap-overrides.css',
      },
      {
        in: 'client/dev/comum/styles/alt-angular-bootstrap-datepicker-overrides.css',
        out: 'client/dev/comum/styles/alt-angular-bootstrap-datepicker-overrides.css',
      },
      {
        in: 'client/dev/comum/styles/alt-select2-overrides.css',
        out: 'client/dev/comum/styles/alt-select2-overrides.css',
      },
      {
        in: 'client/dev/comum/styles/alt-badge.css',
        out: 'client/dev/comum/styles/alt-badge.css',
      },
      {
        in: 'client/dev/comum/styles/alt-busca.css',
        out: 'client/dev/comum/styles/alt-busca.css',
      },
      {
        in: 'client/dev/comum/styles/alt-cabecalho.css',
        out: 'client/dev/comum/styles/alt-cabecalho.css',
      },
      {
        in: 'client/dev/comum/styles/alt-card.css',
        out: 'client/dev/comum/styles/alt-card.css',
      },
      {
        in: 'client/dev/comum/styles/alt-carregando-info.css',
        out: 'client/dev/comum/styles/alt-carregando-info.css',
      },
      {
        in: 'client/dev/comum/styles/alt-data.css',
        out: 'client/dev/comum/styles/alt-data.css',
      },
      {
        in: 'client/dev/comum/styles/alt-fonts.css',
        out: 'client/dev/comum/styles/alt-fonts.css',
      },
      {
        in: 'client/dev/comum/styles/alt-ie.css',
        out: 'client/dev/comum/styles/alt-ie.css',
      },
      {
        in: 'client/dev/comum/styles/alt-imagem.css',
        out: 'client/dev/comum/styles/alt-imagem.css',
      },
      {
        in: 'client/dev/comum/styles/alt-impressao.css',
        out: 'client/dev/comum/styles/alt-impressao.css',
      },
      {
        in: 'client/dev/comum/styles/alt-informacoes-usuario-cabecalho.css',
        out: 'client/dev/comum/styles/alt-informacoes-usuario-cabecalho.css',
      },
      {
        in: 'client/dev/comum/styles/alt-lista.css',
        out: 'client/dev/comum/styles/alt-lista.css',
      },
      {
        in: 'client/dev/comum/styles/alt-modal.css',
        out: 'client/dev/comum/styles/alt-modal.css',
      },
      {
        in: 'client/dev/comum/styles/alt-opcoes-usuario-cabecalho.css',
        out: 'client/dev/comum/styles/alt-opcoes-usuario-cabecalho.css',
      },
      {
        in: 'client/dev/comum/styles/alt-position.css',
        out: 'client/dev/comum/styles/alt-position.css',
      },
      {
        in: 'client/dev/comum/styles/alt-produtos-usuario-cabecalho.css',
        out: 'client/dev/comum/styles/alt-produtos-usuario-cabecalho.css',
      },
      {
        in: 'client/dev/comum/styles/alt-rodape.css',
        out: 'client/dev/comum/styles/alt-rodape.css',
      },
      {
        in: 'client/dev/comum/styles/alt-rota.css',
        out: 'client/dev/comum/styles/alt-rota.css',
      },
      {
        in: 'client/dev/comum/styles/alt-style.css',
        out: 'client/dev/comum/styles/alt-style.css',
      },
      {
        in: 'client/dev/comum/styles/alt-tabela-responsiva.css',
        out: 'client/dev/comum/styles/alt-tabela-responsiva.css',
      },
      {
        in: 'client/dev/comum/styles/cores_sistema.css',
        out: 'client/dev/comum/styles/cores_sistema.css',
      },
      {
        in: 'client/dev/comum/styles/dashboard.css',
        out: 'client/dev/comum/styles/dashboard.css',
      },
      {
        in: 'client/dev/root/controllers/root_controller.js',
        out: 'client/dev/root/controllers/root_controller.js',
      },
      {
        in: 'client/dev/dashboard/controllers/dashboard_controller.js',
        out: 'client/dev/dashboard/controllers/dashboard_controller.js',
      },
      {
        in: 'client/dev/dashboard/resources/dashboard_resource.js',
        out: 'client/dev/dashboard/resources/dashboard_resource.js',
      },
      {
        in: 'client/dev/dashboard/services/dashboard_service.js',
        out: 'client/dev/dashboard/services/dashboard_service.js',
      },
      {
        in: 'client/dev/dashboard/styles/dashboard.css',
        out: 'client/dev/dashboard/styles/dashboard.css',
      },
      {
        in: 'client/dev/dashboard/templates/dashboard.html',
        out: 'client/dev/dashboard/templates/dashboard.html',
      },
      {
        in: 'client/dev/rodape/templates/rodape.tpl.html',
        out: 'client/dev/rodape/templates/rodape.tpl.html',
      },
      {
        in: 'tests/e2e/dashboard.e2e_test.js',
        out: 'tests/e2e/dashboard.e2e_test.js',
      },
      {
        in: 'tests/client/app_test.js',
        out: 'tests/client/app_test.js',
      },
      {
        in: 'tests/client/cabecalho/controllers/cabecalho_controller_test.js',
        out: 'tests/client/cabecalho/controllers/cabecalho_controller_test.js',
      },
      {
        in: 'tests/client/dashboard/controllers/dashboard_controller_test.js',
        out: 'tests/client/dashboard/controllers/dashboard_controller_test.js',
      },
      {
        in: 'tests/client/dashboard/services/dashboard_service_test.js',
        out: 'tests/client/dashboard/services/dashboard_service_test.js',
      },
      {
        in: 'tests/client/root/controllers/root_controller_test.js',
        out: 'tests/client/root/controllers/root_controller_test.js',
      }
    ], {
      appName: this.generator.appName,
      hostName: this.generator.hostName,
      baseEndpoint: this.generator.baseEndpoint,
      proxyTarget: this.generator.proxyTarget,
    })

    this.generator.directory('tasks', 'tasks');
  }

  installs() {
    this.generator.installDependencies();
  }
}
