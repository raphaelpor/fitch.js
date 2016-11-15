import { join } from 'path';

const include = join(__dirname, 'src');

export default {
  entry: join(__dirname, 'src/index'),
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: '_',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', include },
    ],
  },
};
