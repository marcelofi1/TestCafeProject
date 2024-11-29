const environmentVariableName = 'env';
const defaultEnvironmentName = 'dev';
const environmentConfigurationFileName = 'environments.json';
const validUsers = 'users.json'

const getArgOrEnv = (argName: string, defaultValue: string) => {
  const arg1 = process.argv.find(arg => arg.startsWith(`--${argName}=`));

  return (
    arg1?.split('=')[1] ?? process.env[environmentVariableName] ?? defaultValue
  );
};

export const getEnv = () =>
  getArgOrEnv(environmentVariableName, defaultEnvironmentName);

export const getConfig = () => {
  const fs = require('fs');
  const env = getEnv();

  return JSON.parse(
    fs.readFileSync(__dirname + '/' + environmentConfigurationFileName, 'utf8')
  )[env];
};

export const getUser = () => {
  const fs = require('fs');
  const env = getEnv();

  return JSON.parse(
    fs.readFileSync(__dirname + '/' + validUsers, 'utf8')
  )[env];
};
