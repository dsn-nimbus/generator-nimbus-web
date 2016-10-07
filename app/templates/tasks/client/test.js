import gulp from 'gulp';
import {Server as Karma} from 'karma';
import {tasks} from './const';

gulp.task(tasks.CLIENT_UNIT_TEST, (done) => {
  let _karma = new Karma({
    configFile: process.cwd() + '/karma.conf.js',
    browsers: ['Chrome'],
    singleRun: true
  }, done);

  _karma.start();
});
