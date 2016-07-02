import path from 'path';
import time from 'time-grunt';
import load from 'load-grunt-config';

export default grunt => {
  let tasks = path.join(process.cwd(), 'tasks');

  // Time how long tasks take. Can help when optimizing build times
  time(grunt);

  // Automatically load required grunt tasks
  load(grunt, {
    configPath: tasks,
    data: {
      pkg: grunt.file.readJSON('package.json')
    }
  });
};
