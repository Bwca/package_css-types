import { Args } from '../args.model';

export function argsParser(args: string[]): Args {
  let passedArgs = args.slice(2);

  const isWatching = passedArgs.includes('--watch');
  passedArgs = passedArgs.filter((i) => !i.includes('--watch'));

  const directoryPassed = passedArgs.find((i) => /^--directory=.*/.test(i));
  passedArgs = passedArgs.filter((i) => !/^--directory=.*/.test(i));

  const dir = directoryPassed ? directoryPassed.replace(/^--directory=/, '') : passedArgs[0];

  return {
    isWatching,
    dir,
  };
}
