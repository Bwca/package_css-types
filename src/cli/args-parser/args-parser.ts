import { Args } from '../args.model';

export function argsParser(args: string[]): Args {
  let passedArgs = args.slice(2);

  const isWatching = passedArgs.includes('--watch');
  passedArgs = passedArgs.filter((i) => !i.includes('--watch'));

  const directoryPassed = passedArgs.find((i) => /^dirname=.*/.test(i));
  passedArgs = passedArgs.filter((i) => !/^dirname=.*/.test(i));

  const dir = directoryPassed ? directoryPassed.replace(/^dirname=/, '') : passedArgs[0];

  return {
    isWatching,
    dir: dir,
  };
}
